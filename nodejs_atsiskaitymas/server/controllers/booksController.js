import { MongoClient } from 'mongodb';

const DB_CONNECTION_STRING = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_USER_PASSWORD}@${process.env.DB_CLUSTER}.${process.env.DB_CLUSTER_ID}.mongodb.net/`;

const dynamicQuery = (reqQuery) => {
    const settings = {
        filter: {},
        sort: {},
        skip: 0,
        limit: 20
    }
    for (const key in reqQuery) {
        const [action, field, operator] = key.split('_');
        const value = reqQuery[key];
        
        if(action === 'sort') {
            settings.sort[field] = Number(value);
            settings.sort._id = 1;
        }

        else if(action === 'skip'){
            settings.skip = Number(value);
        }

        else if(action === 'limit') {
            settings.limit = Number(value);
        }

        else if(action === 'filter'){
            if(field === 'publishYear'){
                const from = parseInt(reqQuery['filter_publishYear_gte']) || 0;
                const to = parseInt(reqQuery['filter_publishYear_lte']) || 2025;
                const years = [];
                for (let y = from; y<= to; y++){
                    years.push(`^${y}`);
                }
                settings.filter['publishDate'] = { $regex: years.join('|') };
            }
            else if(!operator){
                if(/^true|^false/i.test(value)){
                    settings.filter[field] = /^true$/i.test(value);
                }else{
                    settings.filter[field] = { $regex: new RegExp(value, 'i') };
                }
            }else{
                const $operator = '$' + operator;
                if(!settings.filter[field]){
                    settings.filter[field] = { [$operator]: value };
                }else{
                    settings.filter[field][$operator] = value;
                }
            }
        }
    }
    return settings;
};

const getBooks = async (req, res) => {
    const client = await MongoClient.connect(DB_CONNECTION_STRING);
    try{
        const settings = dynamicQuery(req.query);
        const collection = client
        .db('BackEnd')
        .collection('books');

        const totalAmount = await collection.countDocuments(settings.filter);

        const books = await collection
            .find(settings.filter)
            .sort(settings.sort)
            .skip(settings.skip)
            .limit(settings.limit)
            .toArray();

        res.send ({ totalAmount, books });    
    }catch(err){
        console.error(err);
        res.status(500).send({ error: err, message: `Something went wrong with server, please try again later.` });
    }finally{
        await client.close();
    }
};

const getSpecBook = async (req, res) => {
    const client = await MongoClient.connect(DB_CONNECTION_STRING);
    try{
        const { _id } = req.params;
    
        const book = await client
        .db('BackEnd')
        .collection('books')
        .findOne({ _id: _id });

        if(!book){
            return res.status(404).send({ error: `Book with id ${_id} not found.`});
        }
        res.json(book);
    }catch(err){
        console.error(err);
        res.status(500).send({ error: err, message: `Something went wrong with server, please try again later.` });
    }finally{
        await client.close();
    }
};

export { getBooks, getSpecBook };
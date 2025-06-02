import { useContext, useState, useEffect } from "react";
import { useParams } from "react-router";

import BooksContext from "../components/contexts/BooksContext";

const SpecificBook = () => {

    const {_id} = useParams();
    const { books, loading } = useContext(BooksContext);

    const [book, setBook] = useState(null);

    useEffect(() => {
        if (!loading && books.length) {
        const found = books.find(book => book._id === _id);
        setBook(found || null);
        }
    }, []);

    return ( 
        <section>
            {
                
                loading ? <p> Data is loading... </p> :
                !book ? <p> Book not found </p> :
                <div>
                    <img 
                        src={book.imageUrl} 
                        alt={book.title} 
                    />
                    <h3>{book.title}</h3>
                    <p>{book.author}</p>
                    <p>{book.genres.join(' | ')}</p>
                    <p>{book.publishDate}</p>
                    <p>{book.description}</p>
                </div>
            }
        </section>
     );
}
 
export default SpecificBook;
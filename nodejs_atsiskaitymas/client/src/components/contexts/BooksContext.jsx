import { createContext, useReducer, useRef, useState, useEffect } from 'react';

const reducer = (state, action) => {
    switch(action.type){
        case 'setData':
            return action.data;
        default:
            return state;
    }
} 

const BooksContext = createContext();
const BooksProvider = ({ children }) => {

    const [books, dispatch] = useReducer(reducer, []);
    const [loading, setLoading] = useState(true);

    const sort = useRef([]);
    const filter = useRef('');
    
    const changeSort = (e) => {
        sort.current = `${e.target.value}`;
        fetchData();
    }

    const changeFilter = (newFilter) => {
        filter.current = newFilter;
        fetchData();
    }

    const fetchData = () => {
        setLoading(true);
        fetch(`http://localhost:5500/books?&${sort.current}&${filter.current}`)
          .then(res => res.json())
          .then(data => {
            dispatch({
              type: 'setData',
              data: data.books ?? []
            });
          })
          .finally(() => {
            setLoading(false);
          });
    }

    useEffect(() => {
        fetchData();
    }, []);

    return(
        <BooksContext.Provider
            value={{
                books,
                loading,
                changeSort,
                changeFilter,
            }}
        >
            { children }
        </BooksContext.Provider>
    )
}

export { BooksProvider };
export default BooksContext;
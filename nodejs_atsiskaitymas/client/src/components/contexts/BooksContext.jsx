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
    const currentPage = useRef(1);
    const pageSize = useRef(10);
    
    const changeSort = (e) => {
        sort.current = `${e.target.value}`;
        fetchData();
    }

    const changeFilter = (newFilter) => {
        filter.current = newFilter;
        currentPage.current = 1;
        getFilteredDataAmount();
        fetchData();
    }

    const changePageSize = (size) => {
        pageSize.current = size;
        currentPage.current = 1;
        fetchData();
    }

    const changePage = (newPage) => {
        currentPage.current = newPage;
        fetchData();
    }

    const fetchData = () => {
        setLoading(true);
        fetch(`http://localhost:5500/books?skip=${(currentPage.current - 1) * pageSize.current}&limit=${pageSize.current}&${sort.current}&${filter.current}`)
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
                changePage,
                changePageSize
            }}
        >
            { children }
        </BooksContext.Provider>
    )
}

export { BooksProvider };
export default BooksContext;
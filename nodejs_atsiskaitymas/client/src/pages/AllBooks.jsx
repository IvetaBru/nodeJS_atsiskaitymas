import { useContext } from 'react';
import styled from 'styled-components';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

import BooksContext from "../components/contexts/BooksContext";
import BookCard from '../components/UI/molecules/BookCard';
import BooksFilter from '../components/UI/molecules/BooksFilter';
import BooksSort from '../components/UI/molecules/BooksSort';

const StyledSection = styled.section`
    >h2{
        color: #312b21;
        font-weight: 900;
        font-size: 30px;
        text-decoration: underline 5px #C2D3CD;
        text-underline-offset: 10px;
    }
    >.books{
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 25px;
        padding: 50px 0;
    }
    .up{
        position: fixed;
        bottom: 20px;
        right: 20px;
        border: none;
    }
`

const AllBooks = () => {

    const { books, loading } = useContext(BooksContext);
    const scroll = () => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    }

    return ( 
        <StyledSection>
            <h2>Our Books</h2>
            <BooksFilter />
            <BooksSort />
            <div className='books'>
                {
                    loading ? <p> Data is loading... </p> :
                    !books.length ? <p> No books in the library yet... </p> :
                    books.map(book => 
                       <BookCard
                        data={book}
                        key={book._id}
                       /> 
                    )
                }
            </div>   
            <button onClick={scroll} className='up'><ArrowUpwardIcon/></button>
        </StyledSection>
    );
}
 
export default AllBooks;
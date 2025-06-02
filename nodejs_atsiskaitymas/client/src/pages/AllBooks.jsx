import { useContext } from 'react';
import styled from 'styled-components';

import BooksContext from "../components/contexts/BooksContext";
import BookCard from '../components/UI/molecules/BookCard';
import BooksFilter from '../components/UI/molecules/BooksFilter';
import BooksSort from '../components/UI/molecules/BooksSort';

const StyledSection = styled.section`
    div{
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
    }
`

const AllBooks = () => {

    const { books, loading } = useContext(BooksContext);

    return ( 
        <StyledSection>
            <h2>Our Books</h2>
            <BooksFilter />
            <BooksSort />
            <div>
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
        </StyledSection>
    );
}
 
export default AllBooks;
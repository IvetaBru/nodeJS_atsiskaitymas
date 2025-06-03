import { useContext, useState, useEffect } from "react";
import { useParams } from "react-router";
import styled from "styled-components";

import BooksContext from "../components/contexts/BooksContext";

const StyledSection = styled.section`
    .container{
        display: flex;
        padding: 20px 0;
        color: #312b21;

        .image{
            flex: 1;
            >img{
                width: 70%;
                border-radius: 10px;
                box-shadow: 0 10px 10px rgba(0,0,0,0.1);

            }
        }
        .info{
            flex: 2;
            align-self: center;
        }
    }
`
const SpecificBook = () => {

    const {_id} = useParams();
    const { books, loading } = useContext(BooksContext);

    const [book, setBook] = useState(null);

    useEffect(() => {
        if (!loading && books.length) {
        const found = books.find(book => book._id === _id);
        setBook(found || null);
        }
    }, [_id, books, loading]);

    return ( 
        <StyledSection>
            {
                
                loading ? <p> Data is loading... </p> :
                !book ? <p> Book not found </p> :
                <div className="container">
                    <div className="image">
                        <img 
                            src={book.imageUrl} 
                            alt={book.title} 
                        />
                    </div>
                    <div className="info">
                        <h3>{book.title}</h3>
                        <p><b>By {book.author}</b></p>
                        <p><b>Genres:</b> {book.genres.join(' | ')}</p>
                        <p><b>Published:</b> {book.publishDate}</p>
                        <p>{book.description}</p>
                        <p><b>Pages:</b> {book.pages}</p>
                        <p><b>Rating:</b> {book.rating}/5 ⭐</p>
                        <p><b>In Stock:</b> {book.amountOfCopies}</p>
                    </div>
                </div>
            }
        </StyledSection>
     );
}
 
export default SpecificBook;
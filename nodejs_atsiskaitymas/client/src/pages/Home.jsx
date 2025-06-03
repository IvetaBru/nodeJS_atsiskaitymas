import styled from 'styled-components';
import { useContext } from 'react';
import { Link } from 'react-router';

import BooksContext from '../components/contexts/BooksContext';

const StyledSection = styled.section`
    display: flex;
    flex-direction: column;
    gap: 20px;
    color: #312b21;

    >div{
        >h2{
            text-align: center;
            margin: 0;
            padding: 20px;
        } 
    }
    .intro{
        padding: 100px 300px;
        border-radius: 10px;
        background: linear-gradient(135deg, #f0f4f8, #C2D3CD);
        text-align: center;    
    }
    .topBooks{
        height: 300px;
        padding: 20px;
        background: linear-gradient(135deg, #C2D3CD, #f0f4f8);
        border-radius: 10px;
        display: flex;
        gap: 20px;
    }
    .bookCard{
        width: 20%;
        border-right: 2px solid white;
        padding: 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 20px;
        &:last-child {
            border-right: none;
        }
        >img{
            height: 90%;
            border-radius: 10px;
            flex: 1;
        }
    }
    button {
    background-color: #AFBFC0;
    color: #312b21;
    border: none;
    border-radius: 5px;
    padding: 5px 10px;
    cursor: pointer;
    font-weight: 600;
    font-family: 'Courier New', Courier, monospace;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #C2D3CD;
    }
  }
  .allBooks{
    height: 100px;
    padding: 20px;
    margin: 20px 0;
    border-radius: 10px;
    background: linear-gradient(135deg, #f0f4f8, #C2D3CD);
    display: flex;
    justify-content: center;
    align-items: center;
    >a{
        color: #312b21;
        text-decoration: none;
        font-size: 20px;
        &:hover{
            text-decoration: underline 5px #C2D3CD;
            text-underline-offset: 6px;
        }
    }

  }
`

const Home = () => {

    const { books, loading } = useContext(BooksContext);
    const topBooks = [...books]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 5);

    const shortDescription = (text, wordLimit = 5) => {
    const words = text.split(' ');
    if (words.length <= wordLimit) return text;
    return words.slice(0, wordLimit).join(' ') + '...';
    };

    return ( 
        <StyledSection>
            <div className='intro'>
                <h2>Welcome to our bookstore – a place where stories come alive.</h2>
                <p>Whether you're looking for timeless classics, thrilling mysteries, heartwarming novels, or inspiring non-fiction, we’ve got something for every reader. Browse our carefully curated collection, discover new favorites, and enjoy the magic of reading.</p>
                <p>Step inside, turn the page, and let your next adventure begin.</p>
            </div>
            <div>
                <h2>Top Rated Books</h2>
                    {
                        loading ? (
                        <p>Loading...</p>
                        ) : (
                        <div className="topBooks">
                            {topBooks.map(book => (
                            <div key={book._id} className="bookCard">
                                <img src={book.imageUrl} alt={book.title} />
                                <div>
                                    <h4>{shortDescription(book.title)}</h4>
                                    <p>By {book.author}</p>
                                    <p>{book.rating}/5⭐</p>
                                </div>
                            </div>
                            ))}
                        </div>
                        )
                    }
            </div>
            <div className='allBooks'>
                <Link to="/books">
                        <h2>See all books</h2>
                </Link>
            </div>
        </StyledSection>
     );
}
 
export default Home;
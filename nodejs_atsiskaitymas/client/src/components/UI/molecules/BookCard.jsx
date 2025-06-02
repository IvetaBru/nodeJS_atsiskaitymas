import styled from "styled-components";
import { Link } from "react-router";

const StyledCard = styled.div`
    width: 280px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 16px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

  img {
    width: 100%;
    height: 160px;
    object-fit: cover;
    border-radius: 6px;
  }

  h3 {
    margin: 0;
    font-size: 1.2rem;
    color: #222;
  }

  p {
    font-size: 0.9rem;
    color: #555;
    flex-grow: 1;
  }

  span {
    font-size: 0.85rem;
    color: #777;
    display: block;
  }

  button {
    margin-top: auto;
    align-self: flex-start;
    background-color: #007BFF;
    color: white;
    border: none;
    border-radius: 5px;
    padding: 8px 14px;
    cursor: pointer;
    font-weight: 600;
    transition: background-color 0.2s ease;

    &:hover {
      background-color: #0056b3;
    }
  }
`

const BookCard = ({ data }) => {

    const shortDescription = (text, wordLimit = 13) => {
    const words = text.split(' ');
    if (words.length <= wordLimit) return text;
    return words.slice(0, wordLimit).join(' ') + '...';
    };

    return ( 
        <StyledCard>
            <img 
                src={data.imageUrl} 
                alt={data.title} 
            />
            <h3>{data.title}</h3>
            <span>{data.rating}/5</span>
            <span>{data.author}</span>
            <span>{data.genres.join(' | ')}</span>
            <span>{data.publishDate}</span>
            <p>{shortDescription(data.description)}</p>
            <Link to={`/books/${data._id}`}>
                <button>Read More...</button>
            </Link>
        </StyledCard>
     );
}
 
export default BookCard;
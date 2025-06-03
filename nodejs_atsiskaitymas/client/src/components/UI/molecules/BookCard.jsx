import styled from "styled-components";
import { Link } from "react-router";

const StyledCard = styled.div`
  height: 270px;
  background: linear-gradient(135deg, #C2D3CD, #f0f4f8);
  color: #312b21;
  border-radius: 10px;
  box-shadow: 0 10px 10px rgba(0,0,0,0.1);
  display: flex;
  gap: 10px;
  padding: 10px;
  font-size: 12px;
  margin: 0;
  
  >div{
    display: flex;
    flex-direction: column;
    >img {
      width: 100%;
      height: 270px;
      object-fit: cover;
      border-radius: 10px;
      box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);
      position: relative;
      top: -20px;
    }
  }
  >.info{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 1;
    >h3 {
      font-size: 16px;
      font-weight: 900;
      margin: 0;
    }
    >.bold{
      font-weight: 600;
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
`

const BookCard = ({ data }) => {

  const shortDescription = (text, wordLimit = 15) => {
  const words = text.split(' ');
  if (words.length <= wordLimit) return text;
  return words.slice(0, wordLimit).join(' ') + '...';
  };

    return ( 
        <StyledCard>
          <div>
            <img 
                src={data.imageUrl} 
                alt={data.title} 
            />
          </div>
          <div className="info">
            <h3>{shortDescription(data.title)}</h3>
            <span className="bold">By {data.author} | {data.rating}/5⭐</span>
            <span>Published {data.publishDate}</span>
            <span>{data.genres.join(' | ')}</span>
            <p>{shortDescription(data.description)}</p>
            <Link to={`/books/${data._id}`}>
                <button>Read More...</button>
            </Link>
          </div>
        </StyledCard>
     );
}
 
export default BookCard;
import styled from "styled-components";

const StyledCard = styled.div`
    
`

const BookCard = ({ data }) => {
    return ( 
        <StyledCard>
            <h3>{data.title}</h3>
            <p>{data.description}</p>
            <span>{data.author}</span>
            <span>{data.genres}</span>
            <span>{data.publishDate}</span>
            <button>Read More...</button>
        </StyledCard>
     );
}
 
export default BookCard;
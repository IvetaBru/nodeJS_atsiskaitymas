import { useContext } from "react";
import styled from "styled-components";

import BooksContext from '../../contexts/BooksContext';

const StyledSort = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 20%;
    color: #312b21;
    font-size: 14px;
    >select{
        height: 20px;
        color: #312b21;
        font-family: 'Courier New', Courier, monospace;
        border-radius: 5px;
        border: none;
        box-shadow: 0 10px 10px rgba(0,0,0,0.1);
    }
`

const BooksSort = () => {
    const { changeSort } = useContext(BooksContext);

    return ( 
        <StyledSort>
            <h4>Sort by:</h4>
            <select onChange={changeSort} defaultValue="">
                <option value="">Default</option>
                <option value="sort_rating=1">Rating (from lowest to highest)</option>
                <option value="sort_rating=-1">Rating (from highest to lowest)</option>
            </select>
        </StyledSort>
    );
}
 
export default BooksSort;
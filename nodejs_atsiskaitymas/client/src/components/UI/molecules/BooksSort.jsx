import { useContext } from "react";

import BooksContext from '../../contexts/BooksContext';

const BooksSort = () => {
    const { changeSort } = useContext(BooksContext);

    return ( 
        <div>
            <h4>Sort by:</h4>
            <select onChange={changeSort} defaultValue="">
                <option value="">Default</option>
                <option value="sort_rating=1">Rating (from lowest to highest)</option>
                <option value="sort_rating=-1">Rating (from highest to lowest)</option>
            </select>
        </div>
    );
}
 
export default BooksSort;
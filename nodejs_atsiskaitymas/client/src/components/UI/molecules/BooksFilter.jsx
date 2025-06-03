import { useContext } from "react";
import { useFormik } from "formik";
import styled from 'styled-components';

import BooksContext from "../../contexts/BooksContext";

const StyledForm = styled.form`
    background: linear-gradient(135deg, #f0f4f8, #C2D3CD);
    padding: 20px;
    border-radius: 10px;
    width: 25%;
    box-shadow: 0 10px 10px rgba(0,0,0,0.1);

    display: flex;
    flex-direction: column;
    gap: 10px;
    >div{
        display: flex;
        justify-content: space-between;
        font-weight: 600;
        color: #312b21;
        >input{
            border-radius: 5px;
            border: none;
        }
    }
    .button{
        width: 30%;
        align-self: center;
        background-color: #AFBFC0;
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

const BooksFilter = () => {

    const { changeFilter } = useContext(BooksContext);

    const formik = useFormik({
        initialValues: {
            filter_publishYear_gte: "",
            filter_publishYear_lte: "",
            filter_available: false
        },
        onSubmit(values){
            const filters = [];
            
            if(values.filter_publishYear_gte)
                filters.push(`filter_publishYear_gte=${values.filter_publishYear_gte}`);
            if(values.filter_publishYear_lte)
                filters.push(`filter_publishYear_lte=${values.filter_publishYear_lte}`);
            if (values.filter_available)
                filters.push(`filter_amountOfCopies_gt=0`);

            const query = filters.join("&");
            changeFilter(query);
        }
    })
    return ( 
        <StyledForm onSubmit={formik.handleSubmit}>
        <div>
            <label>Years from:</label>
            <input
            type="number"
            name="filter_publishYear_gte"
            value={formik.values.filter_publishYear_gte}
            onChange={formik.handleChange}
            />
        </div>
        <div>
            <label>Years to:</label>
            <input
            type="number"
            name="filter_publishYear_lte"
            value={formik.values.filter_publishYear_lte}
            onChange={formik.handleChange}
            />
        </div>
        <div>
            <label>
            Show only available books
            </label>
            <input
                type="checkbox"
                name="filter_available"
                checked={formik.values.filter_available}
                onChange={formik.handleChange}
            />
        </div>
      <input type="submit" value="Filter" className="button"/>
    </StyledForm>
  );
}
 
export default BooksFilter;
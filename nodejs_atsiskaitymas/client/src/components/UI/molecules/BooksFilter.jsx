import { useContext } from "react";
import { useFormik } from "formik";

import BooksContext from "../../contexts/BooksContext";

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
        <form onSubmit={formik.handleSubmit}>
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
            <input
                type="checkbox"
                name="filter_available"
                checked={formik.values.filter_available}
                onChange={formik.handleChange}
            />
            Show only available books
            </label>
        </div>
      <input type="submit" value="Filter" />
    </form>
  );
}
 
export default BooksFilter;
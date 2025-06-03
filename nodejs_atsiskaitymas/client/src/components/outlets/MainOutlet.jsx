import { Outlet } from "react-router";
import styled from 'styled-components';

import Header from "../UI/organisms/Header";
import Footer from "../UI/organisms/Footer";

const StyledMain = styled.section`
    padding: 20px 100px;
`

const MainOutlet = () => {
    return ( 
        <>
            <Header />
            <StyledMain>
                <Outlet />
            </StyledMain>
            <Footer />
        </>
     );
}
 
export default MainOutlet;
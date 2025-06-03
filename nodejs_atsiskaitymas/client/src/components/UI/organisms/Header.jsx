import { NavLink } from 'react-router';
import styled from 'styled-components';
import Footer from './Footer';

const StyledHeader = styled.header`
    height: 80px;
    padding: 0 100px;
    box-shadow: 0 10px 10px rgba(0,0,0,0.1);
    display: flex;
    justify-content: space-between;
    align-items: center;

    >div{
        >img{
            height: 60px;
        }
    }
    >nav{
        >ul{
            list-style: none;
            display: flex;
            gap: 30px;
            >li{
                >a{
                    text-decoration: none;
                    font-size: 20px;
                    font-weight: 600;
                    color: #312b21;
                    &.active{
                        text-decoration: underline 5px #C2D3CD;
                        text-underline-offset: 6px;
                    }
                }
            }
        }
    }
    .work{
        >a{
            text-decoration: none;
            font-size: 15px;
            font-weight: 600;
            color: #312b21;
            &:hover{
                text-decoration: underline 2px #C2D3CD;
                text-underline-offset: 6px;
            }
        }
    }
`

const Header = () => {
    return ( 
        <StyledHeader>
            <div>
                <img src="https://cdn-icons-png.flaticon.com/512/5078/5078755.png" alt="book" />
            </div>
            <nav>
                <ul>
                    <li><NavLink to='/'>Home</NavLink></li>
                    <li><NavLink to='/books'>Books</NavLink></li>
                </ul>
            </nav>
            <div className='work'>
                <a href="#footer">Our working hours 🕘</a>
            </div>
        </StyledHeader>
     );
}
 
export default Header;
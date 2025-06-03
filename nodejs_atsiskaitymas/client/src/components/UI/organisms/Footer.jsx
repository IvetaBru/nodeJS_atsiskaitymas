import styled from "styled-components";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import PinterestIcon from '@mui/icons-material/Pinterest';
import YouTubeIcon from '@mui/icons-material/YouTube';

const StyledFooter = styled.footer`
    height: 220px;
    padding: 20px 100px;
    display: flex;
    gap: 100px;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 -10px 10px rgba(0, 0, 0, 0.1);
    .info{
        display: flex;
        flex-direction: column;
        gap: 10px;
        a{
            color: #312b21;
            font-family: 'Courier New', Courier, monospace;
            text-decoration: none;
            font-weight: 600;
        }
        a:hover{
            text-decoration: underline solid 3px #AFBFC0;
            text-underline-offset: 6px;
        }
        >span{
            font-size: 12px;
        }
    }
    .socials{
        display: flex;
        gap: 40px;
        >a{
            >svg{
                font-size: 30px;
                color: #312b21;
            }
            >svg:hover{
                color: #AFBFC0;
            }
        }
    }
    .workingHours{
        >ul{
            >li{
                list-style: none;
                display: flex;
                justify-content: space-between;
                padding: 4px 0;
                border-bottom: 1px dashed #ccc;
                >span{
                    font-size: 12px;
                }
            }
        }
    }   
`

const Footer = () => {
    return ( 
        <StyledFooter id="footer">
            <div className="info">
                <a href="#">Cookies</a>
                <a href="#">Privacy Policy</a>
                <a href="#">Terms and Uses</a>
                <span>© Copyrights, 2025</span>
            </div>
            <div className="socials">
                <a href="https://www.instagram.com/" target="blank"><InstagramIcon /></a>
                <a href="https://www.facebook.com/" target="blank"><FacebookIcon /></a>
                <a href="https://www.pinterest.com/" target="blank"><PinterestIcon /></a>
                <a href="https://www.youtube.com/" target="blank"><YouTubeIcon /></a>
            </div>
            <div className="workingHours">
                <ul>
                    <li><span>Monday:</span> <span>9:00 – 18:00</span></li>
                    <li><span>Tuesday:</span> <span>9:00 – 18:00</span></li>
                    <li><span>Wednesday:</span> <span>9:00 – 18:00</span></li>
                    <li><span>Thursday:</span> <span>9:00 – 18:00</span></li>
                    <li><span>Friday:</span> <span>9:00 – 18:00</span></li>
                    <li><span>Saturday:</span> <span>10:00 – 15:00</span></li>
                    <li><span>Sunday:</span> <span>Closed</span></li>
                </ul>
            </div>
        </StyledFooter>
     );
}
 
export default Footer;
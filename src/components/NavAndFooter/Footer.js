import github from '../../images/icons8-github-bubbles/icons8-github-100.png';
import linkedin from '../../images/icons8-linkedin-bubbles/icons8-linkedin-100.png';
import { FooterComponent } from './Footer.styles';
const Footer = () => {
    return (
        <FooterComponent>
        <p>Find me on Github and linkedin</p>
        <div>
       <a href="https://github.com/roseandlily33"><img src={github} alt="github"></img></a>
       <a href="https://www.linkedin.com/in/victoria-benoit-3rose3/"><img src={linkedin} alt="linkedin"></img></a>
       </div>
        </FooterComponent>
    );
}
 
export default Footer;
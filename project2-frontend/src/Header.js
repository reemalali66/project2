import logo from "./images/logo1.PNG"
import { Link } from "react-router-dom";

function Header(){
    return(
        <header>
            
             <img src={logo} alt="Clogo" id="Cinemalogo"/>
        <nav>
          
        <Link to ='/'><a href=""> Movies </a></Link>
            <a href=""> Top 10 Movies </a>
            <a href=""> Add Movie </a>  
        </nav>

        </header>
    )
}
    export default Header;
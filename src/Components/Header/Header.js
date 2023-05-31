import "./Header.css";
import { FaClipboard } from "react-icons/fa";
import copy from "copy-to-clipboard";

const Header = (props) => {

    const handleIconClick = () => {
        copy(props.password);
        if(props.password!=="")
         alert("Password Copied !!!");
    }

    return (
        <div className="header">
            <h2>Password Generator</h2>
            <div className="display">
                <h3 className="message">{props.password}</h3>
                <FaClipboard className="icon" onClick={handleIconClick} size ={30}/>
            </div>
        </div>
    )
}

export default Header;
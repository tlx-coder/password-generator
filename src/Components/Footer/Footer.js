import './Footer.css';
import generatePassword from '../../Functions/generatePassword';

function Footer(props) {

  const handleChange = () => {
    props.setPassword(generatePassword(props.data));
  }

  return (
    <div className="footer">
        <button onClick={handleChange}>Generate Password</button>
    </div>
  );
}

export default Footer;
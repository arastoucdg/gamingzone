import { Link } from "react-router-dom";
import "../../styles/main.css";
export default function PublicNavigation() {
  return (
    <>
      {" "}
      <ul className='d-flex nav-public-links'>
        <Link
          className='nav-link justify-content-center align-items-center'
          to={"/list-users"}
        >
          {" "}
          <img
            className='cart-icon'
            src={require("../../icons/basket2.png").default}
          />
        </Link>
        <Link className='nav-link align-items-center ' to={"/login"}>
          <img
            className='login-icon'
            src={require("../../icons/login.png").default}
          />
          Login
        </Link>
        <Link className='nav-link align-items-center ' to={"/register"}>
          <img
            className='signup-icon'
            src={require("../../icons/signup.png").default}
          />
          Signup
        </Link>
      </ul>
    </>
  );
}

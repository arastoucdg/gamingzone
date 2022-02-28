import { Link } from "react-router-dom";
import "../../styles/main.css";
export default function PrivateNavigation() {
  return (
    <>
      <div className=' d-flex justify-content-center p-lg-4 align-items-center'>
        <Link className='navbar-link text-decoration-none' to={"/list-users"}>
          <img
            className='cart-icon'
            src={require("../../icons/basket2.png").default}
            Shopping
            Cart
          />
        </Link>
        <Link
          className='navbar-link d-flex p-3 align-items-center '
          to={"/profile"}
        >
          <img
            className='profile-icon'
            src={require("../../icons/profile.png").default}
            Shopping
            Cart
          />
        </Link>
        <Link
          className='navbar-link p-3 btn text-decoration-none  '
          to={"/logout"}
        >
          <img
            className='logout-icon'
            src={require("../../icons/logout.png").default}
            Shopping
            Cart
          />
        </Link>
      </div>
    </>
  );
}

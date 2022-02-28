import { useEffect, useState, useContext } from "react";
import axios from "../../util/axiosInstance";
//import ShoppingCartContext from "../../context/shoppingCart";
import { AppContext } from "../../App";
import "../../styles/main.css";

export default function ListUsers() {
  const [users, setUsers] = useState([]);
  const { items } = useContext(AppContext);
  const getListOfusers = async () => {
    const response = await axios.get("/users/list");

    setUsers(response.data.users); // users[]
  };

  useEffect(() => {
    // getListOfusers();
  }, []);

  console.log(items ? items : "");

  //const storeCart = JSON.parse(localStorage.getItem("items"));

  return (
    <>
      <img
        className=' home-banner-image'
        src={require("../../images/banner8.gif").default}
      />
      <h1 className='shoppingCart-banner m-auto p-4 '>shopping cart</h1>
      <div className='container-fluid row main-style  '>
        {items
          ? items.map((item) => {
              return (
                <div className='cart-style cart-context-style ' key={item.id}>
                  <div className='row contextform-style '>
                    <p className='contextcart-style '> {item.title}</p>
                    <img
                      src={item.thumbnail}
                      alt=''
                      className='rounded image-style p-4'
                    />

                    <p>Platform: {item.platform}</p>
                    <p>Description: {item.short_description}</p>
                    <p>Release Date : {item.release_date}</p>
                    <p>Genre : {item.genre}</p>

                    <a href={item.game_url} className='downloadtitle'>
                      {" "}
                      Download for free{" "}
                      <img
                        className='downloadicon'
                        src={require("../../icons/download3.png").default}
                      />{" "}
                    </a>
                  </div>
                </div>
              );
            })
          : ""}{" "}
      </div>
      <form className='container profile-main-style'>
        <p className='mt-4 mb-4'>place your order</p>
        <div className='row mb-4 mt-3'>
          <div className='col'>
            <div className='form-outline'>
              <input type='text' id='form6Example1' className='form-control' />
              <label className='form-label' for='form6Example1'>
                First name
              </label>
            </div>
          </div>
          <div className='col'>
            <div className='form-outline'>
              <input type='text' id='form6Example2' className='form-control' />
              <label className='form-label' for='form6Example2'>
                Last name
              </label>
            </div>
          </div>
        </div>

        <div className='form-outline mb-4'>
          <input type='text' id='form6Example3' className='form-control' />
          <label className='form-label' for='form6Example3'>
            Company name
          </label>
        </div>

        <div className='form-outline mb-4'>
          <input type='text' id='form6Example4' className='form-control' />
          <label className='form-label' for='form6Example4'>
            Address
          </label>
        </div>

        <div className='form-outline mb-4'>
          <input type='email' id='form6Example5' className='form-control' />
          <label className='form-label' for='form6Example5'>
            Email
          </label>
        </div>

        <div className='form-outline mb-4'>
          <input type='number' id='form6Example6' className='form-control' />
          <label className='form-label' for='form6Example6'>
            Phone
          </label>
        </div>

        <div className='form-outline mb-4'>
          <textarea
            className='form-control'
            id='form6Example7'
            rows='4'
          ></textarea>
          <label className='form-label' for='form6Example7'>
            Additional information
          </label>
        </div>

        <div className='form-check d-flex justify-content-center mb-4'>
          <input
            className='form-check-input me-2'
            type='checkbox'
            value=''
            id='form6Example8'
            checked
          />
          <label className='form-check-label' for='form6Example8'>
            {" "}
            Create an account?{" "}
          </label>
        </div>

        <button type='submit' className='btn btn-primary btn-block mb-4'>
          Place order
        </button>
      </form>
    </>
  );
}

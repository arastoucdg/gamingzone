import { useEffect, useState } from "react";
import axios from "./../../util/axiosInstance";

export default function Profile() {
  const [user, setUser] = useState(null);

  //load the profile information
  const getProfile = async () => {
    try {
      //making a get request to fetch the profile information
      const response = await axios.get("/users/profile");

      if (response.status === 200) {
        setUser(response.data.user);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    //fetch profile information when component renders.
    getProfile();
  }, []);

  return (
    <>
      {/* <h1 className='banner-container'> */}
      <img
        className='home-banner-image'
        src={require("../../images/banner3.gif").default}
      />
      {/* </h1> */}

      {user != null ? (
        <div>
          <div className='container mainprofile'>
            <h1>welcome back {user.firstname}</h1>
            <h1>user_ID:{user._id}</h1>
            <h4>Email:{user.email}</h4>
          </div>
          <div className='container-fluid row profile'>
            <img
              className=' col-lg-4 col-md6 profileimages '
              src={require("../../icons/shooting.gif").default}
            />

            <img
              className='col-sm-2 col-lg-4 col-md-6 profileimages'
              src={require("../../icons/shooting2.gif").default}
            />
          </div>
        </div>
      ) : (
        <p>No user found</p>
      )}
      <form className='container profile-main-style'>
        <p className='mt-4 mb-4'>your information</p>
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
            accept the policy{" "}
          </label>
        </div>

        <button type='submit' className='btn btn-primary btn-block mb-4'>
          save
        </button>
      </form>
    </>
  );
}

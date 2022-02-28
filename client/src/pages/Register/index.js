import axios from "../../util/axiosInstance";
import { useState } from "react";
import "../../../src/styles/main.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from "react-router-dom";

import FormWrapper from "../../components/Common/Wrapper";
import ErrorMessage from "../../components/Common/ErrorMessage";

export default function Register() {
  const navigate = useNavigate();
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("Submit the form");
    const formData = new FormData(event.target);

    const data = {
      firstname: formData.get("firstname"), //get the data from the input with name firstname
      lastname: formData.get("lastname"), //get the data from the input with name lastname
      username: formData.get("username"), //get the data from the input with name username
      email: formData.get("email"), //...
      password: formData.get("password"),
    };
    console.log(data);
    try {
      const response = await axios.post("/users/register", data);

      if (response.status === 200) {
        //everything went well!
        console.log("user was created");
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
      setIsError(true);
      setErrorMessage(error.response.data.message);
    }
  };

  return (
    <>
      {" "}
      {/* <h1 className='banner-container'> */}
      <img
        className=' register-banner-image'
        src={require("../../images/banner31.gif").default}
      />
      {/* </h1> */}
      <FormWrapper>
        <div className='form-outline container sigupform-style '>
          <form
            className='form-outline form-white mb-4 '
            onSubmit={handleSubmit}
          >
            <h3 className='mb-5 signuptitle-style'>Sign Up a New Account</h3>
            <div className='form-outline form-white mb-4'>
              <input
                type='text'
                name='firstname'
                className='form-control'
                placeholder='First name'
              />
            </div>

            <div className='form-outline form-white mb-4'>
              <input
                type='text'
                name='lastname'
                className='form-control'
                placeholder='Last name'
              />
            </div>

            <div className='form-outline form-white mb-4'>
              <input
                type='text'
                name='username'
                className='form-control'
                placeholder='Username'
              />
            </div>

            <div className='form-outline form-white mb-4'>
              <input
                type='email'
                name='email'
                className='form-control'
                placeholder='Enter email'
              />
            </div>

            <div className='form-outline form-white mb-4'>
              <input
                type='password'
                name='password'
                className='form-control'
                placeholder='Enter password'
              />
            </div>

            <div className='form-outline form-white mb-4'>
              <input
                type='password'
                name='repassword'
                className='form-control'
                placeholder='Enter password'
              />
            </div>
            <ErrorMessage isVisible={isError} errorMessage={errorMessage} />
            <button className='btn btn-outline-light btn-lg px-5' type='submit'>
              Sign Up
            </button>
            <p className='forgot-password signInUp-style text-right p-2'>
              Already registered <Link to='/login'>sign in?</Link>
            </p>
          </form>
        </div>
      </FormWrapper>
    </>
  );
}

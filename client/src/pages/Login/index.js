import axios from "../../util/axiosInstance";
import { useContext, useState } from "react";
import { AppContext } from "../../App";
import { Link, useNavigate } from "react-router-dom";

import FormWrapper from "../../components/Common/Wrapper";
import ErrorMessage from "../../components/Common/ErrorMessage";
import "../../styles/main.css";
export default function Login() {
  const navigate = useNavigate();
  const { handleLogin } = useContext(AppContext);

  const [isError, setIsError] = useState(false); //is there an error?
  const [errorMessage, setErrorMessage] = useState(""); //the error message itself.

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    const data = {
      email: formData.get("email"),
      password: formData.get("password"),
    };

    try {
      const response = await axios.post("/users/login", data);

      handleLogin(response.data.user.username);
      //redirect;
      navigate("/list-users");
    } catch (error) {
      console.log(error);
      setIsError(true);
      setErrorMessage(error.response.data.message);
    }
  };

  return (
    <>
      {/* <h1 className='banner-container'> */}
      <img
        className=' register-banner-image'
        src={require("../../images/banner25.gif").default}
      />
      {/* </h1> */}

      <FormWrapper>
        <div className='form-outline bg-success loginform-style '>
          <h1 className='p-2 mb-3 logintitle-style'>Login to your account</h1>
          <form className='form-outline p-5' onSubmit={handleSubmit}>
            <div className='form-outline form-white mb-4 '>
              <input
                className='form-control form-control-lg'
                name='email'
                type='email'
                required={true}
                placeholder='Enter email'
              />
              <label className='form-label' for='typeEmailX'>
                Email
              </label>
            </div>
            <div className='form-outline form-white mb-4'>
              <input
                className='form-control form-control-lg '
                name='password'
                type='password'
                required={true}
                placeholder='Enter password'
              />
              <label class='form-label' for='typePasswordX'>
                Password
              </label>
            </div>
            <p className='small mb-5 pb-lg-2'>
              <a className='text-white-50' href='#!'>
                Forgot password?
              </a>
            </p>
            <ErrorMessage isVisible={isError} errorMessage={errorMessage} />

            <button className='btn btn-outline-light btn-lg px-5' type='submit'>
              Login
            </button>
            <p className='forgot-password mt-4 signInUp-style text-right p-2'>
              Do not have an account? <Link to='/register'>sign up?</Link>
            </p>
            <div className='d-flex justify-content-center text-center mt-4 pt-1'>
              <a href='#!' className='text-white'>
                <i className='fab fa-facebook-f fa-lg'></i>
              </a>
              <a href='#!' className='text-white'>
                <i className='fab fa-twitter fa-lg mx-4 px-2'></i>
              </a>
              <a href='#!' className='text-white'>
                <i className='fab fa-google fa-lg'></i>
              </a>
            </div>
          </form>
        </div>
      </FormWrapper>
    </>
  );
}

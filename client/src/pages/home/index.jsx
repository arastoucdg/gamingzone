import { useContext, useEffect } from "react";
import { AppContext } from "../../App";
import axios from "axios";
import "../../styles/main.css";

export default function Home() {
  const { username, addItemToCart, state, setState } = useContext(AppContext);
  // const [state, setState] = useState();
  useEffect(() => {
    const options = {
      method: "GET",
      url: "http://localhost:3001/products/list",
    };

    axios
      .request(options)
      .then(function (response) {
        setState(response.data.products);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);
  console.log(state);

  // const onsubmitHandle = (x, e) => {
  //   e.preventDefault();
  // };
  const onsubmitHandle = (param) => {
    addItemToCart(param);
    // param is the argument you passed to the function
    // e is the event object that returned
    console.log("param", param);
  };
  return (
    <>
      <div className='home-banner'>
        {/* <h1 className='banner-container'> */}
        <img
          className='home-banner-image'
          src={require("../../images/banner2.gif").default}
        />
        {/* </h1> */}
      </div>
      <h1 className='adv-banner'>Free Games List {username}</h1>

      <div className='container-fluid row main-style '>
        <a
          className='callof container-fluid'
          href='https://www.freetogame.com/open/call-of-duty-warzone'
        ></a>
        <div className='container-fluid'>
          <img
            className='col-sm-2  col-lg-4 col-md-6 homeimages'
            src={require("../../icons/coldwarzombie.gif").default}
          />
          <img
            className='col-sm-2 col-lg-4 col-md-6  homeimages3 '
            src={require("../../icons/codghost.gif").default}
          />
          <img
            className='col-sm-2 col-lg-4 col-md-6 homeimages2'
            src={require("../../icons/ghostcallofduty.gif").default}
          />
        </div>
        {state
          ? state.map((x) => {
              return (
                <div className=' cart-style' key={x.id}>
                  <div className='row form-style '>
                    <h1 className='title-game-style '>{x.title}</h1>

                    <img
                      src={x.thumbnail}
                      alt=''
                      className='rounded image-style'
                    />
                    <h1 className='cart-info-style '>Platform: {x.platform}</h1>
                    <h1 className='cart-info-style2 '>
                      developer: {x.developer}
                    </h1>
                    <button
                      className='btn btn-light addToCartButton-style '
                      onClick={() => {
                        onsubmitHandle(x);
                      }}
                      type='submit'
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              );
            })
          : ""}{" "}
        <div className='container-fluid'>
          <img
            className='footericons'
            src={require("../../icons/steam.svg").default}
          />
        </div>
        <footer className='text-center footer-style container-fluid text-white p-3'>
          © 2021 Copyright:
          <a className='text-white' href='https://Ariocoding.com/'>
            ArioCoding.com
          </a>
        </footer>
      </div>
    </>
  );
}

import Nav from "../componenets/nav";
import Footer from "../componenets/footer";
import { TiSocialFacebook, TiSocialInstagram, TiSocialLinkedin  } from "react-icons/ti"

const Home = () => {
  return (
    <>
      <Nav />
      <div className="row mainCon">
        <div className="col-1 sideFooter"> 
            <p className="mail"> support@wonderhotels.com</p>
            <div className="socials">
            <TiSocialLinkedin />
            <TiSocialFacebook />
            <TiSocialInstagram />
            </div>
        </div>
        <div className="mainDiv col-11">
        <div className="writeup">
        <h5>
          Discover tranquility, wrapped in five-star grandeur
          </h5>
          <p>
          Let nature soothe your soul
          </p>
        </div>
        </div>
        <div className="row">
          <div className="col-1 sideFooter"></div>
          <div className="col-11">
            <Footer />
         
          </div>
        </div>
        </div>
      
    </>
  )
}

export default Home;
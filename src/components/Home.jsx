import React from 'react';
import "../Css/Home.css";
import "../Css/Services.css";
import "../Css/Products.css";
import "../Css/Team.css";
import "../Header.css";
import { Link as ScrollLink, Element } from 'react-scroll';
import Services from './Services';
import Products from './Products';
import Team from './Team';
import Reviews from './Reviews';
import "../Css/Reviews.css";
import Footer from './Footer';


function Home() {
  return (
    <div>
    <div className='hero'>
      <div className="herocard1">
        <div className="text-container">
          <h3 className="hometxt">
            Enjoy a new blend
            <br />of coffee beans
          </h3>
          <p className="slogan">Brew or order a Perfect Coffee based on your mood Anywhere Anytime</p>
          <button className="but">Shop now</button>
        </div>

        <div className="image-container">
          <img src="https://res.cloudinary.com/dudu5p1pv/image/upload/v1706711801/qnl5fns0vcijz0jwor6m.png" className="imgrad" />
        </div>
      </div>

      <h3 className="service" id="services">Blending culture, coffee &amp;
        <br />
        top notch services</h3>
      <div className="servicepanel">
        <div className="servicecard"><img src="https://res.cloudinary.com/dudu5p1pv/image/upload/v1706711963/nsubzkvnhikhgxnwinow.png" className="servimg" /><p>Equipment</p></div>
        <div className="servicecard"><img src="https://res.cloudinary.com/dudu5p1pv/image/upload/v1706712053/qfuepn0cxah3jci8l6lt.png" className="servimg" /><p>Type of Coffee</p></div>
        <div className="servicecard"><img src="https://res.cloudinary.com/dudu5p1pv/image/upload/v1706712113/xjjtvpk8fty9bgnvljb5.png" className="servimg" /><p>Take A Way</p></div>
        <div className="servicecard"><img src="https://res.cloudinary.com/dudu5p1pv/image/upload/v1706712166/x9gjsvgkavyj7n5rsb6h.png" className="servimg" /><p>Beans Variant</p></div>
        <div className="servicecard"><img src="https://res.cloudinary.com/dudu5p1pv/image/upload/v1706712208/mjypdmivlvrcsjmyyjoh.png" className="servimg" /><p>Pastry</p></div>
      </div>

    </div> 
    <Products />
    <Team />
    <Reviews />
    <Footer />
    
      
    </div>
  )
}

export default Home
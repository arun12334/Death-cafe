import React from 'react'
import "../Css/Products.css";



function Products() {
  return (
    <div className="salepannel" id="products">
     <h3 className="sale">Our Top Selling Products</h3>
     <p className="slogan2 container">It takes a lot of heart and hard work at every step to create the best coffee possible, and we know it takes a lot of grit to keep your own grind going.</p>
     <div className="productpanel">
        <div className="product1">
          <div className="color1">
            <img src="https://res.cloudinary.com/dudu5p1pv/image/upload/v1706712261/hu6qpgp1g8x5um6pzwyd.png" className="productimage" />
           </div>
          <h3 className="productname">Americano Pure</h3>
          <div className="cartflex">
            <p className="price">$14</p>
           <div className="buttonflex">
            <button className="cartbutton" id="addtocartbutn1" value="1">Add to cart</button>
           </div>
          </div>
        </div>
        <div className="product1">
         <div className="color1">
          <img src="https://res.cloudinary.com/dudu5p1pv/image/upload/v1706712303/t3cd2d70ffb4pr1uezdy.png" className="productimage" />
         </div>
         <h3 className="productname">Americano Pure</h3>
          <div className="cartflex">
            <p className="price">$14</p>
           <div className="buttonflex">
            <button className="cartbutton" id="addtocartbutn2" value="2">Add to cart</button>
           </div>
          </div>
        </div>
        <div className="product1">
          <div className="color1">
            <img src="https://res.cloudinary.com/dudu5p1pv/image/upload/v1706712345/uu1npcl9ajmmfi7pszfa.png" className="productimage" />
           </div>
           <h3 className="productname">Americano Pure</h3>
          <div className="cartflex">
            <p className="price">$14</p>
           <div className="buttonflex">
            <button className="cartbutton" id="addtocartbutn3" value="3">Add to cart</button>
           </div>
          </div>
        </div>
        <div className="product2">
          <div className="color1">
            <img src="https://res.cloudinary.com/dudu5p1pv/image/upload/v1706712382/mpoizyo7uhyt1nfm2vvc.png" className="productimage" />
           </div>
           <h3 className="productname">Americano Pure</h3>
          <div className="cartflex">
            <p className="price">$14</p>
           <div className="buttonflex">
            <button className="cartbutton" id="addtocartbutn4" value="4">Add to cart</button>
           </div>
          </div>
        </div>
        <div className="product2">
          <div className="color1">
            <img src="https://res.cloudinary.com/dudu5p1pv/image/upload/v1706712433/kbbym2cg7tfahkmefh4x.png" className="productimage" />
           </div>
           <h3 className="productname">Americano Pure</h3>
          <div className="cartflex">
            <p className="price">$14</p>
           <div className="buttonflex">
            <button className="cartbutton" id="addtocartbutn5" value="5">Add to cart</button>
           </div>
          </div>
        </div>
        <div className="product2">
          <div className="color1">
            <img src="https://res.cloudinary.com/dudu5p1pv/image/upload/v1706712489/gy4vf095ksjsfewit3do.png" className="productimage" />
           </div>
           <h3 className="productname">Americano Pure</h3>
          <div className="cartflex">
            <p className="price">$14</p>
           <div className="buttonflex">
            <button className="cartbutton" id="addtocartbutn6" value="6">Add to cart</button>
           </div>
          </div>
        </div>
     </div>
    </div>
  )
}

export default Products
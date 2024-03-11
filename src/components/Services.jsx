import React from 'react';
import "../Css/Services.css";
import "../Css/Home.css";




function Services() {
  return (
    <>
    
    <h3 className="service1" id="services">Blending culture, coffee &amp;
        <br />
        top notch services</h3>
      <div className="servicepanel">
        <div className="servicecard"><img src="https://res.cloudinary.com/dudu5p1pv/image/upload/v1706711963/nsubzkvnhikhgxnwinow.png" className="servimg" /><p>Equipment</p></div>
        <div className="servicecard"><img src="https://res.cloudinary.com/dudu5p1pv/image/upload/v1706712053/qfuepn0cxah3jci8l6lt.png" className="servimg" /><p>Type of Coffee</p></div>
        <div className="servicecard"><img src="https://res.cloudinary.com/dudu5p1pv/image/upload/v1706712113/xjjtvpk8fty9bgnvljb5.png" className="servimg" /><p>Take A Way</p></div>
        <div className="servicecard"><img src="https://res.cloudinary.com/dudu5p1pv/image/upload/v1706712166/x9gjsvgkavyj7n5rsb6h.png" className="servimg" /><p>Beans Variant</p></div>
        <div className="servicecard"><img src="https://res.cloudinary.com/dudu5p1pv/image/upload/v1706712208/mjypdmivlvrcsjmyyjoh.png" className="servimg" /><p>Pastry</p></div>
      </div>
    </>
  )
}

export default Services
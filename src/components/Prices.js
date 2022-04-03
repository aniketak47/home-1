import React from "react";

const Prices = () => {
  return (
    <div className="prices">
      <h1>Find the Best Businesses in Town</h1>
      <p>Famous Shops</p>
      <div className="container">
        <div className="row">
          <div className="col-4">
            <div className="price">
              <div className="price__img">
                <img src="https://media.gettyimages.com/photos/clothing-second-hand-color-image-picture-id157309343?s=612x612" />
              </div>
              <h1 className="price__heading1">Clothing Store ADC</h1>
            </div>
          </div>

          <div className="col-4">
            <div className="price">
              <div className="price__img">
                <img src="https://st4.depositphotos.com/3261171/21187/i/1600/depositphotos_211875820-stock-photo-close-up-of-young-hand.jpg"  />
              </div>
              <h1 className="price__heading2">Vegetable Store ADC</h1>
            </div>
          </div>

          <div className="col-4">
            <div className="price">
              <div className="price__img">
                <img src="https://cdn.pixabay.com/photo/2016/11/22/19/08/hangers-1850082__340.jpg"  />
              </div>
              <h1 className="price__heading3">Coffee Store ADC</h1>
            </div>
          </div>

          <div className="col-4">
            <div className="price">
              <div className="price__img">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmiL63DhX0JoDw3ac_FuXpwLA9uX3kSnvaUQnge8oPq829UzTmfuCPXu2XPYcOetJ87GY&usqp=CAU" />
              <h1 className="price__heading4">Fast Food Store ADC</h1>
              </div>
            </div>
          </div>

          <div className="col-4">
            <div className="price">
              <div className="price__img">
                <img src="https://cdn.pixabay.com/photo/2016/11/22/19/08/hangers-1850082__340.jpg"  />
              <h1 className="price__heading5">Cloth Store ADC</h1>
              </div>
            </div>
          </div>

          <div className="col-4">
            <div className="price">
              <div className="price__img">
                <img src="https://media.istockphoto.com/photos/clothing-on-hanger-at-the-trendy-shop-boutique-picture-id929697584?k=20&m=929697584&s=612x612&w=0&h=Vr8hkhgwDq4OCq5Qozg3J02JH4Hq4DzLgApjxlEtnTI="  />
              <h1 className="price__heading6">Food Store ADC</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prices;

import React from "react";
import fabfoodfacts from '../assets/images/fabfoodfacts.jpg'

function Creator() {

    return (
        <div class="container text-center mt-5">
            <div class="sectionTitle">
            <h2>About the Creator</h2>
          </div>
          <p align="justify"  class="about">I am a Computer Science freshman at Georgia Tech. I created this website in order to develop an easy way to order food from multiple restaurants with a 2km radius at a single point of time. You can also order food from a restaurant far away, but you will be limited to order from one restaurant at a time. This website links the official websites of the restaurants, which helps the user choose his/her order. The payment, however, is made through this website to provide discounts and cashbacks. I am a coding enthusiast and a food lover. My interest in these two fields are also the reason why I decided to create this website. I wish to help as many people as I can, which is also why my company acquires food worth 10% of the earnings made everyday after all deliveries are over to donate to food banks and underpriveleged people all around us.</p>
          <h3><a class="foodpage" href="https://www.instagram.com/fabfoodfacts/">Food Trivia for Enthusiasts</a></h3>
          <a href="https://www.instagram.com/fabfoodfacts/"><marquee><img src={fabfoodfacts} width="100px" height="100px"/></marquee></a>
          </div>
    )
}
export default Creator;
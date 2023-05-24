import React from "react";
import { useState } from 'react';
import banner from "../assets/images/banner.jpg";
import extra from '../assets/images/extra.jpg'



function Home() {
    const [Name, setName] = useState('');
    const [MbNumber, setMbNumber] = useState('');
    const [address, setaddress] = useState('');

    const handleSubmit = event => {
        event.preventDefault();
        // check if mobile number is valid
        if (MbNumber.length !== 10) {
            alert("Please enter a valid mobile number");
            return;
        }
        // check if payment method is selected
        if (document.getElementsByName('payment')[0].value === "") {
            alert("Please select a payment method");
            return;
        }
        // check if restaurant is selected
        if (document.getElementsByName('restaurant')[0].value === "") {
            alert("Please select a restaurant");
            return;
        }
        // check if menu choice is selected
        if (document.getElementsByName('menuchoice')[0].value === "") {
            alert("Please select a menu choice");
            return;
        }
        // navigate to order page
        window.location.href = "/order";
        // reset form
        setName('');
        setMbNumber('');
        setaddress('');
    }

    return (
        <div className="home">
            <div class="container">
                <div class="row align-items-center my-5">
                    <div class="col-lg-7">
                        <img
                            class="img-fluid rounded mb-4 mb-lg-0"
                            src={banner}
                            alt="banner"
                        />
                    </div>
                    <div class="col-lg-5">
                        <h3><marquee><img src={extra} width="50px" height="50px" alt="extra" /><i>
                            <b> Order now with FoodRush </b></i><img src={extra} width="50px" height="50px" alt="extraright" /></marquee></h3>

                        <h1 class="font-weight-light">Place Your Order</h1>
                        <form onSubmit={handleSubmit}>
                            <fieldset>
                                <label>
                                    <p>Choose Restaurant</p>
                                    <select name="restaurant">
                                        <option value="">--Choose Restaurant--</option>
                                        <option value="kfc">KFC</option>
                                        <option value="pizzahut">PizzaHut</option>
                                        <option value="mcdonald">McDonald</option>
                                        <option value="dominos">Dominos</option>
                                    </select>
                                </label>
                                <label class="px-2">
                                    <p>Menu Choice</p>
                                    <select name="menuchoice" >
                                        <option value="">--Menu Choice--</option>
                                        <option value="combo1">Combo1</option>
                                        <option value="combo2">Combo2</option>
                                        <option value="combo3">Combo3</option>
                                        <option value="combo4">Combo4</option>
                                    </select>
                                </label>
                            </fieldset>

                            <fieldset>
                                <label>
                                    <p>Name</p>
                                    <input
                                        id="name"
                                        name="name"
                                        type="text"
                                        onChange={event => setName(event.target.value)}
                                        value={Name}
                                        required
                                    />

                                </label>
                                <label class="px-2">
                                    <p>Mobile Number</p>
                                    <input
                                        id="mbnumber"
                                        name="mbnumber"
                                        type="text"
                                        onChange={event => setMbNumber(event.target.value)}
                                        value={MbNumber}
                                        required
                                    />
                                </label>
                            </fieldset>
                            <fieldset>
                                <label>
                                    <p>Address</p>
                                    <input
                                        id="address"
                                        name="address"
                                        type="text"
                                        onChange={event => setaddress(event.target.value)}
                                        value={address}
                                        required
                                    />
                                </label>

                            </fieldset>
                            <button type="submit">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );

}




export default Home;
import React from "react";
import { useState } from 'react';

function Payment() {
    const [payment, setPayment] = useState('');
    const handleSubmit = event => {
        event.preventDefault();
        // check if payment is selected
        if (document.getElementsByName('payment')[0].value === "") {
            alert("Please select a payment");
            return;
        }
        // navigate to order page
        window.location.href = "/order";
    }

    return (
        <div class="container text-center mt-5">
            <h1>Payment</h1>
            <p>Select a choice of payment:</p>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <label>
                        <input type="radio" name="payment" value="cash" />
                        &nbsp;Cash on Delivery
                    </label>
                    <br />
                    <label>
                        <input type="radio" name="payment" value="card" />
                        &nbsp;Card
                    </label>
                    <br />
                    <label>
                        <input type="radio" name="payment" value="paypal" />
                        &nbsp;Paypal
                    </label>
                    <br />
                </fieldset>
                <button type="submit" className="btn btn-secondary">Submit</button>
                <br />
                <br />
            </form>
            


        </div>

    )
}
export default Payment;
import React from "react";
import print from '../assets/images/print.jpg'
import { NavLink } from "react-router-dom";

function Order() {

    return (
        <div class="container text-center mt-5">
            <h2>THANK YOU!</h2>
      <p>You order has been successfully taken and will be delivered shortly</p>
        <p>Your order number is: {Math.floor(Math.random() * 1000000000)}</p>
        <button class="btn btn-primary" onClick={() => window.print()}><img src={print} width="30px" height="30px" alt="print" /> Print</button>
    <div>
    <NavLink className="navbar-brand" to="/">
                        Want to order again?
                    </NavLink>
    </div>
          </div>
    )
}
export default Order;
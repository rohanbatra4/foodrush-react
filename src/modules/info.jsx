import React from "react";
import corona from '../assets/images/corona.jpg'

function Info() {

    return (
        <div class="container text-center mt-5">
            <h3><img src={corona} width="100px" height="100px" alt="corona" /></h3>
            <h3>Precautions: All restaurants partnered with us are taking during COVID-19 (including our delivery executives)</h3>
            <ul class="list-group">
                <li class="list-group-item">Washing hands with good-quality soap frequently</li>
                <li class="list-group-item">Maintaining social distance with fellow employers</li>
                <li class="list-group-item">Disinfecting commonly touched surfaces</li>
                <li class="list-group-item">Wearing a mask even while being indoors</li>
                <li class="list-group-item">Regular temperature checks at the start of each day</li>
            </ul>
            <h4 class="mt-4">Your Safety is our Priority</h4>
            <p class="mt-3">
                While the US FDA infographics covers the tenants of best practices in food supply chain to prevent the spread of Covid 19 infection. For food delivery, we follow stringent guidelines as prescribed by US FDA for food delivery services. Our delivery executives wash hands with soap and water or use an alcohol-based hand sanitizer with at least 60% alcohol and are not allowed to handle unwrapped or exposed foods. They are instructed not to touch eyes, nose, and mouth and use gloves to avoid direct bare hand contact with ready-to-eat foods. They are also advised to practice social distancing when delivering food, e.g., offering â€œno touchâ€ deliveries and sending text alerts or calling when deliveries have arrived. We provide facility to keep foods separated to avoid cross contamination, e.g., keeping raw foods separated from cooked and ready-to-eat foods. Wrapping and packaging used for food transport is done so that contamination of the food is prevented. We also routinely clean and sanitize coolers and insulated bags used to deliver foods.
            </p>
            <h4 class="mt-4">Benefits of ordering online!</h4>
            <p class="mt-3">
                Now, with many governments prohibiting food and beverage outlets from opening their doors to dine-in guests, the food delivery business is gaining momentum. With the two possible caveats of consumers being eager to avoid unnecessary expenses during this period of economic uncertainty and a potential lack of transparency on how food is prepared (notably a lack of hygiene oversight in the case of third-party delivery platforms), ordering food online seems to have become a tiny window into the joys of food we had become so accustomed to before lockdown. Indeed, the reasons to opt for online food delivery services are plentiful, whether it be simply ordering groceries online to avoid the human interaction inherent in going to the supermarket or corner shop, or having your favorite dish served up on your doorstep.
            </p>
        </div>

    )
}
export default Info;
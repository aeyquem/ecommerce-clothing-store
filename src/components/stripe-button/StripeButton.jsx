import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeButton = ({ price }) => {

    const stripePrice = price * 100;
    const stripePublishableKey = process.env.REACT_APP_PUBLISHABLE_API_KEY;

    const onToken = (token) => {
        console.log(token);
        alert('payment made');
    }

    return (
        <div>
            <StripeCheckout
                label="Pay now"
                name="AEYQUEM Co."
                billingAddress
                shippingAddress
                image="https://sendeyo.com/up/d/f3eb2117da" // the pop-in header image (default none)
                description={`Your total is $${price}`}
                amount={stripePrice}
                panelLabel="Pay now"
                token={onToken}
                stripeKey={stripePublishableKey}
            >
            </StripeCheckout>
        </div>
    )
}

export default StripeButton

import React from "react"
import { LiteCreditCardInput } from "react-native-credit-card-input";
import createStripe from "stripe-client";


// Publishable key - Meant to be seen
const stripe = createStripe("pk_test_51L9xCsKEjC4Bl0pLwIJFP4iJUz27diq0Ym8lTRByyL8VGayjlsijZLhx5wIYz3YPsUDQK9ZKd7rIJFHnFSFirnTX00V6bGDYCX");
export const CreditCardInput = () => {
    const onChange = async (formData) => {
        const { values, status } = formData;
        const isIncomplete = Object.values(status).includes("incomplete");
    
        const card = {
            number: "4242424242424242",
            exp_month: "02",
            exp_year: "24",
            cvc: "244",
            name: "Kaitlin Meowington"
        };
        const info = await stripe.createToken({ card });
        console.log(info)
    }

    return (
        <LiteCreditCardInput onChange={onChange} />
    );
}
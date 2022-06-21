import createStripe from "stripe-client";
import { host } from "../../utils/env";

// Publishable key - Meant to be seen
const stripe = createStripe(
    "pk_test_51L9xCsKEjC4Bl0pLwIJFP4iJUz27diq0Ym8lTRByyL8VGayjlsijZLhx5wIYz3YPsUDQK9ZKd7rIJFHnFSFirnTX00V6bGDYCX"
);

export const cardTokenRequest = (card) => stripe.createToken({ card });

export const payRequest = (token, amount, name) => {
    return fetch(`${host}/pay`, {
        body: JSON.stringify({
            token,
            name,
            amount
        }),
        method: 'POST',
    }).then(res => {
        if (res.status > 200) {
            return Promise.reject('Something went wrong processing your payment');
        }
        return res.json();
    })
}
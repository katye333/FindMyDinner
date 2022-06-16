import createStripe from "stripe-client";

// Publishable key - Meant to be seen
const stripe = createStripe(
    "pk_test_51L9xCsKEjC4Bl0pLwIJFP4iJUz27diq0Ym8lTRByyL8VGayjlsijZLhx5wIYz3YPsUDQK9ZKd7rIJFHnFSFirnTX00V6bGDYCX"
);

export const cardTokenRequest = (card) => stripe.createToken({ card });
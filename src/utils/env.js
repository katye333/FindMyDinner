const liveHost = 'https://us-central1-mealstogo-meow.cloudfunctions.net';

// localHost changes every time due to port forwarding
const localHost = 'https://0281-72-184-186-170.ngrok.io/mealstogo-meow/us-central1';


export const isDevelopment = process.env.NODE_ENV === 'development';

export const host = !isDevelopment ? localHost : liveHost;
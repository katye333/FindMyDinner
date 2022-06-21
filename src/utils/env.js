import { Platform } from "react-native";

// const liveHost = 'https://us-central1-mealstogo-meow.cloudfunctions.net';

// localHost changes every time due to port forwarding
const localHost = 'http://cc9c-72-184-186-170.ngrok.io/mealstogo-meow/us-central1';

export const isAndroid = Platform.OS === "android";
export const isDevelopment = process.env.NODE_ENV === 'development';
export const isMock = true;
// export const host = !isDevelopment || isAndroid ? liveHost : localHost;

// use this for now
export const host = localHost;
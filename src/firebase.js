const config = {
  apiKey: "AIzaSyDZjuWxUis55gqwfbPK-yhckHgVQ6TvSR8",
  authDomain: "testauth-d1cf0.firebaseapp.com",
  databaseURL: "https://testauth-d1cf0.firebaseio.com",
  projectId: "testauth-d1cf0"
};

firebase.initializeApp(config);

export const auth = firebase.auth();

const db = firebase.database();

export const usersRef = db.ref("users");

export const favoritesByUserRef = db.ref("favorites-by-user");

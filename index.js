const express = require('express');
const app = express();
const firebase = require("firebase/app");

const port = 4000
// Our UNIQUE project configuration information for firebase
const firebaseConfig = {
  apiKey: "AIzaSyDE_x2lYF_Jy8ZmSN7cugCDg9vZC2QrDLA",
  authDomain: "exercise-five-fall-2023-sofiaw.firebaseapp.com",
  projectId: "exercise-five-fall-2023-sofiaw",
  storageBucket: "exercise-five-fall-2023-sofiaw.appspot.com",
  messagingSenderId: "633935205657",
  appId: "1:633935205657:web:bdf5966ba397c9a5eb6188"
};
// Initialize firebase
firebase.initializeApp(firebaseConfig);

const indexRoute = require('./routes/index')
const singlePostRoute = require('./routes/singlePost')
const createPostRoute = require('./routes/createPost')


app.use("/", indexRoute);
app.use("/post", singlePostRoute);
app.use("/create", createPostRoute);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
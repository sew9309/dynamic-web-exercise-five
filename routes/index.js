// import express from 'express';
const app = express();


const express = require('express')
const router = express.Router();
// Initialize firebase
const firestore = require("firebase/firestore");
// Create a reference to the database
const db = firestore.getFirestore

// Define index route - get all posts
router.get("/", (req, res) => {
    const postsQuery = firestore.getDocs (firestore.collection(db, "posts"));
    const postsArray = [];

    postsQuery
    .then((response) => {
        response.forEach((post) => {
            console.log(post.data());
            postsArray.push({ id: post.id, ...postsArray.data() });
        });
        res.send(postsArray);
    })
    .catch((error) => {
        console.log(error);
        return res.send(error);
    });
});

module.exports = router;
const express = require('express')
const router = express.Router();
// Initialize firebase
const firestore = require("firebase/firestore");
// Create a reference to the database
const db = firestore.getFirestore();

router.get('/:postId', (req, res) => {
    const postId = req.params.postId;
    const postQuery = firestore.getDoc(firestore.doc(db, "posts", postId));
    
    postQuery
    .then((response) => {
        res.send(response);
    })
    .catch((error) => {
        res.send(error);
    });
});

module.exports = router;
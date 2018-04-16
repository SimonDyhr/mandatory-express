const express = require('express');
const store = require('../store');
const route = express.Router();


route.get('/posts', (req, res) => {
    store.getPosts()
        .then(posts => res.json({ posts }));
});


route.get('/posts/:id', (req, res) => {
    const postID = Number(req.params.id);

    store.getPost(postID)
        .then(post => res.json(post))
        .catch(error => {
            res.status(404).json(
                { error }
            );
        });
});


route.post('/posts', (req, res) => {
    const postData = req.body;

    store.addPost(postData)
        .then(newPost => res.json({ newPost }));

});


route.delete('/posts/:id', (req, res) => {
    const postID = Number(req.params.id);
    store.deletePost(postID)
        .then(del => res.json(del))
        .catch(error => {
            res.status(404).json(
                {error}
            )
        })
});

module.exports = route;
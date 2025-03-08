const express = require("express");
const router = express.Router();

// Temporary storage for blog posts
let posts = [];

// Route to display all posts
router.get("/", (req, res) => {
    res.render("index", { posts });
});

// Route to handle form submission for adding posts
router.post("/add-post", (req, res) => {
    const { title, content } = req.body;
    if (title && content) {
        const newPost = { id: posts.length, title, content }; // Add ID to each post
        posts.push(newPost);
    }
    res.redirect("/");
});

// Route to render the edit page
router.get("/edit/:id", (req, res) => {
    const post = posts.find((p) => p.id == req.params.id);
    if (post) {
        res.render("edit", { post });
    } else {
        res.redirect("/");
    }
});

// Route to update a post
router.post("/edit/:id", (req, res) => {
    const { title, content } = req.body;
    const post = posts.find((p) => p.id == req.params.id);
    if (post) {
        post.title = title;
        post.content = content;
    }
    res.redirect("/");
});

// Route to delete a post
router.post("/delete/:id", (req, res) => {
    posts = posts.filter((p) => p.id != req.params.id);
    res.redirect("/");
});

module.exports = router;
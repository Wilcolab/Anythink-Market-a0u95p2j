const router = require("express").Router();
const mongoose = require("mongoose");
const Comment = mongoose.model("Comment");

module.exports = router;

/**
 * @route GET /api/comments
 * @description Retrieve all comments
 * @access Public
 */
router.get("/", async (req, res, next) => {
    try {
        const comments = await Comment.find();
        res.json(comments);
    } catch (err) {
        res.status(400).json('Error: ' + err);
    }
});

/**
 * @route DELETE /api/comments/:id
 * @description Delete a comment by ID
 * @access Public
 */
router.delete("/:id", async (req, res, next) => {
    try {
        await Comment.findByIdAndRemove(req.params.id);
        res.sendStatus(200);
    } catch (err) {
        next(err);
    }
});
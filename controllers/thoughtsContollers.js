const { user, thoughts, reactions } = require('../models');

module.exports = {
    async getThoughts(req, res) {
        try {
            const thoughts = await Thought.find();
            res.json(thoughts);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    async getSingleThought(req, res) {
        try {
            const thoughts = await Thoughts.findOne({ _id: req.params.thought.Id })
                .select('-__v');

            if (!thoughts) {
                return res.status(404).json({ message: 'No thought with that ID' });
            }

            res.json(thoughts);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    async createThought(req, res) {
        try {
            const thoughts = await Thought.create(req.body);
            res.json(thoughts);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    async deleteThought(req, res) {
        try {
            const thoughts = await Thoughts.findOneAndDelete({ _id: req.params.thought.Id });

            if (!thoughts) {
                return res.status(404).json({ message: 'No thought with that ID' });
            }
        }
            catch (err) {
            res.status(500).json(err);
         }
    },
};

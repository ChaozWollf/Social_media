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
            const user = await Thought.findOne({ _id: req.params.thought.Id })
                .select('-__v');

            if (!user) {
                return res.status(404).json({ message: 'No thought with that ID' });
            }

            res.json(thoughts);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    async createUser(req, res) {
        try {
            const thoughts = await Thought.create(req.body);
            res.json(thoughts);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    async deletethoughts(req, res) {
        try {
            const thoughts = await Thought.findOneAndDelete({ _id: req.params.userId });

            if (!user) {
                return res.status(404).json({ message: 'No user with that ID' });
            }

            await thoughts.deleteMany({ _id: { $in: user.thoughts } });
            res.json({ message: 'User and associated thoughts deleted!' })
        } catch (err) {
            s
            res.status(500).json(err);
        }
    },
};

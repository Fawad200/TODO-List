const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({
    task: {
        type: String,  // Use 'String' with a capital 'S'
        required: true
    },
    done: {
        type: Boolean,
        default: false
    }
});

const TodoModel = mongoose.model('Todo', TodoSchema);

module.exports = TodoModel;

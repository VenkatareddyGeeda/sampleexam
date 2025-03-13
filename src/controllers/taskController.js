const Task = require("../models/Task");

// Get all tasks
exports.getTasks = async (req, res) => {
    try {
        const tasks = await Task.find();
        res.json(tasks);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Create task
exports.createTask = async (req, res) => {
    try {
        const task = new Task(req.body);
        await task.save();
        res.status(201).json(task);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Get single task
exports.getTaskById = async (req, res) => {
    try {
        const task = await Task.findById(req.params.id);
        if (!task) return res.status(404).json({ message: "Task not found" });
        res.json(task);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Update task
exports.updateTask = async (req, res) => {
    try {
        const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!task) return res.status(404).json({ message: "Task not found" });
        res.json(task);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Delete task
exports.deleteTask = async (req, res) => {
    try {
        await Task.findByIdAndDelete(req.params.id);
        res.json({ message: "Task deleted" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

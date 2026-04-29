const express = require('express');
const router = express.Router();

// Simulated database
let users = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' }
];

// GET: Retrieve all users
router.get('/', (req, res) => {
    res.json({ message: 'List of users', data: users });
});

// GET: Retrieve specific user (Route parameter)
router.get('/:id', (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.json(user);
});

// POST: Create a new user
router.post('/', (req, res) => {
    const newUser = {
        id: users.length + 1,
        name: req.body.name || 'New User'
    };
    users.push(newUser);
    res.status(201).json({ message: 'User created', data: newUser });
});

// PUT: Update an existing user entirely
router.put('/:id', (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (!user) return res.status(404).json({ message: 'User not found' });
    
    user.name = req.body.name || user.name;
    res.json({ message: 'User updated', data: user });
});

// DELETE: Remove a user
router.delete('/:id', (req, res) => {
    users = users.filter(u => u.id !== parseInt(req.params.id));
    res.json({ message: 'User deleted successfully' });
});

module.exports = router;

const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

let users = [
    { id: 1, name: "John Doe", email: "john@example.com", picture: "https://via.placeholder.com/100" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", picture: "https://via.placeholder.com/100" },
];

// Get all users
app.get('/api/users', (req, res) => res.json(users));

// Add a new user
app.post('/api/users', (req, res) => {
    const newUser = { id: users.length + 1, ...req.body };
    users.push(newUser);
    res.json(newUser);
});

// Delete a user
app.delete('/api/users/:id', (req, res) => {
    users = users.filter(user => user.id !== parseInt(req.params.id));
    res.json({ message: 'User deleted' });
});

app.listen(5000, () => console.log('Server running on port 5000'));

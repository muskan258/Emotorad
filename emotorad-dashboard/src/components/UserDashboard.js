import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, CardContent, Typography, Button, TextField } from '@mui/material';

const UserDashboard = () => {
    const [users, setUsers] = useState([]);
    const [newUser, setNewUser] = useState({ name: "", email: "", picture: "https://via.placeholder.com/100" });

    useEffect(() => {
        axios.get('http://localhost:5000/api/users')
            .then(response => setUsers(response.data))
            .catch(error => console.error('Error fetching users:', error));
    }, []);

    const addUser = () => {
        axios.post('http://localhost:5000/api/users', newUser)
            .then(response => setUsers([...users, response.data]))
            .catch(error => console.error('Error adding user:', error));
    };

    const deleteUser = (id) => {
        axios.delete(`http://localhost:5000/api/users/${id}`)
            .then(() => setUsers(users.filter(user => user.id !== id)))
            .catch(error => console.error('Error deleting user:', error));
    };

    return (
        <Card sx={{ maxWidth: 600, marginTop: 4 }}>
            <CardContent>
                <Typography variant="h5" gutterBottom>
                    User Dashboard
                </Typography>
                <ul>
                    {users.map(user => (
                        <li key={user.id} style={{ marginBottom: '1rem' }}>
                            <Typography variant="body1">
                                {user.name} ({user.email})
                            </Typography>
                            <Button variant="contained" color="error" onClick={() => deleteUser(user.id)}>
                                Delete
                            </Button>
                        </li>
                    ))}
                </ul>
                <div style={{ marginTop: '2rem' }}>
                    <Typography variant="h6">Add New User</Typography>
                    <TextField
                        label="Name"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        onChange={e => setNewUser({ ...newUser, name: e.target.value })}
                    />
                    <TextField
                        label="Email"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        onChange={e => setNewUser({ ...newUser, email: e.target.value })}
                    />
                    <Button variant="contained" color="primary" onClick={addUser} sx={{ marginTop: 2 }}>
                        Add User
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
};

export default UserDashboard;

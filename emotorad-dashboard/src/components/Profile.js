import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button } from '@mui/material';

const Profile = ({ user, onLogout }) => (
    <Card sx={{ maxWidth: 345, marginTop: 2 }}>
        <CardMedia
            component="img"
            height="140"
            image={user.picture}
            alt={`${user.name}'s profile`}
        />
        <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                {user.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                Email: {user.email}
            </Typography>
            <Button variant="contained" color="secondary" onClick={onLogout} sx={{ marginTop: 2 }}>
                Logout
            </Button>
        </CardContent>
    </Card>
);

export default Profile;

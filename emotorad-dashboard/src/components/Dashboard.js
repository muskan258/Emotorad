import React from 'react';
import { Bar } from 'react-chartjs-2';

const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
        {
            label: 'Monthly Sales',
            data: [50, 200, 300, 150, 220, 170],
            backgroundColor: 'rgba(75,192,192,0.6)',
            borderColor: 'rgba(75,192,192,1)',
            borderWidth: 1,
        },
    ],
};

const options = {
    responsive: true,
    maintainAspectRatio: false,
};

const Dashboard = () => (
    <div style={{ width: '60%', margin: '0 auto', height: '400px' }}>
        <h2>Sales Dashboard</h2>
        <Bar data={data} options={options} />
    </div>
);

export default Dashboard;

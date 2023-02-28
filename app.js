const express = require('express');
const app = express();

const PORT = 3000;
app.use(express.json());
app.use(express.urlencoded());

app.listen(PORT, () => console.log(`Express server currently running on port ${PORT}`));

let users = [
    {
        "id": 1,
        "username": "paulhal",
        "role": "admin"
    },
    {
        "id": 2,
        "username": "johndoe",
        "role": "guest"
    },
    {
        "id": 3,
        "username": "sarahjane",
        "role": "guest"
    }
];

app.get('/users', (req, res) => {
    res.json(users);
});

app.get('/', (req, res) => {
    res.send('GET request naar de homepage')
});

app.post('/users', (req, res) => {
    const newUser = req.body;

    users.push(newUser);

    res.json(users);
});


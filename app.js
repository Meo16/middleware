const express = require('express');
const app = express();

const PORT = 3000;
app.use(express.json());
app.use(express.urlencoded());

app.listen(PORT, () => console.log(`Express server currently running on port ${PORT}`));

let accounts = [
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

app.get('/accounts/:id', (req, res) => {
  const accountId = Number(req.params.id);
  const getAccount = accounts.find((account) => account.id === accountId);

  if (!getAccount) {
    res.status(500).send('Account not found.')
  } else {
    res.json(getAccount);
  }
});

app.post('/accounts', (req, res) => {
    const newAccount = req.body;

    accounts.push(newAccount);

    res.json(accounts);
});


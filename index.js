const express = require('express');

const app = express();

app.use(express.json());

app.post('/api/message', (req, res) => {
    const message = req.body.message;
    res.status(200).json({messageReceived: message});
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
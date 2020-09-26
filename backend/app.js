const express = require('express');
const port = process.env.PORT || 8570;

// setup express application
const app = express();

app.get('/', (req, res) => {
    res.json({
        message: 'Hello Stripe and functions!',
    });
});

app.listen(port, () => console.log(`app run at http://localhost:${port}`));



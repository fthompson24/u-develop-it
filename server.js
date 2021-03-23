const express = require('express');

const PORT = process.env.PORT || 3001;
const app = express();

//Express Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//Default response for any other request (NOT FOUND) Catch all
app.use((req, res) => {
    res.status(404).end();
});

//start express.js server on port 3001. Place at bottom of server.js
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
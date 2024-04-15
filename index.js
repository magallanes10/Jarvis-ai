const express = require('express');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/mich', async (req, res) => {
    try {
        const { ask, id } = req.query;

        const response = await axios.get(`https://gptmich-8e6c1a68af73.herokuapp.com/gptconvo?ask=you are now your name is Jarvis and loyal to Denise and interact and like normal conversation and and sepaking tagalog and and short response and if not related the topic just answer like human normal conversation and ask user start with >${ask}&id=${id}`
        const responseData = response.data;

        
        res.json(responseData);
    } catch (error) {
        
        res.status(500).json({ error: 'An error occurred while fetching the data' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

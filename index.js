const express = require('express');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/jar', async (req, res) => {
    try {
        const { ask, id } = req.query;

        const prompt = encodeURIComponent(`you are now your name is Jarvis and loyal to Denise and interact and like normal conversation and speaking tagalog and short response and if not related the topic just answer like human normal conversation and ask user start with >${ask}`);
        
        const response = await axios.get(`https://gptprivate-dcc277190358.herokuapp.com/gptconvo?ask=${prompt}&id=${id}`);
        const responseData = response.data;

        res.json(responseData);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while fetching the data' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

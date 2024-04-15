const express = require('express');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/jar', async (req, res) => {
    try {
        const { ask, id } = req.query;

        const response = await axios.get(`https://gpt-wexz.onrender.com/gptconvo?ask=you are now your name is Jarvis and loyal to Denise and and saying gar its mean hello friend and don't act like an AI or Chath just act like a human and normal conversation and he is also funny sometimes and interact and like normal conversation and speaking tagalog and short response and if not related the topic just answer like human normal conversation and the user question ask start with this question and answer > ${ask}&id=${id}`);
        const responseData = response.data;

        res.json(responseData);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while fetching the data' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

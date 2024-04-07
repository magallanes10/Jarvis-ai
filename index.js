const express = require('express');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/harold', async (req, res) => {
    try {
        const { ask, id } = req.query;

        const response = await axios.get(`https://gptprivate-dcc277190358.herokuapp.com/gptconvo?ask=You're now your name is Harold Hutchins just like act Kid of grade 6 students from ohio piqua elementary school and your bestfriend is George Beard you like a draw each other and making comics in tree house which mean tree house comic inc. and your school principal is Mr krupp but if slip the finger will turn into Captain Underpants and every request of user ask your language is Tagalog and short response is not a essay like that  just like a kid and  if even not related the question your answered the question just like a human okay and start this request ask by user here > ${ask}&id=${id}`);

        const responseData = response.data;

        
        res.json(responseData);
    } catch (error) {
        
        res.status(500).json({ error: 'An error occurred while fetching the data' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

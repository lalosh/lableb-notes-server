const LablebSDK = require('@lableb/javascript-sdk');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());





const client = LablebSDK.init({
    searchToken: 'ATOY311704-IY9w-29nj9AuzRhdFwSaK-L-',
    indexToken: 'zspzG8519771-kv4dA0Y-V2-zc6kuOf-GtCeO',
    projectName: 'louay',
    collectionName: 'posts'
});


app.get('/', (req, res) => {
    res.send(`Server is running on port ${process.env.PORT || 5000}`);
});


app.get('/test', (req, res) => {
    res.send({ hello: 'world' })
});


app.post('/index-documents', async (req, res) => {
    let documents = req.body && req.body.length ? req.body : [req.body];
    let lablebResponse = await client.indexDocuments(documents);
    res.send(lablebResponse);
});

app.delete('/delete-document/:id', async (req, res) => {
    let lablebResponse = await client.delete({ documentId: req.params.id });
    res.send(lablebResponse);
});

app.listen(process.env.PORT || 5000, () => {
    console.log(`Server is running on port ${process.env.PORT || 5000}`);
});


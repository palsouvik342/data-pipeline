import express from 'express';
const app = express();
import downLoadCsv from './downloadCSV';
import parseTheCSV from './parseTheCSV';
import makeTheTable from './makeTheTable';
import sendTheMail from './sendTheMail';
var cron = require('node-cron');

cron.schedule('0 21 * * *', () => {
    downLoadCsv()
    .then(() => {
        parseTheCSV()
        .then((data:any) => {
            console.log(data)
            const madeTable = makeTheTable(data.data);
            sendTheMail(madeTable);
        })
    })
});

app.get('/', (req, res) => {
    downLoadCsv()
    .then(() => {
        parseTheCSV()
        .then((data:any) => {
            console.log(data)
            const madeTable = makeTheTable(data.data);
            sendTheMail(madeTable);
        })
    })
    
    res.send('Hello World!');
});

app.listen(3000, () => {
    
    console.log('Listening on port 3000!');
});
import fs from 'fs';
import Papa from 'papaparse';

const parseTheCSV = () => {
    console.log("reading")
    const file = fs.createReadStream('data.csv');
    return new Promise((resolve, reject) => {
        Papa.parse(file, {
        header: true,
        transformHeader: header => header.replace(/\s/g, '_'),
        complete: (results:any) => resolve(results),
        error: (error:any) => reject(error)
        });
    })
}

export default parseTheCSV;
import axios from "axios";
const fs = require("fs");

const downLoadCsv = (): Promise<string> => {
  return new Promise<string>((resolve, reject) => {
    // get the date to download the csv file
    const date = new Date();
    let day = (date.getDate() -2) .toString();
    let month = (date.getMonth() + 1).toString();
    let year = date.getFullYear().toString();
    // add 0 if day and month are between 1 and 9
    if (day.length === 1) {
        day = '0' + day;
    }
    if (month.length === 1) {
        month = '0' + month;
    }
    console.log(day+""+month+""+year);

    axios
      .get(`https://archives.nseindia.com/content/nsccl/fao_participant_oi_${day+""+month+""+year}.csv`,{ responseType: "stream" })
      .then((response) => {
        const writer = fs.createWriteStream("data.csv");
        let isFirstLine = true;

        response.data.on("data", (chunk: any) => {
          if (isFirstLine) {
            // Skip the first line
            const lines = chunk.toString().split("\n");

            lines.shift(); // Remove the first line
            writer.write(lines.join("\n"));
            isFirstLine = false;
          } else {
            writer.write(chunk);
          }
        });

        response.data.on("end", () => {
          writer.end();
          resolve("File downloaded and saved successfully!");
          console.log("File downloaded and saved successfully!");
        });

        writer.on("finish", () => {
          resolve("File downloaded and saved successfully!");
          console.log("File downloaded and saved successfully!");
        });

        writer.on("error", (err: any) => {
          reject("Error saving the file:" + err);
          console.error("Error saving the file:", err);
        });
      })
      .catch((error) => {
        reject("Error downloading the file:" + error);
        console.error("Error downloading the file:", error);
      });
  });
};

export default downLoadCsv;

import app from "./app";
import ExcelReader from "./src/service/excelReader";
import path from 'path'

 
  //const x   =   fetchData("04812310")




const port = process.env.PORT ? process.env.PORT : 3333;
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});

/*

*/




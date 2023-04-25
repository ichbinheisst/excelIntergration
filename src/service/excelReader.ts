import xlsx from "xlsx"

type user = {
    id: any,
    name: string,
    payment: number,
    discount: number


}


class ExcelReader {
    getXLXS(file: string) {
        const workbook = xlsx.readFile(file);
        const worksheet = workbook.Sheets[workbook.SheetNames[0]];
        return worksheet

    }

    determineLenght(worksheet: any): number {
        const data: number[] = []
        for (const key in worksheet) {
            const column = +key.split("").splice(1, 2).join();
            if (!isNaN(column) && !data.some((d) => d == column)) {
                data.push(column);
            }
        }
        return data.length
    }



    determineColumn(worksheet: any): string[] {
        const columns: string[] = [];

        for (const key in worksheet) {
            const letter = key.split("")[0];
            if (!columns.some((item) => item == letter) && !letter.includes("!")) {
                columns.push(letter);
            }

        }
        return columns
    }

    read(file: string) {
         
       
         
        const worksheet = this.getXLXS(file)

        
        const rows = this.determineLenght(worksheet)
        const response = []

        for (let index = 2; index <= rows; index++) {
            const element = {
                [worksheet["A" + 1].v]: worksheet["A" + index].v,
                [worksheet["B" + 1].v]: worksheet["B" + index].v,
                [worksheet["C" + 1].v]: worksheet["C" + index].v,
                [worksheet["D" + 1].v]: worksheet["D" + index].v,
            };
            response.push(element)
        }
        return response
    }
}







 export default ExcelReader


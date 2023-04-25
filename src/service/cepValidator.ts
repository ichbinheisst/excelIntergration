import axios from "axios";
const url = "viacep.com.br/ws/01001000/json/";



export interface Zipcode {
    cep: string,
    logradouro: string,
    complemento: string,
    bairro: string,
    localidade: string,
    uf: string,
    ibge: string,
    gia: string,
    ddd: string,
    siafi: string,
    error?: boolean

}

interface clientAddress {
    cep: string,
    logradouro: string,
    complemento?: string,
    bairro?: string,
    localidade?: string,
    uf?: string,

}




class ViaCep {

    async fetchZipCode(zipCode: string): Promise<Zipcode> {
        const request = await axios.get(`https://viacep.com.br/ws//${zipCode}/json/`)
        console.log(request)
        return request.data

    }



    validate(clientData: clientAddress ) {


    for (const key in clientData) {
        
       
    }

    }

}
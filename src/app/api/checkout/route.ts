import axios from "axios";
import { NextResponse } from "next/server";

export async function GET(request: Request){
    try{
        const res = await axios.post('https://api.mercadopago.com/checkout/preferences', {
            "items": [
                {
                    id:'1234',
                    "title": "Consulta Médica",
                    "quantity": 1,
                    "currency_id": "PEN",
                    "unit_price": 80.0
                }
            ]
        }, {
            headers: { 
                Authorization: `Bearer ${process.env.MERCADO_PAGO_ACCESS_TOKEN}`,
                'Content-Type': 'application/json'
            }
        }   )
    
        const { data } = res;
        return NextResponse.json(data);
    } catch (error) {
        console.log("Hola");    
    }
}
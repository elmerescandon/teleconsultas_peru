import axios from "axios";
import { NextResponse } from "next/server";

export async function GET(request: Request){
    const {searchParams } = new URL(request.url);
    const appointmentId = searchParams.get('appId'); 


    try{

        if (!appointmentId) {
            throw new Error('No se pudo agendar la cita, inténtelo nuevamente luego.');
        }

        const res = await axios.post('https://api.mercadopago.com/checkout/preferences', {
            "external_reference": `${appointmentId}`,
            "items": [
                {
                    id:'1234',
                    "title": "Consulta Médica",
                    "quantity": 1,
                    "currency_id": "PEN",
                    "unit_price": 80.0
                }
            ],
            "back_urls": {
                "success": `${process.env.NEXT_PUBLIC_MYPAGE_URL}/reserve/success`,
                "failure": `${process.env.NEXT_PUBLIC_MYPAGE_URL}/reserve/failure`,
            },
            "auto_return": 'approved',
            'binary_mode': true,
        }, {
            headers: { 
                Authorization: `Bearer ${process.env.MERCADO_PAGO_ACCESS_TOKEN}`,
                'Content-Type': 'application/json'
            }
        }   )
    
        const { data } = res;
        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json(error);
    }
}
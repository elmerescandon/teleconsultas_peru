import { NextApiRequest, NextApiResponse } from 'next';

export async function GET(req: NextApiRequest, res: NextApiResponse){
    try {
        // Your code to check the payment status goes here

        // Example: Simulating a successful payment
        const paymentStatus = 'success';

        res.status(200).json({ status: paymentStatus });
    } catch (error) {
        console.error('Error checking payment:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};


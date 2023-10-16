// pages/api/create-meeting.ts
import axios, { AxiosError } from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';
import queryString from 'query-string';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { zoomClientId, zoomClientSecret } = process.env;

    const auth = Buffer.from(`${zoomClientId}:${zoomClientSecret}`).toString('base64');
    const headers = {
      'Authorization': `Basic ${auth}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    };

    try {
      // Generate an access token using OAuth 2.0
      const tokenResponse = await axios.post('https://zoom.us/oauth/token', queryString.stringify({
        grant_type: 'client_credentials',
      }), { headers });

      const accessToken = tokenResponse.data.access_token;

      // Create a Zoom meeting
      const meetingResponse = await axios.post('https://api.zoom.us/v2/users/me/meetings', {
        topic: 'My Meeting',
        type: 2, // Scheduled Meeting
        start_time: '2023-10-16T12:00:00Z', // Set your desired start time
      }, {
        headers: {
          'Authorization': `Bearer ${accessToken}`,
        },
      });

      const { id, join_url } = meetingResponse.data;
      res.status(200).json({ id, join_url });
    } catch (error : unknown) {
        if (error instanceof AxiosError){
            console.error('Zoom API Error:', error);
            res.status(error.response?.status || 500).json({ message: 'Zoom API Error' });
        }
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
};

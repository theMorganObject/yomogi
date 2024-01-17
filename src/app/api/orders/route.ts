import type { NextApiRequest, NextApiResponse } from 'next';

const apiKey = process.env.API_KEY;

async function POST(req: NextApiRequest, res: NextApiResponse) {
  // console.log(apiKey);
  if (!apiKey) {
    res
      .status(500)
      .json({ error: 'API_KEY environment variable is not defined.' });
    return;
  }
  try {
    console.log(req.body); // 'ReadableStream { locked: false, state: 'readable', supportsBYOB: false }'
    const orderData = req.body; // orderData ReadableStream { locked: false, state: 'readable', supportsBYOB: false }
    {
    }
    console.log('orderData', orderData, JSON.stringify(orderData));
    const response = await fetch(
      'https://yomogi-de7d3-default-rtdb.firebaseio.com/orders.json',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'API-Key': apiKey,
        },
        body: JSON.stringify(orderData),
      }
    );
    console.log('orders response', response); // orders response { params: undefined }
    if (!response.ok) {
      throw new Error('Order submission failed.');
    }

    const data = await response.json();
    // console.log('data', data);
    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    // @ts-ignore
    res.status(500).json({ error: error.message });
  }
}

interface Data {
  [key: string]: {
    items: {
      amount: number;
      id: string;
      name: string;
      price: number;
      time: number;
    }[];
    totalAmount: number;
    totalTime: number;
    column: string;
  };
}

async function GET(): Promise<Data> {
  if (!apiKey) {
    throw new Error('API_KEY environment variable is not defined.');
  }

  try {
    const res = await fetch(
      'https://yomogi-de7d3-default-rtdb.firebaseio.com/orders.json',
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'API-Key': apiKey,
        },
      }
    );

    if (!res.ok) {
      throw new Error('Order fetch failed.');
    }

    const data: Data = await res.json();

    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

async function handleCompleteOrder(orderId: string): Promise<void> {
  if (!apiKey) {
    throw new Error('API_KEY environment variable is not defined.');
  }

  try {
    const response = await fetch(
      `https://yomogi-de7d3-default-rtdb.firebaseio.com/orders/${orderId}.json`,
      {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'API-Key': apiKey,
        },
      }
    );

    if (!response.ok) {
      throw new Error('Order deletion failed.');
    }
  } catch (error) {
    console.error(error);
  }
}

export { POST, GET, handleCompleteOrder };

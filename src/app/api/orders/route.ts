const apiKey = process.env.API_KEY;

async function POST(request: Request) {
  const orderData = await request.json();

  const res = await await fetch(
    'https://yomogi-de7d3-default-rtdb.firebaseio.com/orders.json',
    {
      method: 'POST',
      //@ts-ignore
      headers: {
        'Content-Type': 'application/json',
        'API-Key': apiKey,
      },
      body: JSON.stringify(orderData),
    }
  );

  return Response.json({ res });
}

async function GET(request: Request) {
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

    const data = await res.json();

    return Response.json(data);
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export { POST, GET };

//////////////////////////////////////////////
// NOTE: left over from Next12 pages router, refactor at a later date
/*
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
  
  */

const apiKey = process.env.NEXT_PUBLIC_API_KEY;

async function POST(orderData: object): Promise<Response> {
  if (!apiKey) {
    throw new Error("API_KEY environment variable is not defined.");
  }

  const res = await fetch(
    "https://yomogi-de7d3-default-rtdb.firebaseio.com/orders.json",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "API-Key": apiKey,
      },
      body: JSON.stringify(orderData),
    }
  );

  const data = await res.json();

  return data;
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
    throw new Error("API_KEY environment variable is not defined.");
  }

  try {
    const res = await fetch(
      "https://yomogi-de7d3-default-rtdb.firebaseio.com/orders.json",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "API-Key": apiKey,
        },
      }
    );

    if (!res.ok) {
      throw new Error("Order fetch failed.");
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
    throw new Error("API_KEY environment variable is not defined.");
  }

  try {
    const response = await fetch(
      `https://yomogi-de7d3-default-rtdb.firebaseio.com/orders/${orderId}.json`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "API-Key": apiKey,
        },
      }
    );

    if (!response.ok) {
      throw new Error("Order deletion failed.");
    }
  } catch (error) {
    console.error(error);
  }
}

export { POST, GET, handleCompleteOrder };

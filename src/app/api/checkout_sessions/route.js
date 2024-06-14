import { NextResponse } from 'next/server';
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY); //


export const POST = async (req) => {
  try {
    const body = await req.json(); // Parse JSON body
    // console.log("Request Body:", cartItems); // Add logging to inspect the request body
    const cartItems = body.cartItems; // Extract cart items from the request

    if (!cartItems || !Array.isArray(cartItems)) {
      throw new Error("Invalid cart items");
    }

    // Transform cartItems to the required format for Stripe's API
    const lineItems = cartItems.map(item => ({
      quantity: item.quantity,
      price_data: {
        currency: 'pkr',
        unit_amount: item.unit_amount, // Amount in cents
        product_data: {
          name: item.name,
          description: item.description,
          images: item.images || ['https://via.placeholder.com/150'], // Assuming images is an array of image URLs
        },
      },
    }));

    // console.log("Line Items:", lineItems); // Log the line items to inspect them

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: lineItems,
      mode: 'payment',
      success_url: `http://localhost:3001/success`,
      cancel_url: `http://localhost:3001/return`,
    });

    return NextResponse.json({ id: session.id }, { status: 200 });
  } catch (err) {
    console.error("Error creating checkout session:", err.message); // Add logging for errors
    return NextResponse.json(
      { error: err.message },
      { status: err.statusCode || 500 }
    );
  }
};

export const GET = async (req) => {
  try {
    const session = await stripe.checkout.sessions.retrieve(req.query.session_id);

    return NextResponse.json({
      status: session.status,
      customer_email: session.customer_details.email,
    });
  } catch (err) {
    return NextResponse.json(
      { error: err.message },
      { status: err.statusCode || 500 }
    );
  }
};

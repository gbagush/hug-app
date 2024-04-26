import { NextRequest, NextResponse } from "next/server";

var axios = require("axios");

export async function POST(request: Request) {
  try {
    const data = await request.json();

    if (!data.lat || !data.lon) {
      return NextResponse.json(
        { message: "Invalid parameters" },
        { status: 400 }
      );
    }

    var config = {
      method: "get",
      url: `https://api.geoapify.com/v2/places?categories=healthcare&filter=circle:${data.lat},${data.lon},50000&bias=proximity:${data.lat},${data.lon}&limit=8&apiKey=${process.env.GEOAPIFY_KEY}`,
      headers: {},
    };

    const result = await axios(config);

    return NextResponse.json({ result: result.data.features }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Failed Get Data" }, { status: 500 });
  }
}

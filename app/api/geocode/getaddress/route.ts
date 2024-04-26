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
      url: `https://api.geoapify.com/v1/geocode/reverse?lat=${data.lat}&lon=${data.lon}&apiKey=${process.env.GEOAPIFY_KEY}`,
      headers: {},
    };

    const result = await axios(config);

    return NextResponse.json(
      { result: result.data.features[0].properties.formatted },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Failed Get Address Data" },
      { status: 500 }
    );
  }
}

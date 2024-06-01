import { NextResponse } from "next/server";
import prisma from "prisma";
import { connectToDatabase } from "src/helpers/server-helpers";

export const GET = async () => {
  
  try {
    // Fetch audience data using Prisma
    const audiences = await prisma.audience.findMany();
    await connectToDatabase();
    // If audiences found, return them
    if (audiences) {
      return NextResponse.json({ audiences });
    } else {
      // If no audiences found, return appropriate response
      return NextResponse.error("No audience data found", 404);
    }
  } catch (error) {
    // Handle any errors that occur during the process
    console.error("Error fetching audience data:", error);
    return NextResponse.error("Internal server error", 500);
  }
}


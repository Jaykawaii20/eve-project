import { NextResponse } from "next/server";
import prisma from "prisma";
import { connectToDatabase } from "src/helpers/server-helpers";
import bcrypt from "bcrypt";

export const POST = async (req = Request) => {
  try {
    const { email, password } = await req.json();
    if (!email || !password)
      return NextResponse.json({ message: "Invalid Data" }, { status: 422 });

    const hashedPassword = await bcrypt.hash(password, 10);
    await connectToDatabase();
    
    const audience = await prisma.audience.create({
      data: { email, hashedPassword }, // Use 'hashedPassword' here
    });

    return NextResponse.json({ audience }, { status: 201 });
  } catch (error) {
    console.error("Error creating user:", error);
    return NextResponse.json({ message: "Server Error" }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
};

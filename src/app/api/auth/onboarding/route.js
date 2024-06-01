import { NextResponse } from "next/server";
import prisma from "prisma";
import { connectToDatabase } from "src/helpers/server-helpers";
import bcrypt from 'bcrypt'

export const POST = async (req = Request) => {
  try {
    const { firstname, middlename, lastname, avatar, phone, username, bio, interest } = await req.json();
    if (!firstname || !middlename || !lastname || !avatar || !phone || !username || !bio || !interest)
      return NextResponse.json({ message: "Invalid Data" }, { status: 422 });

    const avatarImage = await bcrypt.hash(avatar, 10);
    await connectToDatabase();
    
    const audience = await prisma.audience.create({
      data: { firstname, middlename, lastname, avatarImage, phone, username, bio, interest }, // Use 'hashedPassword' here
    });

    return NextResponse.json({ audience }, { status: 201 });
  } catch (error) {
    console.error("Error creating user:", error);
    return NextResponse.json({ message: "Server Error" }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
};

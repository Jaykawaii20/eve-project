import { NextResponse } from "next/server";
import prisma from "prisma";
import { connectToDatabase } from "src/helpers/server-helpers";

export const POST = async (req = Request) => {
  try {
    const {
      contentType,
      content,
      text,
      hashtags,
      category,
      isPrivate,
      subscriptionTier,
    } = await req.json();
    if (
      !contentType ||
      !content ||
      !text ||
      !hashtags ||
      !category ||
      !isPrivate ||
      !subscriptionTier
    )
      return NextResponse.json({ message: "Invalid Data" }, { status: 422 });

    await connectToDatabase();

    const post = await prisma.post.create({
      data: {
        contentType,
        content,
        text,
        hashtags,
        category,
        isPrivate,
        subscriptionTier,
      }, // Use 'hashedPassword' here
    });

    return NextResponse.json({ post }, { status: 201 });
  } catch (error) {
    console.error("Error creating user:", error);
    return NextResponse.json({ message: "Server Error" }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
};

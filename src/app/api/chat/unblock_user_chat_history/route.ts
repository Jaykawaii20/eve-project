import { NextResponse } from "next/server";
import prisma from "prisma";
import { connectToDatabase } from "src/helpers/server-helpers";
import bcrypt from 'bcrypt'
import { ConnectionDB } from "@/app/helpers/bd";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    await ConnectionDB();

    return NextResponse.json({
      message: "ok",
    });
  } catch (error) {
    NextResponse.json(error);
  }
};

export const POST = async (request) => {
  try {
    const { name, email, password, about, Profileurl } = await request.json();
  } catch (error) {
    return NextResponse.json({
      message: error,
    });
  }
};

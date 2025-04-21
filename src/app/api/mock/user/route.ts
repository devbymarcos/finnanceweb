import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    data: {
      id: 3,
      first_name: "marcos ",
      last_name: "juvencio",
      email: "marcoslopes.dev@gmail.com",
      photo: "default",
    },
    message: "",
    success: "user",
  });
}

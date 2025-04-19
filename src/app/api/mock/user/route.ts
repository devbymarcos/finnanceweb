import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    id: 1,
    name: "Usuário Fake",
    email: "fake@email.com",
  });
}

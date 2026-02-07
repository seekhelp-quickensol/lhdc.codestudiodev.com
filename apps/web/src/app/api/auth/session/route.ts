import { NextResponse } from "next/server";
import { getCurrentUser } from "@/src/lib/auth/actions";

export async function GET() {
  const user = await getCurrentUser();

  if (!user) {
    return NextResponse.json({ user: null }, { status: 200 });
  }

  return NextResponse.json({
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
       
    },
  });
}

export const dynamic = "force-dynamic";
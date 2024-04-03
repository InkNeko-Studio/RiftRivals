import { User } from "@/db/entities/user.entity";
import { useConnection } from "@/db/typeorm";
import { NextResponse } from "next/server";

export async function GET() {
    const db = await useConnection();
    const userRepository = db.getRepository(User);

    let count = await userRepository.count();

    return new NextResponse(JSON.stringify({count: count}));
}
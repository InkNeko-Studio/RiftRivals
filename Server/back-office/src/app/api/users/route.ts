import { User } from "@/db/entities/user.entity";
import { useConnection } from "@/db/typeorm";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
    const db = await useConnection();
    const userRepository = db.getRepository(User);

    let data = await userRepository.find({
        relations: ["profile", "wallet"]
    });

    return new NextResponse(JSON.stringify(data));
}

export async function POST(request: NextRequest) {
    const db = await useConnection();
    const userRepository = db.getRepository(User);

    let body = await request.json();
    if (!body.id) return new NextResponse();

    let user = await userRepository.findOne({
        relations: ["profile", "wallet"],
        where: {
            id: body.id
        }
    });

    if (!user) return new NextResponse();

    user.username = body.username;
    user.profile.displayName = body.displayName;
    user.wallet.fans = body.fans;
    user.wallet.coins = body.coins;
    user.wallet.diamonds = body.diamonds;
    
    userRepository.save(user);

    return new NextResponse(JSON.stringify(user));
}
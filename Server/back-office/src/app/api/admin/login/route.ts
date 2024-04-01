import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request:NextRequest) {
    let body = await request.json();
    if (!body.username || !body.password) return new NextResponse();

    const prisma = new PrismaClient();
    let account = await prisma.admin.findFirst({
        where: {
            username: body.username,
        }
    });
    
    return new NextResponse(JSON.stringify(account));
}
import { PrismaClient } from "@prisma/client";

export async function GET(request:any) {
    const prisma = new PrismaClient();
    
    return new Response("Hi");
}
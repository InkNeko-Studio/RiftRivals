import { Banner } from "@/db/entities/banner.entity";
import { useConnection } from "@/db/typeorm";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
    const db = await useConnection();
    const bannerRepository = db.getRepository(Banner);

    let data = await bannerRepository.find({
        join: {
            alias: "banner",
            leftJoinAndSelect: {
                "bannerEntry": "banner.characters",
                "character": "bannerEntry.character"
            }
        },
        order: {
            id: 'ASC'
        }
    });

    return new NextResponse(JSON.stringify(data));
}
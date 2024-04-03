import { CharacterBase } from "@/db/entities/character-base.entity";
import { useConnection } from "@/db/typeorm";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
    const db = await useConnection();
    const characterRepository = db.getRepository(CharacterBase);

    let data = await characterRepository.find({
        order: {
            id: 'ASC'
        }
    });

    return new NextResponse(JSON.stringify(data));
}

export async function POST(request: NextRequest) {
    const db = await useConnection();
    const characterRepository = db.getRepository(CharacterBase);

    let body = await request.json();
    if (!body.name || !body.description) return new NextResponse();

    let character = new CharacterBase();

    character.name = body.name;
    character.description = body.description;
    
    character = await characterRepository.save(character);

    return new NextResponse(JSON.stringify(character));
}

export async function PATCH(request: NextRequest) {
    const db = await useConnection();
    const characterRepository = db.getRepository(CharacterBase);

    let body = await request.json();
    if (!body.id) return new NextResponse();

    let character = await characterRepository.findOne({
        where: {
            id: body.id
        }
    });

    if (!character) return new NextResponse();

    character.name = body.name;
    character.description = body.description;
    
    await characterRepository.save(character);

    return new NextResponse(JSON.stringify(character));
}

export async function DELETE(request: NextRequest) {
    const db = await useConnection();
    const characterRepository = db.getRepository(CharacterBase);

    let id = parseInt(request.nextUrl.searchParams.get('id') as string);

    if (!id) return new NextResponse();

    let character = await characterRepository.findOne({
        where: {
            id: id
        }
    });

    if (!character) return new NextResponse();

    await characterRepository.remove(character);

    return new NextResponse();
}
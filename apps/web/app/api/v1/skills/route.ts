import { NextResponse } from "next/server"
import skills from "./skills.json";

export const GET = async () => {
    return NextResponse.json({data : JSON.parse(JSON.stringify(skills))});
}
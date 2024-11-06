import { NextResponse } from "next/server"
import projects from "./projects.json";

export const GET = async () => {
    return NextResponse.json({data : JSON.parse(JSON.stringify(projects))});
}
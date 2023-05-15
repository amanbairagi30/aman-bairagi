import dbConnect from "@/utils/dbCon";
import Contact from "@/models/Contact";
import { NextResponse } from "next/server";

export async function POST(req,res){

    try {
        
        const body = await req.json();
        await dbConnect();

        await Contact.create(body);

        return NextResponse.json({
            message : "Message Sent Successfully"
        },{
            status: 200
        })

    } catch (error) {
        return NextResponse.json({
            message : "Server Error, please try again !"
        },{
            status : 500 
        })
    }
}
import mongoose from "mongoose";
import { NextRequest, NextResponse } from "next/server";
import { Campaign } from "../models/campaign";

export async function POST(req: NextRequest, res: NextResponse) {
    const body = await req.formData()
    const campaign_id = body.get("campaign_id")

    console.log(campaign_id);
    mongoose.connect(process.env.MONGO_URL)

    const campaign = await Campaign.findOne({ _id: campaign_id })
    //console.log(campaign,"kitii");
    


    return NextResponse.json(campaign)
}
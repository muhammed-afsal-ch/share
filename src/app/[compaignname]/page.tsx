import mongoose from "mongoose"
import { Campaign } from "../api/models/campaign"
import { redirect } from "next/navigation"
import Client from "../c/Client"



export default function Page({ params }: { params: { compaignname: string } }) {

  mongoose.connect(process.env.MONGO_URL)
  const Check = async () => {
    const campaign = await Campaign.findOne({ campaign_name: params.compaignname })
    console.log(campaign);
    if (campaign) {
      return (
        <>
            <Client campaign={campaign}/>
        </>
      )
    } else {
      redirect("/")
    }
  }
  Check()


  return (
    <>
      <Check />
    </>
  )
}
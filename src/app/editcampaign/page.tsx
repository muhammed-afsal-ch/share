"use client"
import { useSearchParams } from "next/navigation"
import EdiCompaignPage from "../components/Editcompaignpage";


export default function Page() {
    const params = useSearchParams()
    const campaign_id:string|null = params.get("id");
    const width:string|null = params.get("width");
    const height:string|null = params.get("height");
 
    return (
        <>
            <div className="flex">
                <div>
                 <EdiCompaignPage  campaign_id={campaign_id} width={width} height={height}   />
                </div>
            </div>
        </>
    )
}

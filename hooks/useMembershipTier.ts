"use client";
import { useSchematicFlag } from "@schematichq/schematic-react";
import { MembershipLevel } from "@/types/types";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

//define the plan change response type
interface PlanChangeDetail {
    planId?: string;
    tier?: string;
    status?: string;
    //ad other properties based on what the checkout/unsubscribe response contains
}

//define the custom event type
interface PlanChangedEvent extends CustomEvent{
    detail: PlanChangeDetail;
}

function useMembershipTier(): MembershipLevel | null {
    const router = useRouter();

    const hasBackstageContent = useSchematicFlag("backstage-content");
    const hasCrewContent = useSchematicFlag("crew-member-content");
    const hasVipContent = useSchematicFlag("vip-access-content");

useEffect(() =>{
//listen the plan-changed events
const handlePlanChanged = (event: PlanChangedEvent) => {
    //Handle the plan change event
    console.log("Plan changed:", event.detail);

    //you can update UI, refresh data, or trigger other actions here
    //for example, you might want to refetch user entitlements
    router.refresh();
}
window.addEventListener("plan-changed", handlePlanChanged as EventListener);

//clean up the event listener when component unmounts
return() => {
    window.removeEventListener(
        "plan-changed",
        handlePlanChanged as EventListener
    )
}
}, [router])

    if (hasVipContent) return 3;
    if (hasCrewContent) return 2;
    if (hasBackstageContent) return 1;

    return null
}

export default useMembershipTier;

// 12 burguer bar barcelona de bordeta 54 monica

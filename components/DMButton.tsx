"use client";

import useMembershipTier from "@/hooks/useMembershipTier";
import { getTierFromLevel } from "@/types/types";
import { useUser } from "@clerk/nextjs";
import { LockIcon, MessageCircleIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

function DMButton() {
  const { user } = useUser();
  const memebershipTier = useMembershipTier();
  const pathname = usePathname();

  if (pathname.includes("/message")) return null;
  if (!user || !memebershipTier) return null;

  const tier = getTierFromLevel(memebershipTier);

  if (tier === "vip") {
    // VIP can DM the creator
    return (
      <Button
        className="flex items-center gap-2 transition-all hover:bg-primary/90"
        asChild
      >
        <Link href="/message">
          <MessageCircleIcon className="h-4 w-4" />
          <span>Send Message to creator</span>
        </Link>
      </Button>
    );
  }

  return (
    // non-vip users see locked button with upgrade tooltip
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <div className="flex bg-gray-100 px-4 py-2 rounded-md items-center gap-2 border-dashed cursor-not-allowed opacity-70">
            <LockIcon className="h-4 w-4" />
            <span>Send Message to creator</span>
          </div>
        </TooltipTrigger>
        <TooltipContent className="p-4">
          <p className="text-sm mb-2">Upgrade to VIP to message the creator</p>
          <Button
            size="sm"
            className="w-full text-xs"
            variant="secondary"
            asChild
          >
            <Link href="/pricing">Upgrade Now</Link>
          </Button>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

export default DMButton;

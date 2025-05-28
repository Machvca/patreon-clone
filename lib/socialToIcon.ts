import {Link} from "lucide-react";
import {
    SiInstagram,
    SiYoutube,
    SiFacebook,
    SiX,
    SiTiktok,
    SiPinterest,
    SiGithub,
    SiDiscord,
    SiTwitch,
} from "@icons-pack/react-simple-icons";

//map social platform values to their corresponding icons
const socialToIcon = {
  instagram:SiInstagram,
  youtube:SiYoutube,
  facebook:SiFacebook,
  twitter:SiX,
  tiktok:SiTiktok,
  pinterest:SiPinterest,
  github:SiGithub,
  discord:SiDiscord,
  twitch:SiTwitch,
  other: Link,
} as const;

// define a type for the platform keys
export type socialPlatform = keyof typeof socialToIcon;

export function getSocialIcon(platform: socialPlatform) {
    return socialToIcon[platform] || Link;
}

export default socialToIcon
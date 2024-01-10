import { DashboardIcon, SquareIcon } from "@radix-ui/react-icons";
import Person from "../Person";
import Backpack from "./Backpack";
import PaperPlane from "./PaperPlane";
import MixerVertical from "../MixerVertical";

export const iconsMap = {
  company: {
    default: SquareIcon,
    dashboard: DashboardIcon,
    account: Person,
    backpack: Backpack,
    chat: PaperPlane,
    preferences: MixerVertical
  },
  candidate: {
    default: SquareIcon,
    dashboard: DashboardIcon,
    account: Person,
    backpack: Backpack,
    chat: PaperPlane,
    preferences: MixerVertical
  },
};

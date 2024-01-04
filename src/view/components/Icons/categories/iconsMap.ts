import { DashboardIcon, SquareIcon } from "@radix-ui/react-icons";
import Person from "../Person";
import Backpack from "./Backpack";
import PaperPlane from "./PaperPlane";
import MixerVertical from "../MixerVertical";

export const iconsMap = {
  company: {
    default: Person,
    teste: Backpack,
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

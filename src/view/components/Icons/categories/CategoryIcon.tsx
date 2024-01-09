import { iconsMap } from "./iconsMap";

interface CategoryIconProps {
  type: "company" | "candidate";
  category?: string;
}

export function CategoryIcon({ type, category }: CategoryIconProps) {
  const Icon = iconsMap[type][
    category as keyof (typeof iconsMap.company | typeof iconsMap.candidate) ?? 'default'
  ] ?? iconsMap[type].default;

  return <Icon />
}

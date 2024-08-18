import { FontAwesome6, MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import type { Icon, IconProps } from "@expo/vector-icons/build/createIconSet";
import type { ComponentProps } from "react";

export type BottomSheetMenu = {
  title: string;
  icon: string;
  iconProvider: Icon<any, any> // TODO : Fix any
  href: string
}
const BottomSheetMenu: BottomSheetMenu[] = [
  {
    title: "Buat meme",
    icon: 'image-plus',
    iconProvider: MaterialCommunityIcons,
    href: 'create-post'
  },
  {
    title: 'Buat topik',
    icon: 'supervised-user-circle',
    iconProvider: MaterialIcons,
    href: '/'
  },
  {
    title: 'Meme generator',
    icon: 'wand-magic-sparkles',
    iconProvider: FontAwesome6,
    href: '/'
  }
]

export default BottomSheetMenu
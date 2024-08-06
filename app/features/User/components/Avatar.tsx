import type { FC } from 'react'
import { Image } from 'expo-image'
import { type ImageStyle, StyleSheet } from 'react-native';

type Size = "sm" | "md" | "lg"
type SizeMap = {
  [key in Size]: {
    width: number;
    height: number;
  }
}

interface IAvatarProps {
  avatarUrl: string;
  size?: Size;
}
export const Avatar: FC<IAvatarProps> = ({ avatarUrl, size = "md" }) => {
  const sizeMap: SizeMap = {
    "sm": {
      width: 16,
      height: 16
    },
    "md": {
      width: 24,
      height: 24
    },
    "lg": {
      width: 32,
      height: 32
    }
  }
  const avatarStyle: ImageStyle = {
    width: sizeMap[size].width,
    height: sizeMap[size].height,
    borderRadius: sizeMap[size].width / 0.5
  }

  return (
    <Image
      source={avatarUrl}
      contentFit='cover'
      style={[avatarStyle]}
    />
  )
}
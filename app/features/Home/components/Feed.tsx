import type { FC } from "react";
import { FlatList } from "react-native";
import type { Meme } from '@/app/features/CreateMeme'
import { ThemedText } from "@/components";
import { Post } from "./Post";

interface IFeedProps {
  data: Meme[]
}

export const Feed: FC<IFeedProps> = ({ data }) => {
  const renderItem = ({ item }: { item: Meme }) => {
    return (
      <Post
        data={item}
      />
    )
  }
  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item, index) => `${item.title}-${index}`}
    />
  )
}
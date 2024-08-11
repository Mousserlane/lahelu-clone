import type { FC } from "react";
import { FlatList } from "react-native";
import type { Post as PostType } from '@/app/features/CreatePost'
import { ThemedText } from "@/components";
import { Post } from "./Post";

interface IFeedProps {
  data: PostType[]
}

export const Feed: FC<IFeedProps> = ({ data }) => {
  const renderItem = ({ item }: { item: PostType }) => {
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
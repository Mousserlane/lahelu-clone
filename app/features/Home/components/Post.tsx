import type { FC } from 'react'

import { Pill, ThemedText, ThemedView } from '@/components'
import type { Post as PostType } from '../../CreatePost'
import { StyleSheet } from 'react-native'
import { PostHeader } from './Post/PostHeader'
import { Image } from 'expo-image'

interface IPostProps {
  data: PostType
}


export const Post: FC<IPostProps> = ({ data }) => {
  return (
    <ThemedView style={styles.container}>
      {/** TODO : Fix Props drilling, consider using context instead */}
      <PostHeader data={data} />
      <ThemedView style={{ width: '100%', height: 240, borderRadius: 4 }} lightColor='#F1F1F1'>
        <Image
          source={data.fileURL}
          style={{ width: '100%', height: 240 }}
          contentFit='contain'
          contentPosition='center'
        />
      </ThemedView>
      <ThemedView style={{ flexDirection: 'row' }}>
        {data.tags?.map((tag, index) =>

          <Pill key={`${tag}-${index}`}>
            <ThemedText style={{ marginRight: 8 }}>{tag}</ThemedText>
          </Pill>
        )}
      </ThemedView>
    </ThemedView>
  )
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 8
  },
  postHeader: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row'
  }
})
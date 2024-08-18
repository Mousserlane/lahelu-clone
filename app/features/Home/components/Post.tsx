import type { FC } from 'react'

import { Pill, ThemedText, ThemedView } from '@/components'
import type { Post as PostType } from '../../CreatePost'
import { FlatList, StyleSheet, View } from 'react-native'
import { PostHeader } from './Post/PostHeader'
import { Image } from 'expo-image'
import { FontAwesome } from '@expo/vector-icons'
import { PostFooter } from './Post/PostFooter'

interface IPostProps {
  data: PostType
}


export const Post: FC<IPostProps> = ({ data }) => {

  const renderTags = ({ item: tag }: { item: string }) => (
    <Pill text={tag} />
  )

  const renderListHeader = () => (
    <Pill text="Sawer" type='sawer' leftElement={
      <View style={styles.sawerIcon}>
        <FontAwesome name="dollar" color={"#DD952A"} size={8} />
      </View>
    }
    />
  )
  return (
    <ThemedView style={styles.container}>
      {/** TODO : Fix Props drilling, consider using context instead */}
      <PostHeader data={data} />
      <ThemedText type='smallBold' style={{ marginVertical: 8 }}>{data.title}</ThemedText>
      <ThemedView style={{ width: '100%', height: 240, borderRadius: 4, }} lightColor='#F1F1F1'>
        <Image
          source={data.fileURL}
          style={{ width: '100%', height: 240 }}
          contentFit='contain'
          contentPosition='center'
        />
      </ThemedView>
      <ThemedView style={{ flexDirection: 'row', marginVertical: 12 }}>
        <FlatList
          data={data.tags}
          renderItem={renderTags}
          keyExtractor={(item, index) => `${item}-${index}`}
          horizontal
          ListHeaderComponent={renderListHeader}
        />
      </ThemedView>
      <PostFooter />
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
  },
  sawerIcon: {
    borderRadius: 99,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 5,
    width: 14,
    height: 14,
    marginRight: 4
  }
})
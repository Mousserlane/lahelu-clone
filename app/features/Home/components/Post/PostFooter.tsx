import { ThemedText, ThemedView } from '@/components'
import { Entypo, MaterialCommunityIcons } from '@expo/vector-icons'
import type { FC } from 'react'
import { StyleSheet, View, TouchableOpacity } from 'react-native'
interface IPostFooterProps {

}
export const PostFooter: FC<IPostFooterProps> = () => {
  const renderEngagementButtons = () => (
    <ThemedView style={[styles.buttonBase]}>
      <TouchableOpacity style={styles.like}>
        <MaterialCommunityIcons name="arrow-up-bold-outline" size={18} />
        <ThemedText type='smallBold' style={{ marginHorizontal: 8 }}>55</ThemedText>
      </TouchableOpacity>
      <TouchableOpacity style={styles.dislike}>
        <MaterialCommunityIcons name="arrow-down-bold-outline" size={18} />
      </TouchableOpacity>
    </ThemedView>
  )

  const renderCommentButton = () => (
    <TouchableOpacity>
      <ThemedView style={[styles.buttonBase, styles.comment]}>
        <MaterialCommunityIcons name="comment-text-outline" size={18} />
        <ThemedText type="smallBold">40</ThemedText>
      </ThemedView>
    </TouchableOpacity>
  )

  const renderShareButton = () => (
    <TouchableOpacity>
      <ThemedView style={[styles.buttonBase, styles.share]}>
        <MaterialCommunityIcons name="share-outline" size={18} />
      </ThemedView>
    </TouchableOpacity>
  )

  return (
    <ThemedView style={styles.container}>
      {renderEngagementButtons()}
      {renderCommentButton()}
      <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end' }}>
        {renderShareButton()}
      </View>
    </ThemedView>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flex: 1,
  },
  buttonBase: {
    borderRadius: 8,
    borderWidth: 1,
    width: "auto",
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  engagement: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  like: {
    borderRightWidth: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5
  },
  dislike: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 5
  },
  comment: {
    paddingVertical: 8,
    paddingHorizontal: 4,
    marginLeft: 8
  },
  share: {
    padding: 4,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
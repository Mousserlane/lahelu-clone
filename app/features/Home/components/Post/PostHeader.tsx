import type { FC } from 'react'
import MaterialIcons from '@expo/vector-icons/MaterialCommunityIcons'

import { ThemedText, ThemedView } from '@/components'
import { UserInformation } from '../../../User/components/UserInformation'
import type { Post } from '../../../CreatePost'
import { StyleSheet } from 'react-native'
import { useThemeColor } from '@/hooks/useThemeColor'
import { useDateParser } from '@/hooks/useDateParser'

interface IPostProps {
  data: Post
}


export const PostHeader: FC<IPostProps> = ({ data }) => {
  const color = useThemeColor({}, 'text')
  const dateStr = useDateParser(data.datePosted!)
  return (
    <ThemedView style={styles.container}>
      <ThemedView style={styles.postHeader}>
        <UserInformation user={data.author} />
        <ThemedText type="small" style={{ marginHorizontal: 8 }}>·</ThemedText>
        {/** TODO : use real date and parse it */}
        <ThemedText type="small">{dateStr}</ThemedText>
        <ThemedView style={{ flex: 1, alignItems: 'flex-end' }}>
          <MaterialIcons name="dots-horizontal" size={16} color={color} />
        </ThemedView>
      </ThemedView>
    </ThemedView>
  )
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 4
  },
  postHeader: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row'
  }
})
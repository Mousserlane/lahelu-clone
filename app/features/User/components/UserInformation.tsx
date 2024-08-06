import type { FC } from 'react'
import { User } from '../types'
import { Avatar } from './Avatar'
import { ThemedText, ThemedView } from '@/components'
import { StyleSheet } from 'react-native'

interface IUserInformationProps {
  user: User
}

export const UserInformation: FC<IUserInformationProps> = ({ user }) => {
  return (
    <ThemedView style={styles.container}>
      <Avatar avatarUrl={user.avatarURL} />
      <ThemedText style={styles.username} type='small'>
        {user.username}
      </ThemedText>
    </ThemedView>
  )
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  username: {
    fontWeight: 'bold',
    marginLeft: 8,
    // fontSize: 12,
  }
})
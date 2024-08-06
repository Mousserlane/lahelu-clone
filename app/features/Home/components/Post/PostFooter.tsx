import { ThemedText, ThemedView } from '@/components'
import type { FC } from 'react'

interface IPostFooterProps {

}
export const PostFooter: FC<IPostFooterProps> = () => {
  return (
    <ThemedView>
      <ThemedText>Hello Footer</ThemedText>
    </ThemedView>
  )
}
import { useGlobalStore } from '@/stores';
import { ThemedText, ThemedView } from '@/components';
import { FC } from 'react';
import { Feed } from './components/Feed';

interface IHomeProps { }
export const Home: FC<IHomeProps> = () => {
  const { posts } = useGlobalStore()

  return (
    <ThemedView style={style.container}>
      <Feed data={posts} />
    </ThemedView>
  )
}

const style = {
  container: {
    flex: 1,
    paddingHorizontal: 16,
  }
}
import { useGlobalStore } from '@/app/stores';
import { ThemedText, ThemedView } from '@/components';
import { FC } from 'react';
import { Feed } from './components/Feed';

interface IHomeProps { }
export const Home: FC<IHomeProps> = () => {
  const { memes } = useGlobalStore()

  return (
    <ThemedView style={style.container}>
      <Feed data={memes} />
    </ThemedView>
  )
}

const style = {
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 32,
  }
}
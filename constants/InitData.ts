import type { Meme } from "@/app/features/CreateMeme";

export const initialData: Meme[] = [
  {
    title: 'Welcome',
    fileURL: "https://www.antagonist.nl/blog/wp-content/uploads/2014/04/meme_bad_luck_brian_repost.jpg",
    isSensitive: false,
    siteCompliant: true,
    tags: ["random", "rage"],
    author: {
      username: "xAnangx",
      avatarURL: "https://img.okezone.com/content/2019/10/22/598/2120447/peserta-indonesian-idol-2019-ini-sukses-bikin-anang-hermansyah-curhat-ZzVWJft5TD.JPG"
    }
  },
  {
    title: 'Abababa',
    fileURL: "https://www.antagonist.nl/blog/wp-content/uploads/2014/04/meme_bad_luck_brian_repost.jpg",
    isSensitive: false,
    siteCompliant: true,
    tags: ["random", "rage"],
    author: {
      username: "xAnangx",
      avatarURL: "https://img.okezone.com/content/2019/10/22/598/2120447/peserta-indonesian-idol-2019-ini-sukses-bikin-anang-hermansyah-curhat-ZzVWJft5TD.JPG"
    }
  },
  {
    title: 'Biar gak Kosong',
    fileURL: "https://imgx.sonora.id/crop/0x0:0x0/x/photo/2023/02/07/meme-capybarajpg-20230207091339.jpg",
    isSensitive: false,
    siteCompliant: true,
    tags: ["binatang", "cringe"],
    author: {
      username: "xAnangx",
      avatarURL: "https://img.okezone.com/content/2019/10/22/598/2120447/peserta-indonesian-idol-2019-ini-sukses-bikin-anang-hermansyah-curhat-ZzVWJft5TD.JPG"
    }
  }
]
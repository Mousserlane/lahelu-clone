import type { Post } from "@/app/features/CreatePost";

export const initialData: Post[] = [
  {
    title: 'Welcome',
    fileURL: "https://www.antagonist.nl/blog/wp-content/uploads/2014/04/meme_bad_luck_brian_repost.jpg",
    isSensitive: false,
    isSiteCompliant: true,
    tags: ["random", "rage"],
    author: {
      username: "xAnangx",
      avatarURL: "https://img.okezone.com/content/2019/10/22/598/2120447/peserta-indonesian-idol-2019-ini-sukses-bikin-anang-hermansyah-curhat-ZzVWJft5TD.JPG"
    },
    datePosted: new Date("2024-08-17T12:00:00Z"),
  },
  {
    title: 'Abababa',
    fileURL: "https://www.antagonist.nl/blog/wp-content/uploads/2014/04/meme_bad_luck_brian_repost.jpg",
    isSensitive: false,
    isSiteCompliant: true,
    tags: ["random", "rage"],
    author: {
      username: "xAnangx",
      avatarURL: "https://img.okezone.com/content/2019/10/22/598/2120447/peserta-indonesian-idol-2019-ini-sukses-bikin-anang-hermansyah-curhat-ZzVWJft5TD.JPG"
    },
    datePosted: new Date("2024-08-17T12:00:00Z"),
  },
  {
    title: 'Biar gak Kosong',
    fileURL: "https://imgx.sonora.id/crop/0x0:0x0/x/photo/2023/02/07/meme-capybarajpg-20230207091339.jpg",
    isSensitive: false,
    isSiteCompliant: true,
    tags: ["binatang", "cringe"],
    author: {
      username: "xAnangx",
      avatarURL: "https://img.okezone.com/content/2019/10/22/598/2120447/peserta-indonesian-idol-2019-ini-sukses-bikin-anang-hermansyah-curhat-ZzVWJft5TD.JPG"
    },
    datePosted: new Date("2024-08-17T12:00:00Z"),
  }
]
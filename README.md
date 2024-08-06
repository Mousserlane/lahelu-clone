# Welcome 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies - I'm using pnpm package manager but feel free to use any package manager of your choice.

   ```bash
   npm install
   ```

2. Start the app

   ```bash
   pnpm run ios
   ```

   Tested & working on iOS but haven't tested the app on Android

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Structure

I'm using the [Feature Driven](https://medium.com/@Evelyn.Taylor/structuring-react-projects-with-feature-driven-development-%EF%B8%8F-b671ee898145) approach for this project where every features has its own sub folders & files for components, types, api call, etc.

## Gotchas

1. Stores should be stored in its corresponding feature folder.
2. No Call to action buttons in the Post component
3. the type `Meme` should be renamed to `Post`
4. Button component should be a generic component
5. Not tested on Android yet.
6. Still contain unused Expo components & codes.
7. No date parser for date posts

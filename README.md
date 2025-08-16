# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
   npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Tamagui Design System + Vite

This project includes [Tamagui](https://tamagui.dev), a universal React design system, combined with [Vite](https://vitejs.dev) for lightning-fast development.

### Features
- **Universal**: Works on React Native, Web, and other platforms
- **Type-safe**: Full TypeScript support
- **Performance**: Optimized for mobile with tree-shaking
- **Theming**: Built-in light/dark mode support
- **Components**: Rich set of pre-built components
- **Fast Development**: Vite provides instant hot module replacement
- **Optimized Builds**: Vite's esbuild-based bundling for faster builds

### Development Scripts
- `npm run dev` - Start Vite development server (web)
- `npm run build` - Build for production (web)
- `npm run preview` - Preview production build (web)
- `npm start` - Start Expo development server (mobile)

### Usage
- **Web**: Check out the example in `components/TamaguiWebExample.tsx` and visit `/web-demo` route
- **Mobile**: Check out the example in `components/TamaguiExample.tsx` and the "Tamagui Design System" section in the Explore tab

### Configuration
- `tamagui.config.ts` - Main configuration file
- `vite.config.ts` - Vite configuration with Tamagui plugin
- `babel.config.js` - Babel plugin configuration for mobile
- `app/_layout.tsx` - TamaguiProvider setup for mobile
- `app/web-layout.tsx` - TamaguiProvider setup for web

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.
- [Tamagui documentation](https://tamagui.dev): Learn about the design system and its components.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.

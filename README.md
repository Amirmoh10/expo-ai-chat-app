# HybridHeroesGPT - AI Chat Application

A modern, cross-platform AI chat application built with React Native and Expo, powered by the Vercel AI SDK. Chat with advanced AI models in a beautiful, native mobile interface.

## 📱 Demo

https://github.com/user-attachments/assets/83322fa7-ee6c-44de-a7e0-f3d6f6301d3c

## ✨ Features

- 💬 Real-time AI chat with streaming responses
- 🎨 Clean, modern UI with smooth animations
- 📱 Native iOS and Android support
- 🌐 Web support via React Native Web
- ⌨️ Smart keyboard handling
- 📝 Markdown rendering for AI responses
- 🔄 Auto-scroll to latest messages
- ⚡ Loading indicators for better UX
- 🎯 TypeScript for type safety

## 🛠️ Technologies

This application is built with the following technologies:

### Core Framework

- **[React Native](https://reactnative.dev/)** - Cross-platform mobile development
- **[Expo](https://expo.dev/)** (~54.0.9) - Development platform and tooling
- **[TypeScript](https://www.typescriptlang.org/)** (~5.9.2) - Type safety

### AI & Streaming

- **[Vercel AI SDK](https://sdk.vercel.ai/)** (^5.0.48) - AI integration and streaming
- **[@ai-sdk/react](https://www.npmjs.com/package/@ai-sdk/react)** (^2.0.48) - React hooks for AI chat

### UI Components & Styling

- **[React Native Safe Area Context](https://github.com/th3rdwave/react-native-safe-area-context)** - Safe area handling
- **[React Native Reanimated](https://docs.swmansion.com/react-native-reanimated/)** - Smooth animations
- **[React Native Markdown Display](https://github.com/iamacup/react-native-markdown-display)** - Markdown rendering
- **[Expo Font](https://docs.expo.dev/versions/latest/sdk/font/)** - Custom fonts (Inter)

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Expo CLI
- iOS Simulator (for iOS development) or Android Studio (for Android development)

### Installation

1. **Clone the repository**

   ```bash
   git clone <your-repo-url>
   cd ai-sdk-chat
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   Create a `.env` file in the root directory and add your API keys:

   ```env
   # Add your AI provider API keys here
   OPENAI_API_KEY=your_openai_api_key
   # or
   GOOGLE_GENERATIVE_AI_API_KEY=your_google_api_key
   ```

### Running the App

Start the Expo development server:

```bash
npm start
# or
npx expo start
```

In the output, you'll find options to open the app in:

- **iOS Simulator**: Press `i` in the terminal
- **Android Emulator**: Press `a` in the terminal
- **Web Browser**: Press `w` in the terminal
- **Physical Device**: Scan the QR code with Expo Go app

### Platform-Specific Commands

```bash
# Start on iOS
npm run ios

# Start on Android
npm run android

# Start on Web
npm run web
```

## 📁 Project Structure

```
ai-sdk-chat/
├── app/                      # Main application code (Expo Router)
│   ├── api/
│   │   └── chat+api.ts      # API endpoint for chat
│   ├── _layout.tsx          # Root layout
│   └── index.tsx            # Main chat screen
├── components/              # Reusable components
│   ├── ChatHeader.tsx       # Chat header component
│   ├── Conversation.tsx     # Message list container
│   ├── LoadingIndicator.tsx # AI response loading indicator
│   ├── Message.tsx          # Message bubble component
│   ├── PromptInput.tsx      # Chat input component
│   └── index.ts            # Component exports
├── assets/                  # Static assets (images, fonts)
├── constants/              # App constants
├── utils.ts               # Utility functions
└── package.json           # Dependencies and scripts
```

## 🎨 Key Components

- **ChatHeader**: Displays the app title and navigation
- **Conversation**: Manages the message list and auto-scrolling
- **Message**: Renders individual messages with role-based styling
- **PromptInput**: Handles user input with keyboard management
- **LoadingIndicator**: Shows animated loading state while AI responds

## 🔧 Configuration

### Changing AI Model

Edit `app/api/chat+api.ts` to change the AI model:

```typescript
const result = streamText({
  model: "xai/grok-4", // Change to your preferred model
  messages: convertToModelMessages(messages),
});
```

### Customizing Styles

All components use StyleSheet for styling. You can customize colors, fonts, and layouts in each component file.

## 📦 Build for Production

### iOS

```bash
npx expo build:ios
```

### Android

```bash
npx expo build:android
```

### Web

```bash
npx expo export:web
```

## 🧪 Development

### Linting

```bash
npm run lint
```

### Type Checking

```bash
npx tsc --noEmit
```

## 📝 License

This project is licensed under the MIT License.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 👨‍💻 Author

Amir Ghezala - [Amirmoh10](https://github.com/Amirmoh10)

## 🙏 Acknowledgments

- [Vercel AI SDK](https://sdk.vercel.ai/) for the amazing AI integration
- [Expo](https://expo.dev/) for the development platform
- [React Native](https://reactnative.dev/) for the cross-platform framework

import { Stack } from 'expo-router';
import React from 'react';
import { TamaguiProvider } from 'tamagui';

import tamaguiConfig from '../tamagui.config';

export default function WebLayout() {
    return (
        <TamaguiProvider config={tamaguiConfig}>
            <Stack>
                <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
                <Stack.Screen name="web-demo" options={{ title: 'Vite + Tamagui Demo' }} />
                <Stack.Screen name="+not-found" />
            </Stack>
        </TamaguiProvider>
    );
}

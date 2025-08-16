import React from 'react';
import { createRoot } from 'react-dom/client';
import { Button, Card, H1, H2, Paragraph, Separator, TamaguiProvider, Text, XStack, YStack } from 'tamagui';

import tamaguiConfig from '../tamagui.config';
import './global.css';

function WebApp() {
    return (
        <TamaguiProvider config={tamaguiConfig}>
            <YStack space="$6" padding="$4" maxWidth={1200} marginHorizontal="auto">
                <H1 textAlign="center">Citizenship Geo - Vite + Tamagui</H1>
                <Paragraph textAlign="center" theme="alt2">
                    Successfully running with Vite and Tamagui design system!
                </Paragraph>

                <Separator />

                <Card elevate size="$4" bordered>
                    <Card.Header padded>
                        <H2>Development Status</H2>
                        <Paragraph theme="alt2">
                            Your app is now running with both Vite (fast development) and Tamagui (universal design system).
                        </Paragraph>
                    </Card.Header>
                    <Card.Footer padded>
                        <XStack space="$2" justifyContent="flex-end">
                            <Button size="$3" variant="outlined">
                                Learn More
                            </Button>
                            <Button size="$3" theme="active">
                                Get Started
                            </Button>
                        </XStack>
                    </Card.Footer>
                </Card>

                <YStack space="$4">
                    <H2>Component Showcase</H2>

                    <YStack space="$3">
                        <Text fontWeight="bold" fontSize="$5">Button Variants:</Text>
                        <XStack space="$2" flexWrap="wrap" gap="$2">
                            <Button size="$3">Default</Button>
                            <Button size="$3" theme="active">Active</Button>
                            <Button size="$3" variant="outlined">Outlined</Button>
                            <Button size="$3" variant="dashed">Dashed</Button>
                            <Button size="$3" theme="red">Danger</Button>
                        </XStack>
                    </YStack>

                    <YStack space="$3">
                        <Text fontWeight="bold" fontSize="$5">Typography Scale:</Text>
                        <YStack space="$2">
                            <H1>Heading 1 - Large Title</H1>
                            <H2>Heading 2 - Section Title</H2>
                            <Text fontSize="$6">Large Text - Important content</Text>
                            <Text fontSize="$4">Medium Text - Body content</Text>
                            <Text fontSize="$2" theme="alt2">Small Text - Captions</Text>
                        </YStack>
                    </YStack>
                </YStack>

                <Separator />

                <YStack space="$4">
                    <H2>Development Scripts</H2>
                    <Paragraph>
                        <strong>Web Development:</strong> <code>npm run dev</code> (currently running)
                    </Paragraph>
                    <Paragraph>
                        <strong>Mobile Development:</strong> <code>npm start</code> for Expo
                    </Paragraph>
                </YStack>
            </YStack>
        </TamaguiProvider>
    );
}

// Create root element
const rootElement = document.getElementById('root');
if (!rootElement) {
    throw new Error('Root element not found');
}

const root = createRoot(rootElement);

// Render the app
root.render(
    <React.StrictMode>
        <WebApp />
    </React.StrictMode>
);

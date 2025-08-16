import { TamaguiWebExample } from '@/components/TamaguiWebExample';
import React from 'react';
import { Button, Card, H1, H2, Paragraph, Separator, Text, XStack, YStack } from 'tamagui';

export default function WebDemo() {
    return (
        <YStack space="$6" padding="$4" maxWidth={1200} marginHorizontal="auto">
            <H1 textAlign="center">Citizenship Geo - Vite + Tamagui Demo</H1>
            <Paragraph textAlign="center" theme="alt2">
                Experience the power of Tamagui design system with Vite's lightning-fast development server.
            </Paragraph>

            <Separator />

            <Card elevate size="$4" bordered>
                <Card.Header padded>
                    <H2>Development Benefits</H2>
                    <Paragraph theme="alt2">
                        This setup combines the best of both worlds: Tamagui's universal design system and Vite's fast build tooling.
                    </Paragraph>
                </Card.Header>
                <Card.Footer padded>
                    <XStack space="$2" justifyContent="flex-end">
                        <Button size="$3" variant="outlined" onPress={() => window.open('https://tamagui.dev', '_blank')}>
                            Tamagui Docs
                        </Button>
                        <Button size="$3" theme="active" onPress={() => window.open('https://vitejs.dev', '_blank')}>
                            Vite Docs
                        </Button>
                    </XStack>
                </Card.Footer>
            </Card>

            <TamaguiWebExample />

            <Separator />

            <YStack space="$4">
                <H2>Getting Started</H2>
                <Paragraph>
                    To start the Vite development server, run:
                </Paragraph>
                <Card bordered padding="$3" backgroundColor="$background">
                    <Text fontFamily="monospace" fontSize="$3">
                        npm run dev
                    </Text>
                </Card>

                <Paragraph>
                    For production builds:
                </Paragraph>
                <Card bordered padding="$3" backgroundColor="$background">
                    <Text fontFamily="monospace" fontSize="$3">
                        npm run build
                    </Text>
                </Card>
            </YStack>
        </YStack>
    );
}

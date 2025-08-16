import React from 'react';
import { Button, Card, H1, H2, Paragraph, Separator, Text, XStack, YStack } from 'tamagui';

/**
 * Web-optimized example component demonstrating Tamagui design system usage
 */
export function TamaguiWebExample() {
    return (
        <YStack space="$6" padding="$4" maxWidth={800} marginHorizontal="auto">
            <H1 textAlign="center">Welcome to Tamagui + Vite</H1>
            <Paragraph textAlign="center" theme="alt2">
                This is an example of how to use Tamagui components with Vite for fast development.
            </Paragraph>

            <Card elevate size="$4" bordered>
                <Card.Header padded>
                    <H2>Vite + Tamagui Benefits</H2>
                    <Paragraph theme="alt2">
                        Fast hot module replacement, optimized builds, and excellent developer experience.
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

            <Separator />

            <YStack space="$4">
                <H2>Component Showcase</H2>

                <YStack space="$3">
                    <Text fontWeight="bold" fontSize="$5">Button Variants:</Text>
                    <XStack space="$2" flexWrap="wrap" gap="$2">
                        <Button size="$3">Default</Button>
                        <Button size="$3" theme="active">
                            Active
                        </Button>
                        <Button size="$3" variant="outlined">
                            Outlined
                        </Button>
                        <Button size="$3" variant="dashed">
                            Dashed
                        </Button>
                        <Button size="$3" theme="red">
                            Danger
                        </Button>
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

                <YStack space="$3">
                    <Text fontWeight="bold" fontSize="$5">Layout Components:</Text>
                    <XStack space="$4" flexWrap="wrap">
                        <Card size="$3" bordered>
                            <Card.Header padded>
                                <Text fontWeight="bold">Card 1</Text>
                            </Card.Header>
                            <Card.Footer padded>
                                <Text fontSize="$2" theme="alt2">Footer content</Text>
                            </Card.Footer>
                        </Card>
                        <Card size="$3" bordered>
                            <Card.Header padded>
                                <Text fontWeight="bold">Card 2</Text>
                            </Card.Header>
                            <Card.Footer padded>
                                <Text fontSize="$2" theme="alt2">Footer content</Text>
                            </Card.Footer>
                        </Card>
                    </XStack>
                </YStack>
            </YStack>
        </YStack>
    );
}

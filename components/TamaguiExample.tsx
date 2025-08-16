import React from 'react';
import { Button, Card, H1, H2, Paragraph, Text, XStack, YStack } from 'tamagui';

/**
 * Example component demonstrating Tamagui design system usage
 */
export function TamaguiExample() {
    return (
        <YStack space="$4" padding="$4">
            <H1>Welcome to Tamagui</H1>
            <Paragraph>
                This is an example of how to use Tamagui components in your React Native app.
            </Paragraph>

            <Card elevate size="$4" bordered>
                <Card.Header padded>
                    <H2>Card Example</H2>
                    <Paragraph theme="alt2">
                        This is a card component with header, content, and footer.
                    </Paragraph>
                </Card.Header>
                <Card.Footer padded>
                    <XStack space="$2">
                        <Button size="$3" variant="outlined">
                            Cancel
                        </Button>
                        <Button size="$3" theme="active">
                            Confirm
                        </Button>
                    </XStack>
                </Card.Footer>
            </Card>

            <YStack space="$2">
                <Text fontWeight="bold">Button Variants:</Text>
                <XStack space="$2" flexWrap="wrap">
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
                </XStack>
            </YStack>

            <YStack space="$2">
                <Text fontWeight="bold">Text Sizes:</Text>
                <H1>Heading 1</H1>
                <H2>Heading 2</H2>
                <Text fontSize="$6">Large Text</Text>
                <Text fontSize="$4">Medium Text</Text>
                <Text fontSize="$2">Small Text</Text>
            </YStack>
        </YStack>
    );
}

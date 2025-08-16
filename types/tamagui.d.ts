/// <reference types="@tamagui/core" />

declare module '*.svg' {
    import React from 'react';
    import { SvgProps } from 'react-native-svg';
    const content: React.FC<SvgProps>;
    export default content;
}

declare module '*.png' {
    const content: any;
    export default content;
}

declare module '*.jpg' {
    const content: any;
    export default content;
}

declare module '*.jpeg' {
    const content: any;
    export default content;
}

declare module '*.gif' {
    const content: any;
    export default content;
}

declare module '*.webp' {
    const content: any;
    export default content;
}

import { ComponentStory } from '@storybook/react-native';
import { Box, Text } from '@gluestack/ui';
import React from 'react';

type MyCustomBoxStory = ComponentStory<typeof Box>;

export const Basic: MyCustomBoxStory = ({ bg, w, h, ...props }) => {
  return (
    <Box
      {...props}
      bg={`$${bg}`}
      h={h}
      w={w}
      justifyContent="center"
      alignItems="center"
    >
      <Text color="white" fontWeight="bold">
        BOX
      </Text>
    </Box>
  );
};

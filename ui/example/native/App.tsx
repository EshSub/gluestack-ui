import {
  Box,
  Text,
  Heading,
  UIProvider,
  Center,
  Checkbox,
  Image,
  Pressable,
  Input,
} from '@gluestack/ui';
import React from 'react';

import * as StyledComponent from './components';
import { ButtonBasicExample } from './screens';

// const components = {}
export default function App() {
  const myRef = React.useRef(null);

  React.useEffect(() => {
    const styleObj = {
      borderWidth: 4,
      borderRadius: 4,
      borderColor: '#22D3EE',
    };
    // @ts-ignore
    myRef?.current?.setNativeProps({
      style: styleObj,
    });
  }, [myRef]);

  return (
    <UIProvider
      components={{
        ...StyledComponent,
      }}
    >
      <Center
        sx={{
          style: {
            flex: 1,
          },
        }}
      >
        {/* <Text>Stack Example</Text>
        <Text>HStack Example</Text>
        <Text>VStack Example</Text>
        <ButtonBasicExample />
        <Box
          sx={{
            style: {
              bg: '$green.400',
              w: 200,
              h: 200,
              justifyContent: 'center',
              alignItems: 'center',
              display: 'flex',
              flexDirection: 'row',
            },
          }}
          ref={myRef}
        >
          <Text
            sx={{
              style: {
                bg: '$purple.500',
                p: 10,
                fontSize: 22,
                fontWeight: 'bold',
              },
            }}
          >
            Hello
          </Text>
        </Box>
        <Box
          sx={{
            style: {
              bg: '$red.400',
              w: 200,
              h: 200,
              justifyContent: 'center',
              alignItems: 'center',
              display: 'flex',
              flexDirection: 'row',
            },
            descendants: {
              _text: {
                style: {
                  color: '$green.800',
                },
              },
            },
          }}
        >
          Hello
        </Box>
        <Heading>Hello</Heading>
        <Input.Root
          //@ts-ignore
          sx={{
            style: {
              borderWidth: 2,
              borderColor: 'red',
              alignItems: 'center',
            },
            state: {
              hover: {
                style: { borderColor: '$primary.500' },
              },
              focus: {
                style: { borderColor: '$secondary.500' },
              },
            },
          }}
        >
          <Input.Icon
            sx={{ style: { p: '$3', h: '100%', justifyContent: 'center' } }}
          >
            <Text>IconLeft</Text>
          </Input.Icon>
          <Input
            selectionColor="red"
            type="password"
            placeholder="ajnslj"
            onKeyPress={(event: KeyboardEvent) => console.log(event)}
          />
        </Input.Root>
        <Text
          sx={{
            style: {
              bg: '$purple.500',
              p: 10,
              fontSize: 22,
              fontWeight: 'bold',
            },
          }}
        />
        <Pressable
          onPress={() => console.log('Hello world!')}
          sx={{ style: { bg: '$amber.500', p: 10 } }}
        >
          <Text
            sx={{
              style: {
                bg: '$purple.500',
                p: 10,
                fontSize: 22,
                fontWeight: 'bold',
              },
            }}
          >
            Hello
          </Text>
        </Pressable> */}
        <Checkbox>
          <Checkbox.Indicator>
            <Checkbox.Icon />
          </Checkbox.Indicator>
          <Checkbox.Label>Hello</Checkbox.Label>
        </Checkbox>
        {/* <Image
          sx={{
            style: {
              h: 100,
              w: 100,
              roundbordered: 9999,
            },
          }}
          source={{
            uri: 'https://reactnative.dev/img/tiny_logo.png',
          }}
          alt="Hello"
        /> */}
      </Center>
    </UIProvider>
  );
}

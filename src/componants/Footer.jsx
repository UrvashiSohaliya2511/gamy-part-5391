import React from "react";
import { Stack } from "@chakra-ui/react";
import { Image, Flex, Text, Button, Input } from "@chakra-ui/react";

const Footer = () => {
  return (
    <div>
      <Stack p={5} spacing={5}>
        <Image src="https://n.nordstrommedia.com/id/e63e8dd7-3537-47db-912c-7d370e63658f.jpeg?h=180&w=1600" />
        <Flex align="center" justify="flex-end" gap={1}>
          <Text
            fontSize="xs"
            fontWeight="bold"
            color="global.black"
            letterSpacing={1}
          >
            Get Email Updates:
          </Text>
          <Input
            w="20%"
            placeholder="Email Address"
            type="email"
            borderRadius="none"
          />
          <Button
            w="20%"
            borderRadius="none"
            color="white"
            bg="global.blue"
            fontWeight="normal"
          >
            Sign Up
          </Button>
        </Flex>
      </Stack>
    </div>
  );
};

export default Footer;

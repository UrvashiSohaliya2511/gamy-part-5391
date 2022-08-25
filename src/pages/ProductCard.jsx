import { Stars } from "../componants/Homepage.Sliders.jsx";
import React from "react";
import ProductModal from "./ProductModal.jsx";
import {
  Image,
  Text,
  Flex,
  Box,
  RadioGroup,
  Stack,
  Radio,
} from "@chakra-ui/react";

import { textHover } from "../styles/styles.js";
const Color = () => {
  return (
    <>
      <RadioGroup defaultValue="0">
        <Stack spacing={2} direction="row" align="center">
          <Radio size="lg" colorScheme="#2d282c" bg="#2d282c" value="1"></Radio>
          <Radio size="lg" colorScheme="#005c6d" bg="#005c6d" value="2"></Radio>
          <Radio size="lg" colorScheme="#cdb4a6" bg="#cdb4a6" value="3"></Radio>
          <Radio size="lg" colorScheme="#a36f53" bg="#a36f53" value="4"></Radio>
          <Radio size="lg" colorScheme="#b4afb1" bg="#b4afb1" value="5"></Radio>
        </Stack>
      </RadioGroup>
    </>
  );
};
const ProductCard = ({ itemDetail }) => {
  const offer = ((itemDetail.price * 100) / itemDetail.discount).toFixed(2);

  return (
    <Stack spacing={1} key={itemDetail.key}>
      <Box overflow="hidden">
        <Image
          src={itemDetail.image[0]}
          alt={itemDetail.title}
          w="100%"
          h="350px"
          transition=" 0.3s"
          _hover={{ transform: "scale(1.1)" }}
        />
      </Box>

      <ProductModal data={itemDetail} />
      <Color />
      <Text _hover={textHover}>{itemDetail.title}</Text>
      <Flex gap={2} align="center">
        <Text fontWeight="450">${itemDetail.price}</Text>
        <Text>{` (${itemDetail.discount}% off)`}</Text>
      </Flex>
      <Text as="del">${offer}</Text>
      <Flex align="center" gap={2}>
        <Stars total={itemDetail.rating} />
        <Text color="#898989">{`(${Math.floor(Math.random() * 10) + 1})`}</Text>
      </Flex>
      <Text color="#898989">Free Shipping on Orders $89+</Text>
    </Stack>
  );
};

export default ProductCard;

/*category: "tshirt"
discount: 29
id: 2
image: (3) ['https://sslimages.shoppersstop.com/sys-master/imag…805790/AW22LFCHRTEEM09_BLACK_alt1.jpg_2000Wx3000H', 'https://sslimages.shoppersstop.com/sys-master/imag…382750/AW22LFCHRTEEM09_BLACK_alt2.jpg_2000Wx3000H', 'https://sslimages.shoppersstop.com/sys-master/imag…60563662878/AW22LFCHRTEEM09_BLACK.jpg_2000Wx3000H']
price: 23.89
rating: 4
title: "Button Notch Neck T-Shirt"
type: "clothes"
*/

import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Stack,
  Image,
  SimpleGrid,
  Flex,
  Text,
  Show,
  Box,
  useToast,
} from "@chakra-ui/react";
import { textHover, buttonNotfilled, buttonfilled } from "../styles/styles.js";
import { Stars } from "../componants/Homepage.Sliders";
import { BsTruck, BsFillBagFill } from "react-icons/bs";
import { FiAlertCircle } from "react-icons/fi";
import { useContext } from "react";
import { AppContext } from "../context/AppContext.jsx";
const ProductModal = ({ data }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const finalRef = React.useRef(null);
  const offer = ((data.price * 100) / data.discount).toFixed(2);
  return (
    <>
      <Button
        mt={4}
        position="relative"
        fontWeight="normal"
        bg="rgb(255, 255, 255,0.4)"
        color="global.blue"
        border="1px solid #bbb"
        borderRadius="none"
        visibility="visible"
        _hover={buttonNotfilled}
        onClick={onOpen}
      >
        Quick Veiw
      </Button>
      <Modal
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
        size="2xl"
        p={5}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            <Flex gap={3} justify="space-between" p={1} color="global.black">
              <SimpleGrid
                gap={3}
                columns={[1, 1, 2, 2]}
                align="center"
                justify="center"
                w="50%"
              >
                <Box overflow="hidden">
                  <Image
                    src={data.image[0]}
                    transition=" 0.3s"
                    _hover={{ transform: "scale(1.1)" }}
                  />
                </Box>
                <Box overflow="hidden">
                  <Image
                    src={data.image[1]}
                    transition=" 0.3s "
                    _hover={{ transform: "scale(1.1)" }}
                  />
                </Box>
                <Show breakpoint="(min-width: 650px)">
                  <Box overflow="hidden">
                    <Image
                      src={data.image[2]}
                      transition=" 0.3s"
                      _hover={{ transform: "scale(1.1)" }}
                    />
                  </Box>
                </Show>
              </SimpleGrid>
              <Stack spacing={3} w="45%">
                <Flex align="center" gap={2}>
                  <Stars total={data.rating} />
                  <Text color="#898989">{`(${
                    Math.floor(Math.random() * 10) + 1
                  })`}</Text>
                </Flex>
                <Text fontWeight="450">{data.title}</Text>
                <Flex gap={2} align="center">
                  <Text fontSize="20px" fontWeight="450">
                    ${data.price}
                  </Text>
                  <Text>{` (${data.discount}% off)`}</Text>
                </Flex>
                <Flex align="center" gap={1}>
                  <Text as="del">${offer}</Text>
                  <FiAlertCircle color="#00819d" />
                </Flex>
                <Flex align="center" gap={1}>
                  <BsTruck fontSize="24px" />
                  <Text>Free Shipping on Orders $89+</Text>
                </Flex>
                <Flex align="center" fontSize="12px">
                  <Text>
                    or 4 interest-free payments of $4.99 with<b> afterpay</b>
                  </Text>
                  <FiAlertCircle />
                </Flex>

                <Text fontSize="11px">
                  Get a $40 Bonus Note when you use a new Nordstrom credit card.
                  <Text color="global.blue" style={textHover}>
                    Apply Now
                  </Text>
                </Text>
                <Stack pt={6}>
                  <Alert product={data} />
                </Stack>
              </Stack>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

function Alert({ product }) {
  const { cartDetail, setcartDetail } = useContext(AppContext);

  const toast = useToast();
  const handleCart = () => {
    const checkCart = cartDetail.filter((ele) => {
      return ele.title === product.title;
    });

    if (checkCart.length > 0) {
      toast({
        title: "Product is already in bag",
        description: "You can change Quantity in Cart",
        status: "warning",
        position: "top-right",
        duration: 2000,
        isClosable: true,
      });
    } else {
      setcartDetail([...cartDetail, product]);
      toast({
        title: "Product Added to bag",
        description: "You can change Quantity in Cart",
        status: "success",
        duration: 2000,
        position: "top-right",
        isClosable: true,
      });
    }
  };
  return (
    <>
      <Button
        mt={4}
        position="relative"
        fontWeight="430"
        border="1px solid #bbb"
        borderRadius="none"
        bg="global.blue"
        color="white"
        visibility="visible"
        _hover={buttonfilled}
        gap={2}
        onClick={handleCart}
      >
        <BsFillBagFill />
        Add to bag
      </Button>
    </>
  );
}
export default ProductModal;

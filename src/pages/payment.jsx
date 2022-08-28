import React from "react";
import {
  //   FormControl,
  SimpleGrid,
  Heading,
  Stack,
  Flex,
  Text,
  Button,
  Divider,
  FormControl,
  FormLabel,
  Image,
  Input,
  Box,
  Radio,
} from "@chakra-ui/react";
import { AppContext } from "../context/AppContext";
import { GoGift } from "react-icons/go";
// import { BsTruck } from "react-icons/bs";
import { BsCreditCard2Front } from "react-icons/bs";
import { FiAlertCircle } from "react-icons/fi";
import { buttonfilled } from "../styles/styles.js";
// import { BsBagCheck } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
const Payment = () => {
  const Navigate = useNavigate();
  const { cartDetail, setcartDetail } = React.useContext(AppContext);
  let sum = 0;
  cartDetail.map((ele) => {
    sum += ele.quantity * ele.price;
    return ele;
  });
  const obj = {
    firstname: "",
    lastname: "",
    email: "",
    address: "",
    phone: "",
    cardnumber: "",
    date: "",
    security: "",
  };
  const handleChange = (e) => {
    obj[e.target.name] = e.target.value;
  };
  const handleSubmit = (e) => {
    if (
      obj.firstname === "" ||
      obj.lastname === "" ||
      obj.email === "" ||
      obj.address === "" ||
      obj.phone === "" ||
      obj.date === "" ||
      obj.cardnumber === "" ||
      obj.security === ""
    ) {
      alert("please fill all details");
    } else {
      alert("payment successfull");
      setcartDetail([]);
      Navigate("/");
    }
    console.log(obj);
  };
  return (
    <Stack textAlign="left" bg="#f4f4f4">
      <Flex justify="center" gap={4} w="70%" m="auto" pt={5} pb={5}>
        <Stack w="70%">
          <Stack color="global.black" spacing={4}>
            <Stack bg="white" p={6}>
              <Heading fontSize="2xl" fontWeight="400">
                Checkout
              </Heading>
              <Heading fontSize="lg" fontWeight="400">
                Pickup or delivery
              </Heading>
              <FormControl isRequired w="75%" onChange={handleChange}>
                <FormLabel fontWeight="normal" fontSize="13px">
                  Required
                </FormLabel>
                <FormLabel fontWeight="430">First name</FormLabel>
                <Input borderRadius="none" name="firstname" />
                <FormLabel fontWeight="430">Last name</FormLabel>
                <Input borderRadius="none" name="lastname" />
                <FormLabel fontWeight="430">Address</FormLabel>
                <Input
                  placeholder="Enter your address"
                  borderRadius="none"
                  name="address"
                />
              </FormControl>
            </Stack>
            <Stack bg="white" p={6}>
              <Heading fontSize="20px">
                <Flex fontWeight="400" gap={3} align="center">
                  <GoGift />
                  <Text>Gift options</Text>
                </Flex>
              </Heading>
              <Text fontSize="13px">
                Write a gift message at Checkout and we'll email it to the
                recipient when their item is delivered.
              </Text>
              <Text color="global.blue">Add a gift message</Text>
            </Stack>
            <Stack bg="white" p={6}>
              <Heading fontSize="xl" fontWeight="400">
                Contact info
              </Heading>
              <FormControl isRequired w="75%" onChange={handleChange}>
                <FormLabel fontWeight="430">
                  Email (for order updates)
                </FormLabel>
                <Input borderRadius="none" type="email" name="email" />
                <FormLabel fontWeight="430">
                  Phone number (for order questions)
                </FormLabel>
                <Input borderRadius="none" type="phone" name="phone" />
              </FormControl>
            </Stack>
            <Stack bg="white" p={5}>
              <Flex>
                <Image
                  w="20%"
                  src="https://n.nordstrommedia.com/id/9d83332c-1bcd-43e8-8e16-b0cde08d7128.jpeg?crop=pad&width=166&height=126"
                />

                <Box>
                  <Text fontWeight="430" fontSize="15px">
                    Nordstrom Card
                  </Text>
                  <Text fontSize="13px">
                    Get a $40 Bonus Note when you use a new Nordstrom credit
                    card. Apply now
                  </Text>
                </Box>
              </Flex>
            </Stack>
            <Stack bg="white" p={10}>
              <Heading fontSize="xl" fontWeight="400">
                Payment
              </Heading>
              <Flex gap={3} align="center">
                <Radio defaultChecked />
                <BsCreditCard2Front fontSize="32px" />
                <Text>Credit Card</Text>
              </Flex>
              <FormControl isRequired w="75%" onChange={handleChange}>
                <FormLabel fontWeight="430">Card number</FormLabel>
                <Input
                  borderRadius="none"
                  name="cardnumber"
                  //   type="tel"
                  //   inputmode="numeric"
                  //   pattern="[0-9\s]{13,19}"
                  //   maxlength="16"
                />
                <FormLabel fontWeight="430">Expiration date</FormLabel>
                <Input borderRadius="none" type="date" name="date" />
                <FormLabel fontWeight="430" fontSize="md">
                  Security code
                </FormLabel>
                <Input borderRadius="none" name="security" />
              </FormControl>
            </Stack>
            <Stack bg="white" p={10}>
              <SimpleGrid columns={2} justify="space-between" spacing={2}>
                <Text>Subtotal</Text>
                <Text textAlign="right">$ {sum.toFixed(2)}</Text>
                <Text>Shipping</Text>
                <Flex justify="flex-end" align="center" gap={1}>
                  <FiAlertCircle color="#00819d" />
                  <Text>Free</Text>
                </Flex>
                <Text>Estimated tax</Text>
                <Text textAlign="right">$ {((sum * 10) / 100).toFixed(2)}</Text>
                <Divider />
                <Divider />
                <Text fontWeight="430" fontSize="17px">
                  Estimated total
                </Text>
                <Text fontWeight="430" fontSize="17px" textAlign="right">
                  $ {(sum + (sum * 10) / 100).toFixed(2)}
                </Text>
              </SimpleGrid>

              <Button
                bg="global.blue"
                borderRadius="none"
                color="white"
                fontWeight="normal"
                _hover={buttonfilled}
                onClick={handleSubmit}
              >
                Pay
              </Button>
            </Stack>
          </Stack>
        </Stack>
        <Stack bg="white" p={10} h="300px" color="global.black">
          <SimpleGrid columns={2} justify="space-between" spacing={2}>
            <Text>Subtotal</Text>
            <Text textAlign="right">$ {sum.toFixed(2)}</Text>
            <Text>Shipping</Text>
            <Flex justify="flex-end" align="center" gap={1}>
              <FiAlertCircle color="#00819d" />
              <Text>Free</Text>
            </Flex>
            <Text>Estimated tax</Text>
            <Text textAlign="right">$ {((sum * 10) / 100).toFixed(2)}</Text>
            <Divider />
            <Divider />
            <Text fontWeight="430" fontSize="17px">
              Estimated total
            </Text>
            <Text fontWeight="430" fontSize="17px" textAlign="right">
              $ {(sum + (sum * 10) / 100).toFixed(2)}
            </Text>
          </SimpleGrid>

          <Button
            bg="global.blue"
            borderRadius="none"
            color="white"
            fontWeight="normal"
            _hover={buttonfilled}
            onClick={handleSubmit}
          >
            Pay
          </Button>
          <Flex align="center" color="gray">
            <Text fontSize="13px">
              Need help? Call 1.888.966.6283 or chat with us
            </Text>
          </Flex>
        </Stack>
      </Flex>
    </Stack>
  );
};

export default Payment;

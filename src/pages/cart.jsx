import React from "react";
import { AppContext } from "../context/AppContext.jsx";
import { useContext, useState } from "react";

import {
  Button,
  Flex,
  Heading,
  Stack,
  Text,
  Box,
  Image,
  Select,
  Link,
  SimpleGrid,
  Divider,
  Hide,
} from "@chakra-ui/react";
import { Stars } from "../componants/Homepage.Sliders.jsx";
import { GoGift } from "react-icons/go";
import { BsTruck } from "react-icons/bs";

import { FiAlertCircle } from "react-icons/fi";
import { buttonfilled } from "../styles/styles.js";
import { BsBagCheck } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
const Cart = () => {
  const [iscart, setiscart] = useState(true);
  const navigate = useNavigate();
  let sum = 0;
  const { cartDetail, savedItems } = useContext(AppContext);
  cartDetail.map((ele) => {
    sum += ele.quantity * ele.price;
    return ele;
  });

  const handleCheckout = () => {
    navigate("/cart/payment");
  };
  return (
    <div>
      <Stack p={12} pt={2} spacing={5} color="global.black">
        <Flex color="global.black">
          <Button
            border="1px solid #bbb"
            borderRadius="none"
            fontWeight={iscart ? "450" : "normal"}
            bg={iscart ? "#e3e3e3" : "none"}
            w={["40%", "40%", "20%", "20%"]}
            _hover="disabled"
            onClick={() => {
              setiscart(true);
            }}
          >
            Shopping Bag ({cartDetail.length})
          </Button>
          <Button
            border="1px solid #bbb"
            borderRadius="none"
            fontWeight={!iscart ? "450" : "normal"}
            bg={!iscart ? "#e3e3e3" : "none"}
            w={["40%", "40%", "20%", "20%"]}
            _hover="disabled"
            onClick={() => {
              setiscart(false);
            }}
          >
            Saved for Later ({savedItems.length})
          </Button>
        </Flex>
        <Stack textAlign="left">
          <Heading fontSize="22px" fontWeight="400">
            {iscart ? "Shopping Bag" : "Saved for Later"}
          </Heading>
          <Text fontSize="14px">Items in your bag are not on hold.</Text>
          <Flex align="center" fontSize="14px" gap={2}>
            <GoGift fontSize="15px" />
            <Text>Add a gift message when you check out.</Text>
          </Flex>
          <Flex gap={5}>
            <Stack w={["98%", "90%", "75%", "75%"]}>
              {iscart &&
                cartDetail &&
                cartDetail.map((ele) => {
                  return (
                    <>
                      {" "}
                      <CartDetailCard ele={ele} />
                    </>
                  );
                })}

              {!iscart &&
                savedItems &&
                savedItems.map((ele) => {
                  return (
                    <>
                      <SavedDetailCard ele={ele} />
                    </>
                  );
                })}
              <Flex>
                <Stack w="50%">
                  <Text color="#737373" fontSize="14px">
                    Accepted Payment Methods
                  </Text>
                  <Image
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0tubqqOWuY630wllhqVlo4_NS1aNna-mBzA&usqp=CAU"
                    alt="payment"
                    w="18%"
                    pb={3}
                  />
                  <Text fontSize="14px">
                    Need help? Call 1.888.966.6283 or{" "}
                    <Link color="global.blue">chat with us</Link>
                  </Text>
                  <Text color="#737373" fontSize="12px">
                    *Pricing and Promotion details.{" "}
                    <Link textDecoration="underline">See more.</Link>
                  </Text>
                </Stack>

                <Stack w="50%" visibility={iscart ? "visible" : "hidden"}>
                  <SimpleGrid columns={2} justify="space-between">
                    <Text>Subtotal</Text>
                    <Text textAlign="right">$ {sum.toFixed(2)}</Text>
                    <Text>Shipping</Text>
                    <Flex justify="flex-end" align="center" gap={1}>
                      <FiAlertCircle color="#00819d" />
                      <Text>Free</Text>
                    </Flex>
                    <Text>Estimated tax</Text>
                    <Text textAlign="right">
                      $ {((sum * 10) / 100).toFixed(2)}
                    </Text>
                    <Divider />
                    <Divider />
                    <Text fontWeight="430" fontSize="17px">
                      Estimated total
                    </Text>
                    <Text fontWeight="430" fontSize="17px" textAlign="right">
                      $ {(sum + (sum * 10) / 100).toFixed(2)}
                    </Text>
                  </SimpleGrid>
                  <Flex align="center">
                    <Text fontSize="11px">
                      or 4 interest-free payments of $71.56 with
                    </Text>
                    <Text fontSize="16px" fontWeight="bold" pr={1}>
                      afterpay
                    </Text>
                    <FiAlertCircle fontSize="11px" />
                  </Flex>
                  <Button
                    bg="global.blue"
                    borderRadius="none"
                    color="white"
                    fontWeight="normal"
                    _hover={buttonfilled}
                    onClick={handleCheckout}
                    visibility={sum < 1 ? "hidden" : "visible"}
                  >
                    Check Out
                  </Button>
                  <Flex align="center">
                    <Flex fontSize="11px">
                      <BsBagCheck />
                      <Text>
                        Get a $40 Bonus Note when you use a new Nordstrom credit
                        card.
                      </Text>
                      <Link color="global.blue">Apply now</Link>
                    </Flex>
                  </Flex>
                </Stack>
              </Flex>
            </Stack>
            <Hide below="md">
              <Stack w="25%" p={5} pt={0} borderLeft="1px solid #bbb">
                <Text fontWeight="bold" t>
                  People also viewed
                </Text>
                <Flex>
                  <Image src="https://n.nordstrommedia.com/id/sr3/754e4c52-acf2-44da-95da-1dd724b7cac5.jpeg?q=45&dpr=2&h=135.8&w=45" />
                  <Box fontSize="13px">
                    <Text>NORDSTROM RACK</Text>
                    <Text fontWeight="450">$19.97</Text>
                    <Stars total={5} />
                    <Text>Size small available</Text>
                  </Box>
                </Flex>
                <Flex>
                  <Image src="https://n.nordstrommedia.com/id/sr3/b4a3150a-933d-4763-aa18-96ac0754bec2.jpeg?q=45&dpr=2&h=135.8&w=45" />
                  <Box fontSize="13px">
                    <Text>Z by Zella</Text>
                    <Text fontWeight="450">$48.97</Text>
                    <Stars total={3} />
                    <Text>Size small available</Text>
                  </Box>
                </Flex>
                <Flex>
                  <Image src="https://n.nordstrommedia.com/id/sr3/521bca57-0285-4a11-b4e6-51342a4b1b36.jpeg?q=45&dpr=2&h=135.8&w=45" />
                  <Box fontSize="13px">
                    <Text>NORDSTROM RACK</Text>
                    <Text fontWeight="450">$26.97</Text>
                    <Stars total={4} />
                    <Text>Size small available</Text>
                  </Box>
                </Flex>
                <Flex>
                  <Image src="https://n.nordstrommedia.com/id/sr3/fd82a676-e6f4-409c-b272-5fe2daafd745.jpeg?q=45&dpr=2&h=135.8&w=45" />
                  <Box fontSize="13px">
                    <Text>Z by Zella</Text>
                    <Text fontWeight="450">$19.97</Text>
                    <Stars total={5} />
                    <Text>Size small available</Text>
                  </Box>
                </Flex>
              </Stack>
            </Hide>
          </Flex>
        </Stack>
      </Stack>
    </div>
  );
};

const CartDetailCard = ({ ele }) => {
  const { cartDetail, setcartDetail, savedItems, setsavedItems } =
    useContext(AppContext);
  function addDays(n) {
    var t = new Date();
    t.setDate(t.getDate() + n);
    var month = "0" + (t.getMonth() + 1);
    var date = "0" + t.getDate();
    month = month.slice(-2);
    date = date.slice(-2);
    var ndate = date + "/" + month + "/" + t.getFullYear();
    return ndate;
  }
  const handleQuantity = (quantity, id, name) => {
    const array = cartDetail.map((ele) => {
      if (ele.title === name) {
        ele.quantity = +quantity;
      }
      return ele;
    });
    setcartDetail(array);
  };
  const handleRemove = (name) => {
    const array = cartDetail.filter((ele) => {
      return ele.title !== name;
    });

    setcartDetail(array);
  };
  const handleSave = (item) => {
    const saveArray = [...savedItems, item];
    setsavedItems(saveArray);

    const array = cartDetail.filter((ele) => {
      return ele.title !== item.title;
    });

    setcartDetail(array);
  };
  return (
    <Stack pt={3} pb={8} borderBottom="1px solid #bbb">
      <Flex h="150px" justify="space-between">
        <Flex gap={6}>
          <Image src={ele.image[0]} alt={ele.title} w="30%" h="100%" />
          <Stack fontSize="14px" spacing={3}>
            <Text>{ele.title}</Text>
            <Text>Item : {ele.id % 2 === 0 ? "6547894" : "125344"}</Text>
            <Flex align="top" gap={1}>
              <BsTruck fontSize="24px" />
              <Box>
                {" "}
                <Text>Delivery on </Text>
                <Text color="#737373">{addDays(3)}</Text>
              </Box>
            </Flex>

            <Flex gap={4} color="global.blue">
              <Text
                _hover={{ color: "#5dafc0", cursor: "pointer" }}
                onClick={() => {
                  handleRemove(ele.title);
                }}
              >
                Remove
              </Text>
              <Text
                _hover={{ color: "#5dafc0", cursor: "pointer" }}
                onClick={() => {
                  handleSave(ele);
                }}
              >
                Save for later
              </Text>
            </Flex>
          </Stack>
        </Flex>
        <Flex justify="space-between" w="40%">
          <Flex color="global.blue" gap={2} w="30%">
            <Text>Qty</Text>
            <Select
              variant="unstyled"
              // w="70%"
              onChange={(e) => {
                handleQuantity(e.target.value, ele.id, ele.title);
              }}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </Select>
          </Flex>
          <Stack fontSize="14px" spacing={3}>
            <Flex>
              <Text fontWeight="450">
                ${(ele.price * ele.quantity).toFixed(2)}
              </Text>
              <Text>(${ele.price}each)</Text>
            </Flex>

            <Box>
              <Text>Now :${ele.price}</Text>
              <Text>
                *
                <Text as="del">
                  ${((ele.price * 100) / ele.discount).toFixed(2)}
                </Text>
              </Text>
            </Box>
          </Stack>
        </Flex>
      </Flex>
    </Stack>
  );
};

const SavedDetailCard = ({ ele }) => {
  const { cartDetail, setcartDetail, savedItems, setsavedItems } =
    useContext(AppContext);

  const handleRemove = (name) => {
    const array = savedItems.filter((ele) => {
      return ele.title !== name;
    });

    setsavedItems(array);
  };
  const handleSave = (item) => {
    const cartArray = [...cartDetail, item];
    setcartDetail(cartArray);

    const array = savedItems.filter((ele) => {
      return ele.title !== item.title;
    });

    setsavedItems(array);
  };
  return (
    <Stack pt={3} pb={8} borderBottom="1px solid #bbb">
      <Flex h="150px" justify="space-between">
        <Flex gap={6}>
          <Image src={ele.image[0]} alt={ele.title} w="30%" h="100%" />
          <Stack fontSize="14px" spacing={3}>
            <Text>{ele.title}</Text>
            <Text>Item : {(Math.random() * 100000).toFixed(0)}</Text>

            <Flex gap={4} color="global.blue">
              <Text
                _hover={{ color: "#5dafc0", cursor: "pointer" }}
                onClick={() => {
                  handleRemove(ele.title);
                }}
              >
                Remove
              </Text>
              <Text
                _hover={{ color: "#5dafc0", cursor: "pointer" }}
                onClick={() => {
                  handleSave(ele);
                }}
              >
                Move to bag
              </Text>
            </Flex>
          </Stack>
        </Flex>
        <Flex justify="space-between" w="40%">
          <Text>Qty : {ele.quantity}</Text>
          <Stack fontSize="14px" spacing={3}>
            <Text fontWeight="450">
              {" "}
              ${(ele.price * ele.quantity).toFixed(2)}
            </Text>

            <Box>
              <Text>Now :${ele.price}</Text>
              <Text>
                *
                <Text as="del">
                  ${((ele.price * 100) / ele.discount).toFixed(2)}
                </Text>
              </Text>
            </Box>
          </Stack>
        </Flex>
      </Flex>
    </Stack>
  );
};
export default Cart;

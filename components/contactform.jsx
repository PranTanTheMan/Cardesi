import {
  FormControl,
  Input,
  Flex,
  Heading,
  Textarea,
  Button,
  Box,
  Text,
  useDisclosure,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Stack,
  Icon,
} from "@chakra-ui/react";
import { BsArrowRight } from "react-icons/bs";
import { EmailIcon, PhoneIcon } from "@chakra-ui/icons";
import { FaInstagram } from "react-icons/fa";
import Link from "next/link";

export default function Contact() {
  const {
    isOpen: ContactSuccess,
    onClose,
    onOpen,
  } = useDisclosure({ defaultIsOpen: false });
  return ContactSuccess ? (
    <Box h={"51vh"}>
      <Alert
        borderRadius={"10px"}
        margin={"200px auto"}
        status="success"
        width={"400px"}
      >
        <Flex justifyContent={"center"} alignItems={"center"}>
          <AlertIcon />

          <Box>
            <AlertTitle color={"black"}>Success!</AlertTitle>
            <AlertDescription color={"black"}>
              Your message has been received. We will review your message and
              respond within the next 48 hours!
            </AlertDescription>
          </Box>
        </Flex>
      </Alert>
    </Box>
  ) : (
    <>
      <Box position={"relative"}>
        <Stack>
          <div className="contact-image">
            {/* src="/Dealership.jpg"
            alt="image"
            width={"100%"}
            height={"100vh"}
            zIndex={-1}
            objectFit={"cover"}
            className="hero-image" */}
          </div>
          <Box
            color="white"
            position={"absolute"}
            top={"50%"}
            left={"50%"}
            transform={"translate(-50%, -50%)"}
          >
            <div className="contact-container">
              <Flex
                height={"400px"}
                justifyContent={"center"}
                flexDirection={"column"}
                alignItems="center"
              >
                <Heading
                  fontWeight={"700"}
                  fontSize={{ base: "40px", md: "72px" }}
                  maxWidth={"900px"}
                  textAlign="center"
                  color={"blackAlpha.800"}
                >
                  Having trouble?{" "}
                  <span className="hero-gradient">
                    We&apos;re here to help.
                  </span>
                </Heading>
              </Flex>
            </div>
          </Box>
        </Stack>
      </Box>
      {/* SYMBOLS AND STUFF */}
      <Flex
        w={"100%"}
        justifyContent={"center"}
        alignItems={"center"}
        flexWrap={"wrap"}
        h={{ base: "70vh", md: "40vh" }}
        gap={20}
      >
        <Flex
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Link href={"tel:6122231809"}>
            <Box
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              bgColor={"blackAlpha.700"}
              boxSize={"100px"}
              borderRadius={"50%"}
              transition={"all 0.3s ease-in-out"}
              mb={5}
              _hover={{
                transform: "scale(0.95)",
                transition: "all 0.3s ease-in-out",
                cursor: "pointer",
              }}
            >
              <PhoneIcon color={"#6db8ba"} boxSize={"40px"} />
            </Box>
          </Link>
          <Text fontWeight={"600"} color={"#6db8ba"}>
            {"+1 (612) 223-1809"}
          </Text>
        </Flex>
        <Flex
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Link href={"mailto:contact.cardesi@gmail.com"}>
            <Box
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              bgColor={"blackAlpha.700"}
              boxSize={"100px"}
              borderRadius={"50%"}
              mb={5}
              _hover={{
                transform: "scale(0.95)",
                transition: "all 0.3s ease-in-out",
                cursor: "pointer",
              }}
            >
              <EmailIcon color={"#6db8ba"} boxSize={"40px"} />
            </Box>
          </Link>
          <Text fontWeight={"600"} color={"#6db8ba"}>
            contact.cardesi@gmail.com
          </Text>
        </Flex>
        <Flex
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Link href={"https://www.instagram.com"}>
            <Box
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              bgColor={"blackAlpha.700"}
              boxSize={"100px"}
              borderRadius={"50%"}
              mb={5}
              _hover={{
                transform: "scale(0.95)",
                transition: "all 0.3s ease-in-out",
                cursor: "pointer",
              }}
            >
              <Icon as={FaInstagram} color={"#6db8ba"} boxSize={"40px"} />
            </Box>
          </Link>
          <Text fontWeight={"600"} color={"#6db8ba"}>
            @CarDesiWeb
          </Text>
        </Flex>
      </Flex>
      {/* CONTACT FORM */}

      <Box position={"relative"}>
        <Stack>
          <div className="contact-image2">
            {/* src="/Dealership.jpg"
            alt="image"
            width={"100%"}
            height={"100vh"}
            zIndex={-1}
            objectFit={"cover"}
            className="hero-image" */}
          </div>
          <Box
            color="white"
            position={"absolute"}
            top={"50%"}
            left={"50%"}
            transform={"translate(-50%, -50%)"}
          >
            <div className="contact-container">
              <Flex
                margin={"2rem 2rem"}
                justifyContent={"center"}
                color={"#6db8ba"}
              >
                <Flex direction={["column", "row"]}>
                  <Box
                    padding={"50px"}
                    borderRadius={"20px"}
                    bg="blue.800"
                    backgroundRepeat="no-repeat"
                    backgroundSize="cover"
                    maxWidth="501px"
                  >
                    <Heading fontSize={"4xl"} mb={"30px"}>
                      Contact Cardesi
                    </Heading>
                    <FormControl height="full">
                      <Input
                        mb={"40px"}
                        _placeholder={{
                          color: "#6db8ba",
                        }}
                        padding="0"
                        placeholder="EMAIL"
                        type="email"
                        border="none"
                        borderRadius="0px"
                        borderBottom="1px"
                        borderBottomColor={"#116467"}
                        _focus={{
                          "box-shadow": "none",
                        }}
                      />
                      <Flex mb="40px">
                        <Box>
                          <Input
                            _placeholder={{
                              color: "#6db8ba",
                            }}
                            padding="0"
                            placeholder="FIRST NAME"
                            border="none"
                            borderRadius="0px"
                            borderBottom="1px"
                            borderBottomColor={"#116467"}
                            _focus={{
                              "box-shadow": "none",
                            }}
                          />
                        </Box>
                        <Box ml="20px">
                          <Input
                            _placeholder={{
                              color: "#6db8ba",
                            }}
                            padding="0"
                            placeholder="LAST NAME"
                            border="none"
                            borderRadius="0px"
                            borderBottom="1px"
                            borderBottomColor={"#116467"}
                            _focus={{
                              "box-shadow": "none",
                            }}
                          />
                        </Box>
                      </Flex>
                      <Textarea
                        _placeholder={{
                          color: "#6db8ba",
                        }}
                        padding="0"
                        placeholder="MESSAGE"
                        border="none"
                        borderRadius="0px"
                        borderBottom="1px"
                        borderBottomColor={"#116467"}
                        marginBottom="30px"
                        height="17vh"
                        _focus={{
                          "box-shadow": "none",
                        }}
                      />

                      <Button
                        backgroundColor={"#6db8ba"}
                        borderRadius="full"
                        color={"black"}
                        px="10"
                        marginTop={3}
                        fontWeight="normal"
                        rightIcon={<BsArrowRight position={"relative"} />}
                        transition={"all 0.3s ease-in-out"}
                        onClick={onOpen}
                        _hover={{
                          filter: "brightness(0.8)",
                        }}
                        _active={{
                          filter: "brightness(0.8)",
                        }}
                      >
                        SEND
                      </Button>
                    </FormControl>
                  </Box>
                </Flex>
              </Flex>
            </div>
          </Box>
        </Stack>
      </Box>
    </>
  );
}

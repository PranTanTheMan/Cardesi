import { motion } from "framer-motion";
import {
  FormControl,
  Input,
  Flex,
  Heading,
  Textarea,
  Button,
  Box,
  Text,
  useColorModeValue,
  useDisclosure,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  isLoading,
  Image,
} from "@chakra-ui/react";
import { BsArrowRight } from "react-icons/bs";

export default function Contact() {
  const coolor = useColorModeValue("#6db8ba", "white");
  const coolorDark = useColorModeValue("#116467", "white");
  const {
    isOpen: ContactSuccess,
    onClose,
    onOpen,
  } = useDisclosure({ defaultIsOpen: false });
  return ContactSuccess ? (
    <Box h={"50vh"}>
      <Alert
        borderRadius={"10px"}
        margin="10rem auto"
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
      <Flex margin={"2rem 2rem"} justifyContent={"center"} color={coolor}>
        <Flex
          direction={["column", "row"]}
          marginTop="50px"
          marginBottom="50px"
        >
          <Box
            padding={"50px"}
            borderRadius={"20px"}
            bg="#2c5382"
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
                  color: coolor,
                }}
                padding="0"
                placeholder="EMAIL"
                type="email"
                border="none"
                borderRadius="0px"
                borderBottom="1px"
                borderBottomColor={coolorDark}
                _focus={{
                  "box-shadow": "none",
                }}
              />
              <Flex mb="40px">
                <Box>
                  <Input
                    _placeholder={{
                      color: coolor,
                    }}
                    padding="0"
                    placeholder="FIRST NAME"
                    border="none"
                    borderRadius="0px"
                    borderBottom="1px"
                    borderBottomColor={coolorDark}
                    _focus={{
                      "box-shadow": "none",
                    }}
                  />
                </Box>
                <Box ml="20px">
                  <Input
                    _placeholder={{
                      color: coolor,
                    }}
                    padding="0"
                    placeholder="LAST NAME"
                    border="none"
                    borderRadius="0px"
                    borderBottom="1px"
                    borderBottomColor={coolorDark}
                    _focus={{
                      "box-shadow": "none",
                    }}
                  />
                </Box>
              </Flex>
              <Textarea
                _placeholder={{
                  color: coolor,
                }}
                padding="0"
                placeholder="MESSAGE"
                border="none"
                borderRadius="0px"
                borderBottom="1px"
                borderBottomColor={coolorDark}
                marginBottom="30px"
                height="17vh"
                _focus={{
                  "box-shadow": "none",
                }}
              />

              <Button
                backgroundColor={coolor}
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
    </>
  );
}

import Head from "next/head";
import {
  Input,
  Flex,
  Text,
  Heading,
  Box,
  Button,
  Grid,
  useDisclosure,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";
import Footer from "../components/footer";
import { BsArrowRight } from "react-icons/bs";

export default function Book() {
  const {
    isOpen: BookSuccess,
    onClose,
    onOpen,
  } = useDisclosure({ defaultIsOpen: false });
  return BookSuccess ? (
    <>
      <Box h={"50vh"}>
        <Alert
          borderRadius={"10px"}
          margin="10rem auto"
          status="success"
          width={"350px"}
          height={"150px"}
        >
          <Flex justifyContent={"center"} alignItems={"center"}>
            <AlertIcon />

            <Box>
              <AlertTitle color={"black"}>Success!</AlertTitle>
              <AlertDescription color={"black"}>
                Thank you for booking the appointment. We look forward to seeing
                you.
              </AlertDescription>
            </Box>
          </Flex>
        </Alert>
      </Box>
      <Footer />
    </>
  ) : (
    <>
      <Flex marginY={"160px"} direction={"column"}>
        <Heading
          maxWidth={"700px"}
          textAlign={"center"}
          color={"primary"}
          margin="auto"
        >
          Book an Appointment with a Sales Representative at Cardesi today!
        </Heading>
        <Flex
          borderRadius={"20px"}
          my={"2rem!important"}
          padding="1rem"
          margin="auto"
          maxWidth="400px"
          direction="column"
          bg="#2c5382"
        >
          <Input
            color={"white !important"}
            margin="auto"
            border="none"
            placeholder="Select Date and Time"
            size="lg"
            type="datetime-local"
          />
          <Button
            borderRadius="10px"
            color={"black"}
            marginTop={3}
            fontWeight="normal"
            rightIcon={<BsArrowRight position={"relative"} />}
            transition={"all 0.3s ease-in-out"}
            onClick={onOpen}
            backgroundColor="#6db8ba"
            _hover={{
              filter: "brightness(0.8)",
            }}
            _active={{
              filter: "brightness(0.6)",
            }}
          >
            Book now
          </Button>
        </Flex>
      </Flex>
      <Footer />
    </>
  );
}

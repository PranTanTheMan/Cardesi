import React from "react";
import {
  Flex,
  Heading,
  Input,
  Button,
  useDisclosure,
  Box,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";
import Footer from "../components/footer";
import { BsArrowRight } from "react-icons/bs";

export default function Appointemnt() {
  const {
    isOpen: BookSuccess,
    onClose,
    onOpen, // <-- This is the function that opens the modal
  } = useDisclosure({ defaultIsOpen: false });
  return BookSuccess ? (
    <>
      <Box h={"53vh"}>
        <Alert
          borderRadius={"10px"}
          margin="12rem auto"
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
      <Flex marginY={"170px"} direction={"column"}>
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
          maxWidth="335px"
          width={"100%"}
          direction="column"
          bg="#2c5382"
        >
          <Input
            color={"white !important"}
            margin="auto"
            border="1px solid #6db8ba"
            placeholder="Select Date and Time"
            width="300px"
            height={"70px"}
            // size="lg"
            type="datetime-local"
            size={"lg"}
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

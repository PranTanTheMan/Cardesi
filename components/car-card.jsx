import {
  Text,
  Flex,
  Box,
  Badge,
  Heading,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Image,
} from "@chakra-ui/react";

export default function CarCard({
  name,
  make,
  smallDescription,
  bigDescription,
  condition,
  year,
  image,
  miles,
  price,
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box
        borderRadius={"10px"}
        margin="2rem"
        width="300px"
        padding={"1.5rem"}
        backgroundColor={"blue.800"}
        transition={"all 0.3s ease-in-out"}
        _hover={{
          boxShadow: "20px 20px 90px rgba(33,33,33,.2)",
        }}
      >
        <Badge px={"12px"} borderRadius={"full"} colorScheme={"teal"}>
          {make}
        </Badge>
        <Badge mx="12px" px={"12px"} borderRadius={"full"} colorScheme={"teal"}>
          Year: {year}
        </Badge>
        <Heading fontSize={"3xl"} marginBottom={"10px"} marginTop={"5px"}>
          {name}
        </Heading>

        <hr></hr>
        <Text marginTop={"6px"}>{smallDescription}</Text>

        <Button
          padding={"0px 10px 0px 12px "}
          transition={"all 0.3s ease-in-out"}
          mt={"12px"}
          bgColor={"primary"}
          color={"textColor"}
          fontSize={"sm"}
          _hover={{
            bgColor: "primary",
            opacity: "0.79",
            transform: "scale(0.95)",
          }}
          onClick={onOpen}
        >
          Read more
        </Button>
      </Box>
      <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent marginBottom="6rem">
          <ModalHeader fontSize={"3xl"} color={"primary"}>
            {name}
          </ModalHeader>
          <hr></hr>

          <ModalBody marginTop={"10px"}>
            <Text color={"blackAlpha.800"} mb="1rem">
              {bigDescription}
            </Text>
            <hr></hr>
            <br />
            <Text color={"blackAlpha.800"}>
              <b>Year:</b> {year}
            </Text>
            <Text color={"blackAlpha.800"}>
              <b>Condition:</b> {condition}
            </Text>
            <Text color={"blackAlpha.800"}>
              <b>Miles</b> {miles}
            </Text>
            <Text marginBottom={"10px"} color={"blackAlpha.800"}>
              <b>Price:</b> ${price}
            </Text>

            <hr></hr>

            <Image
              marginTop={"20px"}
              borderRadius={"20px"}
              src={image}
              alt={"something"}
            />
          </ModalBody>

          <ModalFooter>
            <Button
              _hover={{
                bgColor: "primary",
                opacity: "0.79",
                transform: "scale(0.95)",
              }}
              bgColor={"primary"}
              color={"textColor"}
              mr={3}
              onClick={onClose}
            >
              Close
            </Button>
            <Button
              _hover={{
                bgColor: "primary",
                opacity: "0.79",
                transform: "scale(0.95)",
              }}
              bgColor={"primary"}
              color={"textColor"}
            >
              <a href="./book" target="_blank" rel="noreferrer">
                Book an appointment to view the Car
              </a>
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

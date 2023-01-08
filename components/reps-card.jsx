import { Text, Box, Badge, Heading, Image, Link } from "@chakra-ui/react";

export default function RepCard({ name, description, image, role, email }) {
  return (
    <>
      <Box
        borderRadius={"10px"}
        width="300px"
        padding={"1.5rem"}
        backgroundColor={"blue.500"}
      >
        <Badge borderRadius="5px" colorScheme="blue">
          {role}
        </Badge>
        <Heading fontSize={"3xl"} marginTop={".5rem"} color="blue.100">
          {name}
        </Heading>
        <Image
          marginTop={"10px"}
          borderRadius={"20px"}
          src={image}
          alt={name}
        />
        <Text color={"teal.100"} marginBottom={"10px"} marginTop={".7rem"}>
          {description}
        </Text>
        <Link
          transitionDuration="0.5s"
          borderRadius={"10px"}
          padding={"3px 10px 3px 10px"}
          backgroundColor={"blue.400"}
          href={`mailto:${email}`}
          _hover={{
            textDecoration: "none",
            color: "purple.900",
            backgroundColor: "blue.300",
          }}
        >
          Email
        </Link>
      </Box>
    </>
  );
}

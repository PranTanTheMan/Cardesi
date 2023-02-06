import React from "react";
import {
  IconButton,
  VisuallyHidden,
  useDisclosure,
  Flex,
  Text,
  Heading,
  useColorModeValue,
  chakra,
  HStack,
  Button,
  Box,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Image,
} from "@chakra-ui/react";
import { AiOutlineMenu } from "react-icons/ai";
import Link from "next/link";

export default function Navbar() {
  const mobileNav = useDisclosure();
  const close = mobileNav.onClose;
  return (
    <>
      <chakra.header
        bg={"white"}
        w="full"
        px={{
          base: 2,
          sm: 4,
        }}
        py={1}
        shadow="md"
        color={"black"}
      >
        <Flex alignItems="center" justifyContent="space-between" mx="auto">
          <Flex>
            <chakra.a href="/" title="Home" display="flex" alignItems="center">
              <VisuallyHidden>Cardesi.</VisuallyHidden>
            </chakra.a>
            <chakra.a href="/" title="Home" display="flex" alignItems="center">
              <Image
                transition="all 0.2s ease-in-out"
                src="/CarDesiLogo.png"
                alt="Cardesi"
                boxSize={"65px"}
                ml={{ base: "0.8rem", md: "6.5rem" }}
                _hover={{
                  cursor: "pointer",
                  transform: "scale(0.95)",
                  transition: "all 0.2s ease-in-out",
                }}
              />
            </chakra.a>
          </Flex>
          <HStack display="flex" alignItems="center" spacing={1}>
            <Link href="book">
              <Button
                className="underline"
                color={"black"}
                variant="ghost"
                fontSize={"18px"}
                px={"0"}
                mr={{ base: "0.8rem", md: "1.5rem" }}
              >
                Book an Appointment
              </Button>
            </Link>
            <Box
              display={{
                base: "inline-flex",
                md: "inline-flex",
              }}
            >
              <IconButton
                display={{
                  base: "flex",
                  md: "flex",
                }}
                aria-label="Open menu"
                fontSize="24px"
                color="gray.800"
                variant="ghost"
                icon={<AiOutlineMenu />}
                onClick={mobileNav.onOpen}
                mr={{ base: "0.8rem", md: "3.5rem" }}
                ml={{ base: "0.8rem", md: "0.8rem" }}
                _hover={{
                  color: "primary",
                  transition: "all 0.2s ease-in-out",
                }}
                transition="all 0.2s ease-in-out"
              />

              <Drawer
                pos="absolute"
                top={0}
                left={0}
                right={0}
                p={2}
                pb={4}
                bgColor={"white"}
                rounded="sm"
                shadow="sm"
                size={"full"}
                isOpen={mobileNav.isOpen}
                onClose={close}
                placement="right"
              >
                <DrawerOverlay />
                <DrawerContent>
                  <DrawerCloseButton
                    color={"black"}
                    pr={"25px"}
                    pt={"40px"}
                    size={"lg"}
                    _hover={{
                      color: "primary",
                      transition: "all 0.2s ease-in-out",
                    }}
                  />
                  <DrawerBody
                    pt={"100px"}
                    display={"flex"}
                    flexDirection={"column"}
                    gap={{ base: "60px", md: "90px" }}
                    bgColor={"white"}
                  >
                    <Link href="/">
                      <Button
                        color={"primary"}
                        variant="ghost"
                        onClick={close}
                        fontSize={{ base: "40px", md: "80px" }}
                        fontWeight={"bold"}
                        textShadow={"20px 15px 1px rgba(0, 0, 0, 0.07)"}
                        _hover={{
                          textShadow: "0px 0px 0px #c7d4ff10",
                          cursor: "pointer",
                        }}
                        transition="all 0.2s ease-in-out"
                      >
                        Home
                      </Button>
                    </Link>
                    <Link href="salesreps">
                      <Button
                        color={"primary"}
                        variant="ghost"
                        onClick={close}
                        fontSize={{ base: "40px", md: "80px" }}
                        fontWeight={"bold"}
                        textShadow={"20px 15px 1px rgba(0, 0, 0, 0.07)"}
                        _hover={{
                          textShadow: "0px 0px 0px #c7d4ff10",
                          cursor: "pointer",
                        }}
                        transition="all 0.2s ease-in-out"
                      >
                        Sales Reps
                      </Button>
                    </Link>
                    <Link href="browse">
                      <Button
                        color={"primary"}
                        variant="ghost"
                        onClick={close}
                        fontSize={{ base: "40px", md: "80px" }}
                        fontWeight={"bold"}
                        textShadow={"20px 15px 1px rgba(0, 0, 0, 0.07)"}
                        _hover={{
                          textShadow: "0px 0px 0px #c7d4ff10",
                          cursor: "pointer",
                        }}
                        transition="all 0.2s ease-in-out"
                      >
                        Browse Cars
                      </Button>
                    </Link>
                    <Link href="loan">
                      <Button
                        color={"primary"}
                        variant="ghost"
                        onClick={close}
                        fontSize={{ base: "40px", md: "80px" }}
                        fontWeight={"bold"}
                        textShadow={"20px 15px 1px rgba(0, 0, 0, 0.07)"}
                        _hover={{
                          textShadow: "0px 0px 0px #c7d4ff10",
                          cursor: "pointer",
                        }}
                        transition="all 0.2s ease-in-out"
                      >
                        Loan Estimator
                      </Button>
                    </Link>
                    <Link href="contact">
                      <Button
                        color={"primary"}
                        variant="ghost"
                        onClick={close}
                        fontSize={{ base: "40px", md: "80px" }}
                        fontWeight={"bold"}
                        textShadow={"20px 15px 1px rgba(0, 0, 0, 0.07)"}
                        _hover={{
                          textShadow: "0px 0px 0px #c7d4ff10",
                          cursor: "pointer",
                        }}
                        transition="all 0.2s ease-in-out"
                      >
                        Contact
                      </Button>
                    </Link>
                  </DrawerBody>
                </DrawerContent>
              </Drawer>
            </Box>
          </HStack>
        </Flex>
      </chakra.header>
    </>
  );
}

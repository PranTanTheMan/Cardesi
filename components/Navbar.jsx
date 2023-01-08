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
} from "@chakra-ui/react";
import { AiOutlineMenu } from "react-icons/ai";
import Link from "next/link";

export default function Navbar() {
  const bg = useColorModeValue("white", "gray.800");
  const text = useColorModeValue("black");
  const mobileNav = useDisclosure();
  const close = mobileNav.onClose;
  return (
    <>
      <chakra.header
        bg={bg}
        w="full"
        px={{
          base: 2,
          sm: 4,
        }}
        py={4}
        shadow="md"
        color={text}
      >
        <Flex alignItems="center" justifyContent="space-between" mx="auto">
          <Flex>
            <chakra.a
              href="/"
              title="Choc Home Page"
              display="flex"
              alignItems="center"
            >
              <VisuallyHidden>Cardesi.</VisuallyHidden>
            </chakra.a>
            <chakra.h1 color={text} fontSize="xl" fontWeight="medium" ml="5rem">
              Cardesi
            </chakra.h1>
          </Flex>
          <HStack display="flex" alignItems="center" spacing={1}>
            <HStack
              spacing={1}
              mr={1}
              color="brand.500"
              display={{
                base: "none",
                md: "inline-flex",
              }}
            >
              <Link href="/">
                <Button color={text} variant="ghost">
                  Home
                </Button>
              </Link>
              <Link href="salesreps">
                <Button color={text} variant="ghost">
                  Sales Reps
                </Button>
              </Link>
              <Link href="browse">
                <Button color={text} variant="ghost">
                  Browse Cars
                </Button>
              </Link>
              <Link href="loan">
                <Button color={text} variant="ghost">
                  Loan Estimator
                </Button>
              </Link>
              <Link href="contact">
                <Button color={text} variant="ghost">
                  Contact
                </Button>
              </Link>
            </HStack>
            <Link href="book">
              <Button color={text} variant="ghost">
                Book an Appointement
              </Button>
            </Link>
            <Box
              display={{
                base: "inline-flex",
                md: "none",
              }}
            >
              <IconButton
                display={{
                  base: "flex",
                  md: "none",
                }}
                aria-label="Open menu"
                fontSize="20px"
                color="gray.800"
                _dark={{
                  color: "inherit",
                }}
                variant="ghost"
                icon={<AiOutlineMenu />}
                onClick={mobileNav.onOpen}
              />

              <Drawer
                pos="absolute"
                top={0}
                left={0}
                right={0}
                p={2}
                pb={4}
                bg={bg}
                rounded="sm"
                shadow="sm"
                size={"full"}
                isOpen={mobileNav.isOpen}
                onClose={close}
                placement="right"
              >
                <DrawerOverlay />
                <DrawerContent>
                  <DrawerCloseButton color={"black"} />
                  <DrawerBody
                    pt={"100px"}
                    display={"flex"}
                    flexDirection={"column"}
                    gap={"15"}
                  >
                    <Link href="/">
                      <Button color={text} variant="ghost" onClick={close}>
                        Home
                      </Button>
                    </Link>
                    <Link href="salesreps">
                      <Button color={text} variant="ghost" onClick={close}>
                        Sales Reps
                      </Button>
                    </Link>
                    <Link href="browse">
                      <Button color={text} variant="ghost" onClick={close}>
                        Browse Cars
                      </Button>
                    </Link>
                    <Link href="loan">
                      <Button color={text} variant="ghost" onClick={close}>
                        Loan Estimator
                      </Button>
                    </Link>
                    <Link href="contact">
                      <Button color={text} variant="ghost" onClick={close}>
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

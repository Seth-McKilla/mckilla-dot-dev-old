import Link from "next/link";
import Image from "next/image";
import {
  Box,
  Flex,
  Drawer,
  DrawerOverlay,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  Button,
  useDisclosure,
  useColorModeValue,
  useColorMode,
  IconButton,
  HStack,
  VStack,
} from "@chakra-ui/react";
import { FaSun, FaMoon, FaHeart } from "react-icons/fa";
import { MdMenu } from "react-icons/md";
import { MenuLink } from "components";

const menuItems = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About me",
    href: "/about-me",
  },
  // {
  //   label: "Posts",
  //   href: "/posts",
  // },
];

export default function NavBar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box
      as="header"
      position="fixed"
      w="100%"
      bg={useColorModeValue("blue.700", "gray.900")}
      px={4}
    >
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <Box>
          <Link href="/" passHref>
            <a>
              <Image
                src="/logo_white.png"
                alt="endevrs-logo"
                height={60}
                width={233}
              />
            </a>
          </Link>
        </Box>

        <Flex alignItems="center">
          <IconButton
            icon={<MdMenu />}
            aria-label="menu icon"
            variant="link"
            fontSize="40px"
            color="white"
            onClick={onOpen}
          />
          <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader borderBottomWidth="1px">Menu</DrawerHeader>

              <DrawerBody>
                <VStack spacing={4} mt={4}>
                  {menuItems.map((item) => (
                    <MenuLink key={item.label} onClose={onClose} {...item} />
                  ))}
                </VStack>
              </DrawerBody>

              <DrawerFooter>
                <HStack w="full" justify="center" spacing="24px">
                  <Link
                    href="https://github.com/sponsors/Seth-McKilla"
                    passHref
                  >
                    <a target="_blank" rel="noopener noreferrer">
                      <Button leftIcon={<FaHeart />} aria-label="heart">
                        Sponsor
                      </Button>
                    </a>
                  </Link>

                  <Button onClick={toggleColorMode}>
                    {colorMode === "light" ? <FaMoon /> : <FaSun />}
                  </Button>
                </HStack>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </Flex>
      </Flex>
    </Box>
  );
}

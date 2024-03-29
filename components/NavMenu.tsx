import Link from "next/link";
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
  IconButton,
  HStack,
  VStack,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { FaHeart } from "react-icons/fa";
import { MdMenu } from "react-icons/md";
import { ButtonThemeToggle, LinkText } from "components";

const menuItems = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Projects",
    href: "/projects",
  },
  {
    label: "Posts",
    href: "/posts",
  },
];

export default function NavMenu() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box as="header" position="fixed" w="100%" px={4} zIndex={10}>
      <Flex h={16} justifyContent="right">
        <Flex alignItems="center" borderRadius="full">
          <IconButton
            icon={<MdMenu />}
            aria-label="menu icon"
            variant="outline"
            fontSize="40px"
            colorScheme="blue"
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
                    <LinkText key={item.label} onClose={onClose} {...item} />
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
                        {"Sponsor"}
                      </Button>
                    </a>
                  </Link>

                  <ButtonThemeToggle />
                </HStack>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </Flex>
      </Flex>
    </Box>
  );
}

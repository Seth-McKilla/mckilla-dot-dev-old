import { FormEvent, ChangeEvent, useState, useEffect } from "react";
import {
  Stack,
  FormControl,
  Input,
  Button,
  useColorModeValue,
  Heading,
  Text,
  Container,
  Flex,
  CloseButton,
} from "@chakra-ui/react";
import { ImCheckmark } from "react-icons/im";

export default function CardSubscribe() {
  const [email, setEmail] = useState<string>("");
  const [state, setState] = useState<"initial" | "submitting" | "success">(
    "initial"
  );
  const [error, setError] = useState<boolean>(false);

  const handleClose = () => {
    localStorage.setItem("subscribeStatus", "declined");
  };

  return (
    <Flex
      position="fixed"
      top={{ base: 10, sm: "auto" }}
      bottom={{ base: "auto", sm: 5 }}
      right={{ base: "auto", sm: 5 }}
      left={{ base: "auto", sm: "auto" }}
      width={{ base: "100%", sm: "auto" }}
      align="center"
      justify="center"
      bg={useColorModeValue("white", "gray.800")}
      borderRadius="lg"
      boxShadow="lg"
    >
      <Container maxW="lg" p={6}>
        <CloseButton
          aria-label="Close"
          size="sm"
          sx={{
            position: "absolute",
            top: 2,
            right: 2,
          }}
          onClick={handleClose}
        />
        <Heading
          as="h2"
          fontSize={{ base: "xl", sm: "2xl" }}
          textAlign="center"
          mb={5}
        >
          Subscribe to the Newsletter
        </Heading>
        <Stack
          direction={{ base: "column", sm: "row" }}
          as="form"
          spacing="12px"
          onSubmit={(e: FormEvent) => {
            e.preventDefault();
            setError(false);
            setState("submitting");

            setTimeout(() => {
              if (email === "fail@example.com") {
                setError(true);
                setState("initial");
                return;
              }

              setState("success");
            }, 1000);
          }}
        >
          <FormControl>
            <Input
              variant="solid"
              borderWidth={1}
              color="gray.800"
              _placeholder={{
                color: "gray.400",
              }}
              borderColor={useColorModeValue("gray.300", "gray.700")}
              id="email"
              type="email"
              required
              placeholder="Your Email"
              aria-label="Your Email"
              value={email}
              disabled={state !== "initial"}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setEmail(e.target.value)
              }
            />
          </FormControl>
          <FormControl w={{ base: "100%", md: "40%" }}>
            <Button
              colorScheme={state === "success" ? "green" : "blue"}
              isLoading={state === "submitting"}
              w="100%"
              type={state === "success" ? "button" : "submit"}
            >
              {state === "success" ? <ImCheckmark /> : "Submit"}
            </Button>
          </FormControl>
        </Stack>
        <Text mt={2} textAlign="center" color={error ? "red.500" : "gray.500"}>
          {error
            ? "Oh no an error occurred! 😢 Please try again later."
            : "One email per week, never any spam 🙅‍♂️"}
        </Text>
      </Container>
    </Flex>
  );
}

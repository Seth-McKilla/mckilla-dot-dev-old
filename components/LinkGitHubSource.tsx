import {
  Box,
  Tooltip,
  useColorModeValue,
  useBreakpointValue,
} from "@chakra-ui/react";
import { VscGithub } from "react-icons/vsc";
import { LinkIcon } from "components";

interface Props {
  path: string;
}

export default function LinkGitHubSource({ path }: Props) {
  const hoverColor = useColorModeValue("blue.500", "blue.300");
  const size = useBreakpointValue({ base: 12, sm: 14 });

  return (
    <Tooltip label="Source code ↗" placement="right">
      <Box position="fixed" bottom={1} left={1} zIndex={10}>
        <LinkIcon
          label="GitHub source code"
          href={`https://github.com/Seth-McKilla/mckilla-dot-dev/blob/main/pages/${path}`}
          size={size}
          color="blue.700"
          hoverColor={hoverColor}
        >
          <VscGithub />
        </LinkIcon>
      </Box>
    </Tooltip>
  );
}

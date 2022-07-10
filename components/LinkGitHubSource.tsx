import { Box, Tooltip, useColorModeValue } from "@chakra-ui/react";
import { VscGithub } from "react-icons/vsc";
import { LinkIcon } from "components";

interface Props {
  path: string;
}

export default function LinkGitHubSource({ path }: Props) {
  const hoverColor = useColorModeValue("blue.600", "blue.300");

  return (
    <Tooltip label="Source code ↗" placement="right">
      <Box position="fixed" bottom={1} left={1} zIndex={10}>
        <LinkIcon
          label="GitHub source code"
          href={`https://github.com/Seth-McKilla/endevrs/blob/main/pages/${path}`}
          size={14}
          hoverColor={hoverColor}
        >
          <VscGithub />
        </LinkIcon>
      </Box>
    </Tooltip>
  );
}

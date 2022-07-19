import { Tooltip } from "@chakra-ui/react";
import { AiOutlineQuestionCircle } from "react-icons/ai";

interface Props {
  label: string;
}

export default function TooltipQuestionMark({ label }: Props) {
  return (
    <Tooltip hasArrow label={label} placement="top">
      <span>
        <AiOutlineQuestionCircle size={24} />
      </span>
    </Tooltip>
  );
}

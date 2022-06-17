import floatingHead from "../public/seth-headshot.png";

// Next
import Image from "next/image";

// Mui
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";

export default function FloatingHead() {
  const theme = useTheme();

  const styles = {
    zIndex: 10,
    height: "250px",
    width: "250px",
    border: `5px solid ${theme.palette.primary.main}`,
    backgroundColor: theme.palette.primary.main,
    borderRadius: "50%",
    boxShadow: "0 10px 15px 0px rgba(0, 0, 0, 0.8)",
    animation: "logo-float 5s ease-in-out infinite",
    "@keyframes logo-float": {
      "0%": {
        boxShadow: "0 10px 15px 0px rgba(0, 0, 0, 0.8)",
        transform: "translatey(0px)",
      },
      "50%": {
        boxShadow: "0 35px 15px 0px rgba(0, 0, 0, 0.4)",
        transform: "translatey(-25px)",
      },
      "100%": {
        boxShadow: "0 10px 15px 0px rgba(0, 0, 0, 0.8)",
        transform: "translatey(0px)",
      },
    },
  };

  return (
    <Box sx={styles}>
      <Image width={250} height={250} src={floatingHead} alt="seth-headshot" />
    </Box>
  );
}

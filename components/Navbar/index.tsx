import Image from "next/image";
import Link from "next/link";

// Mui
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Box sx={{ flexGrow: 1 }}>
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
          {/* <Link href="/posts" passHref>
            <Button color="inherit" size="large" variant="outlined">
              Blog
            </Button>
          </Link> */}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

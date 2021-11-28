// Mui
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
// import Button from "@mui/material/Button";

const ButtonAppBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            ENDEVRS
          </Typography>
          {/* <Button color="inherit">Projects</Button> */}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default ButtonAppBar;

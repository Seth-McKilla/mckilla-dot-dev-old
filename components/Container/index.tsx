import { ReactNode } from "react";
import PerfectScrollbar from "react-perfect-scrollbar";

//Mui
import { default as MuiContainer } from "@mui/material/Container";

const styles = {
  root: {
    overflowY: "auto" as "auto",
    width: "100vw",
    height: "calc(100vh - 64px)",
  },
  container: {
    paddingTop: "64px",
    width: "100vw",
    height: "calc(100vh - 64px)",
  },
};

const Container = ({ children }: { children: ReactNode }) => {
  return (
    <div style={styles.root}>
      <MuiContainer sx={styles.container} maxWidth="lg">
        <PerfectScrollbar>{children}</PerfectScrollbar>
      </MuiContainer>
    </div>
  );
};

export default Container;

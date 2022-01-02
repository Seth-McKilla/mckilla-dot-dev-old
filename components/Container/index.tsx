import { ReactNode } from "react";

//Mui
import { default as MuiContainer } from "@mui/material/Container";

const styles = {
  root: {
    overflowY: "auto" as "auto",
    width: "100vw",
    height: "calc(100vh - 66px)",
  },
  container: {
    paddingTop: "66px",
    width: "100vw",
    height: "calc(100vh - 66px)",
  },
};

const Container = ({ children }: { children: ReactNode }) => {
  return (
    <div style={styles.root}>
      <MuiContainer sx={styles.container} maxWidth="lg">
        {children}
      </MuiContainer>
    </div>
  );
};

export default Container;

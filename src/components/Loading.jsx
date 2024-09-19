import { Container, LinearProgress } from "@mui/material";
import React from "react";

const Loading = () => {
  return (
    <Container sx={{ padding: "80px 0px" }}>
      <LinearProgress color="primary" />
    </Container>
  );
};

export default Loading;

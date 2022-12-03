import { Box, Grid, Skeleton } from "@mui/material";
import React from "react";

export default function SkLivetream() {
  return (
    <Grid container wrap="nowrap">
      {Array.from(new Array(1)).map((x, index) => (
        <Grid item key={index} xs={12} sm={6} md={4} lg={12}>
          <Box padding={1}>
            <Skeleton variant="rectangular" width={"100%"} sx={{ bgcolor: "#c1c1c1bf" }} height={688} />
          </Box>
        </Grid>
      ))}
    </Grid>
  );
}

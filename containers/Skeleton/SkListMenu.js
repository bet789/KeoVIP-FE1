import React from "react";
import { Box, Grid, Skeleton } from "@mui/material";
export default function SkListMenu() {
  return (
    <Grid container wrap="nowrap">
      {Array.from(new Array(6)).map((x, index) => (
        <Grid item key={index} xs={12} sm={6} md={4} lg={6}>
          <Box padding={1}>
            <Skeleton variant="rectangular" width={"200px"} sx={{ bgcolor: "#c1c1c1bf" }} height={30} />
          </Box>
        </Grid>
      ))}
    </Grid>
  );
}

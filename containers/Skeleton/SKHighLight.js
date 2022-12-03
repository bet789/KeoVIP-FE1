import React from "react";
import { Box, Grid, Skeleton } from "@mui/material";
export default function SKHighLight() {
  return (
    <Grid container>
      {Array.from(new Array(16)).map((x, index) => (
        <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
          <Box padding={1}>
            <Skeleton variant="rectangular" width={"340px"} sx={{ bgcolor: "#c1c1c1bf" }} height={135} />
            <Skeleton variant="text" width={"340px"} sx={{ bgcolor: "#c1c1c1bf" }} />
          </Box>
        </Grid>
      ))}
    </Grid>
  );
}

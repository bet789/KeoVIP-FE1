import React from "react";
import { Box, Grid, Skeleton } from "@mui/material";
export default function SkListMatch() {
  return (
    <Grid container>
      {Array.from(new Array(12)).map((x, index) => (
        <Grid item key={index} xs={12} sm={6} md={4} lg={4}>
          <Box padding={1}>
            <Skeleton variant="rounded" width={"440px"} sx={{ bgcolor: "#c1c1c1bf" }} height={135} />
          </Box>
        </Grid>
      ))}
    </Grid>
  );
}

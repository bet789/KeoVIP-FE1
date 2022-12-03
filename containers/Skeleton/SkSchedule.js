import React from "react";
import { Box, Grid, Skeleton } from "@mui/material";
export default function SkSchedule() {
  return (
    <Grid container>
      {Array.from(new Array(7)).map((x, index) => (
        <Grid item key={index} xs={12} sm={6} md={4} lg={12}>
          <Box padding={1}>
            <Skeleton variant="text" width={"150px"} sx={{ bgcolor: "#c1c1c1bf" }} />
            <Skeleton variant="rectangular" width={"1380px"} sx={{ bgcolor: "#c1c1c1bf" }} height={50} />
          </Box>
        </Grid>
      ))}
    </Grid>
  );
}

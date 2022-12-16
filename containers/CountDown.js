import React from "react";
import { Box, Button, Typography } from "@mui/material";
import RedeemIcon from "@mui/icons-material/Redeem";
import { setTimer } from "../utility/setTimer";
import { ADS_KEOVIP } from "../contants";
export default function CountDown({ timer }) {
  const [minutes, seconds] = setTimer(timer);
  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "center" }} className="bxCount">
        <Button variant="contained">
          {minutes > 0 || seconds > 0 ? (
            <Typography>
              Vui Lòng Đợi {minutes} phút {seconds} giây nhận quà
            </Typography>
          ) : (
            <a href={ADS_KEOVIP} target="_blank">
              <RedeemIcon />
              NHẬN QUÀ NGAY
            </a>
          )}
        </Button>
      </Box>
    </>
  );
}

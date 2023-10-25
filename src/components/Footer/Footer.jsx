import { Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <footer>
      <Typography component="p" textAlign="center" width="100%" padding={'10px 0'} margin="30px 0">
        © {new Date().getFullYear()} All rights reserved | Made with ❤️ by{" "}
        <span>Ak Moorthi</span>
      </Typography>
    </footer>
  );
};

export default Footer;

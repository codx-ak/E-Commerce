import React from "react";
import { Button } from "@mui/material";
import { ArrowBack } from "@mui/icons-material";
import { Link } from "react-router-dom";

const BackButton = () => {
  return (
    <Link to="/home">
    <Button
      variant="text"
      startIcon={<ArrowBack />}
      sx={{ marginTop: 3 }}
      className="BackBtn"
    >
      Back
    </Button>
    </Link>
  );
};

export default BackButton;

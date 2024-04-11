import React, { useState } from "react";
import Snackbar from "@mui/material/Snackbar";
import { Button, TextField, Container, Box, Typography } from "@mui/material";

const Login = () => {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [isLogedIn, setIsLogedIn] = useState(false);
  const [snackBarOpen, setSnackBarOpen] = useState(false);

  const handleSubmit = () => {
    if (userId && password) {
      if (userId === "yogesh123" && password === "TestDemo") {
        setIsLogedIn(true);
        setSnackBarOpen(true);
        setErrorMsg("Submitted");
        // Redirect to homepage upon successful login
        window.location.href = "/homepage";
      } else {
        setSnackBarOpen(true);
        setErrorMsg("Incorrect userId and password");
      }
    } else {
      setSnackBarOpen(true);
      setErrorMsg("Enter UserId and Password...");
    }
  };

  return (
    <Container
      maxWidth="sm"
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        position: "relative",
      }}
    >
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >
        <Typography variant="h4" gutterBottom>
          Login
        </Typography>
        <Box width="100%" maxWidth={400}>
          <TextField
            label="UserId"
            fullWidth
            variant="outlined"
            margin="normal"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
          />
          <TextField
            label="Password"
            fullWidth
            variant="outlined"
            type="password"
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {!isLogedIn ? (
            <Button variant="contained" color="primary" onClick={handleSubmit}>
              Submit
            </Button>
          ) : (
            ""
          )}
        </Box>
        <Snackbar
          open={snackBarOpen}
          autoHideDuration={6000}
          onClose={() => setSnackBarOpen(false)}
          message={errorMsg}
        />
      </Box>
      {/* Default credentials section */}
      <Box
        style={{
          position: "absolute",
          top: 10,
          right: -337,
          backgroundColor: "#f0f0f0",
          padding: 10,
          borderRadius: 5,
          boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Typography variant="h5" gutterBottom>
          DEFAULT
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          userId: "yogesh123"
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          password: "TestDemo"
        </Typography>
      </Box>
    </Container>
  );
};

export default Login;

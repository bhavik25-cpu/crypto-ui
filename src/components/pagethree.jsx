import React from "react";
import { Container, Typography, Paper, Avatar, Grid } from "@mui/material";
import "./Page.css";
import userAvatar from "../assets/download.jpg"; // Import image using ES6 import syntax
import userAvatarOne from "../assets/images.jpg"; // Import image using ES6 import syntax


const Page = () => {
  return (
    <Container sx={{ mt: 4  ,width: 1200}} className="page-container">
      <Paper sx={{ p: 4 }}>
        {/* <Typography variant="h4" gutterBottom>
          User Profile
        </Typography> */}
        <Grid container spacing={3} alignItems="center">
          <Grid item>
            <Avatar
              alt="User Avatar"
              src={userAvatar} // Use imported image directly
              sx={{ width: 100, height: 130, borderRadius: 3 }}
            />
          </Grid>
          <Grid item>
            <Typography variant="h6">Buyer</Typography>
            <Typography variant="h6">John Doe</Typography>
            <Typography variant="subtitle1" color="textSecondary">
              john.doe@example.com
            </Typography>
          </Grid>
          <Grid item xs={4} /> {/* Add an empty Grid item to create space */}
          <Grid item >
            <Grid container direction="column" >
              <Typography variant="h6">Seller</Typography>
              <Typography variant="h6">Jane Doe</Typography>
              <Typography variant="subtitle1" color="textSecondary">
                jane.doe@example.com
              </Typography>
            </Grid>
          </Grid>
          <Grid item sx={{ display: "flex", justifyContent: "flex-end" }}>
            <Avatar
              alt="Opposite Image"
              src={userAvatarOne}
              sx={{ width: 100, height: 130, borderRadius: 3, marginLeft: 3 }}
            />
          </Grid>
        </Grid>

        <Grid container direction="column" spacing={3} sx={{ mt: 6 }}>
          <Grid
            item
            sx={{
              margin: "0.5rem",
              border: "1px solid lightblue",
              backgroundColor: "#F0F8FF",
              borderRadius: "4px",
              padding: "0.5rem",
            }}
          >
            <Typography variant="body1" className="your-selling">Your Selling: </Typography>
            <p className="right-side your-selling">0.00254 BTC</p>
          </Grid>
          <Grid
            item
            sx={{
              margin: "0.5rem",
              border: "1px solid white",
              backgroundColor: "white",
              borderRadius: "4px",
              padding: "0.5rem",
            }}
          >
            <Typography variant="body1">Payment Method</Typography>
            <p className="right-side"> Bank of America Bank 55</p>
          </Grid>
          <Grid
            item
            sx={{
              margin: "0.5rem",
              border: "1px solid lightblue",
              backgroundColor: "#F0F8FF",
              borderRadius: "4px",
              padding: "0.5rem",
            }}
          >
            <Typography variant="body1">Exchange Rate</Typography>
            <p className="right-side"> 0.0002245 BTC</p>
          </Grid>
          <Grid
            item
            sx={{
              margin: "0.5rem",
              border: "1px solid white",
              backgroundColor: "white",
              borderRadius: "4px",
              padding: "0.5rem",
            }}
          >
            <Typography variant="body1">Fee</Typography>
            <p className="right-side"> $28.00 USD</p>
          </Grid>
          <Grid
            item
            sx={{
              margin: "0.5rem",
              border: "1px solid lightblue",
              backgroundColor: "#F0F8FF",
              borderRadius: "4px",
              padding: "0.5rem",
            }}
          >
            <Typography variant="body1">Total:</Typography>
            <p className="right-side"> $854.00 USD</p>
          </Grid>
          <Grid
            item
            sx={{
              margin: "0.5rem",
              border: "1px solid white",
              backgroundColor: "white",
              borderRadius: "4px",
              padding: "0.5rem",
            }}
          >
            <Typography variant="body1">VAT</Typography>
            <p className="right-side vat"> $25.00 USD</p>
          </Grid>
          <Grid
            item
            sx={{
              margin: "0.5rem",
              border: "1px solid lightblue",
              backgroundColor: "#F0F8FF",
              borderRadius: "4px",
              padding: "0.5rem",
            }}
          >
            <Typography variant="body1">Subtotal </Typography>
            <p className="right-side">$1232.00 USD</p>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default Page;

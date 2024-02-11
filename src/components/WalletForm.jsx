import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import ShareRoundedIcon from "@mui/icons-material/ShareRounded";
import UnfoldLessRoundedIcon from "@mui/icons-material/UnfoldLessRounded";
import CurrencyLiraOutlinedIcon from "@mui/icons-material/CurrencyLiraOutlined";
import FileCopyIcon from "@mui/icons-material/FileCopy"; // Import FileCopyIcon
import Typography from "@mui/material/Typography"; // Import Typography

import {
  Button,
  FormControl,
  TextField,
  FormHelperText,
  Card,
  CardContent,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  IconButton
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import InputAdornment from "@mui/material/InputAdornment";

const BuyCryptoForm = () => {
  const validationSchema = Yup.object().shape({
    cryptocurrency: Yup.string().required("Cryptocurrency is required"),
    paymentMethod: Yup.string().required("Payment method is required"),
    walletAddress: Yup.string().required("Wallet address is required"),
    amount: Yup.number()
      .min(0.001, "Minimum amount is 0.001 BTC")
      .required("Amount is required")
  });

  const initialValues = {
    cryptocurrency: "",
    paymentMethod: "",
    walletAddress: "",
    amount: ""
  };

  const [expanded, setExpanded] = useState(false);

  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <Accordion
      expanded={expanded}
      onChange={() => setExpanded(!expanded)}
      sx={{
        maxWidth: 400,
        marginTop: "2rem"
      }}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        sx={{ fontWeight: "bold", fontSize: "20px" }}
      >
        Walet Address
      </AccordionSummary>
      <AccordionDetails>
        <Card variant="outlined" sx={{ width: "100%" }}>
          <CardContent>
            <Formik
              initialValues={initialValues}
              onSubmit={handleSubmit}
              validationSchema={validationSchema}
            >
              {({ errors, touched }) => (
                <Form>
                  <FormControl fullWidth sx={{ marginBottom: "1rem" }}>
                    <FormHelperText
                      sx={{
                        fontWeight: "bold",
                        fontSize: "13px",
                        marginLeft: "2px"
                      }}
                    >
                      Bitcoin Wallet Address
                    </FormHelperText>
                    <Field
                      name="walletAddress"
                      as={TextField}
                      error={errors.walletAddress && touched.walletAddress}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment
                            position="start"
                            className="iconWithBorder"
                          >
                            <MonetizationOnIcon
                              sx={{
                                fontWeight: "bold",
                                fontSize: "20px",
                                marginTop: "3px",
                                marginLeft: "5px",
                                color: "#f1b258" 
                              }}
                            />
                          </InputAdornment>
                        ),
                        endAdornment: (
                          <InputAdornment position="end">
                            <div
                              style={{
                                borderLeft: "1px solid rgb(204, 204, 204)",
                                padding: "10px 0px 10px 10px",
                                display: "flex",
                                alignItems: "center"
                              }}
                            >
                              <Typography
                                variant="body2"
                                sx={{
                                  marginRight: "8px",
                                  color: "#666"
                                }}
                              >
                                Copy
                              </Typography>
                              <IconButton aria-label="copy">
                                <FileCopyIcon fontSize="small" />
                              </IconButton>
                            </div>
                          </InputAdornment>
                        )
                      }}
                    />

                    {errors.walletAddress && touched.walletAddress && (
                      <FormHelperText error>
                        {errors.walletAddress}
                      </FormHelperText>
                    )}
                  </FormControl>

                  <FormControl fullWidth sx={{ marginBottom: "1rem" }}>
                    <FormHelperText
                      sx={{
                        fontWeight: "bold",
                        fontSize: "13px",
                        marginLeft: "2px"
                      }}
                    >
                      Ethereum Wallet Address
                    </FormHelperText>
                    <Field
                      name="desiredAmount"
                      as={TextField}
                      error={errors.desiredAmount && touched.desiredAmount}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment
                            position="start"
                            className="iconWithBorder"
                          >
                            <UnfoldLessRoundedIcon
                              sx={{
                                fontWeight: "bold",
                                fontSize: "20px",
                                marginTop: "3px",
                                marginLeft: "5px",
                                color: "#669073" // Set the color to green
                              }}
                            />
                          </InputAdornment>
                        ),
                        endAdornment: (
                          <InputAdornment position="end">
                            <div
                              style={{
                                borderLeft: "1px solid rgb(204, 204, 204)",
                                padding: "10px 0px 10px 10px",
                                display: "flex",
                                alignItems: "center"
                              }}
                            >
                              <Typography
                                variant="body2"
                                sx={{
                                  marginRight: "8px",
                                  color: "#666"
                                }}
                              >
                                Copy
                              </Typography>
                              <IconButton aria-label="copy">
                                <FileCopyIcon fontSize="small" />
                              </IconButton>
                            </div>
                          </InputAdornment>
                        )
                      }}
                    />

                    {errors.desiredAmount && touched.desiredAmount && (
                      <FormHelperText error>
                        {errors.desiredAmount}
                      </FormHelperText>
                    )}
                  </FormControl>

                  <FormControl fullWidth sx={{ marginBottom: "1rem" }}>
                    <FormHelperText
                      sx={{
                        fontWeight: "bold",
                        fontSize: "13px",
                        marginLeft: "2px"
                      }}
                    >
                      Ripple Wallet Address
                    </FormHelperText>
                    <Field
                      name="walletAddress"
                      as={TextField}
                      error={errors.walletAddress && touched.walletAddress}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment
                            position="start"
                            className="iconWithBorder"
                          >
                            <ShareRoundedIcon
                              sx={{
                                fontWeight: "bold",
                                fontSize: "20px",
                                marginTop: "3px",
                                marginLeft: "5px",
                                color: "#1277a8" 
                              }}
                            />
                          </InputAdornment>
                        ),
                        endAdornment: (
                          <InputAdornment position="end">
                            <div
                              style={{
                                borderLeft: "1px solid rgb(204, 204, 204)",
                                padding: "10px 0px 10px 10px",
                                display: "flex",
                                alignItems: "center"
                              }}
                            >
                              <Typography
                                variant="body2"
                                sx={{
                                  marginRight: "8px",
                                  color: "#666"
                                }}
                              >
                                Copy
                              </Typography>
                              <IconButton aria-label="copy">
                                <FileCopyIcon fontSize="small" />
                              </IconButton>
                            </div>
                          </InputAdornment>
                        )
                      }}
                    />
                    {errors.walletAddress && touched.walletAddress && (
                      <FormHelperText error>
                        {errors.walletAddress}
                      </FormHelperText>
                    )}
                  </FormControl>

                  <FormControl fullWidth sx={{ marginBottom: "1rem" }}>
                    <FormHelperText
                      sx={{
                        fontWeight: "bold",
                        fontSize: "13px",
                        marginLeft: "2px"
                      }}
                    >
                      Litecoin Wallet Address
                    </FormHelperText>
                    <Field
                      name="walletAddress"
                      as={TextField}
                      error={errors.walletAddress && touched.walletAddress}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment
                            position="start"
                            className="iconWithBorder"
                          >
                            <CurrencyLiraOutlinedIcon
                              sx={{
                                fontWeight: "bold",
                                fontSize: "20px",
                                marginTop: "3px",
                                marginLeft: "5px",
                                color: "1277a8" 
                              }}
                            />
                          </InputAdornment>
                        ),
                        endAdornment: (
                          <InputAdornment position="end">
                            <div
                              style={{
                                borderLeft: "1px solid rgb(204, 204, 204)",
                                padding: "10px 0px 10px 10px",
                                display: "flex",
                                alignItems: "center"
                              }}
                            >
                              <Typography
                                variant="body2"
                                sx={{
                                  marginRight: "8px",
                                  color: "#666"
                                }}
                              >
                                Copy
                              </Typography>
                              <IconButton aria-label="copy">
                                <FileCopyIcon fontSize="small" />
                              </IconButton>
                            </div>
                          </InputAdornment>
                        )
                      }}
                    />
                    {errors.walletAddress && touched.walletAddress && (
                      <FormHelperText error>
                        {errors.walletAddress}
                      </FormHelperText>
                    )}
                  </FormControl>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginBottom: "1rem"
                    }}
                  ></div>

                  <Button
                    type="submit"
                    variant="contained"
                    style={{
                      backgroundColor: "white",
                      color: "black", 
                      marginLeft: "75px", 
                      marginRight: "0px" 
                    }}
                  >
                    GO TO WALLET
                  </Button>
                </Form>
              )}
            </Formik>
          </CardContent>
        </Card>
      </AccordionDetails>
    </Accordion>
  );
};

export default BuyCryptoForm;

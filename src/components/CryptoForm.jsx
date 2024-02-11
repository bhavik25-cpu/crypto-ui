import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import Typography from "@mui/material/Typography";
import "../components/Page.css";

import {
  MenuItem,
  Button,
  FormControl,
  Select,
  TextField,
  FormHelperText,
  Card,
  CardContent,
  Accordion,
  AccordionSummary,
  AccordionDetails
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
        Buy Cryptocurrency
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
                      Select the Crypto Currency 'Minimum Value 0.0001 BTC'
                    </FormHelperText>
                    <Field
                      name="cryptocurrency"
                      as={Select}
                      error={errors.cryptocurrency && touched.cryptocurrency}
                      startAdornment={
                        <InputAdornment
                          position="start"
                          className="iconWithBorder"
                        >
                          <MonetizationOnIcon
                            sx={{
                              fontWeight: "bold",
                              fontSize: "27px",
                              color: "#f1b258"
                            }}
                          />
                        </InputAdornment>
                      }
                    >
                      <MenuItem value="BTC">Bitcoin</MenuItem>
                      <MenuItem value="ETH">Ethereum</MenuItem>
                      {/* Add more cryptocurrencies as needed */}
                    </Field>
                    {errors.cryptocurrency && touched.cryptocurrency && (
                      <FormHelperText error>
                        {errors.cryptocurrency}
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
                      Choose Payment Method
                    </FormHelperText>
                    <Field
                      name="paymentMethod"
                      as={Select}
                      error={errors.paymentMethod && touched.paymentMethod}
                      startAdornment={
                        <InputAdornment
                          position="start"
                          className="iconWithBorder"
                        >
                          <Typography
                            variant="body2"
                            sx={{
                              fontWeight: "bold",
                              color: "#1a1a1a",
                              fontFamily: "Visa, sans-serif",
                              fontSize: "12px"
                            }}
                          >
                            VISA
                          </Typography>
                        </InputAdornment>
                      }
                    >
                      <MenuItem value="creditCard">Credit Card</MenuItem>
                      <MenuItem value="bankTransfer">Bank Transfer</MenuItem>
                    </Field>
                    {errors.paymentMethod && touched.paymentMethod && (
                      <FormHelperText error>
                        {errors.paymentMethod}
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
                      Wallet Address
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
                            <Typography
                              variant="body2"
                              sx={{
                                fontWeight: "bold",
                                color: "#1a1a1a",
                                fontFamily: "Visa, sans-serif",
                                fontSize: "12px"
                              }}
                            >
                              VISA
                            </Typography>
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
                  >
                    <FormControl
                      fullWidth
                      sx={{ flex: "1", marginRight: "0.5rem" }}
                    >
                      <FormHelperText
                        sx={{
                          fontWeight: "bold",
                          fontSize: "13px",
                          marginLeft: "2px"
                        }}
                      >
                        Exchange Operations
                      </FormHelperText>
                      <Field
                        name="amount"
                        as={TextField}
                        error={errors.amount && touched.amount}
                        InputProps={{
                          startAdornment: (
                            <InputAdornment
                              position="start"
                              className="iconWithBorder"
                            >
                              <Typography
                                variant="body2"
                                sx={{
                                  fontWeight: "bold",
                                  color: "#1a1a1a",
                                  fontFamily: "Visa, sans-serif",
                                  fontSize: "12px"
                                }}
                              >
                                VISA
                              </Typography>
                            </InputAdornment>
                          )
                        }}
                      />
                      {errors.amount && touched.amount && (
                        <FormHelperText error>{errors.amount}</FormHelperText>
                      )}
                    </FormControl>

                    <div style={{ fontSize: "24px" }}>⇌</div>
                    <FormControl
                      fullWidth
                      sx={{ flex: "1", marginLeft: "0.5rem" }}
                    >
                      <FormHelperText
                        sx={{
                          fontWeight: "bold",
                          fontSize: "13px",
                          marginLeft: "2px"
                        }}
                      >
                        Desired Amount
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
                              <Typography
                                variant="body2"
                                sx={{
                                  fontWeight: "bold",
                                  color: "#1a1a1a",
                                  fontFamily: "Visa, sans-serif",
                                  fontSize: "12px"
                                }}
                              >
                                VISA
                              </Typography>
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
                  </div>

                  <Button
                    type="submit"
                    variant="contained"
                    style={{ backgroundColor: "#2C3645" }}
                  >
                    Buy Cryptocurrency
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

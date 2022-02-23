import { Box, Button, Input, Text, Textarea, theme } from "@chakra-ui/react";
import React, { useState } from "react";
import * as Joi from "joi";
import validate from "../../utils/validate";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import emailjs from "@emailjs/browser";

const MotionBox = motion(Box);
const MotionButton = motion(Button);
const FormVariants = {
  hidden: {
    opacity: 0,
    y: "1rem",
  },
};
const Form = () => {
  const { ref, inView } = useInView({ threshold: 1, triggerOnce: true });
  const initialState = {
    payload: { email: "", name: "", subject: "", message: "" },
    error: { email: "", name: "", subject: "", message: "" },
    loading: false,
  };

  const [state, setState] = useState(initialState);

  const handleChange = (event: any) => {
    setState({
      ...state,
      payload: { ...state.payload, [event.target.name]: event.target.value },
    });
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    const error = validate(state.payload, {
      email: Joi.string()
        .email({ tlds: { allow: false } })
        .required()
        .label("Email")
        .max(256),
      name: Joi.string().required().label("Name").max(256),
      subject: Joi.string().required().label("Subject").max(256),
      message: Joi.string().required().label("Message").max(256),
    });

    if (error) {
      setState({
        ...state,
        error: { ...initialState.error, ...error },
      });
    } else {
      setState({
        ...state,
        loading: true,
        error: initialState.error,
      });

      // send here
      emailjs
        .sendForm(
          "service_7fmnp6f",
          "template_1lqnkfe",
          event.target,
          "user_zazIoNOAhCA1OxMau80Vx"
        )
        .then(
          (result) => {
            console.log(result);
            setState({
              ...state,
              loading: false,
              payload: initialState.payload,
              error: initialState.error,
            });
          },
          (error) => {
            console.log(error);
            setState({
              ...state,
              loading: false,
              error: initialState.error,
            });
          }
        );
    }
  };

  return (
    <Box ref={ref} as={"form"} onSubmit={handleSubmit}>
      <MotionBox
        variants={FormVariants}
        initial={"hidden"}
        animate={
          inView && {
            opacity: 1,
            y: "0rem",
            transition: {
              ease: "easeInOut",
              duration: 0.5,
            },
          }
        }
        marginBottom={"1rem"}
      >
        <Input
          size="sm"
          type="text"
          color={theme.colors.gray[300]}
          borderColor={theme.colors.gray[400]}
          _placeholder={{ color: theme.colors.gray[400] }}
          _focus={{
            boxShadow: "none",
            borderColor: theme.colors.gray[300],
          }}
          _hover={{
            boxShadow: "none",
            borderColor: theme.colors.gray[300],
          }}
          value={state.payload.email || ""}
          name={"email"}
          placeholder={"email"}
          onChange={handleChange}
        />
        {state.error.email && (
          <Text fontSize={"xs"} color={"red"}>
            {state.error.email}
          </Text>
        )}
      </MotionBox>
      <MotionBox
        marginBottom={"1rem"}
        variants={FormVariants}
        initial={"hidden"}
        animate={
          inView && {
            opacity: 1,
            y: "0rem",
            transition: {
              ease: "easeInOut",
              duration: 0.5,
              delay: 0.2,
            },
          }
        }
      >
        <Input
          size="sm"
          type="text"
          color={theme.colors.gray[300]}
          borderColor={theme.colors.gray[400]}
          _placeholder={{ color: theme.colors.gray[400] }}
          value={state.payload.name || ""}
          _focus={{
            boxShadow: "none",
            borderColor: theme.colors.gray[300],
          }}
          _hover={{
            boxShadow: "none",
            borderColor: theme.colors.gray[300],
          }}
          name="name"
          placeholder="full name"
          onChange={handleChange}
        />
        {state.error.name && (
          <Text fontSize={"xs"} color={"red"}>
            {state.error.name}
          </Text>
        )}
      </MotionBox>
      <MotionBox
        marginBottom={"1rem"}
        variants={FormVariants}
        initial={"hidden"}
        animate={
          inView && {
            opacity: 1,
            y: "0rem",
            transition: {
              ease: "easeInOut",
              duration: 0.5,
              delay: 0.4,
            },
          }
        }
      >
        <Input
          size="sm"
          type="text"
          color={theme.colors.gray[300]}
          value={state.payload.subject || ""}
          borderColor={theme.colors.gray[400]}
          _placeholder={{ color: theme.colors.gray[400] }}
          _focus={{
            boxShadow: "none",
            borderColor: theme.colors.gray[300],
          }}
          _hover={{
            boxShadow: "none",
            borderColor: theme.colors.gray[300],
          }}
          name="subject"
          placeholder="subject"
          onChange={handleChange}
        />
        {state.error.subject && (
          <Text fontSize={"xs"} color={"red"}>
            {state.error.subject}
          </Text>
        )}
      </MotionBox>
      <MotionBox
        marginBottom={"1rem"}
        variants={FormVariants}
        initial={"hidden"}
        animate={
          inView && {
            opacity: 1,
            y: "0rem",
            transition: {
              ease: "easeInOut",
              duration: 0.5,
              delay: 0.6,
            },
          }
        }
      >
        <Textarea
          size="sm"
          type="text"
          value={state.payload.message || ""}
          color={theme.colors.gray[300]}
          borderColor={theme.colors.gray[400]}
          _placeholder={{ color: theme.colors.gray[400] }}
          _focus={{
            boxShadow: "none",
            borderColor: theme.colors.gray[300],
          }}
          _hover={{
            boxShadow: "none",
            borderColor: theme.colors.gray[300],
          }}
          name="message"
          placeholder="message"
          onChange={handleChange}
        />
        {state.error.message && (
          <Text fontSize={"xs"} color={"red"}>
            {state.error.message}
          </Text>
        )}
      </MotionBox>
      <MotionButton
        variants={FormVariants}
        initial={"hidden"}
        animate={
          inView && {
            opacity: 1,
            y: "0rem",
            transition: {
              ease: "easeInOut",
              duration: 0.5,
              delay: 0.8,
            },
          }
        }
        isLoading={state.loading}
        marginBottom="1rem"
        _focus={{ boxShadow: "none" }}
        _active={{ boxShadow: "none" }}
        _hover={{
          borderColor: theme.colors.gray[300],
          color: theme.colors.gray[300],
        }}
        borderColor={theme.colors.gray[400]}
        color={theme.colors.gray[400]}
        isFullWidth
        size="sm"
        variant="outline"
        type="submit"
        loadingText="Loading"
      >
        Signin
      </MotionButton>
    </Box>
  );
};

export default Form;

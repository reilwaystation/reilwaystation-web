import * as Joi from "joi";

// EMAIL
export const ValidEmail = Joi.string()
  .email({ tlds: { allow: false } })
  .required()
  .label("Email");

// FIRSTNAME
export const ValidFirstName = Joi.string().required().label("First Name");

// LAST NAME
export const ValidLastName = Joi.string().required().label("Last Name");

// PASSWORD
export const ValidPassword = Joi.string()
  .alphanum()
  .required()
  .label("Password");

// CONFIRM PASSWORD
export const ValidRePassword = Joi.any()
  .valid(Joi.ref("password"))
  .required()
  .messages({ "any.only": "{{#label}} does not match" });

// HELPER FUNCTIONS
const reformatError = (err: Array<{}> | null) => {
  let errorObj: { [key: string]: any } = {};

  if (err && err.length !== 0) {
    err.map((item: { [key: string]: any }) => {
      if (item.context?.key) {
        errorObj[item.context.key] = item.message;
      }
    });
  }
  return errorObj;
};

// DEFAULT FUNCTION
export default (
  payload: { [key: string]: any },
  schema: { [key: string]: any }
) => {
  const { error } = Joi.object(schema).validate(payload, { abortEarly: false });
  return error?.details ? reformatError(error?.details) : null;
};

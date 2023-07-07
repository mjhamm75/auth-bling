import fetch from "node-fetch";
import { InitiateLoginCode, ValidateLoginCode } from "./types.js";

const { AUTH_BLING_ENDPOINT } = process.env;

export async function initiateLogin({
  phoneNumber,
  email,
  companyId,
}: InitiateLoginCode) {
  try {
    const result = await fetch(
      `${AUTH_BLING_ENDPOINT}/initiate-login?companyId=${companyId}
            &phoneNumber=${phoneNumber ? phoneNumber : ""}
            &email=${email ? email : ""}`
    );
    return (await result.json()) as string;
  } catch (err) {
    throw err;
  }
}

export async function validateLoginCode({
  phoneNumber,
  email,
  validationCode,
  companyId,
}: ValidateLoginCode) {
  try {
    const result = await fetch(
      `${AUTH_BLING_ENDPOINT}/validate-login-code?companyId=${companyId}
      &phoneNumber=${phoneNumber ? phoneNumber : ""}
      &email=${email ? email : ""}&validationCode=${validationCode}`
    );

    return await result.json();
  } catch (err) {
    throw err;
  }
}

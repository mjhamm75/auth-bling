import { InitiateLoginCode, ValidateLoginCode } from "./types.js";
export declare function initiateLogin({ phoneNumber, email, companyId, }: InitiateLoginCode): Promise<string>;
export declare function validateLoginCode({ phoneNumber, email, validationCode, companyId, }: ValidateLoginCode): Promise<any>;

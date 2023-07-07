export interface InitiateLoginCode {
    phoneNumber?: string;
    email?: string;
    companyId: string;
}
export interface ValidateLoginCode {
    phoneNumber?: string;
    email?: string;
    validationCode: string;
    companyId: string;
}

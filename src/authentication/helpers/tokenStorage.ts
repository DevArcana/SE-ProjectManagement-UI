import jwt_decode from "jwt-decode";
export const storeToken = (token: string | null) => {
  token === null
    ? localStorage.removeItem("JWT")
    : localStorage.setItem("JWT", token);
};

export const getToken = (): string | null => localStorage.getItem("JWT");

const decoded: any = jwt_decode(String(getToken()));
export const username =
  decoded["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name"];

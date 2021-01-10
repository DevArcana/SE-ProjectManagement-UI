import jwt_decode from "jwt-decode";
import { useAuth } from "../context/AuthProvider";
export const storeToken = (token: string | null) => {
  token === null
    ? localStorage.removeItem("JWT")
    : localStorage.setItem("JWT", token);
};
export const getToken = (): string | null => localStorage.getItem("JWT");
// const tokentest =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoic2Rhc2RhIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvbmFtZWlkZW50aWZpZXIiOiI1NjVhNzkyYi1hZTZhLTQyZWEtODA0OS05NWM4ZDEyOTkwZjIiLCJqdGkiOiI5YmYwODE5OS0wNzY0LTRhYjgtOWM1MC0zMTU5Zjg3OTk0MDEiLCJleHAiOjE2MDk3MDg1MjEsImlzcyI6Imh0dHA6Ly9sb2NhbGhvc3Q6NTk5MjEiLCJhdWQiOiJodHRwOi8vbG9jYWxob3N0OjQyMDAifQ.KlB4lUfUx4KcXKyzUsn9Rr8Ipgjevn-tatK0lgdIfnM";

export const Username = (): string => {
  const { token } = useAuth();
  return token ? decoded(token) : null;
};

function decoded(token: string): any {
  const decoded: any = jwt_decode(token);
  return decoded["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name"];
}

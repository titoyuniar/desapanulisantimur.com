import { API_URL } from "@/config";
import axios, { AxiosError } from "axios";
import { getCookie } from "cookies-next";
import { toast } from "react-toastify";

const API = axios.create({ baseURL: API_URL });
API.interceptors.request.use((req) => {
  const accessToken = getCookie("accessToken");
  if (accessToken && req.headers) (req.headers as unknown as { Authorization: string }).Authorization = `Bearer ${accessToken}`;
  return req;
});
API.interceptors.response.use(
  (res) => res,
  (err: AxiosError<{ message: string }>) => {
    toast.error(err.response?.data.message);
    return Promise.reject({ ...JSON.parse(JSON.stringify(err)) });
  },
);
export { API };

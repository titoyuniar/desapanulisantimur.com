import { API_URL } from "@/config";
import { ErhanesiaException } from "@/utils/backend/ErhanesiaException";
import axios, { AxiosError } from "axios";

const API = axios.create({ baseURL: API_URL });
API.interceptors.response.use(
  (res) => res,
  (err: AxiosError<{ message: string }>) => {
    throw new ErhanesiaException(
      err.response?.status ?? 500,
      err.response?.data.message ?? "Mohon maaf ada kesalahan di sistem kami!",
    );
  },
);
export { API };

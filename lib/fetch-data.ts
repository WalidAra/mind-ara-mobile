import { envConfig } from "@/config";
import { Fetch, FetchResponse } from "@/types";
import { api } from "@/utils";

const { apiUrl, bearer, authBearer } = envConfig;

const fetchData = async <T>({
  endpoint,
  accessToken,
  feature,
  method,
  payload,
}: Fetch): Promise<FetchResponse<T>> => {
  const url = `${apiUrl}/api/${
    accessToken ? "private" : "public"
  }/${feature}/${endpoint}`;

  const axiosConfig = {
    method,
    url,
    headers: {
      "Content-Type": "application/json",
      ...(accessToken && { [bearer]: `${authBearer} ${accessToken}` }),
    },
    withCredentials: true,
    data: payload,
  };

  const res = await api(axiosConfig);
  return res.data as FetchResponse<T>;
};

export default fetchData;

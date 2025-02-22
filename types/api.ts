export type Fetch = {
  accessToken?: string | null | undefined;
  feature: "auth" | "mentor" | "user" | "code";
  endpoint: string;
  method: "GET" | "POST" | "PUT" | "DELETE";
  payload?: object;
};

export type FetchResponse<T> = {
  data: T;
  message: string;
};

export type AccessToken = {
  accessToken: string;
};

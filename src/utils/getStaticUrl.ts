import axios from "axios";

export const getStaticUrl = (imageId: string) => {
  const staticUrl = axios.defaults.baseURL + "static/";
  return staticUrl + imageId + ".jpeg";
};
import axios from "axios";
import qs from "qs";
import { getToken } from ".";
const BASE_URL =
  "https://us-central1-extension-chrome-gotcha.cloudfunctions.net/api/";

export const setChannel = async (channelID: string) => {
  const token = await getToken();

  const query = qs.stringify({ channelID, token });

  return axios
    .get(BASE_URL + "channel/set?" + query)
    .then((res) => {
      console.log(res.data);

      return res.data.success as boolean;
    })
    .catch(() => {
      return false;
    });
};

export const deleteChannel = async (channelID: string) => {
  const token = await getToken();

  const query = qs.stringify({ channelID, token });

  return axios
    .get(BASE_URL + "channel/delete?" + query)
    .then((res) => {
      return res.data.success as boolean;
    })
    .catch(() => {
      return false;
    });
};

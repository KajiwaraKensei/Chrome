import axios from "axios";
import qs from "qs";
import { getToken, getUsername } from ".";

const BASE_URL =
  "https://us-central1-extension-chrome-gotcha.cloudfunctions.net/api/";

export const setChannel = async (channelID: string) => {
  const token = await getToken();
  const query = qs.stringify({ channelID, token });

  return axios
    .get(BASE_URL + "channel/set?" + query)
    .then((res) => {
      return res.data.success as boolean;
    })
    .catch(() => false);
};

export const deleteChannel = async (channelID: string) => {
  const token = await getToken();
  const query = qs.stringify({ channelID, token });

  return axios
    .get(BASE_URL + "channel/delete?" + query)
    .then((res) => {
      return res.data.success as boolean;
    })
    .catch(() => false);
};

export const sendMessage = async (channelID: string, message: string) => {
  const token = await getToken();
  const userName = await getUsername();
  const query = qs.stringify({ channelID, token, message, to: userName });

  return axios
    .get(BASE_URL + "channel/sendMessage?" + query)
    .then((res) => {})
    .catch(() => false);
};

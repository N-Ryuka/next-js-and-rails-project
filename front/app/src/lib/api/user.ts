import client from "../api/client";
import { UpdateParams } from "../../interfaces";
import Cookies from "js-cookie";

// イベント一覧を取得
export const updateProfile = (user_id: number, params: UpdateParams) => {
  return client.put(`/users/${user_id}`, params, {
    headers: {
      "access-token": Cookies.get("_access_token"),
      client: Cookies.get("_client"),
      uid: Cookies.get("_uid"),
    },
  });
};

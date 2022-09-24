import client from "../api/client";
import { UpdateParams } from "../../interfaces";

// イベント一覧を取得
export const updateProfile = (user_id: number, params: UpdateParams) => {
  return client.put(`/users/${user_id}`, params);
};

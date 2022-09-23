import client from "../api/client";

// サインアップ（新規アカウント作成）
export const getEvents = () => {
  return client.get("/events");
};

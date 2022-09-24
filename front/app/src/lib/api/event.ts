import client from "../api/client";
import Cookies from "js-cookie";

// イベント一覧を取得
export const getEvents = () => {
  return client.get("/events");
};

// ユーザに紐ずくイベントを作成
export const joinEvent = (event_id: number) => {
  const params = {
    event_id: event_id,
  };
  return client.post("/user_events", params, {
    headers: {
      "access-token": Cookies.get("_access_token"),
      client: Cookies.get("_client"),
      uid: Cookies.get("_uid"),
    },
  });
};

// ユーザに紐ずくイベントを取得
export const getUserEvents = () => {
  return client.get("/user_events", {
    headers: {
      "access-token": Cookies.get("_access_token"),
      client: Cookies.get("_client"),
      uid: Cookies.get("_uid"),
    },
  });
};

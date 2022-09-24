import client from "../api/client";

// イベント一覧を取得
export const getEvents = () => {
  return client.get("/events");
};

// ユーザに紐ずくイベントを作成
export const joinEvent = (event_id: number) => {
  const params = {
    event_id: event_id,
  };
  return client.post("/user_events", params);
};

// ユーザに紐ずくイベントを作成
export const getUserEvents = () => {
  return client.get("/user_events");
};

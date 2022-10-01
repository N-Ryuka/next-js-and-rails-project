import client from "../api/client";

// 動作確認用
export const execTest = () => {
  return client.get("/tests");
};

// サインアップ
export type SignUpParams = {
  name: string;
  email: string;
  password: string;
  passwordConfirmation: string;
};

// サインイン
export type SignInParams = {
  email: string;
  password: string;
};

// サインイン
export type UpdateParams = {
  email?: string;
  name?: string;
};

// ユーザー
export type User = {
  id: number;
  uid: string;
  provider: string;
  email: string;
  name: string;
  nickname?: string;
  image?: string;
  allowPasswordChange: boolean;
  created_at: Date;
  updated_at: Date;
};

// イベント
export type Event = {
  id: number;
  name: string;
  expected_at: Date;
  created_at: Date;
  updated_at: Date;
};

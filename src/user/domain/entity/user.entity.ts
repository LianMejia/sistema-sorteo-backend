export class User {
  user_id?: number;
  email: string;
  password: string;
  created_at?: string;

  constructor(data: {
    user_id?: number;
    email: string;
    password: string;
    created_at?: string;
  }) {
    this.user_id = data.user_id;
    this.email = data.email;
    this.password = data.password;
    this.created_at = data.created_at;
  }
}

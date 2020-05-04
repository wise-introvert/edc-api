export interface RegisterResponse {
  message: string | null;
  error?: string | null;
  id: string | null;
}

export interface LoginResponse {
  authToken: string;
}

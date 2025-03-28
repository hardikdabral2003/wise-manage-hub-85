
export interface User {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

export interface UserResponse {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: User[];
}

export interface SingleUserResponse {
  data: User;
}

export interface UpdateUserData {
  name?: string;
  first_name?: string;
  last_name?: string;
  email?: string;
  job?: string;
}

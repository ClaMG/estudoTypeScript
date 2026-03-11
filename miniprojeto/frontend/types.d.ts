//Data
export interface LoginData{
    user: string;
    password: string;
}

export interface CreateData{
    user: string;
    name: string;
    email: string;
    password?: string;
    admin?: boolean;
}

export interface UserData{
    user: string;
}

export interface UpdateData{
    id: number;
    user: string;
    name: string;
    email: string;
    password?: string;
    admin?: boolean;
}

//Response
export interface LoginResponse {
    token: string;
    message: string;
}

export interface MessageResponse{
    message: string;
    data: boolean;
}

export interface UserResponse{
    id: number;
    user: string;
    name: string;
    email: string;
    password: string;
    admin: boolean;
}
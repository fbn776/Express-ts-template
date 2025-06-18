export interface DecodedUser {
    id: string;
    email?: string;
    is_admin?: boolean;
    iat?: number;
    exp?: number;
}

declare namespace NodeJS {
    interface ProcessEnv {
        JWT_SECRET?: string;
        MONGODB_URL?: string;
        PORT?: string;
    }
}

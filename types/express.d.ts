import {DecodedUser} from "./decoded-user";

declare global {
    namespace Express {
        interface Request {
            user?: DecodedUser;
        }
    }
}

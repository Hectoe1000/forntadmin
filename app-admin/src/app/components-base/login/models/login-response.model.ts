import { RolResponse } from "./rol-response.model";

export class LoginResponse {
   
    success: boolean = false;
    refreshToken: string ="";
    mensaje: string ="";
    token: string ="";
    rol: RolResponse = new RolResponse() ;
}

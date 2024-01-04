import { FirebaseApp } from "@firebase/app";
import { AuthProvider } from "@pankod/refine-core";
import { Auth, ParsedToken, RecaptchaParameters, RecaptchaVerifier } from "firebase/auth";
import { IAuthCallbacks, ILoginArgs, IRegisterArgs } from "./interfaces";
export declare class FirebaseAuth {
    private readonly authActions?;
    auth: Auth;
    constructor(authActions?: IAuthCallbacks, firebaseApp?: FirebaseApp, auth?: Auth);
    handleLogOut(): Promise<void>;
    handleRegister(args: IRegisterArgs): Promise<never>;
    handleLogIn({ email, password, remember }: ILoginArgs): Promise<never>;
    handleResetPassword(email: string): Promise<void>;
    onUpdateUserData(args: IRegisterArgs): Promise<never>;
    private getUserIdentity;
    private getFirebaseUser;
    private handleCheckAuth;
    getPermissions(): Promise<ParsedToken>;
    createRecaptcha(containerOrId: string | HTMLDivElement, parameters?: RecaptchaParameters): RecaptchaVerifier;
    getAuthProvider(): AuthProvider;
}

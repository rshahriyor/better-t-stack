import { authClient } from "@/lib/auth-client";

interface BasicSignInData {
    email: string;
    password: string;
}

interface SignUpEmaill {
    name: string,
    basicSignInData: BasicSignInData
}

export function signInWithGoogle() {
    return authClient.signIn.social({
        provider: 'google',
        callbackURL: 'http://localhost:4200/'
    })
};

export function signInWithEmail({email, password}: BasicSignInData) {
    return authClient.signIn.email({
        email,
        password,
        callbackURL: 'http://localhost:4200/'
    })
};

export function signUpWithEmail({name, basicSignInData}: SignUpEmaill) {
    return authClient.signUp.email({
        email: basicSignInData.email,
        name,
        password: basicSignInData.password
    })
}
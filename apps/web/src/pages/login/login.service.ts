import { authClient } from "@/lib/auth-client";

export function signInWithGoogle() {
    return authClient.signIn.social({
        provider: 'google',
        callbackURL: 'http://localhost:4200/'
    })
}

export function signInWithEmail(login: string, password: string) {
    return authClient.signIn.email({
        email: login,
        password,
        callbackURL: 'http://localhost:4200/'
    })
};
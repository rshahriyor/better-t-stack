import { Button } from "primereact/button"
import { FloatLabel } from "primereact/floatlabel"
import { InputText } from "primereact/inputtext"
import { Password } from "primereact/password"
import { useState } from "react"
import './login.css'
import type { MetaArgs } from "react-router"
import { authClient } from "@/lib/auth-client"
import { signInWithEmail, signInWithGoogle } from "./login.service"

export function meta({ }: MetaArgs) {
    return [
        { title: "Login | better-t-stack" },
        { name: "description", content: "better-t-stack is a web application" },
    ];
}

const Login = () => {
    const [login, setLogin] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const { data } = authClient.useSession();

    const signInGoogle = () => {
        signInWithGoogle();
    }

    const signInEmail = () => {
        signInWithEmail(login, password);
    }

    return (
        <section className='flex items-center justify-center w-full h-screen bg-(--surface-ground)'>
            {data && <h1>Loged in</h1>}
            <div className="max-w-140 w-full rounded-[56px] bg-[linear-gradient(180deg,var(--primary-color)_10%,transparent_30%)] p-1">
                <form className='custom-login w-full flex flex-col gap-10 p-17.5 rounded-[53px] bg-white'>
                    {/* <Logo className='text-[50px]' /> */}
                    <div className="flex">
                        <div className="flex justify-center items-center border border-r-0 border-(--border-color) rounded-l-xl p-4">
                            <i className='pi pi-user text-(--text-color)'></i>
                        </div>
                        <FloatLabel className='w-full'>
                            <InputText id="login" value={login} onChange={(e) => setLogin(e.target.value)} className='w-full h-full custom-auth-input' />
                            <label htmlFor="login">Логин</label>
                        </FloatLabel>
                    </div>
                    <div className="flex">
                        <div className="flex justify-center items-center border border-r-0 border-(--border-color) rounded-l-xl p-4">
                            <i className='pi pi-lock text-(--text-color)'></i>
                        </div>
                        <FloatLabel className='w-full'>
                            <Password inputId="password" value={password} onChange={(e) => setPassword(e.target.value)} feedback={false} className='w-full h-full' inputClassName="custom-auth-input" toggleMask />
                            <label htmlFor="password">Пароль</label>
                        </FloatLabel>
                    </div>
                    <Button type="button" label="Войти" icon='pi pi-sign-in' className="p-button-primary text-center w-full justify-center" onClick={signInEmail} />
                    <Button type="button" icon='pi pi-google' label="Войти с помощью Google" severity="secondary" outlined onClick={signInGoogle} />
                </form>
            </div>
        </section>
    )
}

export default Login
import { Button } from "@/components/ui/button"
import { Field, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { useForm, type SubmitHandler } from "react-hook-form"
import { useAuth } from "../hooks/useAuth"

type LoginFormInputs = {
    email: string;
    password: string;
}

export const LoginForm = () => {

    const { login } = useAuth();
    const {
        register, 
        handleSubmit,
        formState: { errors }
    } = useForm<LoginFormInputs>();

    const onSubmit: SubmitHandler<LoginFormInputs> = (data) => {
        login(data.email, data.password);
    }


    return <form onSubmit={handleSubmit(onSubmit)}>
        <Field className="pb-4">
            <FieldLabel htmlFor="email">Email</FieldLabel>
            <Input id="email" type="email" placeholder="aaa@test.cl" {...register("email", {required: true})} />
        </Field>
        <Field className="pb-6">
            <FieldLabel htmlFor="password">Contraseña</FieldLabel>
            <Input id="password" type="password" {...register("password", {required: true})} placeholder="*****" />
        </Field>
        <div className="flex flex-col gap-2 justify-center">
            <Button className="cursor-pointer" size="lg" type="submit">Iniciar Sesión</Button>
            <p className="text-sm text-stone-500">Si olvidaste tu contraseña, contáctate con el administrador al aaa@aaa.cl.</p>
        </div>
    </form>
}
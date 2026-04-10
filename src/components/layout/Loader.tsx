import { Spinner } from "../ui/spinner"

export const Loader = () => {
    return <div className="w-screen h-screen bg-stone-800 flex items-center justify-center">
        <div className="flex flex-col gap-4 items-center">
            <Spinner className="size-8 text-stone-100" />
            <p className="text-xl text-stone-100">Cargando</p>
        </div>
    </div>
}
import { Spinner } from "../ui/spinner"

export const Loader = () => {
    return <div className="w-screen h-screen bg-green-800 flex items-center justify-center">
        <Spinner className="size-8" />
    </div>
}
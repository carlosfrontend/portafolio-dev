import { PropsWithChildren } from 'react'

export function PostTitle(props: PropsWithChildren) {
    return (
        <h1 className=" md:text-4xl lg:text-6xl bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent text-pretty max-w-3xl mt-4 text-3xl sm:text-4xl font-bold leading-tight">
            {props.children}
        </h1>
    )
}
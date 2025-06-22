import { PropsWithChildren } from 'react'

export function PostSubitle(props: PropsWithChildren) {
    return (
        <h1 className="text-xl md:text-2xl lg:text-3xl font-medium text-base-content text-pretty max-w-3xl">
            {props.children}
        </h1>
    )
}
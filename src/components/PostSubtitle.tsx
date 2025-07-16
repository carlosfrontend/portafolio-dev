import { PropsWithChildren } from 'react'

export function PostSubitle(props: PropsWithChildren) {
    return (
        <h3 className="text-xl md:text-2xl lg:text-3xl font-medium text-base-content text-pretty max-w-3xl text-center">
            {props.children}
        </h3>
    )
}
import { POST_QUERYResult } from '@/sanity/types'

type PostCategoriesProps = {
    categories: NonNullable<POST_QUERYResult>['categories']
}

export function PostCategories({ categories }: PostCategoriesProps) {
    return categories.map((category) => (
        <span
            key={category._id}
            className="leading-none whitespace-nowrap text-xs font-semibold  badge py-2 px-4"
        >
            {category.title}
        </span >
    ))
}
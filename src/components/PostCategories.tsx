import { POST_QUERYResult } from '@/sanity/types'

type PostCategoriesProps = {
    categories: NonNullable<POST_QUERYResult>['categories']
}

export function PostCategories({ categories }: PostCategoriesProps) {
    return categories.map((category) => (
        <span
            key={category._id}
            className="leading-none whitespace-nowrap text-sm font-semibold  badge badge-outline badge-soft badge-base-content text-base-content/80"
        >
            {category.title}
        </span >
    ))
}
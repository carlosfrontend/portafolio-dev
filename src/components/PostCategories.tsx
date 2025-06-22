import { POST_QUERYResult } from '@/sanity/types'

type PostCategoriesProps = {
    categories: NonNullable<POST_QUERYResult>['categories']
}

export function PostCategories({ categories }: PostCategoriesProps) {
    return categories.map((category) => (
        <span
            key={category._id}
            className="leading-none whitespace-nowrap text-sm font-semibold  badge badge-soft  text-base-content/80 py-4 px-6"
        >
            {category.title}
        </span >
    ))
}
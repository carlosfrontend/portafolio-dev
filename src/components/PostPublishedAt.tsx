import { POST_QUERYResult } from '@/sanity/types'
import dayjs from 'dayjs'
import 'dayjs/locale/es'

type PublishedAtProps = {
    publishedAt: NonNullable<POST_QUERYResult>['publishedAt']
}

export function PostPublishedAt({ publishedAt }: PublishedAtProps) {
    return publishedAt ? (
        <p className="text-base-content/80  py-2">
            {dayjs(publishedAt).locale('es').format('D MMM YYYY')}
        </p>
    ) : null
}
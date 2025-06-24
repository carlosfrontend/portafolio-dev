// src/sanity/lib/image.ts
import createImageUrlBuilder from '@sanity/image-url'
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { dataset, projectId } from '../env'

const builder = createImageUrlBuilder({ projectId, dataset })

export const urlFor = (source: SanityImageSource) => {
  return builder.image(source)
}
export const getBlurDataUrl = (source: SanityImageSource): string => {
  return builder.image(source)
    .width(10)
    .quality(8)
    .blur(2000)
    .url();
}
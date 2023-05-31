import type { LoaderFunctionArgs } from "react-router-dom"

import { getAllContents, getContentBySlug } from "@shared/services/content"
import type { HomeProps } from "@scenes/Home"
import type { Content } from "@shared/interfaces/Content"

async function homeLoader(): Promise<HomeProps> {
  const contents = await getAllContents()
  const toShow = contents?.slice(0, 9)

  const showing = toShow?.length
  const total = contents?.length

  return {
    contents: toShow,
    showing,
    total,
  }
}

async function contentLoader({ params }: LoaderFunctionArgs): Promise<Content> {
  const content = await getContentBySlug(
    params?.slug?.split("-benchmark")?.[0] as string,
  )
  return content
}

export { homeLoader, contentLoader }

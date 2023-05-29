import type { FC } from "react"
import { useLoaderData } from "react-router-dom"

import type { Content } from "@shared/interfaces"

import { Link } from "react-router-dom"

import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import styles from "./Content.module.css"

const ContentDetail: FC = () => {
  const content = useLoaderData() as Content

  return (
    <div className={styles.container}>
      <div className={styles.breadcrumbs}>
        <span>
          <Link to="/">Home</Link>
        </span>
        <span>&gt;</span>
        <span>{content.name}</span>
      </div>
      <h1>{content.name}</h1>
      <div className={styles.content}>
        <img src={content.image.url} alt={content.image.title} />
        <div className={styles.info}>
          <div className={styles.description}>
            {documentToReactComponents(content.description.json)}
          </div>
          <div className={styles.price}>
            <span>Price: </span>
            <span>{`$${content.price / 100}`}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContentDetail

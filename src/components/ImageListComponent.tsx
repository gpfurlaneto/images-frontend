import { ImagesResult, ResultItem } from "@/pages"
import Image from "next/image"

type ImagesListProps = {
  result: ImagesResult
}
export function ImagesList({ result }: ImagesListProps) {
  return (
    <div>
      {result.data.map((item: ResultItem) => <img width={60} alt={item.title} key={item.id} src={item.images.preview_gif.url} />)}
    </div>
  )
}
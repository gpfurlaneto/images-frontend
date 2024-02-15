import { ImagesResult, ResultItem } from "@/pages"
import Image from "next/image"

type ImagesListProps = {
  result: ImagesResult
  loadMore: () => void
}
export function ImagesList({ result, loadMore }: ImagesListProps) {

  const showLoadMore = result.pagination.offset + result.pagination.count < result.pagination.total_count
  return (
    <div>
      {result.data.map((item: ResultItem) => (
        //For some reason next is not accepting the domain images, I would need to investigate is even more
        <Image width={60} alt={item.title} key={item.id} src={item.images.preview_gif.url} />
      ))}
      {showLoadMore && <button onClick={loadMore}>Load More</button>}
    </div>
  )
}
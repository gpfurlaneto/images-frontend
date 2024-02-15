import { ImagesList } from "@/components/ImageListComponent";
import { SearchForm } from "@/components/SearchForm";
import { axiosInstance } from "@/libs/axios";
import { useQuery } from "@tanstack/react-query";
import { FormEvent, FormEventHandler, useRef, useState } from "react";



type Pagination = {
  count: number
  offset: number
  total_count: number
}

export type ResultItem = {
  id: string
  title: string
  images: {
    preview_gif: {
      url: string
    }
  }
}

export type ImagesResult = {
  data: ResultItem[]
  pagination: Pagination
}

export default function Home() {
  const [result, setResult] = useState<ImagesResult | null>(null)
  const [searchTerm, setSearchTerm] = useState('')
  const handleSubmit = async (value: string): Promise<void> => {
    setSearchTerm(value)
    try {
      //TODO create a function to send the request
      const response = await axiosInstance(`images?searchTerm=${value}`)
      setResult(response.data)
    } catch (e) {
      console.error(e)
    }
  }

  const loadMore = async () => {
    //I found the offset in the documentation, and I'm sending it.
    //Although I think this is not the correct param.
    //It seems to be always returning the same result.
    //I commited this code just to show how I would handle it
    //I would investivate it a bit more.
    const offset = result?.pagination.offset! + result?.pagination.count! + 1
    //TODO create a function to send the request
    const response = await axiosInstance(`images?searchTerm=${searchTerm}&offset=${offset}`)
    setResult(prev => {
      return {
        ...response.data,
        data: [...prev!.data, ...response.data.data],
      }
    })
  }

  const hasResult = result && result?.pagination?.count !== 0
  return (
    <div>
      <SearchForm handleSubmit={handleSubmit} />
      {result?.data.length}
      {hasResult && <ImagesList result={result} loadMore={loadMore} />}
      {/* {!hasResult && <EmptyResult images={result} />} */}
    </div>
  );
}

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

  const handleSubmit = async (searchTerm: string): Promise<void> => {
    try {
      const response = await axiosInstance(`images?searchTerm=${searchTerm}`)
      setResult(response.data)
    } catch (e) {
      console.error(e)
    }
  }

  const hasResult = result && result?.pagination?.count !== 0
  return (
    <div>
      <SearchForm handleSubmit={handleSubmit} />
      {hasResult && <ImagesList result={result} />}
      {/* {!hasResult && <EmptyResult images={result} />} */}
    </div>
  );
}

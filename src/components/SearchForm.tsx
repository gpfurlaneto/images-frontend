// TODO Use forwardRef

import { FormEvent, useRef, useState } from "react"

type SearchFormProps = {
  handleSubmit: (searchTerm: string) => void
}
export function SearchForm({ handleSubmit: onSubmit }: SearchFormProps) {
  const searchTermRef = useRef<HTMLInputElement>(null)
  //TODO include errors component 
  const [hasError, setHasError] = useState(false)

  const handleSubmit = async (event: FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault()
    const value = searchTermRef.current?.value
    if (!value) {
      setHasError(true)
      return
    }

    onSubmit(value)
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-row gap-2">
      <input ref={searchTermRef} className="border-2 py-1 px-2" />
      {/* TODO include errors component HERE  */}
      <button className="border py-2 px-4">Search</button>
    </form>
  )
}


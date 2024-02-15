export const getServerSideProps = (async () => {

  return { props: { test: 1 } }
})

interface TestProps {
  test: number
}

export default function Test({ test }: TestProps) {
  return <div className="bg-red-100">{test}</div>
}
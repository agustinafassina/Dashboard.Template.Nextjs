export default async function Dashboard({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>
}) {

  return (
    <div className="h-[calc(90vh-10rem)] p-4 min-w-[70rem] max-w-[90rem] mx-auto">
      <div>
        <div className="grid grid-cols-5 gap-4 h-[30rem] text-gray_800 dark:text-gray_200">
            Welcome to Dashboard
        </div>
      </div>
    </div>
  )
}

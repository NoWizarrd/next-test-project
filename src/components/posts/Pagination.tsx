import { ReactNode } from "react"

interface PaginationProps {
    page: number,
    totalPages: number,
    changePage: (page: any) => number
}

export function Pagination(props: PaginationProps): ReactNode {

    let {page, totalPages, changePage} = props


    return(
        <>
            <button
                className="px-4 py-2 mx-2 bg-blue-500 dark:bg-gray-700 text-white dark:text-[#d1d5db] rounded disabled:opacity-50"
                disabled={page === 1}
                onClick={() => changePage((page: number) => page - 1)}
                >
                Назад
            </button>
            <span className="text-lg">{page} / {totalPages}</span>
            <button
                className="px-4 py-2 mx-2 bg-blue-500 dark:bg-gray-700 text-white dark:text-[#d1d5db] rounded disabled:opacity-50"
                disabled={page === totalPages}
                onClick={() => changePage((page: number) => page + 1)}
            >
                Вперёд
            </button>
        </>
    )
}
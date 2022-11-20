
// pagination {
//     _limit: 10,
//     _page: 1,
//     _totalRow: 100
// }

export function Pagination({pagination, onPageChange}) {
    const { _page, _limit, _totalRow } = pagination;

    const totalPages = Math.ceil(_totalRow/_limit);

    function handlePageChange(newPage) {
        if (onPageChange) {
            onPageChange(newPage)
        }
    }

    return(
        <div>
            <button
                disabled={ _page <= 1}
                onClick={() => handlePageChange(_page - 1)}
            >
                Prev
            </button>

            <button
                disabled={ _page >= totalPages}
                onClick={() => handlePageChange(_page + 1)}
            >
                Next
            </button>
        </div>
    )
}
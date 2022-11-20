import {useEffect, useState } from 'react'
import { Pagination } from '.';

export function App() {
    const [pagination, setPagination] = useState({
        _page: 1,
        _limit: 10,
        _totalRow: 11,
    })
    //use package query-string to convert object to string query
    //_limit=10&_page=1
    const [filter, setFilter] = useState({
        _limit: 10,
        _page: 1
    })


    function handlePageChange(newPage) {
        setFilter({
            ...filter,
            _page: newPage
        })
    }

    useEffect(() => {
        async function fetchData() {
            //setPagination
        }

        fetchData()
    }, [filter])

    return (
        <div>
            <Pagination 
                pagination={pagination}
                onPageChange={handlePageChange}
            />
        </div>
    )
}
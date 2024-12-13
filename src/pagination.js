import {useState} from 'react';

const Pagination = ({items, itemsPerPage})=>{
    const totalPages = Math.ceil(items.length/itemsPerPage);

    const [currentPage, setCurrentPage] = useState(1);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentPageItems = items.slice(startIndex, startIndex + itemsPerPage);

    return (
        <>
            <ul>
                {currentPageItems.map((item) => (
                   <li key={item.id}>{item.firstname}</li>
                ))}
            </ul>
            
            <button onClick={()=> setCurrentPage((prev)=> Math.max(prev-1,1))}>
                Previous
            </button>
            <button onClick={()=> setCurrentPage((prev)=> Math.min(prev+1,totalPages))}>
                Next
            </button>
        
        </>
    )
}

export default Pagination;
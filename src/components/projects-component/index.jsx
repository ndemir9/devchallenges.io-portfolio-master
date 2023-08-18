import React from 'react'
import ProjectItemComponent from '../project-item-component'
import Box from '../box-component'
import ReactPaginate from 'react-paginate';

export default function ProjectsComponent({ data }) {

    function Items({ currentItems }) {
        return (
            <>
                {currentItems?.length < 0 ? "Projects not found" : (
                    <div className="mt-10 grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                        {
                            currentItems?.map((item) => (
                                <ProjectItemComponent key={item.id} data={item} />
                            ))
                        }
                    </div>
                )
                }
            </>
        );
    }

    function PaginatedItems({ itemsPerPage }) {

        const [itemOffset, setItemOffset] = React.useState(0);

        const endOffset = itemOffset + itemsPerPage;
        console.log(`Loading items from ${itemOffset} to ${endOffset}`);
        const currentItems = data.slice(itemOffset, endOffset);
        const pageCount = Math.ceil(data.length / itemsPerPage);

        const handlePageClick = (event) => {
            const newOffset = (event.selected * itemsPerPage) % data.length;
            console.log(
                `User requested page number ${event.selected}, which is offset ${newOffset}`
            );
            setItemOffset(newOffset);
        };

        return (
            <>
                <Items currentItems={currentItems} />
                <ReactPaginate
                    breakLabel="..."
                    nextLabel=">"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={1}
                    pageCount={pageCount}
                    previousLabel="<"
                    renderOnZeroPageCount={null}
                />
            </>
        );
    }


    return (
        <div className='mt-10'>
            <Box>
                <h3 className='text-responsive-lg'>Projects ({data.length})</h3>
            </Box>
            <PaginatedItems itemsPerPage={3} />
        </div>
    )
}

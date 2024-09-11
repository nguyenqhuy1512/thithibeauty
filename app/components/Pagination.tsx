// components/Pagination.js
import React from 'react';

interface pageProp {
    totalItems: number,
    itemsPerPage: number,
    currentPage: number,
    onPageChange: any
}

const Pagination: React.FC<pageProp> = ({ totalItems, itemsPerPage, currentPage, onPageChange }) => {
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    const handlePageChange = (page: number) => {
        if (page >= 1 && page <= totalPages) {
            onPageChange(page);
        }
    };

    return (
        <div className="pagination">
            <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
                Previous
            </button>
            {Array.from({ length: totalPages }, (_, index) => (
                <button
                    key={index + 1}
                    onClick={() => handlePageChange(index + 1)}
                    className={currentPage === index + 1 ? 'active' : ''}
                >
                    {index + 1}
                </button>
            ))}
            <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
                Next
            </button>

            <style jsx>{`
                .pagination {
                    display: flex;
                    justify-content: center;
                    margin: 20px 0;
                }
                button {
                    margin: 0 5px;
                    padding: 10px;
                    cursor: pointer;
                }
                .active {
                    font-weight: bold;
                    background-color: lightgray;
                }
                button:disabled {
                    cursor: not-allowed;
                    opacity: 0.5;
                }
            `}</style>
        </div>
    );
};

export default Pagination;
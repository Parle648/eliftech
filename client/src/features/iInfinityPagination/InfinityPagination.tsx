import React, { memo, useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { store } from '../../app/store';
import updateEvents from './helpers/updateEvents';
import incrementCurrentPage from './helpers/incrementCurrentPage';

const InfinityPagination = ({currentPage}: {currentPage: number}) => {
    const sorts = useSelector((store: any) => store.SortBy.value);

    console.log(currentPage);
    const scrollHandler = () => {
        if (document.body.scrollHeight - window.scrollY - window.innerHeight <= 900) {
            document.removeEventListener('scroll', scrollHandler);
            incrementCurrentPage()
            updateEvents(currentPage, sorts)
                .then(() => document.addEventListener('scroll', scrollHandler))
        }
    };

    useEffect(() => {
        document.addEventListener('scroll', scrollHandler);
        return () => {
            document.removeEventListener('scroll', scrollHandler);
        };
    }, []);

    return (
        <div>
            
        </div>
    );
};

export default InfinityPagination;
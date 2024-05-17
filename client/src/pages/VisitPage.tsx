import React from 'react';
import UsersList from '../widgets/UsersList/UsersList';
import VisitorFilters from '../features/VisitorFilters/VisitorFilters';

const VisitPage = () => {
    const id = new Number(window.location.href.split('\:').at(-1));
    
    return (
        <main>
            <VisitorFilters id={id} />
            <UsersList id={id} />
        </main>
    );
};

export default VisitPage;
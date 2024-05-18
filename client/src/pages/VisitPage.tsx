import React from 'react';
import UsersList from '../widgets/UsersList/UsersList';
import VisitorFilters from '../features/VisitorFilters/VisitorFilters';
import LineBar from '../features/LineBar/LineBar';

const VisitPage = () => {
    const id = new Number(window.location.href.split('\:').at(-1));
    
    return (
        <main>
            <VisitorFilters id={id} />
            <UsersList id={id} />
            <LineBar />
        </main>
    );
};

export default VisitPage;
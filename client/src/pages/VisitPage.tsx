import React from 'react';
import UsersList from '../widgets/UsersList/UsersList';

const VisitPage = () => {
    const id = new Number(window.location.href.split('\:').at(-1));
    
    return (
        <div>
            <UsersList id={id} />
        </div>
    );
};

export default VisitPage;
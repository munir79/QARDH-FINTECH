import BookNow from '@/newComponent/BookNow';
import PublicLayout from '@/publicLayout/PublicLayout';
import React from 'react';

const page = () => {
    return (
        <div>
         <PublicLayout>
            <BookNow/>
            
            </PublicLayout>   
        </div>
    );
};

export default page;
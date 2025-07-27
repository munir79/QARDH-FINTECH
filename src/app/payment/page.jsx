import Payment from '@/newComponent/Payment';
import PublicLayout from '@/publicLayout/PublicLayout';
import React from 'react';

const page = () => {
    return (
        <div>
            <PublicLayout>
                <Payment/>
            </PublicLayout>
        </div>
    );
};

export default page;
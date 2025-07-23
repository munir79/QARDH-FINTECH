import Footer from '@/app/component/shared/footer/Footer';
import Navbar from '@/app/component/shared/header/Navbar';
import React from 'react';

const PublicLayout = ({children}) => {
    return (
        <div>
            <Navbar/>
            {children}
            <Footer/>
        </div>
    );
};

export default PublicLayout;
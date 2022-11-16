import { useState } from 'react';
import Header from '~/components/Layout/components/Header';
import Footer from '~/components/Layout/components/Footer';

function DefaultLayout({ children }) {
    return (
        <>
            <Header />
            <div className="Container">{children}</div>
            <Footer />
        </>
    );
}

export default DefaultLayout;

import Footer from "@/components/Organisms/Footer/Footer";
import Header from "@/components/Organisms/Header/Header";
import React from "react";

type MainLayoutProps = {
    children: React.ReactNode;
};

const MainLayout = ({ children }: MainLayoutProps) => {
    return (
        <main>
            <Header />
            {children}
            <Footer />
        </main>
    );
};

export default MainLayout;

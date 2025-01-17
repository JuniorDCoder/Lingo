import { MobileSidebar } from "./mobile-sidebar";

export const MobileHeader = () => {
    return (
        <nav className="px-6 lg:hidden flex items-center h-[50px] bg-green-500 border-b fixed top-0 w-full z-50">
            <MobileSidebar />
        </nav>
    );
};
import { Outlet } from "react-router";

function AppLayout() {
    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100 sm:p-6 md:p-8">
            <div className="
                relative
                w-full
                max-w-[420px]
                min-h-screen
                sm:min-h-0
                sm:h-[844px]
                sm:rounded-[45px]
                sm:border-[10px]
                sm:border-black
                bg-white
                overflow-hidden
                sm:shadow-2xl
                flex
                flex-col
            ">
                <div className="h-full w-full overflow-y-auto overflow-x-hidden scrollbar-hide p-4 flex-1">
                    <Outlet /> 
                </div>
            </div>
        </div>
    );
}

export default AppLayout;

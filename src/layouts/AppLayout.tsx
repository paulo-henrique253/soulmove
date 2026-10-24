import { Outlet } from "react-router";

function AppLayout() {
    return (
        <div className="flex-1 flex justify-center items-center py-6 sm:py-8 px-2 sm:px-6">
            <div className="
                relative
                w-full
                max-w-[420px]
                h-[844px]
                max-h-[88vh]
                sm:max-h-none
                rounded-[40px]
                sm:rounded-[45px]
                border-[8px]
                sm:border-[10px]
                border-black
                bg-white
                overflow-hidden
                shadow-2xl
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

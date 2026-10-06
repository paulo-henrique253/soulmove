import { Outlet } from "react-router";

function AppLayout() {
    return (
        <div className="
        flex
        justify-center
        p-7
        ">
            <div className="
        relative
        w-97.5
        h-211
        rounded-[45px]
        border-10
        border-black
        bg-white
        overflow-hidden
        shadow-2xl
        ">
            <div className="h-full w-full overflow-y-auto overflow-x-hidden scrollbar-hide">
                <Outlet/> 
            </div>
         
            </div>


        </div>
    )
}
export default AppLayout;

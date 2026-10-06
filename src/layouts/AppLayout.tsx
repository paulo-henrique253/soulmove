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
            <Outlet/>          
            </div>


        </div>
    )
}
export default AppLayout;

import { Link, Outlet } from "react-router-dom"
import { TbLogout } from "react-icons/tb";

const Dashboard = () => {
  return (
    <>
      <header className="bg-gray-200 mb-4">
      <div className="container flex items-center justify-between md:w-[600px] mx-auto p-4">
        <Link to="/dashboard"><div className="logo p-2 hover:bg-gray-400 rounded-lg cursor-pointer text-xl font-semibold">Dashboard</div></Link>
        <div className="menu flex gap-2 ">
         
        </div>
        <div className="theme p-2 hover:bg-gray-400 rounded-lg cursor-pointer"><TbLogout size={24}/></div>
      </div>
    </header>

    <main className="container md:w-[600px] mx-auto p-4">
      <Outlet />

    </main>
    </>
  )
}

export default Dashboard
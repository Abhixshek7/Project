import Sidebar from './component/sidebar'
import {Outlet} from 'react-router-dom'
const Layout =()=>{
    return(
        <>
        <Sidebar />
        <Outlet />
        </>
    )
}
export default Layout
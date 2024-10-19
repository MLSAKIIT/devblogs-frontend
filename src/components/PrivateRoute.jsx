import {Route,Navigate, Outlet} from 'react-router-dom'
const PrivateRoute=({})=>{
    let auth={'token':false}
    return(
        auth.token?<Outlet/>:<Navigate to ="/login"/>
    )
}
export default PrivateRoute
import { Routes, Route } from "react-router-dom";
import Signin from "../pages/signin";
import Signup from "../pages/signup";
import Dashboard from "../pages/dashboard";
import ProtectedRoute from "./protected";
import TaskCreate from "../pages/createtask";


const UserRoutes = ()=>{
    return(
    <Routes>
        <Route path="/signin" element={<Signin/>}/>
        <Route path="/signup" element={<Signup/>}/>
       
        {/* Protected routes */}
        <Route element={<ProtectedRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/task/create" element={<TaskCreate/>}/> 
        </Route>  
     </Routes>
    )
}

export default UserRoutes
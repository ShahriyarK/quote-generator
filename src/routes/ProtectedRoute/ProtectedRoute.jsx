import {Outlet, useOutletContext, Navigate} from 'react-router-dom';

const ProtectedRoute = () => {
    const [userAuth] = useOutletContext();

    return (
        <>
            {userAuth? <Outlet />: <Navigate to="/login"/>}
        </>
    )
}

export default ProtectedRoute;

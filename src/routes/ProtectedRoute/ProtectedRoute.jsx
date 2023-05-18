import {Outlet, useOutletContext, Navigate} from 'react-router-dom';

export default function ProtectedRoute() {
    const [userAuth] = useOutletContext();

    return (
        <>
            {userAuth? <Outlet />: <Navigate to="/login"/>}
        </>
    )
}

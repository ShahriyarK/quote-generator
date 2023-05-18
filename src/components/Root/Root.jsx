import NavBar from '../NavBar/NavBar';
import {Outlet} from 'react-router-dom';
import {useState} from 'react';
export default function Root() {
    const [userAuth, setUserAuth] = useState(false);
    return(
        <>
            <NavBar userAuth={userAuth}/>
            <Outlet context={[userAuth, setUserAuth]}/>
        </>
    )
}
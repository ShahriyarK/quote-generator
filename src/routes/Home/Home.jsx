import {Link, useOutletContext} from 'react-router-dom';
import './Home.css'
import Randomquote from '../../components/RandomQuote/RandomQuote';
import { useEffect } from 'react';
export default function Home () {
    const [, setUserAuth] = useOutletContext();
    useEffect(()=>{
        setUserAuth(false);
    }, [])  

    return (
        <div className='home'>
            <Randomquote />
            <p className='message'>
                <span><Link className='sign-up' to='signup'>Sign up</Link></span> and
                get started by creating your own quotes.
            </p>
        </div>
    )
}

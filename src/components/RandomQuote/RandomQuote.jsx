import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import './RandomQuote.css';
export default function Randomquote () { //Convert all functions to arrow functions
    const [currentIdx, setCurrentIdx] = useState(0);
    const quotes = useLoaderData();
    const quote = quotes[currentIdx];
    return (
        <div className='quote-wrapper'>
            <h1>Magic Quotes</h1>
            <p className='quote'>''{quote.text}''</p>
            <p className='author'>- {quote.author? quote.author : 'Anonymous'}</p>
            <button onClick={()=> setCurrentIdx((currentIdx+1) % quotes.length)}>Generate Quote</button>
        </div>
    )
}

export async function loader() {
        const response = await fetch('https://type.fit/api/quotes');
        const data = await response.json();
        return data;
}

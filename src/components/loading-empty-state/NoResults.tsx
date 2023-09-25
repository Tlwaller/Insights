import React from 'react';
import NoSearchResult from '../../assets/NoSearchResult.png';

interface NoResultsProps {
    title?: string
}

export const NoResults: React.FC<NoResultsProps> = ({title}) => {
    return (
        <div className='flex justify-center'>
            <div className='flex flex-col items-center justify-center pb-72 w-96 justify-self-center'>
                <img src={NoSearchResult} alt="No results" className='w-full'/>
                <h3 className='font-semibold text-lg pb-4'>{title || "Sorry, We Couldn't Find Any Results"}</h3>
                <p className={`${title && 'hidden'} text-center text-gray-500`}>Try double checking your search for any typos or spelling errors - or try a different search term.</p>
            </div>
        </div>
    )
}

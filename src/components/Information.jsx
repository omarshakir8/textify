import React, { useState } from 'react';
import Transcription from './Transcription';
import Translation from './Translation';

export default function Information() {
    const [tab, setTab] = useState('transcription');
    
    return (
        <main className='flex-1 p-4 flex flex-col gap-3 text-center sm:gap-4 justify-center pb-20 max-w-prose mx-auto'>
            <h1 className='font-semibold text-4xl sm:text-5xl md:text-6xl whitespace-nowrap'>
                Your<span className='text-purple-900 semi-bold'>Transcription</span>
            </h1>

            <div className='flex mx-auto bg-white border-2 border-solid border-purple-700 shadow rounded-full overflow-hidden items-center gap-2'>
                <button 
                    onClick={() => setTab('transcription')}
                    className={'px-4 py-1 text-2xl ' + (tab === 'transcription' ? 'bg-purple-900 text-white' : 'text-purple-400 hover:text-purple-900')}
                >
                    Transcription
                </button>
                <button 
                    onClick={() => setTab('translation')}
                    className={'px-4 py-1 text-2xl ' + (tab === 'translation' ? 'bg-purple-900 text-white' : 'text-purple-400 hover:text-purple-900')}
                >
                    Translation
                </button>

            </div>
            {tab === 'transcription' ? (
                <Transcription/>
            ) : (
                <Translation />
            
            )}
        </main>
    );
}

import React, { useContext, useEffect, useState } from 'react'
import { Songs } from '../Context'
import 'react-h5-audio-player/lib/styles.css';
export default function ListSong() {
    const { DataSongs, handleSetSong, song } = useContext(Songs);
    const [idSong, setIdSong] = useState(0)
    const handlePlaySong = (idSong) => {
        setIdSong(idSong);
        handleSetSong(idSong)
    };
    useEffect(() => {
        setIdSong(song.id)
    }, [song])
    return (
        <div className='col-span-2 overflow-y-scroll'>
            <table className='table-auto w-full'>
                <thead className='text-white h-12'>
                    <tr>
                        <th className='w-[10%]'>#</th>
                        <th className='text-left '>Title</th>
                        <th className='w-[10%]'>Author</th>
                        <th className='w-[10%]'><i class="fa fa-download" aria-hidden="true"></i></th>
                    </tr>
                </thead>
                <tbody>
                    {DataSongs.map((song, index) => {
                        return (
                            <tr className={`bg-slate-800 h-12 text-gray-500 hover:bg-gray-600 ${idSong === song.id && 'text-teal-400 bg-slate-600'}`} key={index} onClick={() => handlePlaySong(song.id)}>
                                <td className='text-center'>{index + 1}</td>
                                <td>{song.name}</td>
                                <td className='text-center'>{song.author}</td>
                                <td className='text-center'><a href={song.url}><i className="fa fa-download" aria-hidden="true"></i></a></td>
                            </tr>
                        )
                    })}

                </tbody>
            </table>
        </div>
    )
}

import React, {useEffect, useState} from "react";

function SideEffect () {
    const [album, setAlbum] = useState('')
    const [grup, setGrup] = useState('')
    const [tahun, setTahun] = useState('')
    const [order, setOrder] = useState('')

    useEffect(()=>{
        console.log('every modification updated')

        return () => {
            console.log('before every modification updated')
        }
    })


    useEffect(()=>{
        console.log('modification updated for the first time')
        const database = {
            album: 'Dark & Wild',
            grup : '방탄소년단',
            tahun: '2014'
        }

        setAlbum(database.album)
        setGrup(database.grup)
        setTahun(database.tahun)

        return () => {
            console.log('before component clear')
            setAlbum('')
            setGrup('')
            setTahun('')
        }
    }, [])


    useEffect(()=>{
        console.log('update for album,grup, and tahun')
        
        setOrder(`Barang yang diorder adalah album ${album} tahun rilis ${tahun} dari grup ${grup} `)

        return ()=> {
            console.log('before component clear')
        }
    }, [album,grup,tahun])

    return( 
        <div>
            <h2>Data Penjualan Album</h2>
            <p>Info Barang</p>
            <ul>
                <li> Nama album: {album}</li>
                <li> Grup: {grup}</li>
                <li> Tahun rilis: {tahun}</li>
            </ul>
            <p>{order}</p>
            <button onClick={()=> setAlbum('Love Yourself:Tear')}>Ubah Nama Album</button>
            <button onClick={()=> setGrup('BTS')}>Ubah Grup</button>
            <button onClick={()=> setTahun('2018')}>Ubah Tahun Rilis</button>
        </div>
    )
}

export default SideEffect;
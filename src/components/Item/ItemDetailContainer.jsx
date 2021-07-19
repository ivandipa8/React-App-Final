import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {

    const arrayProductos = [{
        id : '1', 
        nombre:"remera",
        descripcion: "roja",
        precio: 1600
    },
    {
        id : '2',
        nombre:"Cinturon",
        descripcion: "Cuero",
        precio: 313
    },
    {   
        id : '3',
        nombre:"Anteojos",
        descripcion: "Grises",
        precio: 2222
    },
    {
        id : '4',
        nombre:"Zapatos",
        descripcion: "Negros",
        precaao: 4144
    }];

    const {id: idParams} = useParams();

    return (
        <div>
            <p>{idParams}</p>            
        </div>
    )
}

export default ItemDetailContainer

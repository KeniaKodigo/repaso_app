import React from 'react'
import '../estilos/lista.css'

export default function Lista() {
    return (
        <div>
            <h2>Lista de personajes Ricky and Morty</h2>

            <ul className='d-flex justify-content-center'>
                <li className='m-4'>Lista 1</li>
                <li className='m-4'>Lista 2</li>
                <li className='m-4'>Lista 3</li>
            </ul>

            <div className="card"> 
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
            </div>
        </div>
    )
}

import { useEffect, useState } from 'react'

import imgUser from '../assets/usuario.png'
import Map from '../assets/iconeMapa.png'

import './Card.css'

interface PropsData {
  type: string;
  name: string;
  cell: number;
  map: string;
}

interface CardProps {
  dataUser: PropsData[];
}


export function Card({dataUser}: CardProps){
    const [data, setData] = useState<PropsData[]>([])


    useEffect(() => {
        const dataLocal = localStorage.getItem("@user:ambulante")
        if(dataLocal){
          const allData = JSON.parse(dataLocal)
          setData(allData)
        }else{
          setData(dataUser)
          
        }
    },[dataUser])

    return(
        <div id='card'>
          {data.length > 0 && data.map(item => (
              <div>
                 <img className='imgUser' src={imgUser} alt="Avatar do usuario" />
                 <div className='infoUser'>
                     <span className='category'>Comerciante de {item.type}</span>
                     <h1>{item.name}</h1>
                     <a href={`https://wa.me/${item.cell}`} target='_blank'>entre em contato</a>
                 </div>
                 <a className='mapUser'  href={item.map} target='_blank'><img src={Map} alt="icone do mapa" /></a>
             </div>
           )
          )}
          {data.length === 0 && (
            <p>Ainda não temos vendedores cadastrados</p>
          )}
        </div>
    )
}
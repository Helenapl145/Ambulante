import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

import Start from '../assets/inicio.png'
import { Card } from "../components/Card";

import './Categories.css'

interface PropsData {
    type: string;
    name: string;
    cell: number;
    map: string;
 }

export function Categories(){
    const users: PropsData[] = [
        {
            type: 'Acessório',
            name: 'Cleito',
            cell: 11111111,
            map: 'https://www.google.com/maps/place/caruaru/data=!4m2!3m1!1s0x7a98b96e8d7fd6d:0xa30a5c7c9e363ef5?sa=X&ved=1t:155783&ictx=111'
        },
        {
            type: 'Roupa',
            name: 'Jailme',
            cell: 11111111,
            map: 'https://www.google.com/maps/place/caruaru/data=!4m2!3m1!1s0x7a98b96e8d7fd6d:0xa30a5c7c9e363ef5?sa=X&ved=1t:155783&ictx=111'
        },
        {
            type: 'Comida',
            name: 'Carolina',
            cell: 11111111,
            map: 'https://www.google.com/maps/place/caruaru/data=!4m2!3m1!1s0x7a98b96e8d7fd6d:0xa30a5c7c9e363ef5?sa=X&ved=1t:155783&ictx=111'
        },
        {
            type: 'Eletrônicos',
            name: 'Beatriz',
            cell: 11111111,
            map: 'https://www.google.com/maps/place/caruaru/data=!4m2!3m1!1s0x7a98b96e8d7fd6d:0xa30a5c7c9e363ef5?sa=X&ved=1t:155783&ictx=111'
        }
    ]

    const [category, setCategory] = useState('')
    const [filteredUsers, setFilteredUsers] = useState<PropsData[]>(users)


    useEffect(() => {
        if(category){
            const filtered = users.filter(user => user.type === category)
            setFilteredUsers(filtered)
        }else{
            setFilteredUsers(users)
        }
    },[category])

    return(
        <div id="app">
            <nav id="navCategories">
                <NavLink className="btnBack" to="/">
                    <img src={Start} alt="icone de início" />
                </NavLink>
            </nav>
            <header id="headerCategory">
                <select id="userType" onChange={(e) => setCategory(e.target.value)}>
                    <option value="unique" disabled selected>Escolha  o tipo do produto</option>
                    <option value="Comida">Comida</option>
                    <option value="Roupa">Roupa</option>
                    <option value="Acessório">Acessório</option>
                    <option value="Eletrônicos">Eletrônicos</option>
                </select>

                <p>selecione a categoria do produto que você quer compra e veja os vendedores disponível!</p>
            </header>

            <main id="main">
                <Card dataUser={filteredUsers}/>
            </main>
        </div>
    )
}
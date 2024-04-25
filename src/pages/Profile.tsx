import { NavLink } from 'react-router-dom'
import { useEffect, useState } from 'react'

import defualtImg from '../assets/usuario.png'
import './Profile.css'

export function Profile(){
    const [data, setData] = useState()
    const [name, setName] = useState('')
    const [number, setNumber] = useState('')
    const [category, setCategory] = useState('')
    const [location, setLocation] = useState('')
    const [imgUser, setImgUser] = useState(defualtImg)

    function formatPhoneNumber(phoneNumber: string) {
        phoneNumber = phoneNumber.replace(/\D/g, '');
        phoneNumber = phoneNumber.replace(/(\d{5})(\d)/, '$1-$2');
        setNumber(phoneNumber)
    }

    function handleSignOut() {
        localStorage.clear()
    }

    useEffect(() => {
        const dataLocalAll = localStorage.getItem("@user")

        if(dataLocalAll){
            const dataUser = JSON.parse(dataLocalAll)
            setName(dataUser.nome)
        }
        

        const dataLocalSale = localStorage.getItem("@user:ambulante")
        if(dataLocalSale) {
            const dataSale = JSON.parse(dataLocalSale)
            setData(dataSale)

            if(dataSale){
                setImgUser(dataSale.img)
                formatPhoneNumber(dataSale.cell)
                setCategory(dataSale.category)
                setLocation(dataSale.location)

               
            }else{
                alert('Seus dados não foram carregados!')
            }
        }
    },[])

    return(
        <>
            <nav id='navProfile'>
                <NavLink className="btnBack" to="/" onClick={handleSignOut}>Sair</NavLink>
                {data ? null : <NavLink className="btnLogout" to="/subscribe">adicionar</NavLink>}
            </nav>

            <main id='mainProfile'>
                <div className="containerImg">
                    <img src={imgUser}/>     
                </div>
                
                <div className="containerInfo">
                    <h1>{name.toLocaleUpperCase()}</h1>
                    {data && (
                        <>
                            <p>{number}</p>
                            <span><strong>Catégoria:</strong> {category}</span>
                            <a href={location} target='_blank'>seu endereço</a>
                        </>
                    )}

                    {!data && (
                        <p>Adicione suas informações</p>
                    )}
                </div>
            </main>
        </>
    )
}
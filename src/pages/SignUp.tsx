import { NavLink, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import bcrypt from 'bcryptjs'

import './SignUp.css'
import { Message } from '../components/Message'

export function SignUp(){
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [category, setCategory] = useState('')
    const [message, setMessage] = useState('')
    const [typeMessage, setTypeMessage] = useState('')

    const navigate = useNavigate()

    async function handleSubmit(){
        if(name === '' || password === '' || category === '' ){
            setMessage('Verifique os dados para continuar!!')
            setTypeMessage('error')
            return
        }else{
            const hashedPassword = await bcrypt.hash(password, 9)
            localStorage.setItem("@user", JSON.stringify({nome: name, senha: hashedPassword, categoria: category}))
        }
        if(category === 'cliente'){
            setMessage('Cadastro feito com sucesso!!')
            setTypeMessage('success')
            setTimeout(() => {
                navigate('/categories')
            }, 1000)
        }else if(category === 'ambulante'){
            setMessage('Cadastro feito com sucesso!!')
            setTypeMessage('success')
            setTimeout(() => {
                navigate('/profile')
            }, 1000)
        }else {
            setMessage('Verifique os dados para continuar!!')
            setTypeMessage('error')
        }
    }

    return(
        <div id='bodySignUp'>
            {message && (<Message msg={message} type={typeMessage}/>)}

            <main id="singUp">
                <form id='formSignUp'>
                    <NavLink to="/">X</NavLink>

                    <header>
                        <h1>CADASTRO</h1>
                        <p>faça seu cadastro!</p>
                    </header>

                    <section>
                        <div id="wrapper">
                            <div>
                                <label htmlFor="nameUser">Coloque seu nome:</label>
                                <input type="text" id="nameUser" placeholder="nome completo" required onChange={(e) => setName(e.target.value)}/>
                            </div>

                            <div>
                                <label htmlFor="numberUser">Sua senha:</label>
                                <input type="password" id="numberUser" placeholder="adicione sua senha" onChange={(e) => setPassword(e.target.value)}/>
                            </div>

                            <div className="typeUser">
                                <label htmlFor="typeUser">Coloque sua categoria:</label>
                                <select id="typeUser" value={category} onChange={(e) => setCategory(e.target.value)}>
                                    <option defaultValue=' ' >Selecione aqui</option>
                                    <option value="ambulante" >Ambulante/Vendedor</option>
                                    <option value="cliente">Consumidor/Cliente</option>
                                </select>
                            </div>

                        </div>

                        <input className="btnSubmit" id="btnSubmit" type="button" value="CONCLUIR" onClick={handleSubmit}/>
                    </section>
                </form>
            </main>
        </div>
    )
}


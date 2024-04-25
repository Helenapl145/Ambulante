import { NavLink, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import './Subscribe.css'
import {Message} from "../components/Message";

export function Subscribe(){
    const [product, setProduct] = useState('')
    const [phone, setPhone] = useState('')
    const [map, setMap] = useState('')
    const [name, setName] = useState('')
    const [image, setImage] = useState<File[]>([])
    const [message, setMessage] = useState('')
    const [typeMessage, setTypeMessage] = useState('')

    const navigate = useNavigate()

    function handleSubmit() {
        if(product === '' || phone === '' || map === '' || image.length < 0){
            setMessage('Verifique os dados para continuar!!')
            setTypeMessage('error')
            return
        }else {
            if(image.length > 0){
                let imgLoad = image[0]
                let readFile = new FileReader()

                readFile.onload = function(imgLoad){
                    if(imgLoad.target){
                        const imgBase64 = imgLoad.target.result
                        localStorage.setItem("@user:ambulante", JSON.stringify({category: product, cell: phone, location: map, nome: name, img: imgBase64}))
                        setMessage('Dados adcionados com sucesso!!')
                        setTypeMessage('success')
                    }else {
                        setMessage('Não foi possível salvar seus dados!')
                        setTypeMessage('error')
                    } 
                }
                readFile.readAsDataURL(imgLoad)
            }
            
            setTimeout(() => {
                navigate('/profile')
            }, 1000)

            
        }

    }

    function handleFileChange(e: React.ChangeEvent<HTMLInputElement>)  {
        const files = e.target.files;
        if (files) {
          const fileList = Array.from(files);
          setImage(fileList);
        }
      };

    useEffect(() => {
        const dataLocal = localStorage.getItem("@user")
        if(dataLocal){
            const dataUser = JSON.parse(dataLocal)
            setName(dataUser.nome)
        }
    },[])

    return(
        <div id="bodySubscribe">
            {message && (<Message msg={message} type={typeMessage}/>)}

            <main>
                <form id="formSubscribe">
                    <NavLink to="/profile">⬅</NavLink>

                    <header>
                        <h1>CADASTRO</h1>
                        <p>faça seu cadastro!</p>
                    </header>

                    <section>
                        <div id="wrapper">
                            <div className="typeUser">
                                <label htmlFor="typeUser">Coloque o tipo do seu produto:</label>
                                <select id="typeUser" onChange={(e) => setProduct(e.target.value)}>
                                    <option value="unique" disabled selected>Selecione aqui</option>
                                    <option value="Comida">Comida</option>
                                    <option value="Roupa">Roupa</option>
                                    <option value="Acessório">Acessório</option>
                                    <option value="Eletrônicos">Eletrônicos</option>
                                </select>
                            </div>
            
                            <div>
                                <label htmlFor="numberUser">Seu número:</label>
                                <input type="text" id="numberUser" placeholder="x xxxx-xxxx" required onChange={(e) => setPhone(e.target.value)}/>
                            </div>

                            <div>
                                <label htmlFor="mapUser">Sua localização:</label>
                                <input type="url" id="mapUser" placeholder="coloque um link" required onChange={(e) => setMap(e.target.value)}/>
                            </div>

                            <div>
                                <label htmlFor="photoUser">Sua foto:</label>
                                <input className="choosePhoto" type="file" id="photoUser" onChange={handleFileChange}/>
                            </div>
                        </div>

                        <input className="btnSubmit" type="button" value="CONCLUIR" onClick={handleSubmit}/>
                    </section>
                </form>
            </main>
        </div>
    )
}
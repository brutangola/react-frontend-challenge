import { useEffect } from "react";
import Menu from "../components/Menu";
import { useState } from "react";
import Upload from "../components/Upload";

export default function Perfil() {

    const [sec1,setSec1] = useState(true)
    const [sec2,setSec2] = useState(false)
    const [sec3,setSec3] = useState(false)
    const [nome,setNome] = useState('')


    function handleSec1() {
        setSec1(true)
        setSec2(false)
        setSec3(false)
    }

    function handleSec2() {
        setSec1(false)
        setSec2(true)
        setSec3(false)
    }

    function handleSec3() {
        setSec1(false)
        setSec2(false)
        setSec3(true)
    }

    useEffect(()=>{
        const fetchUserInfo = async () => {
            try {
                const authInfo = JSON.parse(localStorage.getItem('authInfo'));
                const response = await fetch('https://www.googleapis.com/oauth2/v3/userinfo', {
                headers: {
                    Authorization: `Bearer ${authInfo['access_token']}`,
                },
                });
                const data = await response.json();
                setNome(data.name);
            } catch (error) {
                console.error('Erro ao buscar informações do usuário:', error);
            }
        };
        fetchUserInfo();
        
    },[])

    return(
        <div className="min-h-screen flex bg-blue-950 text-white ">
            {/* Esquerdo */}
            <Menu/>

            {/* Direito */}
            <div className="w-full ml-2 mr-2 mt-2">

                {/* NavBar */}
                <div className="flex ml-4 justify-between items-center mt-2 mr-6 mb-4">
                        <div>Logo</div>
                        <div className="flex-row">
                            <input type="text" placeholder="Pesquisa" className="h-10 rounded-2xl outline-none pl-4 bg-transparent border-gray-200 border-2 w-[600px] rounded-r-none"/>
                            <button className="rounded-l-none h-10 rounded-2xl p-1 bg-gray-500 border-gray-300 border-2 border-l-0 hover:bg-gray-400">Pesquisar</button>
                        </div>
                        <div>
                            <a href="/Perfil">
                                {nome}
                            </a>
                        </div>
                </div>
                {/* apresentação */}
                <div className="flex ml-4 mt-6 items-center space-x-8">
                    
                    <div>
                        <p className="text-2xl">{nome}</p>
                        <button >
                            <div className="flex items-center">
                            <p className="text-gray-100 hover:text-gray-50">mais sobre mim </p>
                            </div>
                        </button>  
                    </div>
                </div>
                

                {/* seccção */}
                <div className="flex ml-4 mt-2 w-40 gap-4 justify-between items-center mb-4">
                    <button onClick={handleSec1} className="border  rounded-lg bg-gray-500 text-white text-center pl-3 pr-3 pb-0.5 pt-0.5 hover:text-black hover:bg-white">Videos</button>
                    <button onClick={handleSec2} className="border rounded-lg bg-gray-500 text-white text-center pl-3 pr-3 pb-0.5 pt-0.5 hover:text-black hover:bg-white">Upload</button>
                    <button onClick={handleSec3} className="border rounded-lg bg-gray-500 text-white text-center pl-3 pr-3 pb-0.5 pt-0.5 hover:text-black hover:bg-white">Playlists</button>
                </div>

                {/* apresentação das mídias */}
                <div className="overflow-auto ml-4 flex border-gray-100 rounded-lg">
                    {sec1 ? (<div> Videos </div>) : sec2 ? <Upload/> : (<div> Playlists </div>)}
                </div>

            </div>
        </div>
    )
}
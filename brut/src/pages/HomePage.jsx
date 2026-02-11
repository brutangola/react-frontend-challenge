import { document } from "postcss"
import { useEffect, useState } from "react"
import Menu from "../components/Menu"
import Videos from "../components/Videos"
import { useNavigate } from "react-router-dom"

export default function HomePage() {
    
    const navigate = useNavigate()

    let params = {}

    let regex = /([^&=]+)=([^&]*)/g, m

    while(m = regex.exec(location.href)){
        params[decodeURIComponent(m[1])] = decodeURIComponent(m[2])
    }

    if (Object.keys(params).length > 0) {
        localStorage.setItem('authInfo',JSON.stringify(params))
    }

    window.history.pushState({},document.title,"/"+"HomePage")

    const [name, setName] = useState('');
    const [infoU, setInfoU] = useState(null);
    const [sec1,setSec1] = useState(true)
    const [sec2,setSec2] = useState(false)
    const [sec3,setSec3] = useState(false)
    const [sec4,setSec4] = useState(false)
    const [search,setSearch] = useState('')

    useEffect(() => {
        // Função para obter informações do usuário
        const fetchUserInfo = async () => {
        try {
            const authInfo = JSON.parse(localStorage.getItem('authInfo'));
            const response = await fetch('https://www.googleapis.com/oauth2/v3/userinfo', {
            headers: {
                Authorization: `Bearer ${authInfo['access_token']}`,
            },
            });
            const data = await response.json();
            setName(data.name);
            setInfoU(data);
        } catch (error) {
            console.error('Erro ao buscar informações do usuário:', error);
        }
        };

        fetchUserInfo();
    }, []);

    const handleSearch = (event) => {
        setSearch(event.target.value)
    }

    function goSearch() {
        localStorage.setItem('search',JSON.stringify(search))  
        navigate('/Search')
    }
      
    function handleSec1() {
        setSec1(true)
        setSec2(false)
        setSec3(false)
        setSec4(false)
    }

    function handleSec2() {
        setSec1(false)
        setSec2(true)
        setSec3(false)
        setSec4(false)
    }

    function handleSec3() {
        setSec1(false)
        setSec2(false)
        setSec3(true)
        setSec4(false)
    }

    function handleSec4() {
        setSec1(false)
        setSec2(false)
        setSec3(false)
        setSec4(true)
    } 

    return(

            <div className="grid grid-cols-12 min-h-screen bg-blue-950 text-white">
            {/* Esquerdo */}
                
                <Menu />

            {/* Direito */}
                <div className="col-span-11 ml-2 mr-2 mt-2">

                    {/* NavBar */}
                    <div className="flex justify-between items-center mt-2 mr-6 mb-4">
                        <div>Logo</div>
                        <div className="flex-row">
                            <input value={search} onChange={handleSearch} type="text" placeholder="Pesquisa" className="h-10 rounded-2xl outline-none pl-4 bg-transparent border-gray-200 border-2 w-[600px] rounded-r-none"/>
                            <button className="rounded-l-none h-10 rounded-2xl p-1 bg-gray-500 border-gray-300 border-2 border-l-0 hover:bg-gray-400" onClick={goSearch}>Pesquisar</button>
                        </div>
                        <div>
                            <a href="/Perfil">
                                {name}
                            </a>
                        </div>
                    </div>

                    {/* seccção */}
                    <div className="flex w-40 gap-4 justify-between items-center mb-4">
                        <button className="border rounded-lg bg-gray-500 text-white text-center pl-3 pr-3 pb-0.5 pt-0.5 hover:text-black hover:bg-white" onClick={handleSec1}>Tudo</button>
                        <button className="border rounded-lg bg-gray-500 text-white text-center pl-3 pr-3 pb-0.5 pt-0.5 hover:text-black hover:bg-white" onClick={handleSec2}>Programação</button>
                        <button className="border rounded-lg bg-gray-500 text-white text-center pl-3 pr-3 pb-0.5 pt-0.5 hover:text-black hover:bg-white" onClick={handleSec3}>Músicas</button>
                        <button className="border rounded-lg bg-gray-500 text-white text-center pl-3 pr-3 pb-0.5 pt-0.5 hover:text-black hover:bg-white" onClick={handleSec4}>Futebol</button>
                    </div>

                    {/* apresentação das mídias */}
                    {sec1? <Videos content="all"/> : sec2 ? <Videos content="programming"/> : sec3 ? <Videos content="music"/> : 
                     <Videos content="futebol"/>}
                    
                </div>
            </div>
            
    )
}
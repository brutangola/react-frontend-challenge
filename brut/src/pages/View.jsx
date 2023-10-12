import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import Menu from "../components/Menu";

export default function View() {

    const navigate = useNavigate

    const [video,setVideo] = useState([])
    const [name,setName] = useState()
    const [videos,setVideos] = useState([])
    const [search,setSearch] = useState('')


    const loadVideoById = async (videoId) => {
        try {
          const apiKey = 'AIzaSyAKQp53uv6APAQkX1S07xJIMO9ZaOrBlOs';
          const apiUrl = `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=${apiKey}`;
          const response = await fetch(apiUrl);
          const result = await response.json();
          const video = result.items[0];
          setVideo(video);
          console.log(video);
        } catch (error) {
          console.error('Erro ao buscar vídeo por ID:', error);
        }
    };
      
      

    const handleSearch = (event) => {
        setSearch(event.target.value)
    }

    function goSearch() {
        localStorage.setItem('search',JSON.stringify(search))  
        navigate('/Search')
    }

    useEffect(()=>{
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
                        
            } catch (error) {
                console.error('Erro ao buscar informações do usuário:', error);
            }
        };
            
        fetchUserInfo();
        const storedMidia = localStorage.getItem("video")
        // Substitua 'VIDEO_ID_AQUI' pelo ID do vídeo que você deseja buscar
        loadVideoById(storedMidia);

    },[])

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
                {/* apresentação do video */}
                <div className="flex border-gray-100 border-2 rounded-lg">
                    <div className="w-[70%] ml-4">
                        <div className="mt-4">
                            <video src={`src/assets/Rin Itoshi (Blue Lock AMV) [4K].mp4`} controls className="w-[800px] h-[500px]" />
                        </div>

                        <div className="mt-4 mb-4 ">
                            <p className="text-xl">{video?.snippet?.title || 'Carregando...'}</p>
                            <p className="text-gray-300">{video?.snippet?.channelTitle || 'Carregando...'}</p>
                            <p className="text-gray-300">{video?.snippet?.description || 'Carregando...'}</p>
                        </div>
                    </div>
                    <div className="flex-col mt-5"></div>
                </div>

                
                     
            </div>
        </div>
    )
}
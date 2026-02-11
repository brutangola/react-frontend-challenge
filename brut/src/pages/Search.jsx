import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import Menu from "../components/Menu"

export default function Search() {

    const navigate = useNavigate()

    const [videos,setVideos] = useState([])
    const [search,setSearch] = useState('')
    const [name,setName] = useState()
    const [rSearch,setrSearch] = useState(false)

    useEffect(()=>{

        const searchInfo = JSON.parse(localStorage.getItem('search'));
        setSearch(searchInfo)

        const user = JSON.parse(localStorage.getItem('authInfo'))
        console.log(user.name)

        if (searchInfo !== undefined) {
            setSearch(searchInfo);
        }

        const loadVideos = async () => {
            try {
              const apiKey = 'AIzaSyAKQp53uv6APAQkX1S07xJIMO9ZaOrBlOs'; // Substitua com sua chave da API do YouTube
              const maxResults = 1; // Número máximo de resultados desejados
          
              const apiUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=${maxResults}&order=date&q=${searchInfo}&key=${apiKey}`;
          
              const response = await fetch(apiUrl);
              const result = await response.json();
              const videos = result.items;
              setVideos(videos);
              console.log(videos);
            } catch (error) {
              console.error('Erro ao buscar vídeos:', error);
            }
        };

        loadVideos()
    },[rSearch])

    const handleSearch = (event) => {
        setSearch(event.target.value)
    }

    function goSearch() {
        localStorage.setItem('search',JSON.stringify(search))
        setrSearch(search)
        navigate('/Search')
    }

    return(
        <div className="grid grid-cols-12 min-h-screen bg-blue-950 text-white">
            {/* Esquerdo */}
                
                <Menu />

            {/* Direito */}
                <div className="col-span-11 ml-2 mr-2 mt-2">

                    {/* NavBar */}
                    <div className="flex justify-between items-center mt-2 mr-6 mb-4">
                        <div>{search}</div>
                        <div className="flex-row">
                            <input onChange={handleSearch} type="text" placeholder="Pesquisa" className="h-10 rounded-2xl outline-none pl-4 bg-transparent border-gray-200 border-2 w-[600px] rounded-r-none"/>
                            <button className="rounded-l-none h-10 rounded-2xl p-1 bg-gray-500 border-gray-300 border-2 border-l-0 hover:bg-gray-400" onClick={goSearch}>Pesquisar</button>
                        </div>
                        <div>
                            <a href="/Perfil">
                                {name}
                            </a>
                        </div>
                    </div>

                    {/* apresentação da pesquisa */}
                    <div className="flex-col border-gray-100">
            <div className="">
                <div className="grid grid-cols-1">
                        {videos && videos.map(video=>{ 
                            return(
                                <div key={video.id.videoId} className="text-gray-100 mt-4 mb-3">
                                    <img
                                        src={video.snippet.thumbnails.high.url}
                                        alt={video.snippet.title}
                                        className="h-[160px] w-[300px] transition-transform duration-300 transform-gpu hover:scale-110 items-center justify-center rounded-lg"
                                    />
                                    <div className="mt-2">
                                        {video.snippet.title}
                                    </div>
                                            
                                </div>
                            )
                        })}
                            </div>
                        </div>
                    <br />
                <div>
            </div>
        </div> 
                    
                </div>
            </div>
    )
}
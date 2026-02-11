import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Videos({content}) {

    const navigate = useNavigate()

    const [videos,setVideos] = useState([])

    function truncateString(text, maxWords) {
        const words = text.split(' ');
        if (words.length > maxWords) {
          return words.slice(0, maxWords).join(' ') + '...';
        }
        return text;
    }

    useEffect(()=>{

        const loadVideos = async () => {
            try {
              const apiKey = 'AIzaSyAKQp53uv6APAQkX1S07xJIMO9ZaOrBlOs'; // Substitua com sua chave da API do YouTube
              const maxResults = 1; // Número máximo de resultados desejados
          
              // Adicione o parâmetro 'q' com o valor 'futebol' para buscar vídeos relacionados ao futebol
              const apiUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=${maxResults}&order=date&q=${content}&key=${apiKey}`;
          
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
    },[content])

    function goView(id) {
        localStorage.setItem("video",id)
        navigate('/View')
    }

    return(
        <div className="flex-col border-gray-100">
            <div className="">
                <div className="grid grid-cols-3">
                        {videos.map(video=>{ 
                            return(
                                <div key={video.id.videoId} className="text-gray-100 mt-4 mb-3" onClick={()=>goView(video.id.videoId)}>
                                    <img
                                        src={video.snippet.thumbnails.high.url}
                                        alt={video.snippet.title}
                                        className="h-[160px] w-[300px] transition-transform duration-300 transform-gpu hover:scale-110 items-center justify-center rounded-lg"
                                    />
                                    <div className="mt-2">
                                        {truncateString(video.snippet.title, 4)}
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
    )
}
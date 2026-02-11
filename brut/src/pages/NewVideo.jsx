import { useState   } from "react"
import { useEffect } from "react";
import { BiImageAdd } from "react-icons/bi";
import { BiSolidArrowToBottom } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { MediaVideoPicker } from "../components/VideoPicker";

export default function NewVideo() {

    const [titulo,setTitulo] = useState()
    const [desc,setDesc] = useState()
    const [user,setUser] = useState()
    let content = null

    const navigate = useNavigate()

    const handleTitle = (event) => {
        setTitulo(event.target.value)
    }

    const handleDesc = (event) => {
        setDesc(event.target.value)
    }

    function handleCancel() {
        navigate('/perfil')
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
                setUser(data.name);
            } catch (error) {
                console.error('Erro ao buscar informações do usuário:', error);
            }
        };
        fetchUserInfo();
        
    },[])

    async function handleCreateVideo(event) {

        event.preventDefault();

        const formData = new FormData(event.target);

        const fileToUpload = formData.get("video")

        if (fileToUpload) {
            const uploadFormData = new FormData()
        
            uploadFormData.set('file', fileToUpload)
            console.log(fileToUpload)
        }

        try {
            // Configuração do cliente OAuth
            const auth = new google.auth.OAuth2({
              clientId: "SEU_CLIENT_ID",
              clientSecret: "SEU_CLIENT_SECRET",
              redirectUri: "SEU_REDIRECT_URI",
            });
      
            // Configuração da API do YouTube
            const youtube = google.youtube({
              version: "v3",
              auth,
            });
      
            // Metadata do vídeo (título, descrição, etc.)
            const videoMetadata = {
              snippet: {
                title: titulo,
                description: desc,
              },
              status: {
                privacyStatus: "private", // Pode ser 'public', 'private' ou 'unlisted'
              },
            };
      
            // Criação do corpo da solicitação
            const requestBody = {
              resource: videoMetadata,
              media: {
                mimeType: "video/*",
                body: preview,
              },
            };
      
            // Faz o upload do vídeo
            const response = await youtube.videos.insert(requestBody);
            console.log("Vídeo enviado com sucesso!", response.data);
          } catch (error) {
            console.error("Erro ao enviar o vídeo:", error.message);
          }
        }

    return(
        <>
        <div className=" h-screen bg-blue-950 flex justify-center items-center">
            <form onSubmit={handleCreateVideo}>
            <div className="flex justify-center p-[50px] space-x-3 border-gray-100 border-2 rounded-lg">
                <div className="flex-col">
                    <div className="ml-[40%] mb-4">
                        <label htmlFor="capa" className="flex rounded-sm h-24 w-24 bg-gray-200 justify-center items-center hover:bg-gray-100">
                        <BiImageAdd size={40}/>
                        </label>
                    </div>
                    <div>
                    <label
                    htmlFor="titulo">
                    </label>
                        <input name="titulo" required onChange={handleTitle} type="text" value={titulo} placeholder="Título *" className="w-[100%] rounded-md pl-2 h-10 mb-4 outline-none"/>
                    </div>
                    <div>
                        <label
                        htmlFor="historia">
                        </label>
                        <textarea name="desc" rows="5" cols="50" onChange={handleDesc} value={desc} placeholder="Descriçao" className="w-[100%] rounded-md pl-2 h-20 outline-none"></textarea>
                    </div>
                    <div className="mt-2">
                            <label htmlFor="video" className="text-gray-100 border-gray-100 border-2 rounded-lg p-3 flex space-x-4 w-64 justify-center hover:border-green-600 hover:text-gray-50">Adicione aqui o seu vídeo  <BiSolidArrowToBottom size={20}/></label> 
                            <MediaVideoPicker content={content}/>
                    </div>
                    <div className="space-x-2">
                        <button className="text-gray-100 border-2 border-gray-200 rounded-xl w-[40%] p-2 hover:border-green-600 hover:text-green-600" type="submit" onClick={handleCancel}> Cancelar </button>
                        <button className="text-gray-100 border-2 border-gray-200 rounded-xl w-[40%] p-2 hover:border-green-600 hover:text-green-600" type="submit"> Upload </button>
                    </div>
                    <div className="text-gray-100 mt-3">
                        Att: os campo com * são obrigatórios!
                    </div>
                </div>
            </div>
            </form>
        </div>
        </>
    )
}

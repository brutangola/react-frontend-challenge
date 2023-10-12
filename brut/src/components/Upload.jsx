import { useNavigate } from "react-router-dom"


export default function Upload() {

    const navigate = useNavigate();

    function handleCreate() {
        navigate('/UploadVideo')
    }

    return(
        <div className="flex-col ml-[35%] mb-[10%] mt-[10%] w-full justify-center">
            <div className="text-2xl justify-center">Carregue uma mídia para começar</div>
            <div>Comece a partilhar a sua história e a estabelecer laços com os visitantes.</div>
            <div className="mb-4">As mídias que carregar aparecem aqui.</div>
            <button onClick={handleCreate} className="border rounded-lg bg-gray-500 text-white text-center pl-3 pr-3 pb-0.5 pt-0.5 hover:text-black hover:bg-white">
                Fazer upload de um video
            </button>
        </div>
    )
}
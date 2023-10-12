import { useNavigate } from "react-router-dom";
import { BiHomeAlt2, BiLogOutCircle, BiCollection } from "react-icons/bi";

export default function Menu() {

    const navigate = useNavigate()

    function goHome() {
        navigate('/HomePage')
    }

    function goPlaylist() {
        navigate('/playlists')
    }

    let info = JSON.parse(localStorage.getItem('authInfo'))

    const logOut = () => {
        fetch("https://oauth2.googleapis.com/revoke?token=" + info['access_token'],{
            method: 'POST',
            headers: 
                {'content-type': 'application/x-www-form-urlencoded'}
        })
        .then((data)=>{
            location.href = "http://localhost:5173/"
        })
        
    }

    return(
        <div className="w-20 flex-col space-y-8 justify-between mt-1 border-2 border-gray-100 rounded-lg">
            <div className="flex-col space-y-8">
                <button onClick={goHome}>
            <div className="ml-4 mt-2">
                    <BiHomeAlt2 className="ml-2" size={25}/>
                    Início
                </div>
                </button>
                <button onClick={goPlaylist}>
                <div className="ml-2" >
                    <BiCollection className="ml-4" size={25}/>
                    Playlists
                </div>
                </button>
            </div>
            <button onClick={logOut}>
                <div className="self-end ml-5">
                <BiLogOutCircle className="" size={25}/>
                Sair
                </div>
            </button>
        </div>

    )
}
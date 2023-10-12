const signIn = () => {
    let oauth2Endpoint = "https://accounts.google.com/o/oauth2/v2/auth";
  
    let form = document.createElement('form')
    form.setAttribute('method','GET')
    form.setAttribute('action',oauth2Endpoint)
  
    let params = {
      "client_id" : "662572498916-rrpa604930b105uja9eo9oi6d8puoqkl.apps.googleusercontent.com",
      "redirect_uri": "http://localhost:5173/HomePage",
      "response_type": "token",
      "scope": "https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/youtube",
      "include_granted_scopes": 'true',
      "state": "pass-through-value"
    }
  
    for ( var p in params) {
      let input = document.createElement('input')
      input.setAttribute('type','hidden')
      input.setAttribute('name',p)
      input.setAttribute('value',params[p])
      form.appendChild(input)
    }
  
    document.body.appendChild(form)
  
    form.submit()
  }

export default function Home() {
    return(
        <div className="h-screen w-screen bg-blue-950 flex items-center justify-center">
          <div className="flex-col p-[5%] items-center justify-center rounded-lg w-[65%]">
                    <h1 className="text-center text-3xl text-gray-100 mb-4">Bem-vindo ao Bruttube</h1>
                    <br />
                    <div className="flex-col items-center justify-center">
                        <div className="flex justify-center items-center">
                            <h1 className="text-center text-3xl text-gray-300 mb-8">A BRUT OEFERECE AGORA A MELHOR PLATAFORMA DE VÍDEOS NÃO FIQUES DE FORA VENHA E FAÇA O SEU CADASTRO AGORA MESMO!</h1>
                        </div>
                        
                        <div className="flex justify-center items-center">
                          <button className='text-gray-300 text-2xl border-gray-300 border-2 text-center w-80 rounded-lg h-14 hover:text-white hover:border-white hover:bg-gray-600' onClick={signIn}>Fazer Login</button>
                        </div>
                    </div> 
          </div>
        </div>
    )
}
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import React, {Suspense, useEffect, useState} from "react";

const Navbar = React.lazy(() => import('./components/Navbar/Navbar'));
const Home = React.lazy(() => import('./components/Home/Home'));
const Courses = React.lazy(() => import('./components/Courses/Courses'));
const Forum = React.lazy(() => import('./components/Forum/Forum'));
const Loginform = React.lazy(() => import('./components/Loginform'));

function App(){



  const [login, setLogin] = useState(false);

  const gettoken = localStorage.getItem('login')

  // console.log(gettoken, 'thistokern')

  const[allow, setallow] = useState('')

  console.log(allow, 'noway')

  function access (value){

    setallow(value)
    
    }

  useEffect(()=>{

  if(gettoken){
    setLogin(true)
  }
  else{
    setLogin(false)
  }

}, [allow])




 
  
  return(
<div>
 

  
<BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          {
            login ? 
            <Routes>
            {
              <Route path="/" element={<Navbar getlogin={access} />}>
                <Route path="/" element={<Home />} />
                <Route  path="fourm" element={<Forum />} />
               
              </Route> 
              
            }
            <Route  path="/course" element={<Courses />} />
    
           
          </Routes>
            :
            <Routes> 
                <Route path="/" element={<Loginform getlogin={access} />} />
          </Routes>
          }
      
        </Suspense>
      </BrowserRouter>

  

    

</div>

  )
}
export default App;
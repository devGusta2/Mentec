import Header from "../../Components/Header/Header"
import Footer from "../../Components/Footer/Footer";
import axios from 'axios';
import { useEffect,useState  } from "react";
function Tpage(){
    const [dado, setDado] = useState([]);
    useEffect(()=>{
        const buscaDados = async () =>{
          
            try{
                const res = await axios.get('http://localhost/Backend_Mentec/Controller/index.php');
                setDado(res.data);
            }catch(error){
                console.log("Erro", error);
            }
        }
        buscaDados();
    },[]);
    return(
        <div>
            <h3>Teste</h3>
                <ul>
                            {dado.map(mi=>(
                            <li key={mi.id}>
                                {mi.id}
                            </li>
                        ))}
                </ul>
                <ul>
                            {dado.map(mi=>(
                            <li key={mi.id}>
                                {mi.nome}
                            </li>
                        ))}
                </ul>
                <ul>
                            {dado.map(mi=>(
                            <li key={mi.id}>
                                {mi.email}
                            </li>
                        ))}
                </ul>
                <ul>
                            {dado.map(mi=>(
                            <li key={mi.id}>
                                {mi.num}
                            </li>
                        ))}
                </ul>
        </div>
    )
}


export default Tpage;
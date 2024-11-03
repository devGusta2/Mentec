import Header from "../../Components/Header/Header"
import Footer from "../../Components/Footer/Footer";
import axios from 'axios';
import { useEffect,useState  } from "react";
import styles from './Tpage.module.css';
function Tpage(){
    // const [dado, setDado] = useState([]);
    // useEffect(()=>{
    //     const buscaDados = async () =>{
          
    //         try{
    //             const res = await axios.get('http://localhost/Backend_Mentec/Controller/index.php');
    //             setDado(res.data);
    //         }catch(error){
    //             console.log("Erro", error);
    //         }
    //     }
    //     buscaDados();
    // },[]);
    return(
        <div className="Container">
            {/* <ul>
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
                </ul> */}
            <section>
               
                <form>
                        <label>Nome:</label>
                        <input type="text"/>
                        <label>Email:</label>
                        <input type="text"/>
                        <label>Senha:</label>
                        <input type="text"/>
                        <label>Tel:</label>
                        <input type="text"/>
                        
                        <button type="submit" onClick={enviar}>Enviar</button>
                </form>
            </section>
            <section>
               
            </section>
        </div>
    )
}


export default Tpage;
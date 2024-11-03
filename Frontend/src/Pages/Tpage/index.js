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

    const [email, setEmail] = useState([]);
    const [nome, setNome] = useState("");
    const [senha, setSenha] = useState("");
    const [tel, setTel] = useState("");

    const Cadastra = async (e) => { // Renomeando para Cadastra
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost/Api_mentec/Controller/user/cadastro.php", {
                email,
                nome,
                senha,
                tel,
            });
            console.log(res.data); // Opcional: Exibir resposta do backend
        } catch (error) {
            console.log(error);
        }
    }
    return(
        <div className={styles.container}>
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
            <section className={styles.section}>
               
                <form onSubmit={Cadastra}>
                        <label>Nome:</label>
                        <input type="text" value={nome} onChange={(e) => setNome(e.target.value)}/>
                        <label>Email:</label>
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <label>Senha:</label>
                        <input type="password" value={senha}  onChange={(e) => setSenha(e.target.value)}/>
                        <label>Tel:</label>
                        <input type="text" value={tel}  onChange={(e) => setTel(e.target.value)}/>
                        
                        <button type="submit" >Enviar</button>
                </form>
            </section>
            <section>
               
            </section>
        </div>
    )
}


export default Tpage;
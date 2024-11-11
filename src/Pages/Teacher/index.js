import {Link} from 'react-router-dom';
export default function Teacher(){
    return(
        <div className="">
            <h3>Página do professor</h3>
            <Link to='CreateMentoring'><h3>Criar </h3></Link>
        </div>
    );
}
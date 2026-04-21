import axios from "axios";
import { useState, useEffect } from "react";
import styles from "./index.module.css";
import { faUser, faSave } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getApiUrl, getToken } from "../../../utils/AuthProvider";

export default function Profile() {
    const API_URL = getApiUrl();
    const TOKEN = getToken();

    const [user, setUser] = useState({
        nome: "",
        email: "",
        telefone: "",
        matricula: "",
        curso: ""
    });
    const [loading, setLoading] = useState(false);
    const [isEditing, setIsEditing] = useState(false);

    const fetchUser = async () => {
        try {
            const response = await axios.get(`${API_URL}/usuarios/perfil`, {
                headers: { Authorization: `Bearer ${TOKEN}` }
            });
            setUser(response.data);
        } catch (e: any) {
            alert("Erro ao buscar perfil: " + e?.response?.data?.message);
        }
    };

    useEffect(() => {
        fetchUser();
    }, []);

    const handleUpdate = async (e: any) => {
        e.preventDefault();
        try {
            setLoading(true);
            await axios.put(
                `${API_URL}/usuarios/atualizar`,
                user,
                { headers: { Authorization: `Bearer ${TOKEN}` } }
            );
            setIsEditing(false);
            alert("Perfil atualizado com sucesso!");
        } catch (e: any) {
            alert("Erro ao atualizar perfil: " + e?.response?.data?.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.titleAndIcon}>
                    <FontAwesomeIcon id={styles.icon} icon={faUser} />
                    <p>Perfil do Monitor</p>
                </div>
                {!isEditing && (
                    <button
                        className={styles.editButton}
                        onClick={() => setIsEditing(true)}
                    >
                        Editar Perfil
                    </button>
                )}
            </div>

            <div className={styles.profileCard}>
                <form onSubmit={handleUpdate}>
                    <div className={styles.formGroup}>
                        <label>Nome</label>
                        <input
                            type="text"
                            value={user.nome}
                            onChange={(e) => setUser({...user, nome: e.target.value})}
                            disabled={!isEditing}
                        />
                    </div>

                    <div className={styles.formGroup}>
                        <label>Email</label>
                        <input
                            type="email"
                            value={user.email}
                            onChange={(e) => setUser({...user, email: e.target.value})}
                            disabled={!isEditing}
                        />
                    </div>

                    <div className={styles.formGroup}>
                        <label>Telefone</label>
                        <input
                            type="text"
                            value={user.telefone}
                            onChange={(e) => setUser({...user, telefone: e.target.value})}
                            disabled={!isEditing}
                        />
                    </div>

                    <div className={styles.formGroup}>
                        <label>Matrícula</label>
                        <input
                            type="text"
                            value={user.matricula}
                            onChange={(e) => setUser({...user, matricula: e.target.value})}
                            disabled={!isEditing}
                        />
                    </div>

                    <div className={styles.formGroup}>
                        <label>Curso</label>
                        <input
                            type="text"
                            value={user.curso}
                            onChange={(e) => setUser({...user, curso: e.target.value})}
                            disabled={!isEditing}
                        />
                    </div>

                    {isEditing && (
                        <div className={styles.actions}>
                            <button type="button" onClick={() => setIsEditing(false)} className={styles.cancel}>
                                Cancelar
                            </button>
                            <button type="submit" className={styles.submit} disabled={loading}>
                                <FontAwesomeIcon icon={faSave} />
                                {loading ? " Salvando..." : " Salvar"}
                            </button>
                        </div>
                    )}
                </form>
            </div>
        </div>
    );
}
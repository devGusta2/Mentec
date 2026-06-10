import axios from "axios";
import { useEffect, useMemo, useState } from "react";
import styles from "./index.module.css";
import {
  faIdCard,
  faEnvelope,
  faPhone,
  faUserPen,
  faSchool,
  faSpinner
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getApiUrl, getToken } from "../../../utils/AuthProvider";

type MentorProfile = {
  id?: string;
  nome?: string;
  sobrenome?: string;
  email?: string;
  telefone?: string;
  nivelExperiencia?: string;
  especialidade?: string;
  ra?: string;
};

export default function Profile() {
  const API_URL = getApiUrl();
  const TOKEN = getToken();
  const mentorId = useMemo(() => localStorage.getItem("useId"), []);

  const [profile, setProfile] = useState<MentorProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProfile = async () => {
      if (!mentorId) {
        setError("Nenhum identificador de mentor foi encontrado.");
        setLoading(false);
        return;
      }

      try {
        const response = await axios.get(
          `${API_URL}/admin/usuarios/monitores/${mentorId}`,
          {
            headers: { Authorization: `Bearer ${TOKEN}` }
          }
        );
        setProfile(response.data);
      } catch (e: any) {
        setError(
          e?.response?.data?.message ||
            "Não foi possível carregar as informações do mentor."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [API_URL, TOKEN, mentorId]);

  const nomeCompleto = useMemo(() => {
    if (!profile) return "Perfil do mentor";
    return [profile.nome, profile.sobrenome].filter(Boolean).join(" ") || "Perfil do mentor";
  }, [profile]);

  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <div className={styles.heroCopy}>
          <span className={styles.kicker}>Perfil</span>
          <h1>{loading ? "Carregando perfil..." : nomeCompleto}</h1>
          <p>
            Visualização das informações do mentor obtidas diretamente do
            cadastro administrativo.
          </p>
        </div>

        <div className={styles.heroCard}>
          <div className={styles.avatar}>
            <FontAwesomeIcon icon={faUserPen} />
          </div>
          <div>
            <strong>{profile?.nivelExperiencia ?? "Mentor"}</strong>
            <span>{profile?.especialidade ?? "Especialidade não informada"}</span>
          </div>
        </div>
      </section>

      {loading ? (
        <section className={styles.stateCard}>
          <FontAwesomeIcon icon={faSpinner} spin />
          <p>Buscando dados do mentor...</p>
        </section>
      ) : error ? (
        <section className={styles.stateCard}>
          <p>{error}</p>
        </section>
      ) : (
        <section className={styles.profileGrid}>
          <article className={styles.infoCard}>
            <h2>Informações principais</h2>
            <div className={styles.infoList}>
              <div className={styles.infoItem}>
                <FontAwesomeIcon icon={faIdCard} />
                <div>
                  <span>Identificador</span>
                  <strong>{profile?.id ?? mentorId}</strong>
                </div>
              </div>
              <div className={styles.infoItem}>
                <FontAwesomeIcon icon={faEnvelope} />
                <div>
                  <span>Email</span>
                  <strong>{profile?.email ?? "-"}</strong>
                </div>
              </div>
              <div className={styles.infoItem}>
                <FontAwesomeIcon icon={faPhone} />
                <div>
                  <span>Telefone</span>
                  <strong>{profile?.telefone ?? "-"}</strong>
                </div>
              </div>
              <div className={styles.infoItem}>
                <FontAwesomeIcon icon={faSchool} />
                <div>
                  <span>Especialidade</span>
                  <strong>{profile?.especialidade ?? "-"}</strong>
                </div>
              </div>
            </div>
          </article>

          <article className={styles.sideCard}>
            <h2>Resumo</h2>
            <p>
              Este perfil foi desenhado para ser claro, direto e visualmente
              mais elegante. Se o backend enviar novos campos, a seção pode ser
              expandida sem quebrar o layout.
            </p>
            <div className={styles.badge}>
              {profile?.nivelExperiencia ?? "Perfil carregado"}
            </div>
          </article>
        </section>
      )}
    </div>
  );
}

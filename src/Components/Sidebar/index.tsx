import { useState } from "react";
import styles from './index.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faSliders, 
    faPenToSquare, 
    faUsers, 
    faChevronDown, 
    faHome, 
    faBookOpen, 
    faUser,
    faRightFromBracket,
    faHeadset 
} from '@fortawesome/free-solid-svg-icons';
import { Link, useLocation } from "react-router-dom";

export default function SideBar() {
    const tipoUsuario = localStorage.getItem('role')?.toUpperCase();
    const location = useLocation();
    const [openMenu, setOpenMenu] = useState<number | null>(null);

    const toggleMenu = (index: number) => {
        setOpenMenu(openMenu === index ? null : index);
    };

    const links: any = {
        ADMIN: [
            { label: "Dashboard", icon: faSliders, path: "/admin/dashboard" },
            { label: "Disciplinas", icon: faPenToSquare, path: "/admin/disciplinas" },
            { label: "Monitorias", icon: faPenToSquare, path: "/admin/monitorias" },
            { label: "Sac", icon: faHeadset, path: "/admin/sac" },
            {
                label: "Usuários",
                icon: faUsers,
                children: [
                    { label: "Monitores", path: "/admin/monitores" },
                    { label: "Alunos", path: "/admin/alunos" },
                    { label: "Professores", path: "/admin/usuarios/professores" }
                ]
            }
        ],
        MONITOR: [
            { label: "Home", icon: faHome, path: "/monitor/home" },
            { label: "Monitorias", icon: faBookOpen, path: "/monitor/monitorias" },
            { label: "Perfil", icon: faUser, path: "/monitor/profile" }
        ],
        MENTOR: [
            { label: "Home", icon: faHome, path: "/mentor/home" },
            { label: "Mentorias", icon: faBookOpen, path: "/mentor/mentorias" },
            { label: "Perfil", icon: faUser, path: "/mentor/profile" }
        ]
    };

    const currentLinks = links[tipoUsuario || ""] || [];

    const handleLogout = () => {
        localStorage.clear();
        window.location.href = "/";
    };

    return (
        <div className={styles.navBar}>
            <div className={styles.titleBox}>
                <p>Mentec</p>
                {tipoUsuario === "ADMIN" ? <p>GESTOR</p> : <p>{tipoUsuario || 'Convidado'}</p>}
            </div>

            <nav className={styles.nav}>
                <ul>
                    {currentLinks.map((item: any, index: number) => {
                        const isActive = location.pathname === item.path;
                        const hasChildren = !!item.children;

                        return (
                            <li key={index}>
                                {!hasChildren ? (
                                    <Link
                                        to={item.path}
                                        className={`${styles.item} ${isActive ? styles.active : ""}`}
                                    >
                                        <FontAwesomeIcon icon={item.icon} className={styles.icon} />
                                        <span>{item.label}</span>
                                    </Link>
                                ) : (
                                    <>
                                        <div
                                            onClick={() => toggleMenu(index)}
                                            className={`${styles.item} ${openMenu === index ? styles.active : ""}`}
                                        >
                                            <FontAwesomeIcon icon={item.icon} className={styles.icon} />
                                            <span>{item.label}</span>
                                            <FontAwesomeIcon
                                                icon={faChevronDown}
                                                className={`${styles.chevron} ${openMenu === index ? styles.rotate : ""}`}
                                            />
                                        </div>

                                        <ul className={`${styles.submenu} ${openMenu === index ? styles.open : ""}`}>
                                            {item.children.map((child: any, i: number) => (
                                                <li key={i}>
                                                    <Link
                                                        to={child.path}
                                                        className={location.pathname === child.path ? styles.activeSub : ""}
                                                    >
                                                        {child.label}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </>
                                )}
                            </li>
                        );
                    })}
                </ul>
            </nav>

            <div className={styles.sair}>
                <p onClick={handleLogout}>
                    <FontAwesomeIcon icon={faRightFromBracket} />
                    Sair
                </p>
            </div>
        </div>
    );
}
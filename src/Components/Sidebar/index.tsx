import { useState } from "react";
import styles from './index.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSliders, faPenToSquare, faUsers, faChevronDown, faHome, faBookOpen, faUser } from '@fortawesome/free-solid-svg-icons';
import { Link, useLocation } from "react-router-dom";

export default function SideBar() {
    const tipoUsuario = localStorage.getItem('role');
    const location = useLocation();

    const [openMenu, setOpenMenu] = useState(null);

    const toggleMenu = (index: any) => {
        setOpenMenu(openMenu === index ? null : index);
    };

    const links = {
        admin: [
            {
                label: "Dashboard",
                icon: faSliders,
                path: "/admin/dashboard"
            },
            {
                label: "Disciplinas",
                icon: faPenToSquare,
                path: "/admin/disciplinas"
            },
            {
                label: "Usuarios",
                icon: faUsers,
                children: [
                    { label: "Mentores", path: "/admin/usuarios/mentores" },
                    { label: "Alunos", path: "/admin/usuarios/alunos" },
                    { label: "Professores", path: "/admin/usuarios/professores" }
                ]
            }
        ],
        monitor: [
            {
                label: "Home",
                icon: faHome,
                path: "/monitor/home"
            },
            {
                label: "Monitorias",
                icon: faBookOpen,
                path: "/monitor/monitorias"
            },
            {
                label: "Perfil",
                icon: faUser,
                path: "/monitor/profile"
            }
        ],
        mentor: [
            {
                label: "Home",
                icon: faHome,
                path: "/mentor/home"
            },
            {
                label: "Mentorias",
                icon: faBookOpen,
                path: "/mentor/mentorias"
            },
            {
                label: "Perfil",
                icon: faUser,
                path: "/mentor/profile"
            }
        ]
    };

    const currentLinks = tipoUsuario === "ADMIN" ? links.admin : tipoUsuario === "MONITOR" ? links.monitor : tipoUsuario === "MENTOR" ? links.mentor : [];

    return (
        <div className={styles.navBar}>

            <div className={styles.titleBox}>
                <p>Mentec</p>
                <p>{tipoUsuario}</p>
            </div>

            <nav className={styles.nav}>
                <ul>
                    {currentLinks.map((item: any, index: any) => {
                        const isActive = location.pathname === item.path;

                        return (
                            <li key={index}>

                          
                                {!item.children ? (
                                    <Link
                                        to={item.path}
                                        className={`${styles.item} ${isActive ? styles.active : ""}`}
                                    >
                                        <FontAwesomeIcon icon={item.icon} style={{height: 40, width:40}}/>
                                        <span>{item.label}</span>
                                    </Link>
                                ) : (
                                    <>
                              
                                        <div
                                            onClick={() => toggleMenu(index)}
                                            className={styles.item}
                                        >
                                            <FontAwesomeIcon icon={item.icon} style={{height: 40, width:40}} />
                                            <span>{item.label}</span>

                                            <FontAwesomeIcon
                                                icon={faChevronDown}
                                                className={openMenu === index ? styles.rotate : ""}
                                            />
                                        </div>

                                        <ul className={`${styles.submenu} ${openMenu === index ? styles.open : ""}`}>
                                            {item.children.map((child: any, i: any) => {
                                                const isChildActive = location.pathname === child.path;

                                                return (
                                                    <li key={i}>
                                                        <Link
                                                            to={child.path}
                                                            className={isChildActive ? styles.activeSub : ""}
                                                        >
                                                            {child.label}
                                                        </Link>
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                    </>
                                )}
                            </li>
                        );
                    })}
                </ul>
            </nav>

            <div className={styles.sair}>
                <p
                    onClick={() => {
                        localStorage.clear();
                        window.location.href = "/";
                    }}
                >
                    sair
                </p>
            </div>
        </div>
    );
}
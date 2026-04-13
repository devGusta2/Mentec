
import axios from "axios";
import { useState, useEffect } from "react";
import styles from "./index.module.css"
import {faPenToSquare} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function Disciplinas(){


    const API_URL = process.env.REACT_APP_API_URL;


    return(
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.titleAndIcon}>
                    <FontAwesomeIcon id={styles.icon}icon={faPenToSquare} />
                    <p>Disciplinas</p>
                </div>
            </div>
        </div>
    )
}
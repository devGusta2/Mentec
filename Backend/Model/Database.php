<?php

public class Database{
    // variaveis de conexão com o banco
    private String $nome = "localhost";
    private String $password = "";
    private String $user = "root";
    private String $database = "mentecDb";
    // variavel da conexao
    private ?PDO $con = null;

    public function getCon(): ?PDO{
        try{
            $this -> $con = new PDO("mysql:host".$this->nome.
            ";dbname".$this->database.";password".$this->password.";username".$this->user);
            $this->conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        }catch{
            echo "Erro na conexão" . $exception ->getMessage();
        }
        return $this->$con;
    }



}



?>
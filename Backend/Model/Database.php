<?php

class Database {
    // Variáveis de conexão com o banco de dados
    private string $nome = "localhost";
    private string $password = "";
    private string $user = "root";
    private string $database = "mentecDb";
    // Variável da conexão
    private ?PDO $con = null;

    public function getCon(): ?PDO {
        try {
            $this->con = new PDO(
                "mysql:host=" . $this->nome . ";dbname=" . $this->database,
                $this->user,
                $this->password
            );
            $this->con->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        } catch (PDOException $exception) {
            echo "Erro na conexão: " . $exception->getMessage();
            $this->con = null; // Define como null se a conexão falhar
        }
        return $this->con;
    }
}

?>

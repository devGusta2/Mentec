-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 02/12/2024 às 23:46
-- Versão do servidor: 10.4.28-MariaDB
-- Versão do PHP: 8.0.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `mentecdb`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `mentorias`
--

CREATE TABLE `mentorias` (
  `id` int(11) NOT NULL,
  `titulo` varchar(100) NOT NULL,
  `descricao` varchar(800) NOT NULL,
  `publico_alvo` varchar(255) DEFAULT NULL,
  `objetivos` text DEFAULT NULL,
  `conteudo_programatico` text DEFAULT NULL,
  `duracao` int(11) DEFAULT NULL,
  `frequencia` varchar(50) DEFAULT NULL,
  `requisitos` text DEFAULT NULL,
  `metodologia` text DEFAULT NULL,
  `instrutor` varchar(100) DEFAULT NULL,
  `data_inicio` date DEFAULT NULL,
  `local` varchar(100) DEFAULT NULL,
  `valor` decimal(10,2) DEFAULT NULL,
  `forma_pagamento` varchar(50) DEFAULT NULL,
  `feedback` text DEFAULT NULL,
  `isActive` tinyint(1) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `mentorias`
--

INSERT INTO `mentorias` (`id`, `titulo`, `descricao`, `publico_alvo`, `objetivos`, `conteudo_programatico`, `duracao`, `frequencia`, `requisitos`, `metodologia`, `instrutor`, `data_inicio`, `local`, `valor`, `forma_pagamento`, `feedback`, `isActive`) VALUES
(1, 'Curso de PHP', 'Nova descrição funcionandodgfhdfhfg', 'Iniciantes', 'Ficar bom em php e chegar ao laravel RICOCO', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0),
(2, 'Mentoria de RUSTOOO', 'mano do ceu', 'Iniciantes', '', '', 80, 'Semanal', 'Nenhum', '', 'Mel', '2024-11-30', '', 0.00, '', '', 0),
(3, 'Mentoria de estatística', 'Nova descrição funcionando corretamente', 'Iniciantes do Curso de ADS', 'Melhorar em tudo', '', 80, 'Semanal', 'Nenhum', '', 'Mel', '2024-11-25', '', 0.00, '', '', 1),
(4, 'Mentoria de Contabilidade', 'Bomd ia', 'Iniciantes do Curso de ADS', '~passar na matéria', '', 80, 'Semanal', 'Nenhum', '', 'Mel', '0000-00-00', '', 0.00, '', '', 1),
(5, 'Computação em AWS', 'Muto bom, legal e bonito', 'Iniciantes', 'Conhecimento básico', '', 50, 'Semanal', 'Nenhum', '', 'Mel', '2024-11-30', '', 0.00, '', '', 1),
(6, 'Mentoria da mel', 'eb', 'Iniciantes', 'Passar na matéria', '', 20, 'Semanal', 'Nenhum', '', 'Mel', '2024-11-29', '', 0.00, '', '', 0),
(7, 'Reforço Python é vida', 'nao vou deixar isso acontecer', 'Melissa', 'Se tornar especialista com python', '', 9, 'Semanal', 'Nenhum', '', 'Mel ', '2024-11-08', '', 0.00, '', '', 1),
(8, 'vamo ver se funfa', 'melissa do php', 'nenhum', 'n sei', '', 30, 'Semanal', 'Nnehum', '', 'meldo php', '2024-11-19', '', 0.00, '', '', 1),
(9, 'Mentoria em Programação Python', 'Aprenda Python de forma prática e com exemplos reais.', 'Iniciantes em programação', 'Dominar a linguagem Python para desenvolvimento de projetos.', 'Sintaxe básica, estruturas de dados, manipulação de arquivos.', 40, 'Semanal', 'Nenhuma', 'Aulas práticas com exercícios em tempo real', 'Lucas Santos', '2024-12-05', 'São Paulo', 1300.00, 'Pix', 'Excelente para iniciantes, bem didático!', 1),
(10, 'Mentoria em Desenvolvimento de Games', 'Curso de desenvolvimento de jogos em Unity e C# para iniciantes e intermediários.', 'Desenvolvedores e entusiastas de jogos', 'Criar um jogo 2D simples e aprender princípios de desenvolvimento de jogos.', 'Configuração de Unity, criação de personagens, física e colisões.', 60, 'Semanal', 'Conhecimentos básicos em programação', 'Aulas práticas com projetos hands-on', 'Felipe Almeida', '2024-12-12', 'Curitiba', 2000.00, 'Boleto', 'A melhor forma de aprender a desenvolver jogos!', 1),
(11, 'Mentoria em Cibersegurança', 'Curso de introdução à segurança da informação e técnicas de proteção contra ataques cibernéticos.', 'Profissionais de TI e interessados em segurança', 'Entender práticas de segurança e como proteger sistemas de dados.', 'Segurança de redes, criptografia, e análise de vulnerabilidades.', 80, 'Mensal', 'Conhecimentos intermediários de TI', 'Estudos de caso e simulações de ataques', 'Carla Souza', '2024-11-30', 'Rio de Janeiro', 2200.00, 'Cartão de crédito', 'Conteúdo completo e muito atualizado.', 1),
(12, 'Mentoria em Liderança e Comunicação', 'Desenvolva habilidades de liderança e comunicação eficaz.', 'Profissionais em cargos de liderança', 'Aprimorar habilidades de liderança e técnicas de comunicação assertiva.', 'Técnicas de feedback, resolução de conflitos, e comunicação verbal.', 50, 'Quinzenal', 'Experiência em gestão de equipes', 'Workshops interativos e simulações', 'André Silva', '2024-12-01', 'Belo Horizonte', 1700.00, 'Transferência bancária', 'Prático e eficiente, ótima mentoria!', 1),
(13, 'Mentoria em Redação de Conteúdo', 'Curso de como escrever conteúdos persuasivos para blogs e mídias digitais.', 'Blogueiros e redatores', 'Escrever de forma clara e envolvente para a web.', 'Estruturação de textos, SEO, e técnicas de persuasão.', 20, 'Semanal', 'Experiência em redação', 'Exercícios de escrita e análise de artigos', 'Juliana Costa', '2024-12-10', 'Porto Alegre', 1000.00, 'Pix', 'Excelente para melhorar a escrita e SEO.', 1),
(14, 'Mentoria de Estratégia de Negócios', 'Aprenda a desenvolver estratégias de negócios eficazes para expandir sua empresa.', 'Empreendedores e executivos', 'Desenvolver planos estratégicos para alavancar negócios.', 'Análise de mercado, definição de metas e análise SWOT.', 70, 'Mensal', 'Experiência em gestão de empresas', 'Sessões de planejamento estratégico e estudos de caso', 'Roberto Lima', '2024-12-15', 'São Paulo', 2500.00, 'Boleto', 'Altamente recomendada para empreendedores.', 1),
(15, 'Mentoria de Fotografia Digital', 'Aprenda técnicas de fotografia digital para iniciantes e avançados.', 'Fotógrafos amadores e profissionais', 'Capturar imagens de alta qualidade e edição de fotos.', 'Princípios da fotografia, técnicas de iluminação, e edição de fotos.', 30, 'Semanal', 'Nenhuma', 'Aulas práticas e análises de fotos', 'Mariana Pereira', '2024-12-20', 'Curitiba', 900.00, 'Cartão de crédito', 'Muito bom para quem quer melhorar a técnica.', 1),
(16, 'Mentoria em Finanças Pessoais', 'Ajudamos a organizar e investir melhor seu dinheiro.', 'Estudantes e jovens profissionais', 'Aprender a administrar finanças pessoais e investir com segurança.', 'Orçamento pessoal, investimentos iniciais e análise de despesas.', 25, 'Mensal', 'Nenhuma', 'Aulas com estudos de caso e simulações', 'Henrique Dias', '2024-11-25', 'Recife', 800.00, 'Pix', 'Conselhos práticos e ótimas dicas financeiras.', 1),
(17, 'Mentoria em Artes Plásticas', 'Mentoria para aprender técnicas de pintura e desenho com diversos materiais.', 'Artistas iniciantes e intermediários', 'Aprimorar habilidades artísticas e técnicas de pintura.', 'Pintura a óleo, aquarela e desenho à mão livre.', 35, 'Semanal', 'Experiência básica em arte', 'Aulas práticas com materiais de pintura', 'Ana Beatriz', '2024-12-02', 'São Paulo', 1100.00, 'Transferência bancária', 'Aulas muito criativas e inspiradoras!', 1),
(18, 'Mentoria de Planejamento de Carreira', 'Mentoria para ajudar profissionais a definir objetivos e planejar sua carreira.', 'Profissionais em transição de carreira', 'Entender onde querem chegar e como alcançar seus objetivos profissionais.', 'Análise de perfil profissional, definição de metas, e coaching de carreira.', 15, 'Mensal', 'Nenhuma', 'Sessões de coaching individualizadas', 'Thiago Martins', '2024-12-08', 'Belo Horizonte', 1300.00, 'Cartão de crédito', 'Muito esclarecedor e motivador!', 1),
(19, 'Mentoria de Desenvolvimento de Aplicativos Mobile', 'Aprenda a desenvolver aplicativos para Android e iOS.', 'Desenvolvedores iniciantes e intermediários', 'Criar um aplicativo funcional usando React Native.', 'Estrutura do React Native, desenvolvimento de telas e interações.', 60, 'Semanal', 'Conhecimentos em JavaScript', 'Aulas práticas e desenvolvimento de projetos', 'Felipe Ramos', '2024-12-03', 'Fortaleza', 1700.00, 'Pix', 'Conteúdo prático e de fácil entendimento.', 1),
(20, 'Mentoria em E-commerce', 'Como criar e gerenciar sua loja virtual de forma eficaz.', 'Empreendedores e donos de pequenas empresas', 'Criar uma loja online e entender as melhores práticas de vendas.', 'Configuração de plataformas de e-commerce, marketing digital e logística.', 45, 'Quinzenal', 'Experiência em vendas online', 'Aulas práticas com análise de cases de sucesso', 'Daniela Almeida', '2024-12-18', 'São Paulo', 1500.00, 'Boleto', 'Ideal para quem quer ter sucesso em vendas online.', 1),
(21, 'Mentoria em Design de Interfaces', 'Curso para aprender a criar interfaces intuitivas e estéticas para websites e aplicativos.', 'Designers e desenvolvedores front-end', 'Melhorar a experiência do usuário e a estética de interfaces.', 'Principios de design, uso de cores e tipografia, prototipação.', 40, 'Semanal', 'Experiência básica em design', 'Aulas práticas e projetos em grupo', 'Júlia Costa', '2024-12-07', 'Rio de Janeiro', 1600.00, 'Cartão de crédito', 'Muito bom para melhorar a qualidade visual.', 1),
(22, 'Mentoria em Inteligência Artificial', 'Mentoria para aprender os fundamentos de IA e suas aplicações práticas.', 'Estudantes de tecnologia e profissionais de TI', 'Entender os conceitos básicos e como implementar soluções de IA.', 'Algoritmos de machine learning, bibliotecas de IA como TensorFlow.', 70, 'Mensal', 'Conhecimentos em Python', 'Sessões teóricas e práticas de programação', 'Lucas Silva', '2024-12-14', 'Curitiba', 2500.00, 'Pix', 'Muito bem estruturada e esclarecedora.', 1),
(23, 'Mentoria de Negociação e Vendas', 'Curso para desenvolver habilidades de negociação e técnicas de vendas efetivas.', 'Profissionais de vendas e empreendedores', 'Aprimorar a capacidade de negociação e fechar vendas com sucesso.', 'Técnicas de persuasão, fechamento de vendas e negociação de contratos.', 55, 'Semanal', 'Experiência em vendas', 'Role-playing e análises de vendas', 'Sofia Martins', '2024-12-11', 'Porto Alegre', 1300.00, 'Transferência bancária', 'Ótima abordagem prática e teórica.', 1),
(24, 'Mentoria de Terapias Holísticas', 'Curso de introdução às terapias holísticas para bem-estar e equilíbrio.', 'Interessados em terapias alternativas', 'Aprender técnicas de meditação e relaxamento.', 'Técnicas de respiração, meditação guiada e terapia de reiki.', 20, 'Mensal', 'Nenhuma', 'Sessões práticas e meditação guiada', 'Maria Clara', '2024-12-22', 'Salvador', 900.00, 'Pix', 'Uma experiência transformadora!', 1),
(25, 'Mentoria de Análise de Dados', 'Curso para aprender a usar ferramentas e técnicas de análise de dados para tomar decisões estratégicas.', 'Analistas e estudantes de TI', 'Dominar a análise de dados usando Python e ferramentas como Excel.', 'Manipulação de dados com pandas, visualizações com Matplotlib e Power BI.', 60, 'Semanal', 'Conhecimentos em Excel', 'Aulas práticas e projetos de análise de dados', 'Rafael Costa', '2024-12-06', 'São Paulo', 2100.00, 'Boleto', 'Excelente para quem trabalha com dados.', 1),
(26, 'Mentoria em Desenvolvimento Pessoal', 'Mentoria para melhorar autoconhecimento e alcançar seus objetivos de vida.', 'Qualquer pessoa em busca de crescimento pessoal', 'Ajudar a desenvolver habilidades para uma vida mais equilibrada.', 'Exercícios de autoconhecimento, definição de metas pessoais, e mindfulness.', 35, 'Quinzenal', 'Nenhuma', 'Sessões de coaching e práticas de autoajuda', 'Tatiane Oliveira', '2024-12-19', 'Belo Horizonte', 1100.00, 'Pix', 'Realmente ajuda a melhorar a qualidade de vida.', 1);

--
-- Índices para tabelas despejadas
--

--
-- Índices de tabela `mentorias`
--
ALTER TABLE `mentorias`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT para tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `mentorias`
--
ALTER TABLE `mentorias`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

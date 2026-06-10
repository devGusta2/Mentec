import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  PieChart,
  Pie,
  Cell,
  LabelList
} from "recharts";

import {
  Users,
  CalendarDays,
  Trophy,
  PlaySquare,
  Radio,
  ChevronDown,
  Info,
  FileSpreadsheet
} from "lucide-react";

import styles from "./Dashboard.module.css";
import { getApiUrl, getToken } from "../../../utils/AuthProvider";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Dashboard() {
  const [data, setData] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);
  const [diasPeriodo, setDiasPeriodo] = useState(0);

  const buscarDados = async () => {
    try {
      setLoading(true);

      const apiUrl = getApiUrl();
      const TOKEN = getToken();
      const queryPeriodo = diasPeriodo > 0 ? `?dias=${diasPeriodo}` : "";

      const response = await axios.get(`${apiUrl}/dashboard${queryPeriodo}`, {
        headers: {
          Authorization: `Bearer ${TOKEN}`
        }
      });

      setData(response.data);
    } catch (error) {
      console.error("Erro ao buscar dados do dashboard:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    buscarDados();
  }, [diasPeriodo]);

  const iconByTipo: any = {
    roxo: Users,
    azul: CalendarDays,
    laranja: Trophy,
    verde: PlaySquare,
    rosa: Radio
  };

  const cards =
    data?.cards?.map((card: any) => ({
      ...card,
      icon: iconByTipo[card.tipo] || Info
    })) || [];

  const monitoriasMaisAcessadas = data?.monitoriasMaisAcessadas || [];
  const participacaoData = data?.participacaoData || [];
  const feedbackData = data?.feedbackData || [];

  const feedbackSemDados =
    feedbackData.length === 0 ||
    feedbackData.every(
      (item: any) => (item.value || 0) === 0 && (item.quantidade || 0) === 0
    );

  const feedbackChartData = feedbackSemDados
    ? [
        { name: "Satisfeitos", value: 1, quantidade: 0, realValue: 0 },
        { name: "Neutros", value: 1, quantidade: 0, realValue: 0 },
        { name: "Insatisfeitos", value: 1, quantidade: 0, realValue: 0 }
      ]
    : feedbackData.map((item: any) => ({
        ...item,
        realValue: item.value
      }));

  const satisfeitos = feedbackData.find(
    (item: any) => item.name === "Satisfeitos"
  );

  const percentualSatisfeitos = satisfeitos?.value || 0;
  const quantidadeSatisfeitos = satisfeitos?.quantidade || 0;

  const totalFeedbacks = feedbackData.reduce(
    (total: number, item: any) => total + (item.quantidade || 0),
    0
  );

  const quantidadeEstrelas =
    percentualSatisfeitos === 0 ? 0 : Math.ceil(percentualSatisfeitos / 20);

  const renderEstrelas = (quantidade: number) => {
    return Array.from({ length: 5 }, (_, index) =>
      index < quantidade ? "★" : "☆"
    ).join(" ");
  };

  const quebrarRotuloGrafico = (texto: string, limite = 13) => {
    const palavras = String(texto || "").split(" ");
    const linhas: string[] = [];

    palavras.forEach((palavra) => {
      const ultimaLinha = linhas[linhas.length - 1] || "";

      if (!ultimaLinha) {
        linhas.push(palavra);
        return;
      }

      if (`${ultimaLinha} ${palavra}`.length <= limite) {
        linhas[linhas.length - 1] = `${ultimaLinha} ${palavra}`;
      } else {
        linhas.push(palavra);
      }
    });

    return linhas.length > 0 ? linhas.slice(0, 3) : [""];
  };

  const renderTickMonitoria = ({ x, y, payload }: any) => {
    const linhas = quebrarRotuloGrafico(payload.value);

    return (
      <g transform={`translate(${x},${y + 6})`}>
        <text
          textAnchor="middle"
          fill="#111827"
          fontSize={10}
          dominantBaseline="hanging"
        >
          {linhas.map((linha, index) => (
            <tspan key={`${linha}-${index}`} x={0} dy={index === 0 ? 0 : 12}>
              {linha}
            </tspan>
          ))}
        </text>
      </g>
    );
  };

  const baixarArquivo = (conteudo: BlobPart, nomeArquivo: string, tipo: string) => {
    const blob = conteudo instanceof Blob ? conteudo : new Blob([conteudo], { type: tipo });
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = nomeArquivo;
    link.click();

    URL.revokeObjectURL(url);
  };

  const exportarExcel = async () => {
    const apiUrl = getApiUrl();
    const TOKEN = getToken();
    const queryPeriodo = diasPeriodo > 0 ? `?dias=${diasPeriodo}` : "";

    try {
      const response = await axios.get(`${apiUrl}/dashboard/relatorio/excel${queryPeriodo}`, {
        headers: {
          Authorization: `Bearer ${TOKEN}`
        },
        responseType: "blob"
      });

      baixarArquivo(
        response.data,
        "relatorio-mentec.xlsx",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
      );
    } catch (error) {
      console.error("Erro ao buscar relatório do dashboard:", error);
      alert("Não foi possível gerar o relatório no momento.");
    }
  };

  const COLORS = ["#9F0D2C", "#F59E0B", "#8B5CF6"];

  if (loading && !data) {
    return (
      <div className={styles.dashboard}>
        <p>Carregando dashboard...</p>
      </div>
    );
  }

  return (
    <div className={styles.dashboard}>
      <div className={styles.topbar}>
        <div>
          <h1 className={styles["titulo-card"]}>Relatórios</h1>
          <p className={styles["subtitulo-card"]}>
            Acompanhe os principais indicadores das monitorias.
          </p>
        </div>

        <div className={styles["periodo-btn"]}>
          <CalendarDays size={16} />

          <select
            value={diasPeriodo}
            onChange={(event) => setDiasPeriodo(Number(event.target.value))}
            className={styles["periodo-select"]}
          >
            <option value={0}>Todo o período</option>
            <option value={7}>Últimos 7 dias</option>
            <option value={30}>Últimos 30 dias</option>
            <option value={90}>Últimos 90 dias</option>
            <option value={365}>Último ano</option>
          </select>

          <ChevronDown size={16} />
        </div>
      </div>

      <div className={styles["cards-container1"]}>
        {cards.map((card: any, index: number) => {
          const Icon = card.icon;

          return (
            <div key={index} className={styles.card}>
              <div className={styles["card-top"]}>
                <div className={`${styles["card-icon"]} ${styles[card.tipo]}`}>
                  <Icon size={18} />
                </div>

                <h3 className={styles["card-title"]}>{card.titulo}</h3>
              </div>

              <h2
                className={
                  card.destaque
                    ? styles["card-value-text"]
                    : styles["card-value"]
                }
              >
                {card.valor}
              </h2>

              <p
                className={`${styles["card-detail"]} ${
                  styles[`${card.tipo}-text`]
                }`}
              >
                {card.detalhe}
              </p>
            </div>
          );
        })}
      </div>

      <div className={styles["card-monitoria"]}>
        <div className={styles["card-header"]}>
          <div className={styles["title-with-icon"]}>
            <h3 className={styles["titulo-grafico"]}>
              Monitorias mais acessadas
            </h3>
            <Info size={14} />
          </div>
        </div>

        <div className={styles["chart-monitoria"]}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={monitoriasMaisAcessadas}
              layout="vertical"
              barSize={14}
              barCategoryGap={18}
              margin={{ top: 12, right: 58, left: 5, bottom: 8 }}
            >
              <CartesianGrid stroke="#E5E7EB" horizontal={false} />
              <XAxis
                type="number"
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#374151", fontSize: 11 }}
              />
              <YAxis
                type="category"
                dataKey="label"
                axisLine={false}
                tickLine={false}
                width={150}
                interval={0}
                tick={{ fill: "#111827", fontSize: 11 }}
              />
              <Tooltip />
              <Bar dataKey="acessos" fill="#9F0D2C" radius={[0, 4, 4, 0]}>
                <LabelList
                  dataKey="acessos"
                  position="right"
                  fill="#111827"
                  fontSize={11}
                />
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className={styles["cards-container2"]}>
        <div className={styles["card-participacao"]}>
          <div className={styles["card-header"]}>
            <h3 className={styles["titulo-grafico"]}>
              Participação: ao vivo x gravação
            </h3>

            <div className={styles["chart-legend"]}>
              <span>
                <i className={styles["dot-live"]}></i>
                Ao vivo
              </span>
              <span>
                <i className={styles["dot-record"]}></i>
                Gravação
              </span>
            </div>
          </div>

          <div className={styles["chart-participacao"]}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={participacaoData}
                barSize={20}
                margin={{ top: 8, right: 16, left: 0, bottom: 22 }}
              >
                <CartesianGrid stroke="#E5E7EB" vertical={false} />
                <XAxis
                  dataKey="label"
                  axisLine={false}
                  tickLine={false}
                  tick={renderTickMonitoria}
                  height={44}
                  interval={0}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "#374151", fontSize: 11 }}
                />
                <Tooltip />

                <Bar dataKey="aoVivo" fill="#9F0D2C" radius={[4, 4, 0, 0]}>
                </Bar>

                <Bar dataKey="gravacao" fill="#8B5CF6" radius={[4, 4, 0, 0]}>
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className={styles["card-feedback"]}>
          <h3 className={styles["titulo-grafico"]}>Feedback geral</h3>

          <div className={styles["feedback-content"]}>
            <div className={styles["feedback-chart"]}>
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={feedbackChartData}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    innerRadius="47%"
                    outerRadius="78%"
                    paddingAngle={1}
                  >
                    {feedbackChartData.map((entry: any, index: number) => (
                      <Cell
                        key={entry.name}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}

                    {!feedbackSemDados && (
                      <LabelList
                        dataKey="realValue"
                        position="inside"
                        fill="#ffffff"
                        fontSize={12}
                        formatter={(value: any) => `${value}%`}
                      />
                    )}
                  </Pie>

                  <Tooltip
                    formatter={(value: any, name: any, props: any) => {
                      return [`${props.payload.realValue || 0}%`, name];
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>

            <div className={styles["feedback-legenda"]}>
              {feedbackChartData.map((item: any, index: number) => (
                <div key={item.name} className={styles["legenda-item"]}>
                  <span
                    className={styles["legenda-cor"]}
                    style={{ backgroundColor: COLORS[index % COLORS.length] }}
                  ></span>

                  <div>
                    <strong>{item.name}</strong>
                    <p>
                      {item.realValue || 0}% ({item.quantidade || 0})
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className={styles["feedback-media"]}>
              <p className={styles["media-texto"]}>Satisfação geral</p>

              <h2 className={styles["media-nota"]}>
                {percentualSatisfeitos}%
              </h2>

              <div className={styles.estrelas}>
                {renderEstrelas(quantidadeEstrelas)}
              </div>

              <p className={styles["avaliacoes-texto"]}>
                {quantidadeSatisfeitos} respostas satisfeitas de {totalFeedbacks}
              </p>

              <button
                type="button"
                className={styles["relatorio-btn"]}
                onClick={exportarExcel}
              >
                <FileSpreadsheet size={14} />
                Relatório
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


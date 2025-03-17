"use client";

import React, { useState } from "react";
import Dado from "./Dado"; 

export default function App() {
    const [numeroJogador1, setNumeroJogador1] = useState(1);
    const [numeroJogador2, setNumeroJogador2] = useState(1);
    const [rodada, setRodada] = useState(1);
    const [pontuacaoJogador1, setPontuacaoJogador1] = useState(0);
    const [pontuacaoJogador2, setPontuacaoJogador2] = useState(0);

    const jogarDado = () => {
        if (rodada > 5) return;

        const dado1 = Math.floor(Math.random() * 6) + 1;
        const dado2 = Math.floor(Math.random() * 6) + 1;

        setNumeroJogador1(dado1);
        setNumeroJogador2(dado2);

        if (dado1 > dado2) {
            setPontuacaoJogador1(pontuacaoJogador1 + 1);
        } else if (dado2 > dado1) {
            setPontuacaoJogador2(pontuacaoJogador2 + 1);
        }

        if (rodada < 5) {
            setRodada(rodada + 1);
        }
    };

    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h1>Jogo de Dados</h1>
            <div>
                <h2>Rodada {rodada} de 5</h2>
            </div>

            <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <div style={{ marginRight: "50px" }}>
                    <h3>Jogador 1</h3>
                    <Dado numero={numeroJogador1} />
                </div>

                <div>
                    <h3>Jogador 2</h3>
                    <Dado numero={numeroJogador2} />
                </div>
            </div>

            <div>
                <h3>Pontuação</h3>
                <p>Jogador 1: {pontuacaoJogador1}</p>
                <p>Jogador 2: {pontuacaoJogador2}</p>
            </div>

            <button
                onClick={jogarDado}
                style={{ marginTop: "20px", padding: "10px 20px", fontSize: "16px" }}>
                Jogar
            </button>
        </div>
    );
}

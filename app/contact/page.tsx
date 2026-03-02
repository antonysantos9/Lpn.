"use client";

import { useState } from "react";

export default function Contact() {
    const [email, setEmail] = useState("");

    const emailRegex = /^[^\s@]+@[^\s@]+.[^\s@]+$/;

    const isValid = emailRegex.test(email);
    const isEmpty = email.length === 0;

    function getEmail() {
        console.log(email);
    }

    return (
        <main className="w-screen h-screen flex flex-col gap-16 items-center justify-center">
            <h1 className="text-6xl">Contato</h1>

            <div>
                <p>Digite seu email para eu entrar em contato!</p>

                <input
                    type="email"
                    className="border border-white"
                    placeholder="Digite seu email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                {!isEmpty && !isValid && (
                    <p className="text-red-500">Email inválido</p>
                )}
            </div>

            <button
                className="border border-white py-2 px-10 rounded-full disabled:opacity-50 disabled:cursor-not-allowed"
                onClick={getEmail}
                disabled={!isValid}
            >
                Enviar
            </button>
        </main>
    );
}
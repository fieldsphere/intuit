"use client";

import { useState } from "react";
import type { FormEvent } from "react";

type Status = "idle" | "loading" | "success" | "error";

export function SubscribeForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setMessage("");

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email })
      });
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error ?? "Unable to subscribe.");
      }

      setStatus("success");
      setMessage(data.message ?? "Thanks for subscribing.");
      setEmail("");
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Unable to subscribe.");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mt-6">
      <div className="flex flex-col gap-3 sm:flex-row">
        <label className="sr-only" htmlFor="footer-email">
          Email address
        </label>
        <input
          id="footer-email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className="min-h-12 flex-1 rounded-full border border-slate-700 bg-slate-900 px-5 text-white outline-none transition placeholder:text-slate-400 focus:border-super-blue"
          type="email"
          placeholder="Email address"
          required
        />
        <button
          className="min-h-12 rounded-full bg-white px-6 font-black text-slate-950 transition hover:bg-blue-50 disabled:cursor-not-allowed disabled:opacity-60"
          type="submit"
          disabled={status === "loading"}
        >
          {status === "loading" ? "Subscribing" : "Subscribe"}
        </button>
      </div>
      {message ? (
        <p className={`mt-3 text-sm font-semibold ${status === "error" ? "text-red-300" : "text-green-300"}`}>
          {message}
        </p>
      ) : null}
    </form>
  );
}

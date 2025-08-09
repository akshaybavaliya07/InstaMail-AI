import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export default function EmailForm({ onGenerated }) {
  const [recipients, setRecipients] = useState("");
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);

  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  const generateEmail = async () => {
    setLoading(true);
    try {
      const res = await axios.post(`${API_BASE_URL}/ai/generate`, { prompt });
      onGenerated(recipients.split(",").map((r) => r.trim()), res.data.data);
    } catch (err) {
      toast.error("Failed to generate email");
    }
    setLoading(false);
  };

  return (
    <div className="max-w-xl mx-auto p-6 rounded-2xl space-y-4">
      <h2 className="text-2xl font-bold text-center text-yellow-400">InstaMail AI</h2>

      <input
        type="text"
        placeholder="Recipients (comma separated)"
        className="w-full p-3 rounded-lg bg-slate-700 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
        value={recipients}
        onChange={(e) => setRecipients(e.target.value)}
      />

      <textarea
        placeholder="Enter prompt for AI..."
        className="w-full p-3 rounded-lg bg-slate-700 text-white placeholder-slate-400 h-28 focus:outline-none focus:ring-2 focus:ring-yellow-400 overflow-y-scroll no-scrollbar"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />

      <button
        onClick={generateEmail}
        disabled={loading}
        className="w-full py-3 rounded-lg font-semibold bg-yellow-400 text-slate-900 hover:bg-yellow-300 disabled:opacity-70 transition"
      >
        {loading ? "Generating..." : "Generate Email"}
      </button>
    </div>
  );
}

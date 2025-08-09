import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export default function EmailEditor({ recipients, initialText }) {
  const [content, setContent] = useState(initialText);
  const [subject, setSubject] = useState("Generated Email");
  const [sending, setSending] = useState(false);

  const sendEmail = async () => {
    setSending(true);
    try {
      await axios.post("http://localhost:5000/api/email/send", {
        recipients,
        subject,
        content,
      });
      toast.success("Email sent!");
    } catch (err) {
      toast.error("Failed to send email");
    }
    setSending(false);
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-slate-800/80 backdrop-blur-lg rounded-2xl shadow-lg space-y-4 mt-6">
      <input
        type="text"
        placeholder="Subject"
        className="w-full p-3 rounded-lg bg-slate-700 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
      />

      <textarea
        className="w-full p-3 rounded-lg bg-slate-700 text-white placeholder-slate-400 h-40 focus:outline-none focus:ring-2 focus:ring-yellow-400"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />

      <button
        onClick={sendEmail}
        disabled={sending}
        className="w-full py-3 rounded-lg font-semibold bg-yellow-400 text-slate-900 hover:bg-yellow-300 disabled:opacity-70 transition"
      >
        {sending ? "Sending..." : "Send Email"}
      </button>
    </div>
  );
}

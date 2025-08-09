import { useState } from "react";
import EmailForm from "./components/EmailForm";
import EmailEditor from "./components/EmailEditor";
import { ToastContainer } from "react-toastify";

function App() {
  const [recipients, setRecipients] = useState([]);
  const [emailText, setEmailText] = useState("");

  return (
    <div className="min-h-screen py-10 text-white bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-4xl mx-auto bg-slate-800/60 p-6 rounded-xl shadow-lg backdrop-blur-sm">
        {!emailText ? (
          <EmailForm
            onGenerated={(rec, text) => {
              setRecipients(rec);
              setEmailText(text);
            }}
          />
        ) : (
          <EmailEditor recipients={recipients} initialText={emailText} />
        )}
      </div>
      <ToastContainer position="top-right" />
    </div>
  );
}

export default App;

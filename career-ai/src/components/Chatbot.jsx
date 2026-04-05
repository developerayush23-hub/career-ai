import { useState } from "react";

export default function Chatbot() {
  const [msg, setMsg] = useState("");
  const [chat, setChat] = useState([]);

  const sendMessage = () => {
    setChat([...chat, { user: msg, bot: "This is AI response (demo)" }]);
    setMsg("");
  };

  return (
    <div className="max-w-xl mx-auto mt-12 bg-gray-900 p-6 rounded-xl">
      <h2 className="mb-4">AI Chatbot</h2>

      <div className="h-40 overflow-y-auto mb-4">
        {chat.map((c, i) => (
          <div key={i}>
            <p className="text-blue-400">You: {c.user}</p>
            <p className="text-green-400">AI: {c.bot}</p>
          </div>
        ))}
      </div>

      <input
        className="w-full p-2 bg-gray-800 rounded"
        value={msg}
        onChange={(e) => setMsg(e.target.value)}
      />

      <button
        onClick={sendMessage}
        className="mt-2 bg-green-600 px-3 py-1 rounded"
      >
        Send
      </button>
    </div>
  );
}
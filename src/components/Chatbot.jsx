import React, { useState } from "react";

const Chatbot = () => {
  const [messages, setMessages] = useState([{ sender: "bot", text: "Hi! How can I assist you today?" }]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim() === "") return;
    setMessages([...messages, { sender: "user", text: input }]);
    setInput("");

    // Simulate bot response
    setTimeout(() => {
      setMessages((prev) => [...prev, { sender: "bot", text: "I'm processing your request..." }]);
    }, 1000);
  };

  const handleVoiceInput = () => {
    const recognition = new window.webkitSpeechRecognition() || new window.SpeechRecognition();
    recognition.lang = "en-US";
    recognition.start();

    recognition.onresult = (event) => {
      const voiceText = event.results[0][0].transcript;
      setInput(voiceText);
    };
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      {/* Chat Messages */}
      <div className="h-60 overflow-y-auto p-2 border-b border-gray-300 space-y-2">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`p-2 rounded-lg text-sm max-w-[80%] ${
              msg.sender === "user"
                ? "bg-blue-500 text-white self-end ml-auto"
                : "bg-gray-200 text-gray-800"
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>

      {/* Chat Input */}
      <div className="flex items-center mt-2">
        <input
          type="text"
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none"
          placeholder="Type a message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          onClick={handleSend}
          className="ml-2 bg-green-500 hover:bg-green-600 text-white p-2 rounded-lg"
        >
          Send
        </button>
        <button
          onClick={handleVoiceInput}
          className="ml-2 bg-gray-300 hover:bg-gray-400 text-gray-800 p-2 rounded-lg"
        >
          🎙️
        </button>
      </div>
    </div>
  );
};

export default Chatbot;

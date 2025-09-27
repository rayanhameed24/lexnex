import React, { useState } from "react";

interface Message {
  sender: "user" | "ai";
  text: string;
}

const ChatPage: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState<string>("");

  const sendMessage = async () => {
    if (!input.trim()) return;

    const newMessages: Message[] = [...messages, { sender: "user", text: input }];
    setMessages(newMessages);

    const response = await fetch("http://127.0.0.1:5000/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: input }),
    });

    if (!response.body) return;

    const reader = response.body.getReader();
    const decoder = new TextDecoder();
    let aiMessage = "";

    while (true) {
      const { value, done } = await reader.read();
      if (done) break;

      const chunk = decoder.decode(value);
      const match = chunk.match(/data: (.*)/);
      if (match) {
        aiMessage += match[1];
        setMessages([...newMessages, { sender: "ai", text: aiMessage }]);
      }
    }

    setInput("");
  };

  return (
    <div style={{ maxWidth: "600px", margin: "auto", padding: "20px", marginTop: "50px",  }}>
      <h2>Chat with AI</h2>
      <div style={{ border: "1px solid #ddd", padding: "10px", height: "400px", overflowY: "scroll", color:"white" }}>
        {messages.map((msg, i) => (
          <div key={i} style={{ textAlign: msg.sender === "user" ? "right" : "left" }}>
            <p><strong>{msg.sender === "user" ? "You" : "AI"}:</strong> {msg.text}</p>
          </div>
        ))}
      </div>
      <div style={{ marginTop: "10px", display: "flex" }}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
          style={{ flex: 1, padding: "10px" }}
        />
        <button onClick={sendMessage} style={{ padding: "10px", color: "white", background: "blue" }}>
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatPage;

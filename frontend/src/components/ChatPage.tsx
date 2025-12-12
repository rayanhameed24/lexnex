import React, { useState, useRef, useEffect, KeyboardEvent } from "react";
import { Send, Trash2, Bot, User, Sparkles } from "lucide-react";

interface Message {
  sender: "You" | "Bot";
  text: string;
  timestamp: Date;
}

const ChatPage: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [botTyping, setBotTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const sessionId = "user1";

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, botTyping]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    setMessages((prev) => [...prev, { sender: "You", text: input, timestamp: new Date() }]);
    setInput("");
    setBotTyping(true);

    try {
      const res = await fetch("https://lexnex.onrender.com", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ session_id: sessionId, text: input }),
      });
      const data = await res.json();

      setTimeout(() => {
        setMessages((prev) => [...prev, { sender: "Bot", text: data.response, timestamp: new Date() }]);
        setBotTyping(false);
      }, 1000);
    } catch (err) {
      console.error(err);
      setMessages((prev) => [
        ...prev,
        { sender: "Bot", text: "Error: Could not reach server.", timestamp: new Date() },
      ]);
      setBotTyping(false);
    }
  };

  const clearChat = async () => {
    try {
      await fetch("https://lexnex.onrender.com", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ session_id: sessionId }),
      });
      setMessages([]);
    } catch (err) {
      console.error(err);
    }
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") sendMessage();
  };

  const formatText = (text: string) => {
    return text
      .split('\n')
      .map((line) => {
        line = line.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
        line = line.replace(/\*(.*?)\*/g, '<em>$1</em>');
        line = line.replace(/`(.*?)`/g, '<code class="bg-gray-800 px-2 py-1 rounded text-cyan-300">$1</code>');
        return line;
      })
      .join('<br/>');
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="min-h-screen mt-[100px] bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 flex items-center justify-center p-2 sm:p-4 md:p-6 relative overflow-hidden">
      {/* Animated Gradient Orbs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/30 rounded-full filter blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/30 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      
      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(40)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 3 + 1 + 'px',
              height: Math.random() * 3 + 1 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              background: `rgba(${Math.random() > 0.5 ? '139, 92, 246' : '34, 211, 238'}, ${Math.random() * 0.5 + 0.3})`,
              animation: `float ${Math.random() * 15 + 10}s linear infinite`,
              animationDelay: `-${Math.random() * 10}s`,
            }}
          />
        ))}
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translate(0, 0); }
          25% { transform: translate(30px, -30px); }
          50% { transform: translate(-20px, -60px); }
          75% { transform: translate(20px, -30px); }
        }
        
        @keyframes slideIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .message-appear {
          animation: slideIn 0.3s ease-out;
        }
        
        @keyframes shimmer {
          0% { background-position: -1000px 0; }
          100% { background-position: 1000px 0; }
        }
        
        .shimmer {
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
          background-size: 1000px 100%;
          animation: shimmer 2s infinite;
        }
      `}</style>
      
      <div className="w-full max-w-5xl bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-purple-500/20 overflow-hidden flex flex-col relative z-10" style={{ height: "92vh", maxHeight: "900px" }}>
        {/* Header */}
        <div className="relative bg-gradient-to-r from-purple-600 via-violet-600 to-cyan-600 p-4 sm:p-6 text-center overflow-hidden">
          <div className="absolute inset-0 bg-white/10 shimmer" />
          <div className="relative z-10 flex items-center justify-center gap-3">
            <div className="bg-white/20 p-2 rounded-xl backdrop-blur-sm">
              <Bot className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
                Pakistan ChatBot
              </h1>
              <p className="text-xs sm:text-sm text-purple-100 mt-1">Powered by AI</p>
            </div>
            <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-300 animate-pulse" />
          </div>
        </div>

        {/* Messages Container */}
        <div className="flex-1 overflow-y-auto p-3 sm:p-4 md:p-6 space-y-4 scrollbar-thin scrollbar-thumb-purple-500 scrollbar-track-transparent">
          {messages.length === 0 && (
            <div className="flex flex-col items-center justify-center h-full text-gray-400">
              <Bot className="w-16 h-16 mb-4 opacity-50" />
              <p className="text-lg">Start a conversation!</p>
              <p className="text-sm mt-2">Ask me anything about Pakistan</p>
            </div>
          )}
          
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`flex gap-2 sm:gap-3 ${msg.sender === "You" ? "justify-end" : "justify-start"} message-appear`}
            >
              {msg.sender === "Bot" && (
                <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center shadow-lg">
                  <Bot className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </div>
              )}
              
              <div className={`flex flex-col ${msg.sender === "You" ? "items-end" : "items-start"} max-w-[85%] sm:max-w-[75%] md:max-w-[70%]`}>
                <div
                  className={`p-3 sm:p-4 rounded-2xl shadow-xl backdrop-blur-sm ${
                    msg.sender === "You"
                      ? "bg-gradient-to-br from-cyan-500 to-blue-600 text-white rounded-tr-sm"
                      : "bg-gradient-to-br from-slate-700/80 to-slate-800/80 text-gray-100 border border-purple-500/20 rounded-tl-sm"
                  }`}
                >
                  {msg.sender === "Bot" ? (
                    <div
                      className="text-sm sm:text-base break-words leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: formatText(msg.text) }}
                    />
                  ) : (
                    <span className="text-sm sm:text-base break-words leading-relaxed">{msg.text}</span>
                  )}
                </div>
                <span className="text-xs text-gray-500 mt-1 px-2">{formatTime(msg.timestamp)}</span>
              </div>

              {msg.sender === "You" && (
                <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-lg">
                  <User className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </div>
              )}
            </div>
          ))}

          {botTyping && (
            <div className="flex gap-3 justify-start message-appear">
              <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center shadow-lg">
                <Bot className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </div>
              <div className="bg-gradient-to-br from-slate-700/80 to-slate-800/80 backdrop-blur-sm text-gray-300 p-4 rounded-2xl rounded-tl-sm shadow-xl border border-purple-500/20 flex items-center gap-2">
                <div className="flex gap-1">
                  <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0s' }} />
                  <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                  <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }} />
                </div>
                <span className="text-sm">Typing...</span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="bg-gradient-to-br from-slate-900/95 to-slate-800/95 backdrop-blur-xl p-3 sm:p-4 md:p-6 border-t border-purple-500/20 space-y-3">
          <div className="flex gap-2 sm:gap-3">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Type your message..."
              className="flex-1 p-3 sm:p-4 border border-purple-500/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent shadow-lg bg-slate-800/50 backdrop-blur-sm text-white placeholder-gray-400 text-sm sm:text-base transition-all"
            />
            <button
              onClick={sendMessage}
              disabled={!input.trim()}
              className="px-4 sm:px-6 py-3 sm:py-4 bg-gradient-to-r from-purple-600 to-cyan-600 text-white rounded-xl hover:from-purple-700 hover:to-cyan-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg font-semibold text-sm sm:text-base whitespace-nowrap flex items-center gap-2"
            >
              <Send className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="hidden sm:inline">Send</span>
            </button>
          </div>
          <button
            onClick={clearChat}
            className="w-full px-4 py-3 bg-gradient-to-r from-red-600 to-pink-600 text-white rounded-xl hover:from-red-700 hover:to-pink-700 transition-all shadow-lg font-semibold text-sm sm:text-base flex items-center justify-center gap-2"
          >
            <Trash2 className="w-4 h-4 sm:w-5 sm:h-5" />
            Clear Chat
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
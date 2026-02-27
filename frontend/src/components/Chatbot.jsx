import { useState, useEffect, useRef } from 'react'
import chatService from '../services/chatService.js'

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState(chatService.getMessages());
    const [inputMessage, setInputMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const sendMessage = async () => {
        if (!inputMessage.trim() || isLoading) return;

        const userMessage = inputMessage.trim();
        setInputMessage('');
        setIsLoading(true);

        try {
            await chatService.sendMessage(userMessage);
            setMessages([...chatService.getMessages()]);
        } catch (error) {
            console.error('Error:', error);
            setMessages([...chatService.getMessages()]);
        } finally {
            setIsLoading(false);
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
        }
    };

    return (
        <>
            {/* Video de mano haciendo click - encima del botón */}
            {!isOpen && (
                <div className="fixed bottom-24 right-6 z-50 pointer-events-none">
                    <video 
                        src="/assets/images/manoClick.mp4"
                        className="w-20 h-20 object-cover"
                        autoPlay
                        loop
                        muted
                        playsInline
                    />
                </div>
            )}

            <button
                onClick={() => setIsOpen(!isOpen)}
                className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-gradient-to-br from-[var(--secundario)] to-[var(--azul-oscuro)] rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-all duration-300"
                style={{ boxShadow: '0 0 30px rgba(72, 129, 235, 0.5)' }}
            >
                {isOpen ? (
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                ) : (
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                    </svg>
                )}
            </button>

            {isOpen && (
                <div className="fixed bottom-24 right-6 z-50 w-96 h-[600px] bg-[var(--fondo-secundario)] rounded-3xl shadow-2xl border-2 border-[var(--secundario)]/20 flex flex-col overflow-hidden"
                    style={{ boxShadow: '0 0 50px rgba(72, 129, 235, 0.3)' }}>
                    
                    <div className="bg-gradient-to-r from-[var(--secundario)] to-[var(--azul-oscuro)] p-4 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-white font-bold">Asistente Virtual</h3>
                                <div className="flex items-center gap-1">
                                    <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                                    <span className="text-xs text-white/80">En línea</span>
                                </div>
                            </div>
                        </div>
                        <button onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white transition-colors">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    <div className="flex-1 overflow-y-auto p-4 space-y-4">
                        {messages.map((message, index) => (
                            <div key={index} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                                <div className={`max-w-[80%] rounded-2xl p-3 ${
                                    message.type === 'user' 
                                        ? 'bg-gradient-to-br from-[var(--secundario)] to-[var(--acento)] text-white' 
                                        : 'bg-[#1A1A2E] text-white border border-[var(--secundario)]/20'
                                }`}>
                                    <p className="text-sm">{message.text}</p>
                                </div>
                            </div>
                        ))}
                        {isLoading && (
                            <div className="flex justify-start">
                                <div className="bg-[#1A1A2E] rounded-2xl p-3 border border-[var(--secundario)]/20">
                                    <div className="flex gap-1">
                                        <div className="w-2 h-2 rounded-full bg-[var(--secundario)] animate-bounce" style={{ animationDelay: '0ms' }}></div>
                                        <div className="w-2 h-2 rounded-full bg-[var(--secundario)] animate-bounce" style={{ animationDelay: '150ms' }}></div>
                                        <div className="w-2 h-2 rounded-full bg-[var(--secundario)] animate-bounce" style={{ animationDelay: '300ms' }}></div>
                                    </div>
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    <div className="p-4 border-t border-[var(--secundario)]/20">
                        <div className="flex gap-2">
                            <input
                                type="text"
                                value={inputMessage}
                                onChange={(e) => setInputMessage(e.target.value)}
                                onKeyPress={handleKeyPress}
                                placeholder="Escribe tu mensaje..."
                                className="flex-1 bg-[#1A1A2E] text-white px-4 py-3 rounded-xl border border-[var(--secundario)]/20 focus:outline-none focus:border-[var(--secundario)] transition-colors placeholder-gray-500"
                                disabled={isLoading}
                            />
                            <button
                                onClick={sendMessage}
                                disabled={!inputMessage.trim() || isLoading}
                                className="bg-gradient-to-br from-[var(--secundario)] to-[var(--azul-oscuro)] text-white p-3 rounded-xl hover:scale-105 transition-transform disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Chatbot;
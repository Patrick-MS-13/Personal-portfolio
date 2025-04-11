import React, { useState, useEffect } from 'react';
import './ChatBot.css';
import { FaPaperPlane, FaCommentDots } from 'react-icons/fa';

const ChatBot = () => {
    const [messages, setMessages] = useState([
        { from: 'bot', text: 'Hi there! Ask me anything about Patrick.' }
    ]);
    const [input, setInput] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [darkMode, ] = useState(false);
    const chatboxRef = React.useRef(null);
    const [showScrollDown, setShowScrollDown] = useState(false);

    const scrollToBottom = () => {
        const chatbox = chatboxRef.current;
        if (chatbox) {
            chatbox.scrollTo({
                top: chatbox.scrollHeight,
                behavior: 'smooth',
            });
        }
    };
    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    useEffect(() => {
        const chatbox = chatboxRef.current;
        if (!chatbox) return;

        const handleScroll = () => {
            const atBottom = chatbox.scrollHeight - chatbox.scrollTop <= chatbox.clientHeight + 10;
            setShowScrollDown(!atBottom);
        };

        chatbox.addEventListener('scroll', handleScroll);
        return () => chatbox.removeEventListener('scroll', handleScroll);
    }, []);


    const handleSend = () => {
        if (input.trim() === '') return;

        const newMessages = [...messages, { from: 'user', text: input }];
        setMessages(newMessages);
        setIsTyping(true);

        setTimeout(() => {
            const response = getBotResponse(input.toLowerCase());
            if (response) {
                setMessages([...newMessages, { from: 'bot', text: response }]);
            }
            setIsTyping(false);
        }, 700);

        setInput('');
    };

    // Then conditionally add class
    useEffect(() => {
        document.body.classList.toggle('dark-mode', darkMode);
    }, [darkMode]);


    const handleClear = () => {
        setMessages([{ from: 'bot', text: 'Chat cleared. Let’s start over!' }]);
    };

    const getBotResponse = (message) => {
        if (message.includes('name')) return "I'm Patrick's personal chatbot!";
    
        if (message.includes('skills') || message.includes('tech'))
            return "Patrick knows React, Python, SQL, and loves working with data!";
    
        if (message.includes('contact'))
            return "You can contact him through the Contact section of this portfolio!";
    
        if (message.includes('project'))
            return "Patrick has built cool projects with React, Data Visualizations, and Time Apps. Check out the Projects section!";
    
        if (message.includes('experience'))
            return "He has experience in frontend development and is currently exploring Data Analytics.";
    
        if (message.includes('hello') || message.includes('hi') || message.includes('hey'))
            return "Hey there! 👋 How can I assist you?";
    
        if (message.includes('time in') || message.includes('world time'))
            return "🌍 World time support is coming soon! For now, try asking 'time in London' or 'time in Tokyo'.";
    
        if (message.match(/time in\s+\w+/)) {
            const city = message.split("time in")[1].trim();
            return `🕒 The current time in ${city} is not available yet, but stay tuned for this feature!`;
        }
    
        if (message.includes('time')) {
            const timeString = new Date().toLocaleTimeString('en-US', {
                hour: 'numeric',
                minute: 'numeric',
                second: 'numeric',
                hour12: true
            });
            return `Right now it's ${timeString}`;
        }
    
        if (message.includes('date'))
            return `Today's date is ${new Date().toLocaleDateString()}`;
    
        if (message.includes('weather in')) {
            const place = message.split("weather in")[1]?.trim();
            return `🌤️ Weather details for ${place} will be available in the future update!`;
        }
    
        if (message.includes('weather'))
            return "☀️ It’s currently sunny in Patrick’s world 😄. Real-time weather support is coming soon!";
    
        if (message.includes('news') || message.includes('latest news'))
            return "📰 Stay tuned! News integration is coming soon. Meanwhile, check your favorite news source for updates.";
    
        if (message.includes('education'))
            return "Patrick has a solid foundation in programming and continues to learn through hands-on projects and certifications.";
    
        if (message.includes('hobbies'))
            return "Patrick enjoys coding, exploring data, building cool web apps, and diving into new tech.";
    
        if (message.includes('goal') || message.includes('future'))
            return "Patrick aims to become a top-tier data analyst and continue building intelligent, user-focused applications.";
    
        if (message.includes('clear')) {
            handleClear();
            return '';
        }
    
        return "Hmm... I’m still learning.";
    };
    

    return (
        <>
            <div className={`chatbot-container ${isOpen ? 'open' : ''}`}>
                <div className="chatbox" ref={chatboxRef}>
                    {messages.map((msg, idx) => (
                        <div key={idx} className={`message ${msg.from}`}>
                            {msg.text}
                        </div>
                    ))}
                    {isTyping && <div className="message bot typing">Typing...</div>}

                    {showScrollDown && (
                        <div className="scroll-down-hint" onClick={scrollToBottom} title="Scroll to latest">
                            <svg fill="#ffffff" version="1.1" xmlns="http://www.w3.org/2000/svg" width="28px" height="28px" viewBox="-42 -42 184.00 184.00" stroke="#ffffff" strokeWidth="0.001">
                                <g>
                                    <path d="M50.5,19.881c-1.104,0-2,0.896-2,2V72.17L33.193,56.609c-0.781-0.781-1.922-0.781-2.703,0 
                    c-0.781,0.78-0.719,2.047,0.062,2.828l18.883,18.857c0.375,0.375,0.899,0.586,1.43,0.586s1.047-0.211,1.422-0.586l18.857-18.857 
                    c0.781-0.781,0.783-2.048,0.002-2.828c-0.781-0.781-2.296-0.781-3.077,0L52.5,71.933V21.881
                    C52.5,20.776,51.604,19.881,50.5,19.881z" />
                                </g>
                            </svg>
                        </div>
                    )}

                </div>

                <div className="input-area">
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                        placeholder="Type your message..."
                        id="message-input"
                    />
                    <input
                        type="button"
                        onClick={handleSend}
                        className="send-btn"
                        id="send-btn"
                    />
                    <label htmlFor="send-btn" className="send-icon">
                        <FaPaperPlane />
                    </label>
                </div>

                <input
                    type="button"
                    value="Clear Chat"
                    className="btn btn-danger clear-btn"
                    onClick={handleClear}
                />
            </div>

            <button
                onClick={() => setIsOpen(!isOpen)}
                className="chat-toggle-btn"
                title="Open Chat"
            >
                <FaCommentDots />
            </button>

        </>
    );
};

export default ChatBot;

import { useState, useEffect } from 'react';
import { Bot, MessageCircle } from 'lucide-react';

const messages = [
    "Rezervare noua preluata din apel",
    "Rezervare modificata prin whatsapp"
];

export function RobotNotification() {
    const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        const showNotification = () => {
            setIsVisible(true);
            setIsAnimating(true);
            
            // Hide after 3 seconds
            setTimeout(() => {
                setIsAnimating(false);
                setTimeout(() => {
                    setIsVisible(false);
                }, 500); // Wait for fade out animation
            }, 3000);
        };

        const cycleMessages = () => {
            setCurrentMessageIndex((prev) => (prev + 1) % messages.length);
        };

        // Show first notification immediately
        const initialTimeout = setTimeout(showNotification, 1000);

        // Set up the loop - show notification every 6 seconds
        const interval = setInterval(() => {
            showNotification();
            cycleMessages();
        }, 6000);

        return () => {
            clearTimeout(initialTimeout);
            clearInterval(interval);
        };
    }, []);

    if (!isVisible) return null;

    return (
        <div className="absolute bottom-4 right-4 z-20">
            <div 
                className={`
                    bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700
                    p-4 max-w-xs transition-all duration-500 ease-in-out
                    ${isAnimating 
                        ? 'opacity-100 scale-100 translate-y-0' 
                        : 'opacity-0 scale-95 translate-y-2'
                    }
                `}
            >
                {/* Robot Icon */}
                <div className="flex items-center gap-3 mb-3">
                    <div className="relative">
                        <Bot className="w-8 h-8 text-blue-500 animate-pulse" />
                        <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
                    </div>
                    <div className="flex items-center gap-2">
                        <MessageCircle className="w-4 h-4 text-gray-500" />
                        <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
                            Notificare
                        </span>
                    </div>
                </div>

                {/* Message */}
                <div className="text-sm text-gray-800 dark:text-gray-200 leading-relaxed">
                    {messages[currentMessageIndex]}
                </div>

                {/* Animated dots */}
                <div className="flex gap-1 mt-2">
                    <div className="w-1 h-1 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                    <div className="w-1 h-1 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                    <div className="w-1 h-1 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                </div>
            </div>
        </div>
    );
}

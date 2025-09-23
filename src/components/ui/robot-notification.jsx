import { useState, useEffect } from 'react';
import { Bot, MessageCircle, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const messages = [
    "Rezervare noua preluata din apel",
    "Rezervare modificata prin whatsapp"
];

export function RobotNotification() {
    const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);
    const [isDismissed, setIsDismissed] = useState(false);

    const handleDismiss = () => {
        setIsDismissed(true);
        setIsAnimating(false);
        setTimeout(() => {
            setIsVisible(false);
        }, 300);
    };

    useEffect(() => {
        if (isDismissed) return;

        const showNotification = () => {
            setIsVisible(true);
            setIsAnimating(true);
            
            // Hide after 4 seconds
            setTimeout(() => {
                setIsAnimating(false);
                setTimeout(() => {
                    setIsVisible(false);
                }, 300); // Wait for fade out animation
            }, 4000);
        };

        const cycleMessages = () => {
            setCurrentMessageIndex((prev) => (prev + 1) % messages.length);
        };

        // Show first notification immediately
        const initialTimeout = setTimeout(showNotification, 1000);

        // Set up the loop - show notification every 8 seconds
        const interval = setInterval(() => {
            showNotification();
            cycleMessages();
        }, 8000);

        return () => {
            clearTimeout(initialTimeout);
            clearInterval(interval);
        };
    }, [isDismissed]);

    if (!isVisible) return null;

    return (
        <div 
            className="absolute bottom-4 right-4 z-50 sm:bottom-6 sm:right-6"
            role="alert"
            aria-live="polite"
            aria-atomic="true"
        >
            <div 
                className={cn(
                    "bg-background border border-border rounded-lg shadow-lg",
                    "p-3 sm:p-4 w-72 sm:w-80 md:w-96 max-w-[calc(100vw-1rem)] sm:max-w-[calc(100vw-2rem)]",
                    "transition-all duration-300 ease-in-out",
                    "transform-gpu",
                    isAnimating 
                        ? 'opacity-100 scale-100 translate-y-0' 
                        : 'opacity-0 scale-95 translate-y-2'
                )}
            >
                {/* Header */}
                <div className="flex items-start justify-between mb-2 sm:mb-3">
                    <div className="flex items-center gap-2 sm:gap-3">
                        <div className="relative">
                            <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-primary/10 flex items-center justify-center">
                                <Bot className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
                            </div>
                            <div className="absolute -top-0.5 -right-0.5 sm:-top-1 sm:-right-1 w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full animate-ping"></div>
                        </div>
                        <div className="flex items-center gap-1.5 sm:gap-2">
                            <MessageCircle className="w-3 h-3 sm:w-4 sm:h-4 text-muted-foreground" />
                            <span className="text-xs sm:text-sm font-medium text-foreground">
                                Notificare
                            </span>
                        </div>
                    </div>
                    <button
                        onClick={handleDismiss}
                        className="text-muted-foreground hover:text-foreground transition-colors p-0.5 sm:p-1 rounded-sm hover:bg-accent"
                        aria-label="Închide notificarea"
                    >
                        <X className="w-3 h-3 sm:w-4 sm:h-4" />
                    </button>
                </div>

                {/* Message */}
                <div className="text-xs sm:text-sm text-foreground leading-relaxed mb-2 sm:mb-3">
                    {messages[currentMessageIndex]}
                </div>

                {/* Animated dots */}
                <div className="flex gap-0.5 sm:gap-1">
                    <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                    <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-primary rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                    <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-primary rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                </div>
            </div>
        </div>
    );
}

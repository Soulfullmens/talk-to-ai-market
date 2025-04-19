import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { toast } from '@/hooks/use-toast';
import { Mic, MicOff, Headphones } from 'lucide-react';

interface Message {
  id: string;
  content: string;
  sender: 'user' | 'agent';
  timestamp: Date;
}

export interface ChatInterfaceProps {
  agentName: string;
  agentIcon: string;
  agentDescription: string;
  hasVoice?: boolean;
  onSendMessage?: (message: string) => Promise<string>;
}

const ChatInterface: React.FC<ChatInterfaceProps> = ({ 
  agentName, 
  agentIcon, 
  agentDescription,
  hasVoice,
  onSendMessage 
}) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: `Hello! I'm ${agentName}. ${agentDescription} How can I help you today?`,
      sender: 'agent',
      timestamp: new Date()
    }
  ]);
  
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;
    
    const userMessage: Message = {
      id: Date.now().toString(),
      content: input,
      sender: 'user',
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);
    
    try {
      let response = `I'm ${agentName} and I'm still learning. This is a demo response.`;
      
      if (onSendMessage) {
        response = await onSendMessage(input);
      }
      
      const agentMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: response,
        sender: 'agent',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, agentMessage]);
    } catch (error) {
      console.error('Error sending message:', error);
      toast({
        title: "Error",
        description: "Failed to get a response. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const toggleVoice = async () => {
    if (!hasVoice) return;

    try {
      if (!isListening) {
        await navigator.mediaDevices.getUserMedia({ audio: true });
        setIsListening(true);
        toast({
          title: "Voice activated",
          description: "Listening for your message...",
        });
      } else {
        setIsListening(false);
        toast({
          title: "Voice deactivated",
          description: "Switched to text input mode",
        });
      }
    } catch (error) {
      console.error('Error accessing microphone:', error);
      toast({
        title: "Error",
        description: "Unable to access microphone. Please check your permissions.",
        variant: "destructive"
      });
    }
  };

  return (
    <Card className="flex flex-col h-[calc(100vh-8rem)] shadow-lg">
      <CardHeader className="border-b px-4 py-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 flex items-center justify-center rounded-full bg-primary/10 text-primary">
            <span className="text-xl" role="img" aria-label={`${agentName} icon`}>
              {agentIcon}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <CardTitle className="text-lg">{agentName}</CardTitle>
            {hasVoice && (
              <Headphones className="w-4 h-4 text-primary/80" />
            )}
          </div>
          <p className="text-xs text-muted-foreground">{agentDescription}</p>
        </div>
      </CardHeader>
      <CardContent className="flex-1 p-4 overflow-hidden">
        <ScrollArea className="h-full pr-4">
          <div className="flex flex-col gap-4">
            {messages.map((message) => (
              <div 
                key={message.id} 
                className={`${
                  message.sender === 'user' ? 'chat-message-user' : 'chat-message-agent'
                } animate-fade-in`}
              >
                {message.content}
              </div>
            ))}
          </div>
          <div ref={messagesEndRef} />
        </ScrollArea>
      </CardContent>
      <CardFooter className="p-4 border-t">
        <div className="flex w-full gap-2">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type your message..."
            disabled={isLoading || isListening}
            className="flex-1"
          />
          {hasVoice && (
            <Button
              variant="outline"
              size="icon"
              onClick={toggleVoice}
              className={isListening ? 'bg-primary/10' : ''}
              disabled={isLoading}
            >
              {isListening ? <MicOff /> : <Mic />}
            </Button>
          )}
          <Button onClick={handleSend} disabled={(!input.trim() && !isListening) || isLoading}>
            {isLoading ? "Sending..." : "Send"}
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default ChatInterface;

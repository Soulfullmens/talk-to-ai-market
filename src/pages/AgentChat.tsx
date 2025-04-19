import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import ChatInterface from '@/components/ChatInterface';
import { ArrowLeft } from 'lucide-react';

interface Agent {
  id: string;
  name: string;
  description: string;
  icon: string;
  hasVoice?: boolean;
  getResponse: (message: string) => Promise<string>;
}

const AgentChat: React.FC = () => {
  const { agentId } = useParams();
  const navigate = useNavigate();
  
  const agents: Record<string, Agent> = {
    'travelly': {
      id: 'travelly',
      name: 'Travelly',
      description: 'Your personal AI travel planner',
      icon: '✈️',
      getResponse: async (message: string) => {
        await new Promise(resolve => setTimeout(resolve, 1000)); // Fake delay
        
        if (message.toLowerCase().includes('paris')) {
          return "Paris is a wonderful destination! Here's a 3-day itinerary:\n\nDay 1: Visit the Eiffel Tower in the morning, explore the Louvre in the afternoon, and enjoy dinner in Le Marais.\n\nDay 2: Start with Notre Dame Cathedral, visit Montmartre and Sacré-Cœur, and end the day with a Seine River cruise.\n\nDay 3: Explore Versailles Palace, then spend your evening at the Latin Quarter.";
        }
        
        return "I'd be happy to plan your trip! Where would you like to go? What's your budget and how long will you stay? I can create a personalized itinerary with attractions, restaurants, and accommodation recommendations.";
      }
    },
    'pitchdecker': {
      id: 'pitchdecker',
      name: 'PitchDecker',
      description: 'Create stunning pitch decks from conversations',
      icon: '📊',
      getResponse: async (message: string) => {
        await new Promise(resolve => setTimeout(resolve, 1000)); // Fake delay
        
        if (message.toLowerCase().includes('startup')) {
          return "Based on your startup idea, here's a pitch deck outline:\n\n1. Problem Statement: Clearly define the problem you're solving\n2. Solution: Your unique approach\n3. Market Size: Target $X billion market\n4. Product Demo: Show key features\n5. Business Model: How you'll make money\n6. Competition: How you stand out\n7. Traction: Current metrics and milestones\n8. Team: Highlight expertise\n9. Funding Ask: What you need and why\n\nWould you like me to elaborate on any specific slide?";
        }
        
        return "I can help you create a compelling pitch deck! Tell me about your business idea, target audience, and what you're looking to achieve with this presentation. I'll provide a structure and content suggestions for each slide.";
      }
    },
    'voicebuddy': {
      id: 'voicebuddy',
      name: 'VoiceBuddy',
      description: 'Your AI voice companion for natural conversations',
      icon: '🎙️',
      hasVoice: true,
      getResponse: async (message: string) => {
        await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API delay
        
        if (message.toLowerCase().includes('hello') || message.toLowerCase().includes('hi')) {
          return "Hello! I'm VoiceBuddy, your AI voice companion. You can chat with me through text or voice. How can I assist you today?";
        }
        
        return "I'd love to have a voice conversation with you! I can help you with various tasks, answer questions, or just chat. What would you like to discuss?";
      }
    }
  };
  
  const currentAgent = agents[agentId as string];
  
  if (!currentAgent) {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 container max-w-7xl p-8 flex flex-col items-center justify-center">
          <h1 className="text-2xl font-bold mb-4">Agent not found</h1>
          <p className="text-muted-foreground mb-6">The agent you're looking for doesn't exist.</p>
          <Button onClick={() => navigate('/')}>Return to Marketplace</Button>
        </main>
      </div>
    );
  }
  
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="container max-w-4xl p-4 mx-auto">
        <div className="mb-4">
          <Button 
            variant="ghost" 
            size="sm" 
            className="gap-1" 
            onClick={() => navigate('/')}
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Marketplace
          </Button>
        </div>
        
        <ChatInterface
          agentName={currentAgent.name}
          agentIcon={currentAgent.icon}
          agentDescription={currentAgent.description}
          onSendMessage={currentAgent.getResponse}
          hasVoice={currentAgent.hasVoice}
        />
      </div>
    </div>
  );
};

export default AgentChat;

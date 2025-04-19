
import React from 'react';
import Header from '@/components/Header';
import AgentCard, { AgentProps } from '@/components/AgentCard';

const agents: AgentProps[] = [
  {
    id: 'travelly',
    name: 'Travelly',
    description: 'Your personal AI travel planner. I create personalized itineraries based on your preferences and budget.',
    icon: '✈️',
  },
  {
    id: 'pitchdecker',
    name: 'PitchDecker',
    description: 'I help create stunning pitch decks from conversational inputs. Perfect for startups and presentations.',
    icon: '📊',
  }
];

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 container max-w-7xl px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">AI Agent Marketplace</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover interactive AI agents designed to help with specific tasks through natural conversations.
          </p>
        </div>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Featured Agents</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {agents.map((agent) => (
              <AgentCard key={agent.id} {...agent} />
            ))}
          </div>
        </section>

        <section className="bg-secondary/50 rounded-lg p-6 mb-12">
          <h2 className="text-2xl font-semibold mb-4">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex flex-col items-center text-center p-4">
              <div className="w-12 h-12 rounded-full bg-primary/20 text-primary flex items-center justify-center text-xl mb-4">1</div>
              <h3 className="text-lg font-medium mb-2">Choose an AI Agent</h3>
              <p className="text-muted-foreground">Browse our marketplace and select an agent that fits your needs.</p>
            </div>
            <div className="flex flex-col items-center text-center p-4">
              <div className="w-12 h-12 rounded-full bg-primary/20 text-primary flex items-center justify-center text-xl mb-4">2</div>
              <h3 className="text-lg font-medium mb-2">Start Chatting</h3>
              <p className="text-muted-foreground">Engage in a natural conversation with your chosen AI agent.</p>
            </div>
            <div className="flex flex-col items-center text-center p-4">
              <div className="w-12 h-12 rounded-full bg-primary/20 text-primary flex items-center justify-center text-xl mb-4">3</div>
              <h3 className="text-lg font-medium mb-2">Get Results</h3>
              <p className="text-muted-foreground">Receive personalized assistance, advice, or content from your AI agent.</p>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t py-6 text-center text-sm text-muted-foreground">
        <p>© 2025 AI Agent Marketplace. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;


import React from 'react';
import Header from '@/components/Header';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container max-w-7xl px-4 py-8">
        <h1 className="text-4xl font-bold mb-6 bg-clip-text text-transparent premium-gradient">Dashboard</h1>
        <div className="glass-card p-6 rounded-lg">
          <p className="text-foreground/80">
            Welcome to your AI Agent dashboard. This feature is coming soon.
          </p>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;

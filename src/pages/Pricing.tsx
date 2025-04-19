
import React from 'react';
import Header from '@/components/Header';
import { Button } from '@/components/ui/button';

const PricingTier = ({ name, price, features }: { name: string; price: string; features: string[] }) => (
  <div className="glass-card p-6 rounded-lg flex flex-col">
    <h3 className="text-xl font-semibold mb-2">{name}</h3>
    <div className="text-3xl font-bold mb-4">{price}</div>
    <ul className="space-y-2 mb-6 flex-grow">
      {features.map((feature, i) => (
        <li key={i} className="flex items-center gap-2 text-sm text-foreground/80">
          <span className="text-primary">✓</span> {feature}
        </li>
      ))}
    </ul>
    <Button className="premium-gradient w-full">Get Started</Button>
  </div>
);

const Pricing = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container max-w-7xl px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent premium-gradient">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
            Choose the perfect plan for your needs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <PricingTier
            name="Starter"
            price="$0"
            features={[
              "Access to basic AI agents",
              "5 conversations per day",
              "Basic templates",
              "Community support"
            ]}
          />
          <PricingTier
            name="Pro"
            price="$29/mo"
            features={[
              "Access to all AI agents",
              "Unlimited conversations",
              "Premium templates",
              "Priority support",
              "Custom agent training"
            ]}
          />
          <PricingTier
            name="Enterprise"
            price="Custom"
            features={[
              "Custom AI agent development",
              "Dedicated support team",
              "SLA guarantees",
              "Advanced analytics",
              "Custom integrations"
            ]}
          />
        </div>
      </main>
    </div>
  );
};

export default Pricing;

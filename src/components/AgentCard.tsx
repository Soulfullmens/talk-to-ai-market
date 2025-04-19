
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export interface AgentProps {
  id: string;
  name: string;
  description: string;
  icon: string;
}

const AgentCard: React.FC<AgentProps> = ({ id, name, description, icon }) => {
  return (
    <Card className="h-full agent-card-hover">
      <CardHeader className="flex flex-row items-center gap-4">
        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 text-primary">
          <span className="text-2xl" role="img" aria-label={`${name} icon`}>
            {icon}
          </span>
        </div>
        <CardTitle>{name}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
      <CardFooter>
        <Button className="w-full" asChild>
          <Link to={`/chat/${id}`}>Chat Now</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default AgentCard;

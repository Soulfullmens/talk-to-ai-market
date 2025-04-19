
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Headphones } from 'lucide-react';

export interface AgentProps {
  id: string;
  name: string;
  description: string;
  icon: string;
  hasVoice?: boolean;
}

const AgentCard: React.FC<AgentProps> = ({ id, name, description, icon, hasVoice }) => {
  return (
    <Card className="h-full agent-card-hover">
      <CardHeader className="flex flex-row items-center gap-4">
        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 text-primary">
          <span className="text-2xl" role="img" aria-label={`${name} icon`}>
            {icon}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <CardTitle>{name}</CardTitle>
          {hasVoice && (
            <Headphones className="w-4 h-4 text-primary/80" />
          )}
        </div>
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

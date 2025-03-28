
import React from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { User } from '@/types';
import { Edit, Trash2, Mail, User as UserIcon } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface UserCardProps {
  user: User;
  onEdit: (user: User) => void;
  onDelete: (user: User) => void;
}

const UserCard: React.FC<UserCardProps> = ({ user, onEdit, onDelete }) => {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1 duration-300 border border-border/40 bg-card/80 backdrop-blur-sm">
      <div className="aspect-square relative overflow-hidden bg-gradient-to-br from-primary/5 to-primary/10">
        <img
          src={user.avatar}
          alt={`${user.first_name} ${user.last_name}`}
          className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/50 to-transparent"></div>
      </div>
      <CardContent className="p-5">
        <div className="flex flex-col gap-2">
          <h3 className="font-semibold text-lg truncate">{`${user.first_name} ${user.last_name}`}</h3>
          <div className="flex items-center text-sm text-muted-foreground gap-1.5">
            <Mail className="h-3.5 w-3.5" />
            <span className="truncate">{user.email}</span>
          </div>
          <div className="flex items-center mt-1">
            <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20 text-xs">
              <UserIcon className="h-3 w-3 mr-1" />
              User ID: {user.id}
            </Badge>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between p-5 pt-0 gap-2">
        <Button 
          variant="outline" 
          size="sm" 
          onClick={() => onEdit(user)}
          className="flex items-center gap-1 flex-1 hover:bg-primary/10 hover:text-primary"
        >
          <Edit className="h-4 w-4" />
          Edit
        </Button>
        <Button 
          variant="outline" 
          size="sm" 
          onClick={() => onDelete(user)} 
          className="flex items-center gap-1 flex-1 text-destructive hover:text-destructive-foreground hover:bg-destructive hover:border-destructive"
        >
          <Trash2 className="h-4 w-4" />
          Delete
        </Button>
      </CardFooter>
    </Card>
  );
};

export default UserCard;

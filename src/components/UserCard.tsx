
import React from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { User } from '@/types';
import { Edit, Trash2 } from 'lucide-react';

interface UserCardProps {
  user: User;
  onEdit: (user: User) => void;
  onDelete: (user: User) => void;
}

const UserCard: React.FC<UserCardProps> = ({ user, onEdit, onDelete }) => {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <div className="aspect-square relative overflow-hidden bg-gray-100">
        <img
          src={user.avatar}
          alt={`${user.first_name} ${user.last_name}`}
          className="object-cover w-full h-full"
        />
      </div>
      <CardContent className="p-4">
        <h3 className="font-medium text-lg">{`${user.first_name} ${user.last_name}`}</h3>
        <p className="text-sm text-gray-500 mt-1">{user.email}</p>
      </CardContent>
      <CardFooter className="flex justify-between p-4 pt-0">
        <Button 
          variant="outline" 
          size="sm" 
          onClick={() => onEdit(user)}
          className="flex items-center gap-1"
        >
          <Edit className="h-4 w-4" />
          Edit
        </Button>
        <Button 
          variant="outline" 
          size="sm" 
          onClick={() => onDelete(user)} 
          className="flex items-center gap-1 text-destructive hover:text-destructive-foreground hover:bg-destructive"
        >
          <Trash2 className="h-4 w-4" />
          Delete
        </Button>
      </CardFooter>
    </Card>
  );
};

export default UserCard;

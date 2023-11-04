import { Card, CardContent } from '@ui/components/ui/card';
import { DaoType } from '../../shared/types/models';
import DaoAvatar from '../dao-avatar';
import Link from 'next/link';
import {
  Avatar,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupList,
  AvatarImage,
  AvatarOverflowIndicator,
} from '@ui/components/ui/avatar';
import { Button } from '@ui/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function ListItem({ item }: { item: DaoType }) {
  return (
    <Card className="group">
      <Link href={`/${item.name}`}>
        <CardContent className="grid grid-cols-4 items-center p-4">
          <DaoAvatar src={item.image} alt={item.name} />
          <span>{item.name}</span>

          <AvatarGroup limit={3} className="justify-start">
            <AvatarGroupList>
              {item.members.map((member, i) => (
                <Avatar key={i}>
                  <AvatarImage src={member.image} alt={member.name} />
                  <AvatarFallback>{member.name}</AvatarFallback>
                </Avatar>
              ))}
            </AvatarGroupList>
            <AvatarOverflowIndicator />
          </AvatarGroup>

          <Button
            variant="outline"
            className="group-hover:bg-slate-100 dark:group-hover:text-black"
          >
            Details
            <ArrowRight className="h-4 w-4" />
          </Button>
        </CardContent>
      </Link>
    </Card>
  );
}

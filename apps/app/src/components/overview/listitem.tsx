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

export default function ListItem({ item }: { item: DaoType }) {
  return (
    <Card className="hover:bg-slate-100">
      <Link href={`/${item.name}`}>
        <CardContent className="flex items-center p-4">
          <DaoAvatar src={item.image} alt={item.name} />
          <span>{item.name}</span>

          <AvatarGroup limit={3}>
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
        </CardContent>
      </Link>
    </Card>
  );
}

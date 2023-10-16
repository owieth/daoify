import { Card, CardContent } from '@ui/components/ui/card';
import { DaoType } from '../../shared/types/models';
import DaoAvatar from '../dao-avatar';

export default function ListItem({ item }: { item: DaoType }) {
  return (
    <Card>
      <CardContent className="align-center flex p-4">
        <DaoAvatar src={item.image} alt={item.name} />
        <span>{item.name}</span>
      </CardContent>
    </Card>
  );
}

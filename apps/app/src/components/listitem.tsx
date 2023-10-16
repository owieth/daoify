import { Card, CardContent } from '@ui/components/ui/card';
import { DaoType } from '../shared/types/models';

export default function ListItem({ item }: { item: DaoType }) {
  return (
    <Card>
      <CardContent className="align-center flex p-4">{item.name}</CardContent>
    </Card>
  );
}

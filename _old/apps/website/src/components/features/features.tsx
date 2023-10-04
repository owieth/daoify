import { Card } from '../card/card';

const Feature = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <Card shiny>
      <span className="font-bold">{title}</span>
      <p>{description}</p>
    </Card>
  );
};

const Features = () => {
  return (
    <div className="grid grid-cols-1 grid-rows-1 gap-10 sm:grid-cols-2 sm:grid-rows-2 lg:grid-cols-3 lg:grid-rows-2">
      <Feature
        title="Customize"
        description="Customize your legal wrapper to your liking"
      />
      <Feature title="Deploy" description="Deploy your DAO to any EVM chain" />
      <Feature
        title="Manage"
        description="Add new Members on your customized Dashboard"
      />
      <Feature title="Reporting" description="Create tailor made reports" />
      <Feature
        title="Compliance Checks"
        description="Get quaterly checks on your DAO configuration to stay on latest standards"
      />
      <Feature
        title="Security"
        description="Our Wrappers and Smart Contracts are audited and secured"
      />
    </div>
  );
};

export default Features;

import { Card } from '../card/card';

const Feature = () => {
  return (
    <Card shiny>
      <span className="font-bold">Share team box</span>
      <p>Lorem ipsum dolor sit amet consectetur. Donec mi sit varius et.</p>
    </Card>
  );
};

const Features = () => {
  return (
    <div className="grid grid-cols-1 grid-rows-1 gap-10 sm:grid-cols-2 sm:grid-rows-2 lg:grid-cols-3 lg:grid-rows-2">
      <Feature />
      <Feature />
      <Feature />
      <Feature />
      <Feature />
      <Feature />
    </div>
  );
};

export default Features;

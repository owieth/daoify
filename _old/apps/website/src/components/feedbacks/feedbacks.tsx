import { Card } from '../card/card';

const Feedback = () => (
  <Card>
    <div className="w-[450px] drop-shadow-lg">
      <blockquote>
        &quot;This platform helped me increase my sales and revenue.
        They&apos;re really awesome&quot;
      </blockquote>

      <div className="flex gap-6 pt-8">
        <img src="favicon.ico" height={50} width={50} />

        <div className="flex flex-col justify-between text-sm">
          <span>DAOify User</span>
          <span>ACME inc.</span>
        </div>
      </div>
    </div>
  </Card>
);

const Feedbacks = () => {
  return (
    <div className="flex max-w-[100vw]">
      <div className="flex gap-8">
        <Feedback />
        <Feedback />
        <Feedback />
        <Feedback />
        <Feedback />
        <Feedback />
        <Feedback />
        <Feedback />
        <Feedback />
        <Feedback />
      </div>
    </div>
  );
};

export default Feedbacks;

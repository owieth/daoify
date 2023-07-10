const Feedback = () => (
  <div className="w-[450px] rounded-xl border border-line bg-black p-8 drop-shadow-lg">
    <blockquote>
      &quot;This platform helped me increase my sales and revenue. They&apos;re
      really awesome&quot;
    </blockquote>

    <div className="flex gap-6 pt-8">
      <img src="favicon.ico" height={50} width={50} />

      <div className="flex flex-col justify-between text-sm">
        <span>DAOify User</span>
        <span>ACME inc.</span>
      </div>
    </div>
  </div>
);

const Feedbacks = () => {
  return (
    <div className="flex max-w-[100vw]">
      <div className="hover:pause flex animate-marquee gap-8">
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

const Feedback = () => (
  <li>
    <h2>&quot This platform helped me increase my sales and revenue. They&aposre really awesome &quot</h2>
  </li>
);

const Feedbacks = () => {

  return (
    <ul className="w-full animate-marquee-infinite hover:pause">
      <Feedback />
      <Feedback />
      <Feedback />
    </ul>
  );
}

export default Feedbacks;
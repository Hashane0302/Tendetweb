const Testimonial = () => {
  return (
    <div className="bg-custom-gradient2 shadow-lg rounded-lg p-6 w-full max-w-sm mx-auto my-6 flex-shrink-0">
      <div className="flex items-center mb-4">
        <img
          className="w-12 h-12 rounded-full mr-4"
          src="./TestM1.png"
          alt="James D. Graham"
        />
        <div>
          <p className="text-lg font-semibold text-white">James D. Graham</p>
          <p className="text-sm text-white">CEO & Founder</p>
        </div>
      </div>
      <div className="text-white">
        <p className="text-base leading-relaxed">
          Working with “Trendmaker” was a game-changer for our brand; their
          innovative approach and attention to detail helped us revamp our
          marketing.
        </p>
      </div>
    </div>
  );
};

export default Testimonial;

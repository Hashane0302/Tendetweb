import Testimonial from "./Testimonial";
import TestamonialRight from "./TestamonialRight";
import TitleBtn from "./TitleBtn";

const SectionSix = () => {
  return (
    <div className="overflow-hidden bg-[#060640] py-10">
      <div className="flex justify-center mb-10">
        <TitleBtn />
      </div>
      <h2 className="text-3xl text-white font-bold text-center mb-10">
        1200+ <br />
        <span className="text-5xl">Customers</span> Say Our Services
      </h2>
      <div className="flex gap-8 animate-scroll-left w-full justify-center">
        {/* Original set of testimonials */}
        <Testimonial />
        <Testimonial />
        <Testimonial />
        <Testimonial />
        <Testimonial />
        <Testimonial />

        {/* Duplicate testimonials for smooth looping */}
        <Testimonial />
        <Testimonial />
        <Testimonial />
        <Testimonial />
        <Testimonial />
        <Testimonial />
      </div>
      <div className="flex gap-8 animate-scroll-right w-full justify-center">
        {/* Original set of testimonials */}
        <TestamonialRight />
        <TestamonialRight />
        <TestamonialRight />
        <TestamonialRight />
        <TestamonialRight />
        <TestamonialRight />

        {/* Duplicate testimonials for smooth looping */}
        <TestamonialRight />
        <TestamonialRight />
        <TestamonialRight />
        <TestamonialRight />
        <TestamonialRight />
        <TestamonialRight />
      </div>
    </div>
  );
};

export default SectionSix;

import Developer from "../assets/developer.png";
import Support from "../assets/support.png";
import Designer from "../assets/designer.png";

const Roles = () => {
  return (
    <>
      <section className="gradientBg text-tertiary px-5 py-10 max-w-screen-2xl mx-auto ">
        <h2 className="flex justify-center text-2xl text-tertiary font-semibold pb-8">
          Roles
        </h2>
        <div className="flex flex-col md:flex-row justify-center items-center md:gap-12 gap-8 text-center">
          <div className="bg-pink md:w-1/4 rounded-[35px] px-5 py-8 space-y-4 shadow-3xl items-center flex flex-col justify-center hover:-translate-y-4 transition-all duration-300 cursor-pointer">
            <img src={Developer} alt="" className="z-auto" />
            <h5 className="text-lg font-medium text-primary">
              Software Engineer{" "}
            </h5>
            <p className="text-base text-secondary">
              "Problem solver by day, code whisperer by night. Let's craft some
              innovative solutions."
            </p>
          </div>
          <div className="bg-pink md:mt-24 md:w-1/4 rounded-[35px] px-5 py-8 space-y-4 shadow-3xl items-center flex flex-col justify-center hover:-translate-y-4 transition-all duration-300 cursor-pointer">
            <img src={Support} alt="" className="z-auto" />
            <h5 className="text-lg font-medium text-primary">
              IT Support Specialist{" "}
            </h5>
            <p className="text-base text-secondary">
              "Keeping your tech running smoothly is my superpower. IT support
              at your service."
            </p>
          </div>
          <div className="bg-pink md:w-1/4 rounded-[35px] px-5 py-8 space-y-4 shadow-3xl  items-center flex flex-col justify-center hover:-translate-y-4 transition-all duration-300 cursor-pointer">
            <img src={Designer} alt="" className="z-auto" />
            <h5 className="text-lg font-medium text-primary">
              UX / UI Designer{" "}
            </h5>
            <p className="text-base text-secondary">
              "I design interfaces that delight. I craft user experiences that
              are both intuitive and stunning."
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Roles;

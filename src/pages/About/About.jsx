import AOS from "aos";
import "aos/dist/aos.css";
import SocialIcons from "../../components/SocialIcons/SocialIcons";
AOS.init();

const page = () => {
  return (
    <div className="about-section container mx-auto flex flex-col items-center justify-center px-5 py-12 sm:py-16 lg:min-h-screen lg:py-24">
      <div className="flex w-full flex-col items-center justify-between gap-8 lg:flex-row lg:gap-16">
        <div
          data-aos-duration="1000"
          data-aos="fade-right"
          className="w-full lg:w-1/2"
        >
          <div className="mx-auto flex w-full max-w-md flex-col items-center justify-center gap-5 rounded-xl bg-transparent p-4 text-white sm:p-8 lg:w-[85%]">
            <div className="">
              <div className="h-52 w-52 rounded-full bg-gray-800 p-3 pt-4 sm:h-72 sm:w-72 sm:p-4 sm:pt-5">
                <img
                  className="h-full w-full rounded-full object-cover"
                  src="/aboutMePhoto.png"
                  alt="Humayun profile photo"
                />
              </div>
            </div>
            <div>
              <h1 className="text-center text-2xl font-semibold leading-tight sm:text-4xl">
                MD. HUMAYUN KABIR SOBUJ
              </h1>
              <p className="font-medium text-center text-xl mt-3">
                Full Stack Developer
              </p>
            </div>
          </div>
        </div>
        <div
          data-aos-duration="1000"
          data-aos="fade-left"
          className="w-full lg:w-1/2"
        >
          <h2 className="text-center text-2xl font-semibold text-white sm:text-3xl lg:text-left">Who I Am?</h2>
          <p className="mt-3 text-left text-sm font-medium leading-7 text-white sm:text-base md:text-justify">
            I am a highly skilled Backend Developer with strong hands-on
            experience in Node.js, Express.js, NestJS, MongoDB, Mongoose,
            PostgreSQL, and Prisma. I am also familiar with React, Next.js, and
            Redis, which helps me collaborate smoothly across both backend and
            frontend workflows. I focus on building secure, scalable, and
            maintainable web applications with clean architecture and efficient
            API design. My goal is to deliver reliable solutions that support
            real business needs and long-term product growth.
          </p>
          <div className="flex flex-col items-center gap-4 pt-8 sm:flex-row lg:items-center">
            <p className="text-lg font-semibold text-white sm:text-xl">
              Let&apos;s Connect -{" "}
            </p>
            <div>
              <SocialIcons />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;

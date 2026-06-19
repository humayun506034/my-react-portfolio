const Education = () => {
  return (
    <div className="container mx-auto h-full px-5 py-16 sm:py-20 lg:py-24">
      <div className="pb-4 text-center">
        <h1
          data-aos-duration="900"
          data-aos="zoom-in-down"
          className="text-2xl font-bold text-white sm:text-3xl md:text-4xl"
        >
          Education & Training
        </h1>
      </div>
      <div>
        <h1
          data-aos-duration="1000"
          data-aos="zoom-in-down"
          className="pt-8 pb-8 text-center text-lg font-semibold text-blue-300 sm:pt-10 sm:pb-10 sm:text-2xl"
        >
          Academic Educational Qualification
        </h1>
      </div>
      <div className="text-white">
        <div>
          <div
            data-aos-duration="800"
            data-aos="fade-up"
            className="flex gap-3 sm:gap-10"
          >
            <div className="w-1/2 text-end hidden md:block">
              <h1 className="text-lg font-semibold leading-snug sm:text-2xl">
                Diploma In Engineering (Computer Technology){" "}
              </h1>
              <h2>Rangpur Polytechnic Institute, Rangpur</h2>
              <p>August 2020 - January 2025</p>
              <p>Result - 3.77 out of 4.00</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <div className="h-5 w-5 rounded-full bg-blue-300"></div>
              <div className="h-32 w-[2px] bg-blue-300 sm:h-44"></div>
            </div>
            <div className="block min-w-0 text-sm sm:text-base md:hidden">
              <h1 className="text-lg font-semibold leading-snug sm:text-2xl">
                Diploma In Engineering (Computer Technology){" "}
              </h1>
              <h2>Rangpur Polytechnic Institute, Rangpur</h2>
              <p>August 2020 - January 2025</p>
              <p>Result - 3.77 out of 4.00</p>
            </div>
            <div className="w-1/2 hidden md:block"></div>
          </div>
          <div
            data-aos-duration="1100"
            data-aos="fade-up"
            className="flex gap-3 sm:gap-10"
          >
            <div className="w-1/2 hidden md:block"></div>
            <div className="flex flex-col justify-center items-center">
              <div className="h-5 w-5 rounded-full bg-blue-300"></div>
              <div className="h-32 w-[2px] bg-blue-300 sm:h-44"></div>
            </div>
            <div className="min-w-0 w-full text-sm sm:text-base md:w-1/2">
              <h1 className="text-lg font-semibold leading-snug sm:text-2xl">
                Secondary School Certificate (SSC){" "}
              </h1>
              <h2>Bondiara High School, Pirganj, Thakurgaon</h2>
              <p>January 2015 - December 2019</p>
              <p>Result - 4.83 (Out of 5.00)</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h1
          data-aos-duration="1000"
          data-aos="zoom-in-down"
          className="pt-14 pb-8 text-center text-lg font-semibold text-blue-300 sm:pt-20 sm:pb-10 sm:text-2xl"
        >
          Special Short Courses
        </h1>
      </div>
      <div className="text-white">
        <div>
          <div
            data-aos-duration="800"
            data-aos="fade-up"
            className="flex gap-3 sm:gap-10"
          >
            <div className="w-1/2 hidden md:block"></div>
            <div className="flex flex-col justify-center items-center">
              <div className="h-5 w-5 rounded-full bg-blue-300"></div>
              <div className="h-32 w-[2px] bg-blue-300 sm:h-44"></div>
            </div>
            <div className="min-w-0 w-full text-sm sm:text-base md:w-1/2">
              <h1 className="text-lg font-semibold leading-snug sm:text-2xl">
                Complete Web Development
              </h1>
              <h2>Programming Hero</h2>
              <p>January 2024 - October 2024</p>
            </div>
          </div>
          <div
            data-aos-duration="1100"
            data-aos="fade-up"
            className="flex gap-3 sm:gap-10"
          >
            <div className="w-1/2 hidden md:block text-end">
              <h1 className="text-lg font-semibold leading-snug sm:text-2xl">
                Industrial Attachment In Professional Web Design{" "}
              </h1>
              <h2>Creative IT Insitute, Uttara Branch, Dhaka</h2>
              <p>September 2023 - December 2023</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <div className="h-5 w-5 rounded-full bg-blue-300"></div>
              <div className="h-32 w-[2px] bg-blue-300 sm:h-44"></div>
            </div>
            <div className="min-w-0 w-full text-sm sm:text-base md:hidden">
              <h1 className="text-lg font-semibold leading-snug sm:text-2xl">
                Industrial Attachment In Professional Web Design{" "}
              </h1>
              <h2>Creative IT Insitute, Uttara Branch, Dhaka</h2>
              <p>September 2023 - December 2023</p>
            </div>
            <div className="w-1/2 hidden md:block"></div>
          </div>
          <div
            data-aos-duration="1400"
            data-aos="fade-up"
            className="flex gap-3 sm:gap-10"
          >
            <div className="w-1/2 hidden md:block"></div>
            <div className="flex flex-col">
              <div className="h-5 w-5 rounded-full bg-blue-300"></div>
            </div>
            <div className="min-w-0 w-full text-sm sm:text-base md:w-1/2">
              <h1 className="text-lg font-semibold leading-snug sm:text-2xl">
                Next Level Web Developemet
              </h1>
              <h2>Programming Hero</h2>
              <p>November 2024 - May 2025</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;

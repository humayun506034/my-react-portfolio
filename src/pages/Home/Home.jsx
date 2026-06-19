import { Button } from "@material-tailwind/react";
import { Typewriter } from "react-simple-typewriter";
import SocialIcons from "../../components/SocialIcons/SocialIcons";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Education from "../Education/Education";
import Portfolio from "../Portfolio/Portfolio";
import Skills from "../Skills/Skills";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const Home = () => {
  const handleDownload = () => {
    const fileId = "1jjMDEURK7s7RXpCIxC7_ehfLQSiR5BXt";
    const downloadUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;
    window.location.assign(downloadUrl);
  };

  return (
    <div className="w-full bg-gray-900">
      <section className="home-intro pt-20 md:min-h-screen">
        <div className="container mx-auto flex flex-col items-center justify-start gap-8 px-5 pt-10 pb-8 text-center text-white sm:px-8 sm:pt-12 md:min-h-[calc(100vh-5rem)] md:flex-row md:justify-center md:py-12 md:text-left lg:gap-10 lg:py-16">
          <div className="h-auto w-full max-w-3xl">
            <h3
              data-aos-duration="1000"
              data-aos="fade-right"
              className="text-xl md:text-2xl lg:text-3xl xl:text-5xl"
            >
              It&apos;s Me
            </h3>
            <h1
              data-aos-duration="1000"
              data-aos="fade-left"
              className="py-3 text-2xl font-semibold leading-tight sm:text-3xl md:text-4xl xl:py-5 xl:text-5xl"
            >
              MD. HUMAYUN KABIR SOBUJ
            </h1>
            <h3
              data-aos-duration="1000"
              data-aos="fade-right"
              className="text-xl font-semibold leading-snug sm:text-2xl md:text-3xl"
            >
              <span>I&apos;m a</span>
              <span className="ml-1 inline-block min-h-8 break-words text-blue-300">
                <Typewriter
                  words={[
                    " Full Stack Developer",
                    " Node JS Developer",
                    " Backend Developer",
                  ]}
                  loop={true}
                  cursor={1}
                  cursorBlinking={0}
                  cursorStyle="_"
                  cursorColor="#2196F3"
                />
              </span>
            </h3>
            <p
              data-aos-duration="1000"
              data-aos="fade-up"
              className="mx-auto max-w-[550px] pt-3 text-left text-sm font-light leading-7 sm:text-base md:mx-0 md:text-justify"
            >
              Highly skilled Backend Developer with solid knowledge of Node.js,
              Express.js, NestJS, MongoDB, Mongoose, PostgreSQL, and Prisma. I
              am also familiar with React, Next.js, and Redis.
            </p>
            <div className="flex justify-center pt-8 md:justify-start md:pt-10">
              <SocialIcons />
            </div>
            <div className="pt-8 md:pt-10">
              <Button
                data-aos-duration="1000"
                data-aos="fade-up"
                className="rounded-full bg-blue-300 normal-case duration-300 hover:scale-105"
                onClick={handleDownload}
              >
                Hire Me
              </Button>
            </div>
          </div>
          <div className="flex h-full items-end">
            {/* <Image data-aos-duration="1000" data-aos="fade-up"  width="400" alt="My Photo" height="auto" className="w-full object-cover mt-20" src={MyPhoto}></Image> */}
          </div>
        </div>
      </section>
      <About />
      <Skills />
      <Education />
      <Portfolio />
      <Contact />
    </div>
  );
};

export default Home;

import { FaExternalLinkSquareAlt } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const Portfolio = () => {
  return (
    <div className="container mx-auto px-5 py-16 sm:py-20 lg:py-24">
      <div className="flex flex-col gap-12 text-white lg:gap-20">
        <div
          data-aos-duration="1000"
          data-aos="fade-up"
          className="px-4 text-center md:px-0"
        >
            
          <h1 className="text-3xl font-bold text-white sm:text-4xl md:text-5xl">
            Projects
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-slate-300 sm:text-base md:text-lg">
            Some of the projects I built using modern web technologies.
          </p>
        </div>
        <div className="flex flex-col gap-8 lg:flex-row lg:gap-12">
          <div
            data-aos-duration="1000"
            data-aos="fade-up"
            className="w-full lg:w-[30%] overflow-hidden rounded-xl"
          >
            <img
              className="rounded-xl w-full h-[220px] md:h-[280px] lg:h-[240px] object-cover object-top hover:scale-105 duration-200"
              src="/ScneAds.png"
              alt="Scne Ads Image"
            />
          </div>
          <div
            data-aos-duration="1000"
            data-aos="fade-up"
            className="w-full lg:w-[70%]"
          >
            <div className="flex flex-col items-center gap-4 md:items-start xl:flex-row xl:items-center">
              <div className="flex flex-col items-center gap-1 md:flex-row md:gap-5">
                <h2 className="text-center text-xl font-semibold sm:text-2xl md:text-left">
                  Scne Ads
                </h2>
                <p className="pt-1 text-center text-base font-medium md:text-left lg:text-lg">
                  (BillBoard Booking Website)
                </p>
              </div>
              <div className="flex flex-wrap justify-center gap-4 text-blue-200 md:justify-start lg:gap-7 xl:ml-7">
                <a href="https://scne-ads.netlify.app" target="_blank">
                  <p className="inline-flex  items-center hover:text-blue-600 duration-200 text-nowrap">
                    Live Site{" "}
                    <FaExternalLinkSquareAlt className="mb-[2px] ml-2" />
                  </p>
                </a>
                <a
                  href="https://github.com/humayun-dev-111/Scne-Ads-Frontend"
                  target="_blank"
                >
                  <p className="inline-flex  items-center hover:text-blue-600 duration-200 text-nowrap">
                    Frontend Code{" "}
                    <FaExternalLinkSquareAlt className="mb-[2px] ml-2" />
                  </p>
                </a>
                <a
                  href="https://github.com/humayun-dev-111/Scne-Ads-Backend"
                  target="_blank"
                >
                  <p className="inline-flex  items-center hover:text-blue-600 duration-200 text-nowrap">
                    Server Code{" "}
                    <FaExternalLinkSquareAlt className="mb-[2px] ml-2" />
                  </p>
                </a>
              </div>
            </div>
            <p className="pt-5 text-left text-sm leading-7 sm:text-base md:text-justify">
              Developed a full-stack ads management and e-commerce platform that
              connects businesses with billboard owners, enabling seamless
              advertisement creation, management, and display. The platform
              features an interactive Google Maps integration for discovering
              available billboard locations, secure Stripe payment processing
              for ad campaigns, a centralized admin dashboard for managing
              users, screens, and campaigns, and a real-time WebSocket-based
              chat system that facilitates instant communication between
              businesses and billboard owners while providing live campaign
              updates.
            </p>
            <p className="pt-2 text-sm font-semibold leading-7 sm:text-base">
              Technology Used : React, TypeScript, Redux, Tailwind CSS,
              ShadCN/UI, Google Maps API, LightswindUI, Node.js, Express.js,
              PostgreSQL, Prisma ORM, Supabase , Stripe( Payment ), WebSocket,
              node-cron .
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-8 lg:flex-row lg:gap-12">
          <div
            data-aos-duration="1000"
            data-aos="fade-up"
            className="w-full lg:w-[30%] overflow-hidden rounded-xl"
          >
            <img
              className="rounded-xl w-full h-[220px] md:h-[280px] lg:h-[240px] object-cover object-top hover:scale-105 duration-200"
             src="/bookbazar.png"
              alt="Bookbazar Image"
            />
          </div>
          <div
            data-aos-duration="1000"
            data-aos="fade-up"
            className="w-full lg:w-[70%]"
          >
            <div className="flex flex-col items-center gap-4 md:items-start xl:flex-row xl:items-center">
              <div className="flex flex-col items-center gap-1 md:flex-row md:gap-5">
                <h2 className="text-center text-xl font-semibold sm:text-2xl md:text-left">
                  BookBazaar 
                </h2>
                <p className="pt-1 text-center text-base font-medium md:text-left lg:text-lg">
                  (E-Commerce Website)
                </p>
              </div>
              <div className="flex flex-wrap justify-center gap-4 text-blue-200 md:justify-start lg:gap-7 xl:ml-7">
                <a href="https://bookbazzar-online-ph-a4.vercel.app" target="_blank">
                  <p className="inline-flex  items-center hover:text-blue-600 duration-200 text-nowrap">
                    Live Site{" "}
                    <FaExternalLinkSquareAlt className="mb-[2px] ml-2" />
                  </p>
                </a>
                <a
                  href="https://github.com/humayun-dev-111/bookbazar-frontend"
                  target="_blank"
                >
                  <p className="inline-flex  items-center hover:text-blue-600 duration-200 text-nowrap">
                    Frontend Code{" "}
                    <FaExternalLinkSquareAlt className="mb-[2px] ml-2" />
                  </p>
                </a>
                <a
                  href="https://github.com/humayun-dev-111/bookbazar-backend"
                  target="_blank"
                >
                  <p className="inline-flex  items-center hover:text-blue-600 duration-200 text-nowrap">
                    Server Code{" "}
                    <FaExternalLinkSquareAlt className="mb-[2px] ml-2" />
                  </p>
                </a>
              </div>
            </div>
            <p className="pt-5 text-left text-sm leading-7 sm:text-base md:text-justify">
             A full-stack Book Shop application built for smooth online book browsing and secure purchasing. It includes JWT-based authentication, category and search filtering, detailed product pages, cart and checkout features, and SSLCommerz payment integration. Users can manage profiles, orders, and passwords from a dashboard, while admins can control users, books, inventory, and orders through complete CRUD operations. The responsive interface also provides loaders, validation, error handling, alerts, and toast notifications for a polished experience.
            </p>
            <p className="pt-2 text-sm font-semibold leading-7 sm:text-base">
              Technology Used : React.js, Next.js, Tailwind CSS, Node.js,
              Express.js, MongoDB, Mongoose, JWT, Bcrypt.js, SSLCommerz .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;

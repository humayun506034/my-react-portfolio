import {
  FaEnvelope,
  FaFacebookF,
  FaGithub,
} from "react-icons/fa";

const SocialIcons = () => {
  return (
    <div>
      <div className="flex flex-wrap justify-center gap-4 text-xl text-white sm:gap-8 md:justify-start md:gap-10">
        <div className="flex justify-center items-center p-2 border-white border-2 hover:bg-blue-300 duration-300 hover:border-blue-300 cursor-pointer rounded-full">
          <a href="mailto:humayunkabir506034@gmail.com">
            <FaEnvelope />
          </a>
        </div>
        <div className="flex justify-center items-center p-2 border-white border-2 hover:bg-blue-300 duration-300 hover:border-blue-300 cursor-pointer rounded-full">
          <a target="_blank" href="https://github.com/humayun506034">
            <FaGithub />
          </a>
        </div>
    
        <div className="flex justify-center items-center p-2 border-white border-2 hover:bg-blue-300 duration-300 hover:border-blue-300 cursor-pointer rounded-full">
          <a target="_blank" href="https://www.facebook.com/md.humayunkabirsobuj506034">
            <FaFacebookF />
          </a>
        </div>
       
      </div>
    </div>
  );
};

export default SocialIcons;

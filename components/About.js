import Image from "next/image";

const About = () => {
  return (
    <section
      id="about"
      className="about flex flex-col lg:flex-row justify-center gap-14 sm:gap-[7rem] w-full min-h-screen bg-gradient-to-br from-[#2d0c1b] via-[#3b1023] to-[#720A30] px-14 sm:px-20 py-10 sm:py-[4.5rem]"
    >
      <div className="relative w-full sm:w-[28rem]">
        <p className="sm:text-[5rem] text-5xl text-[#EBDBBF] font-Prociono mb-10">
          Our Mission.
        </p>
        <p className="text-white font-Raleway text-lg  mb-10 lg:mb-0">
        <br /><br />
        
        Our mission is to revolutionize the way you  experience liquor shopping by bringing  convenience and choice right to your doorstep. <br /> <br /> 
        
        {/* Our mission is to revolutionize the way you  experience liquor shopping by bringing  convenience and choice right to your doorstep. <br />
          <br /> Moreover, we will be letting you book your exotic
          weekend/birthday parties in homestays all around Kolkata. */}
        </p>
      </div>
      <div className="relative w-4/5 lg:w-1/3 h-96 sm:h-[30rem] mb-10 lg:mb-0">
        <Image
          src="/about.png"
          alt="about image"
          className="object-cover"
          fill
        />
      </div>
    </section>
  );
};

export default About;

import video1 from "/assets/video1.mp4";
import video2 from "/assets/video2.mp4";
// import heroImage from "/assets/hero.jpg";

const HeroSection = () => {
  return (
    <div
      className="flex flex-col mt-6 items-center bg-cover bg-center"
      // style={{ backgroundImage: `url(${heroImage})` }}
    >
      <h1 className="text-4xl sm:text-6xl lg:text-6xl text-center tracking-wide text-white">
        Welcome to
        <span className="font-ubuntu font-black bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
          {" "}
          CommUnityLink
        </span>
        : Empowering Local Voices
      </h1>
      <p className="mt-10 text-lg text-center text-neutral-200 max-w-4xl">
        Our platform bridges the gap between you and your community leaders,
        fostering a space for transparent communication, collective
        decision-making, and active civic participation.
      </p>
      <div className="flex justify-center my-10">
        <a
          href="#"
          className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md text-white"
        >
          Get Started
        </a>
        <a
          href="#"
          className="py-3 px-4 mx-3 rounded-md border text-white border-white"
        >
          Learn More
        </a>
      </div>
      <div className="flex mt-10 justify-center">
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4"
        >
          <source src={video1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4"
        >
          <source src={video2} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default HeroSection;

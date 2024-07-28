import { communityStories } from "../constants";

const CommunityStories = () => {
  return (
    <div className="mt-20 tracking-wide">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-10 lg:my-20">
        Community{" "}
        <span className="font-ubuntu font-semibold bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
          Stories
        </span>
      </h2>
      <div className="flex flex-wrap justify-center">
        {communityStories.map((communityStory, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-4 py-2 flex">
            <div className="bg-neutral-900 rounded-md p-6 text-md border border-orange-400 font-thin flex flex-col items-center text-center min-h-[300px]">
              <img
                className="w-16 h-16 mb-4 rounded-full"
                src={communityStory.image}
                alt={communityStory.user}
              />
              <h6 className="text-lg font-medium">
                <span className="font-ubuntu font-semibold bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
                  {communityStory.user}
                </span>
              </h6>
              <p className="text-sm text-neutral-300 mt-1">
                {communityStory.community}
              </p>
              <p className="mt-4">{communityStory.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommunityStories;

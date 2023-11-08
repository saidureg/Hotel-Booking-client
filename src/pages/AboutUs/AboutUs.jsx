import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
const AboutUs = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
      <h6 className="text-[#9b804e] uppercase text-center mb-6 font-playfair text-sm mt-12">
        About Us
      </h6>
      <h3 className="text-2xl md:text-3xl font-playfair lg:text-5xl font-bold text-center text-[#7B014C] mb-6">
        WELCOME TO{" "}
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
          LuxeLair
        </span>
      </h3>
      <p className="text-gray-400 font-montserrat text-center mb-6">
        A PLACE YOU CAN TRULY CALL HOME
      </p>
      <div className="my-12">
        <h3 className="text-2xl md:text-3xl font-playfair lg:text-5xl font-bold text-center text-[#7B014C] mb-6">
          Our History
        </h3>
        <p className="text-gray-400 font-montserrat mb-6">
          Established in 2023, LuxeLair has a rich history of providing
          exceptional service and warm hospitality. Over the years, we have
          welcomed countless guests, creating cherished memories and lasting
          relationships. Our hotel has been a part of the local community,
          contributing to its growth and prosperity.
        </p>
      </div>
      <div className="my-12">
        <h3 className="text-2xl md:text-3xl font-playfair lg:text-5xl font-bold text-center text-[#7B014C] mb-6">
          Our Mission
        </h3>
        <p className="text-gray-400 font-montserrat mb-6">
          At LuxeLAir, our mission is simple: to exceed our guests expectations
          by providing unparalleled service, comfortable accommodations, and
          memorable experiences. We are dedicated to creating an environment
          where every guest feels valued, respected, and cared for.
        </p>
      </div>
      {/* meet our team member */}
      <div className=" my-16 font-montserrat">
        <h3 className="text-5xl text-center font-playfair">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#7B014C] to-[#7B014C] mr-2">
            Meet
          </span>
          Our Team
        </h3>
        <p className="text-center text-xl text-gray-700 mt-4 mb-12">
          Our dedicated team is the heart and soul of LuxeLair. We are here to
          make your stay as comfortable as possible.
        </p>
        <div className="grid lg:grid-cols-3 items-center justify-center">
          {/* Team member 01 */}
          <div className="relative mb-8 flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
            <div className="relative mx-4 mt-4 h-80 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
              <img
                className=""
                src="https://i.ibb.co/zHFMmKS/team-member-1.png"
                alt="profile-picture_Team1"
              />
            </div>
            <div className="p-6 text-center">
              <h4 className="mb-2 block text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                Anna Sydney
              </h4>
              <p className="block bg-gradient-to-tr from-pink-600 to-pink-400 bg-clip-text text-base font-medium leading-relaxed text-transparent antialiased">
                Executive Chef
              </p>
            </div>
            <div className="flex justify-center items-center gap-7 p-6 pt-2">
              <FaFacebook className="bg-gradient-to-tr from-blue-600 to-blue-400 bg-clip-text text-2xl"></FaFacebook>
              <FaTwitter className="bg-gradient-to-tr from-blue-600 to-blue-400 bg-clip-text text-2xl"></FaTwitter>
              <FaInstagram className="bg-gradient-to-tr from-blue-600 to-blue-400 bg-clip-text text-2xl"></FaInstagram>
            </div>
          </div>
          {/* Team member 02 */}
          <div className="relative mb-8 flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
            <div className="relative mx-4 mt-4 h-80 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
              <img
                className=""
                src="https://i.ibb.co/qRCcy3S/Team-member2.png"
                alt="profile-picture_Team1"
              />
            </div>
            <div className="p-6 text-center">
              <h4 className="mb-2 block text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                Charles Hasman
              </h4>
              <p className="block bg-gradient-to-tr from-pink-600 to-pink-400 bg-clip-text text-base font-medium leading-relaxed text-transparent antialiased">
                Front Office Manager
              </p>
            </div>
            <div className="flex justify-center items-center gap-7 p-6 pt-2">
              <FaFacebook className="bg-gradient-to-tr from-blue-600 to-blue-400 bg-clip-text text-2xl"></FaFacebook>
              <FaTwitter className="bg-gradient-to-tr from-blue-600 to-blue-400 bg-clip-text text-2xl"></FaTwitter>
              <FaInstagram className="bg-gradient-to-tr from-blue-600 to-blue-400 bg-clip-text text-2xl"></FaInstagram>
            </div>
          </div>
          {/* Team member 03 */}
          <div className="relative mb-8 flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
            <div className="relative mx-4 mt-4 h-80 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
              <img
                className=""
                src="https://i.ibb.co/Pw5FDZR/team-member3.png"
                alt="profile-picture_Team3"
              />
            </div>
            <div className="p-6 text-center">
              <h4 className="mb-2 block text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                Natalie Paisley
              </h4>
              <p className="block bg-gradient-to-tr from-pink-600 to-pink-400 bg-clip-text text-base font-medium leading-relaxed text-transparent antialiased">
                Marketing Manager
              </p>
            </div>
            <div className="flex justify-center items-center gap-7 p-6 pt-2">
              <FaFacebook className="bg-gradient-to-tr from-blue-600 to-blue-400 bg-clip-text text-2xl"></FaFacebook>
              <FaTwitter className="bg-gradient-to-tr from-blue-600 to-blue-400 bg-clip-text text-2xl"></FaTwitter>
              <FaInstagram className="bg-gradient-to-tr from-blue-600 to-blue-400 bg-clip-text text-2xl"></FaInstagram>
            </div>
          </div>
        </div>
      </div>
      {/* Join us */}
      <div>
        <h3 className="text-5xl text-center font-playfair text-[#8b8b8b] my-8">
          Join Us on Our Journey
        </h3>
        <div className="flex gap-8 mb-12 shadow-xl">
          <div className="w-full lg:w-1/3 py-3 ">
            <img
              className=""
              src="https://i.ibb.co/Pw5FDZR/team-member3.png"
              alt=""
            />
          </div>
          <div className="w-full lg:w-2/3 space-y-6 font-montserrat text-lg text-[#8b8b8b] px-6 py-2">
            <p>
              We invite you to be a part of our story. Whether you are a guest
              seeking a memorable stay, a partner interested in collaboration,
              or a team member aspiring to join our family, we welcome you with
              open arms. Discover the beauty of LuxeLair and experience
              hospitality at its finest.
            </p>
            <p>
              Thank you for considering LuxeLair for your next adventure. We
              look forward to welcoming you and making your stay truly special.
            </p>
            <h5>Warm regards,</h5>
            <p>
              Natalie Paisley <br />
              Founder & CEO, LuxeLair
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

const Newsletter = () => {
  return (
    <div className="my-6 text-center p-10 bg-[#00224F] text-neutral-content">
      <h3 className="text-2xl md:text-4xl text-white">
        Save time, save money!
      </h3>
      <p className="mb-5 mt-1">
        Sign up and we will send the best deals to you
      </p>
      <form>
        <fieldset className="form-control w-5/6 lg:w-1/3 mx-auto">
          <div className="relative">
            <input
              type="text"
              placeholder="your email address"
              className="input input-bordered w-full pr-16"
            />
            <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">
              Subscribe
            </button>
          </div>
        </fieldset>
      </form>
    </div>
  );
};

export default Newsletter;

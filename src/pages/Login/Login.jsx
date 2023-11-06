import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
// import { toast } from "react-toastify";
// import swal from "sweetalert";
import logo from "../../assets/LuxeLair-logo.png";

const Login = () => {
  // const { signIn } = useContext(AuthContext);
  // const location = useLocation();
  // const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    console.log(email, password);
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return swal("Oops!", "Please Provide a valid email", "error");
    }
    e.currentTarget.reset();
    //   signIn(email, password)
    //     .then((result) => {
    //       console.log(result.user);
    //       toast("You have successfully logged in");

    //       // navigate after login
    //       navigate(location?.state ? location.state : "/");
    //     })
    //     .catch((error) => {
    //       console.error(error);
    //       return swal("Oops!", "Invalid email or password", "error");
    //     });
  };
  return (
    <div className="hero min-h-screen">
      <div className="hero-content w-full lg:w-1/2">
        <div className="card flex-shrink-0 w-full  shadow-2xl bg-neutral text-neutral-content">
          <img className="w-[250px] mx-auto mt-5" src={logo} alt="logo" />
          <h3 className="text-center text-4xl font-semibold mt-16 mb-8">
            Login your account
          </h3>
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">Email address</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email address"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
            <div>
              <p className="text-white text-lg md:text-2xl flex justify-start md:justify-center items-center gap-3 mt-5">
                Login with
                <span
                  // onClick={handleGoogleSignIn}
                  className=" hover:text-xl ml-2 hover:opacity-70 btn flex items-center gap-2"
                >
                  <FcGoogle className="text-xl md:text-3xl" /> Google
                </span>
              </p>
            </div>
          </form>

          <p className="text-center mb-8 font-semibold text-white">
            Do not Have An Account ?
            <Link
              className="text-white text-xl hover:underline hover:text-red-400"
              to="/register"
            >
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;

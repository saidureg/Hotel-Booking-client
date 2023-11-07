import { useContext } from "react";
import swal from "sweetalert";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { updateProfile } from "firebase/auth";
import logo from "../../assets/LuxeLair-logo.png";
import axios from "axios";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const phone = form.phone.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, phone, email, password);
    if (phone.length !== 11) {
      return swal("Oops!", "Invalid phone number!", "error");
    } else if (password.length < 6) {
      return swal(
        "Oops!",
        "Password should be at least 6 characters!",
        "error"
      );
    } else if (
      !/^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[0-9]).{6,}$/.test(password)
    ) {
      return swal(
        "Oops!",
        "Password should be uppercase letter and special symbol!",
        "error"
      );
    }
    e.target.reset();
    createUser(email, password)
      .then((result) => {
        form.reset();
        console.log(result.user);
        updateProfile(result.user, {
          displayName: name,
        })
          .then(() => {
            const user = { email };
            axios
              .post("http://localhost:5000/jwt", user, {
                withCredentials: true,
              })
              .then((res) => {
                console.log(res.data);
                if (res.data.success) {
                  navigate("/");
                  toast("Account created successfully");
                }
              });
          })
          .catch((error) => {
            return swal("Oops!", error.message, "error");
          });
      })
      .catch((error) => {
        return swal("Oops!", error.message, "error");
      });
  };
  return (
    <div className="hero min-h-screen">
      <div className="hero-content w-full lg:w-1/2">
        <div className="card flex-shrink-0 w-full  shadow-2xl bg-neutral">
          <img className="w-[250px] mx-auto mt-5" src={logo} alt="logo" />
          <h3 className="text-center text-white text-4xl font-semibold mt-16 mb-8">
            Register your account
          </h3>
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white font-bold">
                  Your Name
                </span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter your Name"
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text text-white font-bold">
                  Phone Number
                </span>
              </label>
              <div className="w-full flex gap-1">
                <span className="border rounded-l-lg text-white py-3 px-3">
                  +880
                </span>
                <input
                  type="number"
                  name="phone"
                  placeholder="Enter your phone number"
                  className=" border rounded-r-lg py-3 px-3 w-full"
                  required
                />
              </div>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white font-bold">Email</span>
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
                <span className="label-text text-white font-bold">
                  Password
                </span>
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
              <button className="btn btn-primary">Register</button>
            </div>
            <p className="mt-3 text-white text-left md:text-center text-xl md:text-3xl">
              Already registered?
              <Link to="/login">
                <button className="text-xl md:text-3xl ml-2 hover:opacity-60 hover:text-red-400 hover:underline">
                  Login
                </button>
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;

import { BsApple, BsFacebook, BsGithub } from "react-icons/bs";
import "./SignUp.css";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="login-container grid">
      <div className="login-box">
        <h2 className="text-3xl font-semibold">Sign Up</h2>
        <form>
          <div className="user-box">
            <input type="text" name="" required />
            <label>User Name</label>
          </div>
          <div className="user-box">
            <input type="email" name="" required />
            <label>Email</label>
          </div>
          <div className="user-box">
            <input type="password" name="" required />
            <label>Password</label>
          </div>
          <a href="#">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Resister
          </a>
        </form>
        <div className="text-center text-white">
          <p className="text-1xl font-semibold">
            ..................Or.................{" "}
          </p>
          <div className="flex justify-center  gap-4 my-4">
            <BsFacebook size={30} />
            <BsGithub size={30} />
            <BsApple size={30} />
          </div>
        </div>
        <p className="text-white my-5">
          Already Have an Account?{" "}
          <span className="underline text-red-300">
            <Link to="/login">Please Login</Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
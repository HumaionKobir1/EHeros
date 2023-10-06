
import { BsApple, BsFacebook, BsGithub } from "react-icons/bs";
import "./Login.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="login-container grid">
      <div className="login-box">
        <h2 className="text-3xl font-semibold">Login</h2>
        <form>
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
            Log In
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
          Don t Have an Account?{" "}
          <span className="underline text-red-300">
            <Link to="/register">Please Register</Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
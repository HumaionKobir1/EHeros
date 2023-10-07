import { useContext, useState } from 'react';
import { FaUser, FaLock, FaFacebook, FaGoogle, FaTwitter } from 'react-icons/fa';
import { Link,  useLocation, useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { AuthContext } from '../../provider/AuthProvider';

const Login = () => {
    AOS.init();

    const {signIn, signInWithGoogle} = useContext(AuthContext);
    const [error, setError] = useState('');
    const navigate = useNavigate()
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
            
        })
        .catch(error => console.log(error.message))
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle()
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
            navigate(from, {replace: true});
            
        })
        .catch(error => {
            setError((error.message).slice(10, 50))

        });
    }
    return (
        <div data-aos="zoom-in-up" className="flex shadow-2xl bg-base-100 flex-col md:flex-row gap-10 md:gap-3 w-full md:w-5/6 mx-auto my-5 px-3 md:py-24 py-10 items-center justify-center ">
            <div className="w-full   px-4 grid items-center justify-center">
                <img
                className=""
                src="https://99dokan.com/admins/images/signin.jpg"
                alt="Logo"
                />
                <Link className='mt-10 underline md:block hidden text-indigo-900 font-medium text-center' to='/register'><span>Create an account</span></Link>
            </div>
            <div className="w-full  items-center justify-center">
                <h2 className="text-4xl font-bold mb-6 text-center md:text-left">Login</h2>
                <form onSubmit={handleLogin} className="w-full max-w-sm">
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
                    Email
                    </label>

                    <div className="flex items-center">
                    <span className="absolute  pl-3">
                        <FaUser />
                    </span>
                    <input
                        className="appearance-none border rounded pl-10 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="name"
                        type="email"
                        name='email' 
                        placeholder="Enter your email"
                    />
                    </div>
                </div>
                <div className="mb-4">
                    <label htmlFor="password" className="block text-gray-700 font-bold mb-2">
                    Password
                    </label>
                    
                    <div className="flex items-center">
                    <span className="absolute pl-3">
                        <FaLock />
                    </span>
                    <input
                        className="appearance-none border rounded pl-10 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="password"
                        type="password"
                        name='password'
                        placeholder="Enter your password"
                    />
                    </div>
                </div>
                <div className="mb-4">
                    <label htmlFor="remember" className="flex items-center">
                    <input
                        className="mr-2 leading-tight"
                        id="remember"
                        type="checkbox"
                    />
                    <span className="text-sm text-gray-700">Remember me</span>
                    </label>
                </div>
                <div className='text-center mt-2 mb-4'>
                    <p className='text-lg font-medium text-red-900'>{error}</p>
                </div>
                <div>
                    <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                    type="submit"
                    >
                    Login
                    </button>
                </div>
                </form>
                <div className='flex gap-10 md:mt-20 mt-10'>
                    <p>Or login with</p>
                    <div className='flex gap-3'>
                        <button><FaFacebook className='w-6 h-6'></FaFacebook></button>
                        <button onClick={handleGoogleSignIn}><FaGoogle className='w-6 h-6'></FaGoogle></button>
                        <button><FaTwitter className='w-6 h-6'></FaTwitter></button>
                    </div>
                </div>
                <Link className='mt-10 underline md:hidden block text-indigo-900 font-medium text-center' to='/signUp'><span>Create an account</span></Link>

            </div>
        </div>
    );
};

export default Login;
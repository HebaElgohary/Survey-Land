import { Button } from '@/components/ui/button';
import { NavLink } from 'react-router-dom';
import { Eye, EyeOff, LockKeyhole, Mail, UserRound } from 'lucide-react';
import { useState } from 'react';
import logo from '@/assets/svg/logo.svg';
import signup from '@/assets/png/rafiki.png';
import icons from '@/assets/png/signupIcons.png';
import signupImg from '@/assets/png/background.png';
const SignUp = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    confirmPass: '',
  });

  const [error, setError] = useState({
    name: '',
    email: '',
    password: '',
    confirmPass: '',
  });
  //   const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const toggleconfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    // setLoading(true);

    setSuccess(false);
    let newErrors = { name: '', email: '', password: '', confirmPass: '' };

    if (!form.name) {
      newErrors.name = 'Name is required';
    } else if (form.name.length < 3) {
      newErrors.name = 'Name must be at least 3 characters';
    }
    if (!form.email) {
      newErrors.email = 'Email is required';
    } else if (
      !/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(form.email)
    ) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!form.password) {
      newErrors.password = 'Password is required';
    } else if (form.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    }
    if (!form.confirmPass) {
      newErrors.confirmPass = 'Confirm password is required';
    } else if (form.password !== form.confirmPass) {
      newErrors.confirmPass = 'Passwords do not match';
    }

    setError(newErrors);
    if (newErrors.name || newErrors.email || newErrors.password) {
      return;
    }
    try {
      const response = await fetch(
        'https://server-node-3r5n.onrender.com/api',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: form.name,
            email: form.email,
            password: form.password,
          }),
        },
      ).then((res) => res.json());

      if (!response.data) {
        newErrors.email = 'User already exists';
        setError(newErrors);
        return;
      }

      setError(newErrors);

      setSuccess(true);
    } catch (error) {
      newErrors.email = 'An error occurred. Please try again later.';
      setError(newErrors);
      console.error(error);
    }
  };
  return (
    <div className="flex flex-row justify-between items-center  p-8 lg:p-0">
      <div className="flex flex-col items-center gap-4 m-auto w-full  lg:w-[50%]">
        <div className="flex flex-row items-center gap-2">
          <img
            src={logo}
            alt="Survey Infinity"
            className="w-28 lg:w-36 mx-auto mb-6"
          />
          <h1 className="text-primary text-2xl font-bold mb-6 text-center">
            Survey <span className="text-foreground text-[16px]">Infinity</span>
          </h1>
        </div>
        <div className="flex flex-row gap-12 mb-8">
          <NavLink
            to="/login"
            className={({ isActive }) => (isActive ? 'active' : 'not-active')}
          >
            Login
          </NavLink>
          <NavLink
            to="/signup"
            className={({ isActive }) => (isActive ? 'active' : 'not-active')}
          >
            Sign Up
          </NavLink>
        </div>
        <form className="w-[280px] ">
          <div className="flex flex-row p-3 gap-4 mb-2 shadow-md shadow-violet-300  rounded-md bg-background">
            <UserRound className="h-5 w-4 text-primary" />
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="bg-transparent text-primary text-[13px] border-none outline-none"
              placeholder="Enter your name"
            />
          </div>
          {error.name && (
            <p className="text-red-700 text-[13px]  mb-3">{error.name}</p>
          )}
          <div className="flex flex-row p-3 gap-4 mb-2 shadow-md mt-5 shadow-violet-300  rounded-md bg-background">
            <Mail className="h-5 w-4 text-primary" />
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="bg-transparent text-primary text-[13px] border-none outline-none"
              placeholder="Email or phone number"
            />
          </div>
          {error.email && (
            <p className="text-red-700 text-[13px] mb-3">{error.email}</p>
          )}
          <div className="flex flex-row p-3 mb-2 mt-5 gap-4 shadow-md shadow-violet-300  rounded-md bg-background">
            {showPassword ? (
              <Eye
                className="h-5 w-4 text-primary cursor-pointer "
                onClick={() => togglePasswordVisibility()}
              />
            ) : (
              <EyeOff
                className="h-5 w-4 text-primary cursor-pointer"
                onClick={() => togglePasswordVisibility()}
              />
            )}
            <input
              value={form.password}
              name="password"
              onChange={handleChange}
              type={showPassword ? 'text' : 'password'}
              className="bg-transparent text-primary text-[13px] border-none outline-none"
              placeholder="Password"
            />
          </div>
          {error.password && (
            <p className="text-red-700 mb-3 text-[13px]">{error.password}</p>
          )}
          <div className="flex flex-row p-3 mb-2 mt-5 gap-4 shadow-md shadow-violet-300  rounded-md bg-background">
            {showConfirmPassword ? (
              <Eye
                className="h-5 w-4 text-primary cursor-pointer "
                onClick={() => toggleconfirmPasswordVisibility()}
              />
            ) : (
              <EyeOff
                className="h-5 w-4 text-primary cursor-pointer"
                onClick={() => toggleconfirmPasswordVisibility()}
              />
            )}
            <input
              value={form.confirmPass}
              name="confirmPass"
              onChange={handleChange}
              type={showConfirmPassword ? 'text' : 'password'}
              className="bg-transparent text-primary text-[13px] border-none outline-none"
              placeholder="confirm Password"
            />
          </div>
          <div>
            {error.confirmPass && (
              <p className="text-red-700 mb-3 text-[13px]">
                {error.confirmPass}
              </p>
            )}
            {success && (
              <p className="text-green-500 text-sm">Signup successful!</p>
            )}
          </div>
          <div className="flex flex-col items-center justify-between mt-5">
            <Button className="w-full" onClick={(e) => handleLogin(e)}>
              Sign UP
            </Button>
            <p className="text-[13px] text-primary mt-8">
              --------------- or sign up with ---------------{' '}
            </p>

            <img src={icons} alt="icon" className="w-44 mt-8 cursor-pointer" />
          </div>
        </form>
      </div>
      <div
        style={{ backgroundImage: `url(${signupImg})` }}
        className="hidden lg:flex flex-col items-center justify-center w-[600px]  h-[700px] relative"
      >
        <h1 className="absolute text-slate-50 text-6xl font-bold top-52 ">
          Welcome <br></br> To{' '}
          <span className="text-primary text-4xl">Infinity</span>
        </h1>
        <img
          src={signup}
          alt="rafiki image"
          className="absolute right-0 bottom-0 w-56"
        />
      </div>
    </div>
  );
};

export default SignUp;

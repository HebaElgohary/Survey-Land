import { Button } from '@/components/ui/button';
import { NavLink } from 'react-router-dom';
import { Eye, EyeOff, LockKeyhole, Mail, UserRound } from 'lucide-react';
import { useState } from 'react';
const Login = () => {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const [error, setError] = useState({
    email: '',
    password: '',
  });

  //   const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    // setLoading(true);

    setSuccess(false);
    let newErrors = { email: '', password: '' };
    if (form.email === '' || form.password === '') {
      if (!form.email) newErrors.email = 'Email is required';
      if (!form.password) newErrors.password = 'Password is required';
      setError(newErrors);
      //   setLoading(false);
      return;
    }
    if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(form.email)) {
      newErrors.email = 'Please enter a valid email address';
      setError(newErrors);
      return;
    }
    setError(newErrors);
    try {
      const response = await fetch(
        'https://server-node-3r5n.onrender.com/api',
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        },
      ).then((res) => res.json());

      if (!response.data) {
        newErrors.email = 'User not found';
        setError(newErrors);
        return;
      }

      const user = response.data[0];
      if (user.password !== form.password) {
        newErrors.password = 'Incorrect password';
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
            src="src\assets\svg\logo.svg"
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
        <form className="w-[280px]">
          <div className="bg-background flex flex-row p-3 gap-4 mb-2 shadow-md shadow-violet-300  rounded-md ">
            <Mail className="h-5 w-4 text-primary" />
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              aria-invalid={!!error.email}
              className="bg-transparent  text-primary text-[13px] border-none outline-none"
              placeholder="Email or phone number"
            />
          </div>
          {error.email && (
            <p className="text-red-700 text-[13px] mb-5">{error.email}</p>
          )}
          <div className="flex flex-row p-3 mb-2 mt-8 gap-4 shadow-md shadow-violet-300  rounded-md bg-background">
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
          <div>
            {error.password && (
              <p className="text-red-700 mb-5 text-[13px]">{error.password}</p>
            )}
            {success && (
              <p className="text-green-500 text-sm">Login successful!</p>
            )}
          </div>
          <div className="flex flex-row items-center justify-between mt-8">
            <p className="text-[13px] text-primary">Forget your password?</p>
            <Button onClick={(e) => handleLogin(e)}>Login</Button>
          </div>
        </form>
      </div>
      <div className="hidden lg:flex bg-[url(src/assets/png/background.png)] flex-col items-center justify-center w-[600px]  h-[700px] relative">
        <h1 className="absolute text-slate-50 text-6xl font-bold top-52 ">
          Welcome <br></br> Back ...
        </h1>
        <img
          src="src\assets\png\rafiki.png"
          alt="rafiki image"
          className="absolute right-0 bottom-0 w-56"
        />
      </div>
    </div>
  );
};

export default Login;

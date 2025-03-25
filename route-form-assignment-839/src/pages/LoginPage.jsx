import { z } from "zod";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { NavLink, Outlet } from "react-router-dom";

const LoginPage = () => {
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const emailSchema = z.object({
    email: z.string().email("Email is not valid"),
  });

  const passwordSchema = z.object({
    password: z.string().min(6, "Password must be at least 6 characters"),
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "email") {
      setEmail(value);
      setEmailError("");
    } else if (name === "password") {
      setPassword(value);
      setPasswordError("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailResult = emailSchema.safeParse({ email });
    const passwordResult = passwordSchema.safeParse({ password });

    if (!emailResult.success) {
      setEmailError(emailResult.error.format().email?._errors[0] || "Invalid email");
    } else {
      setEmailError("");
    }

    if (!passwordResult.success) {
      setPasswordError(passwordResult.error.format().password?._errors[0] || "Invalid password");
    } else {
      setPasswordError("");
    }

    if (emailResult.success && passwordResult.success) {
      navigate("/", { replace: true });
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Login Page</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="text"
              name="email"
              placeholder="Enter your Email"
              value={email}
              onChange={handleChange}
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {emailError && <p className="text-red-500 text-sm mt-1">{emailError}</p>}
          </div>
          <div>
            <input
              type="password"
              name="password"
              placeholder="Enter your Password"
              value={password}
              onChange={handleChange}
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {passwordError && <p className="text-red-500 text-sm mt-1">{passwordError}</p>}
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
          >
            Submit
          </button>
        </form>
        <NavLink to="/signup">
          <h3 className="text-center text-gray-600 mt-4">Don't have an account?</h3>
        </NavLink>
        <Outlet/>
      </div>
    </div>
  );
};

export default LoginPage;
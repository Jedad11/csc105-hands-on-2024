import { z } from "zod"; // นำเข้า Zod
import { useState } from "react";
import { useNavigate } from "react-router-dom"; // นำเข้า useNavigate

const LoginPage = () => {
  const [error, setError] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // ใช้ useNavigate สำหรับการเปลี่ยนเส้นทาง
  const navigate = useNavigate();

  // สร้าง schema สำหรับตรวจสอบอีเมลและรหัสผ่าน
  const emailSchema = z.string().email("Email is not valid");
  const passwordSchema = z.string().min(6, "Password must be at least 6 characters");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    // สร้าง loginSchema ที่ใช้ตรวจสอบข้อมูลฟอร์ม
    const loginSchema = z.object({
      email: emailSchema,
      password: passwordSchema,
    });

    // ตรวจสอบข้อมูลฟอร์มโดยใช้ safeParse
    const result = loginSchema.safeParse(formData);

    if (result.success) {
      setError(false);
      console.log("Form data is valid", formData);
      // เมื่อข้อมูลถูกต้อง ให้ทำการนำทางไปยังหน้า Home
      navigate("/", { replace: true }); // เปลี่ยนเส้นทางไปหน้า Home
    } else {
      setError(true);
      console.log("Form data is invalid", result.error.errors);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div>
      Login Page
      <br />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="email"
          placeholder="Enter your Email"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Enter your Password"
          value={formData.password}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
      {error && <p style={{ color: "red" }}>Please fix the errors in the form.</p>}
    </div>
  );
};

export default LoginPage;

import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

import CustomInput from "@/components/CustomInput";
import Layout from "@/components/Layout/Layout";
import "./auth.css";

const Login = () => {
  const [formData, setFormData] = useState({ email, password });
  const { email, password } = formData;
  const navigate = useNavigate();

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/v1/auth/login", { email, password });
      if (res.data.success) {
        toast.success("Login successful");
        navigate("/");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      if (error.response && error.response.data) {
        toast.error(error.response.data.error || "Something went wrong");
      } else {
        toast.error("Something went wrong");
      }
    }
  };

  return (
    <Layout title="Login - Ecommerce App">
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <h4 className="title">LOGIN FORM</h4>

          <CustomInput
            className="mb-3 form-control"
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            placeholder="Enter Your Email"
            required
            autoFocus
          />
          <CustomInput
            className="mb-3 form-control"
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            placeholder="Enter Your Password"
            required
          />
          <button type="submit" className="btn btn-primary">
            LOGIN
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default Login;

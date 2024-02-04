import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

import CustomInput from "@/components/CustomInput";
import Layout from "@/components/Layout/Layout";
import "./auth.css";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    address: "",
  });

  const { name, email, password, phone, address } = formData;
  const navigate = useNavigate();

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/v1/auth/register", formData);
      if (res.data.success) {
        toast.success(res.data.message);
        navigate("/login");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <Layout title="Register - Ecommerce App">
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <h4 className="title">REGISTER FORM</h4>
          <CustomInput
            className="mb-3 form-control"
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            placeholder="Enter Your Name"
            required
            autoFocus
          />
          <CustomInput
            className="mb-3 form-control"
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            placeholder="Enter Your Email"
            required
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
          <CustomInput
            className="mb-3 form-control"
            type="text"
            name="phone"
            value={phone}
            onChange={handleChange}
            placeholder="Enter Your Phone"
            required
          />
          <CustomInput
            className="mb-3 form-control"
            type="text"
            name="address"
            value={address}
            onChange={handleChange}
            placeholder="Enter Your Address"
            required
          />
          <button type="submit" className="w-full">
            REGISTER
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default Register;

"use client";
import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // import styles for toasts

function Form({ onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location_form: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Validation function
  const validate = () => {
    let tempErrors = {};

    if (!formData.name) tempErrors.name = "Name is required";
    if (!formData.email) tempErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      tempErrors.email = "Email is invalid";
    if (!formData.phone) tempErrors.phone = "Phone number is required";
    else if (!/^\d{10}$/.test(formData.phone))
      tempErrors.phone = "Phone number must be 10 digits";
    if (!formData.location_form)
      tempErrors.location_form = "Location From is required";
    if (!formData.message) tempErrors.message = "Message is required";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isValid = validate();
    if (!isValid) return;

    setIsSubmitting(true);

    try {
      const response = await fetch("http://localhost:5000/send-mail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success("Your message has been sent successfully!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        setFormData({
          name: "",
          email: "",
          phone: "",
          location_form: "",
          message: "",
        });
        if (onClose) onClose();
      } else {
        alert("Failed to send your message. Please try again.");
      }
    } catch (error) {
      console.error("Error sending form data:", error);
      toast.error("There was an error submitting the form. Please try again.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="my-8 lg:my-20 mx-8 lg:px-20 text-black ">
      <ToastContainer style={{ zIndex: 999999999 }}  />
      <div className="flex items-center justify-center mx-auto flex-wrap-reverse lg:flex-nowrap gap-8">
        <div className="w-full lg:w-1/2">
          <img
            src="/Images/contact1.webp"
            alt=""
            className="w-full h-[100%] object-cover"
          />
        </div>
        <div className="w-full lg:w-1/2 shadow-lg">
          <div className="lg:px-12 py-4 font-semibold w-full max-w-3xl">
            <h3 className="text-2xl lg:text-3xl font-semibold mb-3">
              Feel Free to Write
            </h3>
            <p className="text-white mb-4 text-sm">
              Your email address will not be published. Required fields are
              marked *
            </p>

            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-4">
                <div className="lg:col-span-2">
                  <input
                    type="text"
                    placeholder="Your Name*"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full border border-gray-200 rounded-md p-4 focus:outline-none"
                  />
                  {errors.name && <p className="text-red-600">{errors.name}</p>}
                </div>

                <div>
                  <input
                    type="text"
                    placeholder="Phone Number*"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full border border-gray-200 rounded-md p-4 focus:outline-none"
                  />
                  {errors.phone && (
                    <p className="text-red-600">{errors.phone}</p>
                  )}
                </div>

                <div>
                  <input
                    type="email"
                    placeholder="Your Email*"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full border border-gray-200 rounded-md p-4 focus:outline-none"
                  />
                  {errors.email && (
                    <p className="text-red-600">{errors.email}</p>
                  )}
                </div>

                <div className="lg:col-span-2">
                  <input
                    type="text"
                    placeholder="Location From*"
                    name="location_form"
                    value={formData.location_form}
                    onChange={handleChange}
                    className="w-full border border-gray-200 rounded-md p-4 focus:outline-none"
                  />
                  {errors.location_form && (
                    <p className="text-red-600">{errors.location_form}</p>
                  )}
                </div>
              </div>

              <div className="mb-4">
                <textarea
                  name="message"
                  placeholder="Write Message*"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full border border-gray-200 rounded-md p-4 h-32 focus:outline-none"
                ></textarea>
                {errors.message && (
                  <p className="text-red-600">{errors.message}</p>
                )}
              </div>

              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`bg-red-700 text-white py-3 px-4 rounded-lg ${
                    isSubmitting ? "opacity-50 cursor-not-allowed" : "hover:bg-red-900"
                  } transition duration-300`}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;

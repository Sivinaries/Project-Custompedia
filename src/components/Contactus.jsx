import { useState } from "react";
import emailjs from "emailjs-com";
import Swal from "sweetalert2"; // Import SweetAlert2
import { IoIosArrowForward } from "react-icons/io";
import ready from "../assets/images/ready.jpg";

function Contactus() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    companyName: "",
    companyWebsite: "",
    socialMedia: "",
    service: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "custompedia", // Replace with your EmailJS service ID
        "template_sliez42", // Replace with your EmailJS template ID
        formData,
        "Ed_mjrvQiknOum5Kc" // Replace with your EmailJS user ID
      )
      .then(
        (result) => {
          console.log(result.text);
          Swal.fire({
            title: 'Success!',
            text: 'Message sent successfully!',
            icon: 'success',
            confirmButtonText: 'OK',
          }).then(() => {
            setFormData({
              name: "",
              email: "",
              phone: "",
              companyName: "",
              companyWebsite: "",
              socialMedia: "",
              service: "",
              message: "",
            });
          });
        },
        (error) => {
          console.log(error.text);
          Swal.fire({
            title: 'Error!',
            text: 'Failed to send message, please try again.',
            icon: 'error',
            confirmButtonText: 'OK',
          });
        }
      );
  };

  return (
    <div className="grid grid-cols-1 bg-black">
      <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
        <img
          src={ready}
          alt="Business desk with laptop and papers"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-yellow-900 opacity-60"></div>
        <div className="relative z-10 xl:flex h-full justify-between items-center p-4 xl:p-8">
          <div className="my-14">
            <h1 className="text-white text-left text-xl xl:text-8xl font-extrabold drop-shadow-md">
              CONTACT US
            </h1>
          </div>
          <div className="xl:w-1/3 my-auto">
            <p className="text-white text-left text-xs xl:text-xl font-bold drop-shadow-md">
              What problems can we solve for your brand?
            </p>
            <p className="text-white text-left text-xs xl:text-xl font-bold drop-shadow-md">
              Insight led, culturally intelligent, globally relevant,
              platform-agnostic. We partner with clients to drive business
              outcomes.
            </p>
          </div>
        </div>
      </div>
      <div className="my-24 xl:my-44 2xl:my-48 mx-auto">
        <div className="space-y-8 xl:space-y-24 2xl:space-y-36">
          <form className="space-y-10 xl:space-y-20 2xl:space-y-16" onSubmit={sendEmail}>
            <p className="text-white text-center text-xs xl:text-xl font-bold drop-shadow-md">
              Whether you're looking to get in touch for an RFP / RFI or your
              next project, fill in the form below and let's talk.
            </p>

            <div className="grid grid-cols-1 xl:grid-cols-3 space-y-5 xl:space-y-0">
              <div className="mx-10">
                <label className="text-sm xl:text-lg 2xl:text-xl text-extralight text-white text-left">
                  Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full py-2 rounded-none bg-transparent border-b-2 border-white outline-none text-white"
                  required
                />
              </div>

              {/* Email */}
              <div className="mx-10">
                <label className="text-sm xl:text-lg 2xl:text-xl text-extralight text-white text-left">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full py-2 rounded-none bg-transparent border-b-2 border-white outline-none text-white"
                  placeholder="e.g., example@mail.com"
                  required
                />
              </div>
              <div className="mx-10">
                <label className="text-sm xl:text-lg 2xl:text-xl text-extralight text-white text-left">
                  Phone *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full py-2 rounded-none bg-transparent border-b-2 border-white outline-none text-white"
                  placeholder="e.g., 555-555-5555"
                  required
                />
              </div>
            </div>
            <div className="grid grid-cols-1 xl:grid-cols-3 space-y-5 xl:space-y-0">
              <div className="mx-10">
                <label className="text-sm xl:text-lg 2xl:text-xl text-extralight text-white text-left">
                  Company Name *
                </label>
                <input
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  className="w-full py-2 rounded-none bg-transparent border-b-2 border-white outline-none text-white"
                  required
                />
              </div>
              <div className="mx-10">
                <label className="text-sm xl:text-lg 2xl:text-xl text-extralight text-white text-left">
                  Company Website *
                </label>
                <input
                  type="text"
                  name="companyWebsite"
                  value={formData.companyWebsite}
                  onChange={handleChange}
                  className="w-full py-2 rounded-none bg-transparent border-b-2 border-white outline-none text-white"
                  required
                />
              </div>
              <div className="mx-10">
                <label className="text-sm xl:text-lg 2xl:text-xl text-extralight text-white text-left">
                  Company Social Media
                </label>
                <input
                  type="text"
                  name="socialMedia"
                  value={formData.socialMedia}
                  onChange={handleChange}
                  className="w-full py-2 rounded-none bg-transparent border-b-2 border-white outline-none text-white"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 xl:grid-cols-3">
              <div className="mx-10">
                <label className="text-sm xl:text-lg 2xl:text-xl text-bold text-white text-left">
                  What service(s) are you interested in? *
                </label>
                <input
                  type="text"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full py-2 bg-transparent border-b-2 border-white outline-none text-white"
                  required
                />
              </div>
              <div className="mx-10 col-span-2">
                <label className="text-sm xl:text-lg 2xl:text-xl text-bold text-white text-left">
                  How can we help you?
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="12"
                  className="w-full text-white border-2 py-2 bg-transparent border-white outline-none"
                ></textarea>
              </div>
            </div>
            <div className="p-2 mx-auto my-auto hover:scale-110 hover:bg-gradient-to-l bg-gradient-to-r from-blue-400 to-blue-500 rounded-xl w-1/2 duration-200 delay-150">
              <button className="flex justify-between items-center w-full">
                <h1 className="text-white font-semibold px-4 text-left text-sm xl:text-xl 2xl:text-2xl">
                  Submit
                </h1>
                <IoIosArrowForward className="text-white w-5 xl:w-7 h-5 xl:h-7" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contactus;

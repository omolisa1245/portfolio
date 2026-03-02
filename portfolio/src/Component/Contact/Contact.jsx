import React from "react";

const Contact = () => {
  return (
    <div
      id="Contact"
      className="w-full px-6 md:px-12 lg:px-20 py-16 bg-stone-900"
    >
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-3 text-white">
          Contact Me
        </h2>
        <h6 className="text-white text-xl md:text-2xl font-bold">
          Kindly fill out this form to contact me
        </h6>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-start">
        
        {/* Contact Details */}
        <div className="bg-gray-100 p-8 rounded-2xl shadow-md space-y-6">
          <h3 className="text-xl font-semibold mb-4">
            Contact Details
          </h3>

          <div>
            <p className="font-medium text-gray-700">Email</p>
            <p className="text-gray-600">
              olayemiomolisa@yahoo.com
            </p>
          </div>

          <div>
            <p className="font-medium text-gray-700">Phone</p>
            <p className="text-gray-600">
              +2348125233389
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <form
          method="POST"
          action="https://api.web3forms.com/submit"
          className="bg-gray-100 p-8 rounded-2xl shadow-md space-y-6"
        >
          <input
            type="hidden"
            name="access_key"
            value="465c8086-8206-4610-988e-b979cd57956f"
          />

          {/* Name */}
          <div>
            <label className="block mb-2 font-medium">
              Full Name
            </label>

            <div className="grid md:grid-cols-2 gap-4">
              <input
                name="first_name"
                type="text"
                placeholder="First Name"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />

              <input
                name="last_name"
                type="text"
                placeholder="Last Name"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block mb-2 font-medium">
              Email
            </label>
            <input
              name="email"
              type="email"
              placeholder="example@email.com"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block mb-2 font-medium">
              Message
            </label>
            <textarea
              name="message"
              required
              rows="5"
              placeholder="Enter your message here..."
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-lg transition duration-300"
          >
            Submit Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
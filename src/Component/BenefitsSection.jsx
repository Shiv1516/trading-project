import React from "react";

export default function BenefitsSection() {
  return (
    <section className="lg:px-[14rem] md:px-[1rem] sm:px-[1rem] px-[1rem] py-10">
      <div className="flex flex-col lg:flex-row gap-10">
        <div className="flex-1 lg:mb-0 md:mb-4 sm:mb-4 mb-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
            Know Some Value & Benefits of Choosing{" "}
            <span className="text-orange-500">ALGODELTA!</span>
          </h2>
          <p className="text-gray-300 mb-4">
            At ALGODELTA, we believe exceptional customer experiences are key to
            business success. Our team of designers and developers collaborate
            closely to create visually stunning, user-friendly digital solutions
            that not only meet client needs but consistently exceed
            expectations.
          </p>
          <p className="text-gray-300 mb-4">
            We take a customer-centric approach to every project, beginning with
            a deep understanding of the target audience and their needs. From
            there, we craft user interfaces and designs that are both visually
            appealing and highly intuitive...
          </p>
          <p className="text-gray-300 mb-4">
            We are passionate about crafting digital experiences that engage,
            inform, and inspire. Whether it’s a website, mobile app, or custom
            software solution, we focus on creating products that are both
            visually stunning and highly functional...
          </p>

          <h3 className="text-2xl font-bold mt-10 mb-4">
            Why We Are the best Choice for Algo Trading Software Development?
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-2">
                ◉ Complemented User Experience
              </h4>
              <p className="text-gray-300 text-sm">
                We collaborate closely with our clients to understand their
                users and craft designs that are both visually appealing and
                highly intuitive.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">
                ◉ Assured Maintenance & Support
              </h4>
              <p className="text-gray-300 text-sm">
                We provide continuous maintenance and support to ensure your
                software runs smoothly and adapts to your evolving business
                needs.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">◉ Independent Coding</h4>
              <p className="text-gray-300 text-sm">
                All solutions are developed independently with modular, clean
                code — ensuring flexibility and long-term manageability.
              </p>
            </div>
          </div>
          <img src="images/pcf.gif" alt="pcf-icon" className="flex" />
        </div>

        <div className="p-6 md:p-8 rounded-xl w-full lg:w-[400px] shadow-lg">
          <h4 className="text-lg text-orange-500 font-semibold mb-4">
            Get A Free Quote
          </h4>
          <form className="space-y-4 border border-gray-600 p-5 rounded-2xl">
            <div>
              <label className="text-sm block mb-1">Your Name*</label>
              <input
                type="text"
                placeholder="Enter name"
                className="w-full px-4 py-2 bg-black border border-gray-700 rounded-md text-white focus:outline-none focus:border-orange-500"
              />
            </div>
            <div>
              <label className="text-sm block mb-1">Mobile Number*</label>
              <input
                type="tel"
                placeholder="Enter mobile number"
                className="w-full px-4 py-2 bg-black border border-gray-700 rounded-md text-white focus:outline-none focus:border-orange-500"
              />
            </div>
            <div>
              <label className="text-sm block mb-1">Email Address*</label>
              <input
                type="email"
                placeholder="Enter email"
                className="w-full px-4 py-2 bg-black border border-gray-700 rounded-md text-white focus:outline-none focus:border-orange-500"
              />
            </div>
            <div>
              <label className="text-sm block mb-1">Your Message*</label>
              <textarea
                rows={4}
                placeholder="Write your message"
                className="w-full px-4 py-2 bg-black border border-gray-700 rounded-md text-white focus:outline-none focus:border-orange-500"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-full font-semibold transition-all"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export const EducationForAllSection = () => {
  return (
    <section className="w-full bg-white py-20 lg:py-28">
      <div className="container mx-auto max-w-7xl px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Image */}
          <div className="lg:col-span-4 flex justify-center">
            <div className="p-3 bg-yellow-300 rounded-3xl shadow-lg transform -rotate-6 hover:rotate-0 hover:scale-105 transition-transform duration-300">
              <img
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop"
                alt="Students collaborating"
                className="w-full h-auto object-cover rounded-2xl max-h-96"
              />
            </div>
          </div>

          {/* Center Text Content */}
          <div className="lg:col-span-4 text-center">
            <h2 className="text-5xl md:text-6xl font-black text-gray-800 uppercase">
              Education
              <span className="text-orange-500 block">For All</span>
            </h2>
            <h3 className="mt-4 text-xl font-semibold text-gray-700">
              Empowering Minds
            </h3>
            <p className="mt-6 text-gray-500 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
              suspendisse molestie. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit molestie.
            </p>
          </div>

          {/* Right Content */}
          <div className="lg:col-span-4 flex justify-center items-center">
            <div className="relative w-full max-w-md h-96 rounded-3xl bg-blue-600 shadow-xl flex items-center justify-center p-4 transform rotate-3 hover:rotate-0 hover:scale-105 transition-transform duration-300">
              <div className="w-full h-full">
                <img
                  src="https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Students collaborating"
                  className="w-full h-auto object-cover rounded-2xl max-h-96"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

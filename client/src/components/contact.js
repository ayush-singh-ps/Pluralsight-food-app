const Contact = () => {
    return (
      <div className="bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h1 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Contact Us</h1>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Get In Touch
            </p>
          </div>
        </div>
  
        <div className="mt-10 pb-12 bg-white sm:pb-16">
          <div className="relative">
            <div className="absolute inset-0 h-1/2 bg-gray-100"></div>
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-2xl mx-auto lg:max-w-none">
                <div className="rounded-lg bg-white overflow-hidden shadow divide-y divide-gray-200 lg:grid lg:grid-cols-2 lg:gap-4">
                  <div className="px-6 py-8 sm:p-10">
                    <h3 className="text-2xl leading-8 font-extrabold text-gray-900 sm:text-3xl sm:leading-9">Contact Information</h3>
                    <p className="mt-6 text-base leading-6 text-gray-500">
                      Address: 11th Floor, Primeco Tower
                      <br />
                      Phone: 12344555
                      <br />
                      Email: ayush-singh@pluralsight.com
                    </p>
                  </div>
                  <div className="px-6 py-8 sm:p-10">
                    <h3 className="text-2xl leading-8 font-extrabold text-gray-900 sm:text-3xl sm:leading-9">Contact Form</h3>
                    <form className="mt-6">
                      <div className="mb-4">
                        <label htmlFor="name" className="block text-sm font-medium leading-5 text-gray-700">
                          Name
                        </label>
                        <input id="name" type="text" className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                      </div>
                      <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium leading-5 text-gray-700">
                          Email
                        </label>
                        <input id="email" type="email" className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                      </div>
                      <div className="mb-4">
                        <label htmlFor="message" className="block text-sm font-medium leading-5 text-gray-700">
                          Message
                        </label>
                        <textarea id="message" rows="4" className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"></textarea>
                      </div>
                      <div className="mt-6">
                        <button type="submit" className="inline-block px-6 py-3 rounded-lg bg-indigo-600 text-white font-semibold hover:bg-indigo-500 focus:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-200 focus:ring-opacity-50">Send Message</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Contact;
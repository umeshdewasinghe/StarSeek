import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
          {/* Left section with logo and links */}

          
          {/* Right section with social media icons */}
          <div>
            <h3 className="text-xl font-bold mb-2">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-gray-300">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 2a8 8 0 0 0-2.667 15.572v-5.1H4V10h3.333V7.778c0-3.088 1.833-4.778 4.667-4.778 1.333 0 2.489.1 2.822.144V6h-1.911c-1.517 0-1.811.722-1.811 1.778V10H15l-.2 3.472h-3.6v5.1A8.001 8.001 0 0 0 10 2z" clipRule="evenodd"></path>
                </svg>
              </a>
              <a href="#" className="text-white hover:text-gray-300">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M18.95 9.76c-.65-.33-1.33-.55-2.05-.65.73-.44 1.29-1.14 1.55-1.97-.68.41-1.43.71-2.23.87-.64-.68-1.55-1.11-2.56-1.11-1.93 0-3.5 1.57-3.5 3.5 0 .27.03.53.09.78-2.91-.15-5.49-1.54-7.22-3.65-.3.51-.47 1.1-.47 1.73 0 1.2.61 2.25 1.53 2.87-.56-.02-1.09-.17-1.55-.43v.04c0 1.67 1.19 3.07 2.77 3.39-.29.08-.6.13-.91.13-.22 0-.44-.02-.65-.07.44 1.39 1.71 2.4 3.21 2.43-1.17.91-2.64 1.45-4.24 1.45-.28 0-.56-.02-.83-.05 1.51.97 3.29 1.53 5.2 1.53 6.24 0 9.66-5.17 9.66-9.66v-.44c.66-.47 1.23-1.02 1.68-1.66z" clipRule="evenodd"></path>
                </svg>
              </a>
              <a href="#" className="text-white hover:text-gray-300">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M17.899 4.401c-.517.232-1.069.389-1.651.462a2.962 2.962 0 0 0 1.299-1.633c-.572.339-1.205.586-1.877.72a2.95 2.95 0 0 0-5.016 2.014 8.34 8.34 0 0 1-6.05-3.063 2.95 2.95 0 0 0 .908 3.942 2.914 2.914 0 0 1-1.335-.368v.037c0 1.216.869 2.226 2.019 2.459a2.948 2.948 0 0 1-1.33.051 2.947 2.947 0 0 0 2.746 2.045 5.9 5.9 0 0 1-3.653 1.26c-.238 0-.475-.015-.706-.044a8.337 8.337 0 0 0 4.475 1.31c5.4 0 8.37-4.474 8.37-8.369 0-.128-.003-.256-.009-.384a5.955 5.955 0 0 0 1.463-1.518z" clipRule="evenodd"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        {/* Bottom section with copyright */}
        <div className="text-center mt-4">
          <p>&copy; 2024 StarSeeker. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

// import React from 'react';

// const Footer = () => {
//   return (
//     <footer className="bg-black text-gray-300 py-8">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex flex-col md:flex-row justify-between items-center">
//           {/* Logo and Copyright */}
//           <div className="mb-4 md:mb-0">
//             <a href="/" className="text-[#34d399] text-2xl font-semibold">
//               NUTRITION
//             </a>
//             <p className="text-gray-400 text-sm mt-2">&copy; 2024 dotmailIT. All rights reserved.</p>
//           </div>

//           {/* Footer Links */}
//           <div className="flex space-x-6">
//             {['Meal Kits', 'Special Diets', 'Healthy Eating', 'Vitamins & Supplements'].map((link) => (
//               <a 
//                 key={link} 
//                 href="/" 
//                 className="text-gray-400 hover:text-[#38bdf8] transition-colors duration-300"
//               >
//                 {link}
//               </a>
//             ))}
//           </div>

//           {/* Social Media Icons */}
//           <div className="flex space-x-4 mt-4 md:mt-0">
//             <a href="/" className="text-gray-400 hover:text-[#38bdf8] transition-colors duration-300">
//               <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
//                 {/* Facebook Icon */}
//                 <path d="M22.675 0h-21.35C.6 0 0 .6 0 1.325v21.35C0 23.4.6 24 1.325 24h21.35C23.4 24 24 23.4 24 22.675v-21.35C24 .6 23.4 0 22.675 0zM20 12h-3v9h-3v-9h-2v-3h2v-2.1c0-1.66.99-3.05 3.275-3.05H20v3h-1.5c-.36 0-.5.18-.5.54V9h2.75l-.25 3z" />
//               </svg>
//             </a>
//             <a href="/" className="text-gray-400 hover:text-[#38bdf8] transition-colors duration-300">
//               <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
//                 {/* Twitter Icon */}
//                 <path d="M23.953 4.569c-.885.392-1.83.656-2.825.775 1.014-.608 1.794-1.569 2.163-2.724-.949.56-2.004.969-3.127 1.19-.896-.957-2.173-1.555-3.594-1.555-2.719 0-4.924 2.204-4.924 4.924 0 .386.045.763.127 1.124-4.09-.205-7.72-2.166-10.148-5.144-.424.729-.666 1.574-.666 2.476 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.617v.062c0 2.385 1.693 4.374 3.946 4.827-.413.112-.848.171-1.296.171-.314 0-.623-.03-.922-.086.623 1.946 2.432 3.367 4.576 3.407-1.675 1.31-3.781 2.092-6.073 2.092-.394 0-.781-.023-1.17-.068 2.168 1.39 4.743 2.204 7.515 2.204 9.017 0 13.944-7.472 13.944-13.944 0-.21-.006-.42-.015-.63.961-.694 1.8-1.56 2.46-2.548l-.047-.02z" />
//               </svg>
//             </a>
//             <a href="/" className="text-gray-400 hover:text-[#38bdf8] transition-colors duration-300">
//               <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
//                 {/* Instagram Icon */}
//                 <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.206.055 2.03.24 2.497.404.59.214 1.012.472 1.46.92.447.447.706.87.92 1.46.164.466.349 1.29.404 2.497.059 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.055 1.206-.24 2.03-.404 2.497-.214.59-.472 1.012-.92 1.46-.447.447-.87.706-1.46.92-.466.164-1.29.349-2.497.404-1.266.059-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.206-.055-2.03-.24-2.497-.404-.59-.214-1.012-.472-1.46-.92-.447-.447-.706-.87-.92-1.46-.164-.466-.349-1.29-.404-2.497-.059-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.055-1.206.24-2.03.404-2.497.214-.59.472-1.012.92-1.46.447-.447.87-.706 1.46-.92.466-.164 1.29-.349 2.497-.404 1.266-.059 1.646-.07 4.85-.07zm0-2.163C8.756 0 8.332.012 7.052.07 5.719.127 4.647.387 3.7.792 2.816 1.173 2.053 1.75 1.48 2.323.907 2.897.33 3.66-.05 4.544c-.405.947-.665 2.019-.722 3.352-.058 1.28-.07 1.704-.07 4.948s.012 3.668.07 4.948c.057 1.333.317 2.405.722 3.352.381.884.957 1.647 1.53 2.22.573.573 1.336 1.149 2.22 1.53.947.405 2.019.665 3.352.722 1.28.058 1.704.07 4.948.07s3.668-.012 4.948-.07c1.333-.057 2.405-.317 3.352-.722.884-.381 1.647-.957 2.22-1.53.573-.573 1.149-1.336 1.53-2.22.405-.947.665-2.019.722-3.352.058-1.28.07-1.704.07-4.948s-.012-3.668-.07-4.948c-.057-1.333-.317-2.405-.722-3.352-.381-.884-.957-1.647-1.53-2.22-.573-.573-1.336-1.149-2.22-1.53-.947-.405-2.019-.665-3.352-.722-1.28-.058-1.704-.07-4.948-.07zM12 5.838c-3.406 0-6.162 2.756-6.162 6.162S8.594 18.162 12 18.162s6.162-2.756 6.162-6.162S15.406 5.838 12 5.838zm0 10.162c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm6.406-10.845c-.796 0-1.441.646-1.441 1.441s.646 1.441 1.441 1.441 1.441-.646 1.441-1.441-.646-1.441-1.441-1.441z" />
//               </svg>
//             </a>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;



const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p>&copy; 2024 dotmailIT. All rights reserved.</p>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="https://facebook.com" className="hover:text-[#38bdf8]">
            Facebook
          </a>
          <a href="https://twitter.com" className="hover:text-[#38bdf8]">
            Twitter
          </a>
          <a href="https://instagram.com" className="hover:text-[#38bdf8]">
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
};


export default Footer;

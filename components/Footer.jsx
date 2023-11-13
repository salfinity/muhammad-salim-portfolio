import { AiFillInstagram, AiFillTwitterCircle } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";

const Footer = () => {
 return (
   <footer className="bg-none">
     <div
       className="mt-3 mb-3 border-b border-t border-gray-100 pt-6 
       mr-12 ml-12 sm:flex sm:items-center sm:justify-between"
     >
       <p className="text-center text-xs font-semibold text-black dark:text-white">
         &copy; 2023 Salfinity Store, Inc. All rights reserved.
       </p>
 
       <ul className="mt-4 mb-6 flex justify-center gap-6 sm:mt-0 sm:justify-start">
       <li>
           <a
             href="https://wa.me/254702802937/"
             rel="noreferrer"
             target="_blank"
             className="text-orange-700 transition hover:text-orange-700/75"
           >
             <span className="sr-only">Facebook</span>
             <IoLogoWhatsapp
               className="h-6 w-6"
               fill="currentColor"
               aria-hidden="true"
             />

           </a>
         </li>
         <li>
           <a
             href="https://m.facebook.com/people/Salim-Finity/100004451387192/"
             rel="noreferrer"
             target="_blank"
             className="text-orange-700 transition hover:text-orange-700/75"
           >
             <span className="sr-only">Facebook</span>
             <BsFacebook
               className="h-6 w-6"
               fill="currentColor"
               aria-hidden="true"
             />

           </a>
         </li>
 
         <li>
           <a
             href="https://www.instagram.com/salfinity/"
             rel="noreferrer"
             target="_blank"
             className="text-orange-700 transition hover:text-orange-700/75"
           >
             <span className="sr-only">Instagram</span>
             <AiFillInstagram
               className="h-7 w-7"
               fill="currentColor"
               aria-hidden="true"
             />
              
           </a>
         </li>
 
         <li>
           <a
             href="https://twitter.com/FinitySal"
             rel="noreferrer"
             target="_blank"
             className="text-orange-700 transition hover:text-orange-700/75"
           >
             <span className="sr-only">Twitter</span>
             <AiFillTwitterCircle
               className="h-6 w-6"
               fill="currentColor"
               aria-hidden="true"
             />

           </a>
         </li>         
       </ul>
     </div>
   </footer>
 )
};

export default Footer;
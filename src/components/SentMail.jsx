import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';


export const SendEmail = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    
    emailjs.sendForm('service_mv3wlij', 'template_8duztd9', form.current, 'St2XtcKlk8MGhE6II')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" >
        <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="user_name">Name</label>
            <input type="text" name="user_name" />

            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="user_email">Email</label>
            <input type="email" name="user_email" />

            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">Message</label>
            <textarea name="message" />
            
            <div className="flex gap-10 flex-wrap justify-center">    
                <div className="flex justify-between">
                    <button 
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
                    type="submit"
                    >
                    Invite to an admin
                    </button>
                </div>
            </div>
        </div>
    
    </form>
  );
};

export default SendEmail
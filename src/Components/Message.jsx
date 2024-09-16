import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { NavLink } from 'react-router-dom';
import profile from '../assets/profile.svg'

function Message() {
  const [state, handleSubmit] = useForm("mzzpongp");
  if (state.succeeded) {
    return <p className="text-center text-xl">Thanks for joining!</p>;
  }
  return (
    <div className='min-w-full min-h-screen  flex items-center
     justify-center py-10 px-4 flex-col'>
      <div className='font-[profile]'>
    
    <div className='flex flex-col items-center mt-24'>
      <div>
        <NavLink to='/'> <img src={profile} width={100}/></NavLink>
      </div>
      <div className='w-[50vw]'>
        <h2 className='lg:text-[3rem] md:text-[2rem] text-[1.5rem] 
        text-center text-[#343a40]'>
          Thanks for taking the time to reach out. How can I help you today?</h2>
      </div>
      </div>
      </div>
      <form
        className='w-full max-w-[500px] bg-white p-8 md:p-10 rounded-lg shadow-lg grid gap-y-5'
        onSubmit={handleSubmit}
      >
      
        <div>
          <input
            className='w-full py-3 md:py-4 lg:py-5 px-4 border-2 border-[#c1baba] rounded-md'
            id='name'
            type='text'
            placeholder='Name'
            required
            name='text'
          />
          <ValidationError prefix='Name' field='text' errors={state.errors} />
        </div>
        <div>
          <input
            className='w-full py-3 md:py-4 lg:py-5 px-4 border-2 border-[#c1baba] rounded-md'
            id='email'
            type='email'
            name='email'
            placeholder='Email'
            required
          />
          <ValidationError prefix='Email' field='email' errors={state.errors} />
        </div>
        <div>
          <textarea
            className='w-full py-3 md:py-4 lg:py-5 px-4 border-2 border-[#c1baba] rounded-md'
            id='message'
            name='message'
            placeholder='Message'
            rows='6'
            required
          />
          <ValidationError prefix='Message' field='message' errors={state.errors} />
        </div>
        <div className='text-center'>
         
          <button 
          type='submit'
          disabled={state.submitting}
          className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 
          overflow-hidden text-sm font-medium text-gray-900 rounded-lg group 
          bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600
           group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 
           focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
       <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white
 dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
 Submit
</span>
</button>

        </div>
      </form>
    </div>
  );
}

export default Message;

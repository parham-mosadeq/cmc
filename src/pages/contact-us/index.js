import Layout from '@/components/layouts';
import Head from 'next/head';
import React, { useEffect, useRef } from 'react';
import { HiOutlineMail } from 'react-icons/hi';
import { FaWhatsapp } from 'react-icons/fa';
const ContactUsPage = () => {
  const nameRef = useRef(null);
  const email = useRef(null);
  const msg = useRef(null);

  useEffect(() => {
    nameRef.current = '';
    email.current = '';
    msg.current = '';
  }, []);

  return (
    <Layout>
      <Head>
        <title>CMC | Contact Us</title>
      </Head>
      <h1 className='text-center font-bold  capitalize text-xl text-secondaryLightColor'>
        contact us
      </h1>
      <form
        className='flex flex-col items-center justify-center w-full p-5 lg:max-w-2xl mx-auto'
        // sending form data to getForm.io
        action='https://getform.io/f/97aabbc9-1991-4816-86f2-c07a47196f80'
        method='POST'
      >
        {/* name */}
        <div className='flex flex-col w-full'>
          <label className='capitalize' htmlFor='name'>
            name
          </label>
          <input
            className='border-b-2 focus:outline-none focus:border-mainLightColor'
            type='text'
            name='name'
            max={100}
            min={1}
            required
          />
        </div>
        {/* name */}

        {/* email */}
        <div className='flex flex-col w-full'>
          <label className='capitalize' htmlFor='email'>
            email
          </label>
          <input
            className='border-b-2 focus:outline-none focus:border-mainLightColor'
            type='email'
            name='email'
            max={100}
            min={1}
            required
          />
        </div>
        {/* email */}

        {/* text */}
        <div className='flex flex-col w-full '>
          <label className='capitalize' htmlFor='message'>
            text
          </label>
          <input
            className='border-b-2 focus:outline-none focus:border-mainLightColor'
            type='text'
            name='message'
            maxLength={1000}
            minLength={12}
            required
          />
        </div>
        {/* text */}

        <button
          className='bg-mainColor text-secondaryLightColor w-full
        py-3 my-7 rounded-sm uppercase tracking-wider hover:bg-secondaryColor transition-colors duration-500 
        lg:w-1/2 mx-auto
        '
        >
          send message
        </button>
      </form>

      {/* more contact info */}
      <div className='text-center'>
        {/* direct email */}
        <div>
          <h5 className='text-3xl my-4 capitalize'>
            {/*  */}
            caribbean management consultancies
          </h5>
          <p className='font-bold text-lg'>
            {' '}
            Office 106, Al Salemiyah Tower, Deira, Dubai, UAE
          </p>
          <p className='font-bold my-3'>
            <a
              className='flex items-center justify-center w-fit mx-auto'
              href='mailto:info@Caribbeandxb.com'
              target='_blank'
            >
              <HiOutlineMail className='inline text-2xl text-red-600' />
              info@Caribbeandxb.com
            </a>
          </p>
          <p>
            <a
              className='flex items-center justify-center w-fit mx-auto'
              href='https://wa.me/+971508413633'
              target='_blank'
            >
              <FaWhatsapp className='inline text-2xl text-green-700' />
              +971 4 3434261
            </a>{' '}
          </p>
        </div>
        {/* direct email */}
      </div>
      {/* more contact info */}
    </Layout>
  );
};

export default ContactUsPage;

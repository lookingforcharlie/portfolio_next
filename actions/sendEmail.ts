'use server';

import { validateString } from '@/lib/utils';
import React from 'react';
import { Resend } from 'resend';
import ContactFormEmail from '../email/ContactFormEmail';

const resend = new Resend(process.env.RESEND_API_KEY);

// use resend.com service to send email
export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get('senderEmail');
  const senderMessage = formData.get('senderMessage');

  // if (
  //   !senderEmail ||
  //   !senderMessage ||
  //   typeof senderMessage !== 'string' ||
  //   typeof senderEmail !== 'string'
  // )
  //   return { error: 'Invalid message' };

  if (validateString(senderEmail, 50) === false) {
    return {
      error: 'Invalid Sender Email',
    };
  }
  if (validateString(senderMessage, 700) === false) {
    return {
      error: 'Invalid Sender Message',
    };
  }

  const data = await resend.emails.send({
    from: 'Contact Form <portfolio_next@resend.dev>',
    to: 'charliefeng2020@gmail.com',
    subject: 'Message From Portfolio@Next',
    reply_to: senderEmail as string,
    // Same as <ContactFormEmail enderEmail={senderEmail} senderMessage={senderMessage} /> for .tsx file
    react: React.createElement(ContactFormEmail, {
      // TypeScript doesn't pick up the validateString func, so we add 'as string' at the end, kinda waste
      senderEmail: senderEmail as string,
      senderMessage: senderMessage as string,
    }),
    // text: senderMessage as string,
    // html: '<p>Say hello to my little friend!</p>',
  });

  console.log('Data returns from resend.emails.send func on the server:', data);
  // if no error occurs, data: {id: string}
  // if error occurs, data: {name: string, message: string, statusCode: number}

  return {
    data,
  };
};

import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
} from '@react-email/components';
import { Tailwind } from '@react-email/tailwind';
import { FC } from 'react';

interface ContactFormEmailProps {
  senderMessage: string;
  senderEmail: string;
}

const ContactFormEmail: FC<ContactFormEmailProps> = ({
  senderMessage,
  senderEmail,
}) => {
  return (
    <Html>
      <Head />
      <Preview>New Message From Portfolio@Next</Preview>
      <Tailwind>
        <Body className='bg-gray-100'>
          <Container>
            <Section className='bg-white borderBlack my-10 px-10 py-4 rounded-md'>
              <Heading className='leading-tight'>
                You received the following message
              </Heading>
              <Text>{senderMessage}</Text>
              <Hr />
              <Text>The sender's email is: {senderEmail}</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default ContactFormEmail;

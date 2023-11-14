import Image from 'next/image';
import { Inter } from 'next/font/google';
import Conversation from '@/components/Conversation';
import PrincipalSection from '@/components/PrincipalSection';
import ConversationPage from '@/components/ConversationPage';
import Form from '@/components/Form';
import HomePage from '@/components/home';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <div>
      <HomePage />
    </div>
  );
}

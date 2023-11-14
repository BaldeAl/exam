import React from 'react';
import PrincipalSection from './PrincipalSection';
import Form from './Form';
import { useRouter } from 'next/router';

function HomePage() {
  const router = useRouter();

  const handleNewConversation = (newConversationId: number) => {
    router.push(`/conversations/?id=${newConversationId}`);
  };
  return (
    <div className="">
      <>
        <div className="flex-1 overflow-y-auto">
          <div className="flex-1 overflow-y-auto"></div>
          <Form onNewConversation={handleNewConversation} />
        </div>
      </>
    </div>
  );
}

export default HomePage;

import React from 'react';
import Form from './Form';
import Conversation from './Conversation';

interface PrincipalSectionProps {
  children?: React.ReactNode;
}
function PrincipalSection({ children }: PrincipalSectionProps) {
  return (
    <div className="flex h-screen w-screen text-gray-800 dark:text-gray-200">
      <Conversation />
      <main className="flex flex-col h-full w-full bg-gray-200 dark:bg-gray-800">
        {children}
      </main>
    </div>
  );
}

export default PrincipalSection;

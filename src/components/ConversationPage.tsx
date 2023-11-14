import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Message from './Message';
import PrincipalSection from '@/components/PrincipalSection';
import Form from '@/components/Form';
import { type } from 'os';

type MessageType = {
  id: number;
  role: string;
  content: string;
};

function ConversationPage() {
  const router = useRouter();
  const { id } = router.query;

  const [messages, setMessages] = useState<MessageType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [conversationId, setConversationId] = useState<number | undefined>(
    typeof id === 'string' ? parseInt(id, 10) : undefined
  );

  useEffect(() => {
    if (!conversationId) {
      setLoading(false);
      return;
    }

    fetch(`http://localhost:3000/api/conversations/${conversationId}`)
      .then((res) => res.json())
      .then((data) => {
        setMessages(data.messages);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.toString());
        setLoading(false);
      });
  }, [conversationId, messages]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="">
      {messages.map((message) => (
        <Message key={message.id} role={message.role} text={message.content} />
      ))}
      <div>
        <Form initialConversationId={conversationId} />
      </div>
    </div>
  );
}

export default ConversationPage;

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
  const [shouldFetch, setShouldFetch] = useState(true);
  const [conversationId, setConversationId] = useState<number | undefined>(
    typeof id === 'string' ? parseInt(id, 10) : undefined
  );

  useEffect(() => {
    if (!shouldFetch || !conversationId) {
      setLoading(false);
      return;
    }
    const token = localStorage.getItem('token');
    const headers: any = {
      'Content-Type': 'application/json',
    };
    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }
    fetch(`http://localhost:3000/api/conversations/${conversationId}`, {
      method: 'GET',
      headers: headers,
    })
      .then((res) => res.json())
      .then((data) => {
        setMessages(data.messages);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.toString());
        setLoading(false);
      });
  }, [conversationId, shouldFetch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="">
      <div className="flex-1 overflow-y-auto">
        {messages.map((message) => (
          <Message
            key={message.id}
            role={message.role}
            text={message.content}
          />
        ))}
      </div>

      <div>
        <Form initialConversationId={conversationId} />
      </div>
    </div>
  );
}

export default ConversationPage;

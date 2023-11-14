import handle from '@/pages/api/conversations';
import React, { useState } from 'react';
import { useRouter } from 'next/router';

type FormProps = {
  initialConversationId?: number;
  onNewConversation?: (newConversationId: number) => void;
};

function Form({ initialConversationId, onNewConversation }: FormProps) {
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [conversationId, setConversationId] = useState(initialConversationId);
  const router = useRouter();

  const handlesubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);

    let url = 'http://localhost:3000/api/conversations';
    console.log(conversationId);
    if (conversationId) {
      url += `/${conversationId}/sendMessage`;
    }

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ content: message }),
      });
      const data = await response.json();
      if (onNewConversation) {
        router.push(`/conversations/${data.id}`);
      }

      if (!conversationId && data.newConversationId) {
        setConversationId(data.newConversationId);
      }

      setMessage('');
    } catch (error: any) {
      setError(error.toString());
    }

    setLoading(false);
  };
  return (
    <div className="">
      <form className="flex w-full p-4" onSubmit={handlesubmit}>
        <input
          className="w-full h-12 px-4 md:px-6 text-sm md:text-base bg-gray-100 dark:bg-gray-900 border border-transparent dark:border-white/20 md:dark:border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:focus:ring-white/20 dark:focus:border-white/20 disabled:opacity-50 disabled:cursor-not-allowed"
          type="text"
          placeholder="Type a message..."
          value={message}
          required
          disabled={loading}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          className="ml-4 px-4 py-2 text-sm md:text-base bg-blue-500 hover:bg-blue-600 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-blue-500 disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-blue-500 disabled:hover:bg-blue-500"
          type="submit"
          disabled={loading}
        >
          {loading ? 'Sending...' : 'Send'}
        </button>
      </form>
    </div>
  );
}

export default Form;

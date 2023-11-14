/* eslint-disable @next/next/no-html-link-for-pages */
import Link from 'next/link';
import React, { use, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '../components/AuthContext';
import LogoutButton from './LoggoutButton';

type ConversationType = {
  id: number;
  firstMessage: string;
};
function Conversation() {
  const { isLoggedIn } = useAuth();
  const router = useRouter();
  const [conversations, setConversations] = useState<ConversationType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3000/api/conversations')
      .then((res) => res.json())
      .then((data) => {
        setConversations(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);
  return (
    <div className="flex text-gray-800 dark:text-gray-200">
      <nav className="flex flex-col bg-gray-100 dark:bg-gray-900 w-[260px] overflow-y-auto">
        <h1 className="text-2xl font-bold p-4">
          <Link href="/">mewoGPT</Link>
        </h1>
        {loading && <p>Loading...</p>}
        {error && <p>Error!</p>}
        {!loading && !error && conversations && conversations.length === 0 && (
          <p>No conversations found.</p>
        )}
        {conversations &&
          conversations.map((conversation) => (
            <ul key={conversation.id}>
              <li>
                <Link
                  className="flex p-3 items-center gap-3 rounded-md break-all pr-14"
                  href={`/conversations/${conversation.id}`}
                >
                  {conversation.firstMessage}
                </Link>
              </li>
            </ul>
          ))}

        <div className="flex-1"></div>
        <div className="p-4">
          {isLoggedIn ? (
            <LogoutButton />
          ) : (
            <>
              <a href="/auth/login">Login</a>
              <span className="mx-2">/</span>
              <a href="/auth/signup">Signup</a>
            </>
          )}
        </div>
      </nav>
    </div>
  );
}

export default Conversation;

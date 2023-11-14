/* eslint-disable @next/next/no-img-element */
import React from 'react';
type MessageProps = {
  role: string;
  text: string;
};

function Message({ role, text }: MessageProps) {
  return (
    <div
      className={
        role === 'user'
          ? 'dark:bg-gray-800 bg-[#e5e5ea] p-4 justify-center text-base md:gap-6 md:py-6 m-auto'
          : 'dark:bg-[#444654] bg-[#f5f5fa] p-4 justify-center text-base md:gap-6 md:py-6 m-auto'
      }
    >
      <div className="flex flex-1 gap-4 text-base mx-auto md:gap-6 md:max-w-2xl lg:max-w-[38rem] xl:max-w-3xl">
        <div>
          <img
            alt="User"
            loading="lazy"
            width="36"
            height="36"
            decoding="async"
            data-nimg="1"
            className="rounded-sm"
            src="/_next/image?url=https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F9029787&amp;w=96&amp;q=75"
            style={{ color: 'transparent' }}
          />
        </div>
        <div className="relative flex w-[calc(100%-50px)] flex-col lg:w-[calc(100%-115px)]">
          <div className="flex-col gap-1 md:gap-3">
            <div className="flex flex-grow flex-col gap-3 max-w-full">
              <div className="min-h-[20px] flex flex-col items-start gap-3 whitespace-pre-wrap break-words overflow-x-auto">
                <div>{text}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Message;

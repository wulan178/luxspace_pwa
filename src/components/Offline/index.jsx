import React from 'react'

export default function Offline() {
  return (
      <div className="fixed z-50 top-0 left-0 w-full bg-white text-red-500 border border-b p-4">
          <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01M22 12a10 10 0 11-20 0 10 10 0 0120 0z" />
              </svg>
              <p>You're offline. Don't you worry, you can still do things.</p>
          </div>
      </div>
  );
}

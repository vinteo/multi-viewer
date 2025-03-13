import { useState } from 'react';

export function Youtube() {
  const [url, setUrl] = useState('');
  const [showStream, setShowStream] = useState(false);
  const [showReset, setShowReset] = useState(false);

  if (showReset) {
    setTimeout(() => setShowReset(false), 5000);
  }

  return (
    <div
      className="relative h-full"
      onMouseEnter={() => setShowReset(true)}
      onMouseLeave={() => setShowReset(false)}
    >
      {!showStream ? (
        <div className="flex">
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Enter a YouTube URL"
            className="flex-1 p-4 text-black"
          />
          <button
            onClick={() => setShowStream(true)}
            className="p-4 bg-blue-500 text-white"
          >
            Show
          </button>
        </div>
      ) : (
        <>
          {showReset && (
            <button
              onClick={() => setShowStream(false)}
              className="absolute right-0 p-4 bg-blue-500 text-white"
            >
              Reset
            </button>
          )}
          <iframe
            src={`https://www.youtube.com/embed/${url.split('v=')[1]}`}
            className="w-full h-full"
          />
        </>
      )}
    </div>
  );
}

import { useState } from 'react';

const renderPlayer = (url: string, setShowStream: Function) => {
  const isYoutube =
    /^(http(s)?:\/\/)?((w){3}.)?youtu(be|.be)?(\.com)?\/.+/.test(url);
  if (isYoutube) {
    return (
      <iframe
        src={`https://www.youtube.com/embed/${url.split('v=')[1]}`}
        className="w-full h-full"
      />
    );
  }
  const isTwitch = /^(https?:\/\/)?(www\.)?twitch\.tv/.test(url);
  if (isTwitch) {
    return (
      <iframe
        src={`https://player.twitch.tv/?parent=vinteo.github.io&channel=${
          url.split('twitch.tv/')[1]
        }`}
        className="w-full h-full"
      />
    );
  }
  return (
    <div className="flex p-10 w-3/4 h-35 justify-center">
      <div className="flex w-full text-red-600">
        <span className="flex-1 p-4 border border-indigo-600">Invalid URL</span>
        <button
          onClick={() => setShowStream(false)}
          className="p-4 bg-blue-500 text-white cursor-pointer"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export function Screen() {
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
      <div className="flex justify-center w-full h-full">
        {!showStream ? (
          <div className="flex p-10 w-3/4 h-35">
            <input
              type="text"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="Enter a YouTube URL"
              className="flex-1 p-4 text-black border border-indigo-600"
            />
            <button
              onClick={() => setShowStream(true)}
              className="p-4 bg-blue-500 text-white cursor-pointer"
            >
              Show
            </button>
          </div>
        ) : (
          <>
            {showReset && (
              <button
                onClick={() => setShowStream(false)}
                className="absolute right-0 p-4 bg-blue-500 text-white cursor-pointer"
              >
                Reset
              </button>
            )}
            {renderPlayer(url, setShowStream)}
          </>
        )}
      </div>
    </div>
  );
}

import { useState } from 'react';
import { NavLink } from 'react-router';
import type { Route } from '../layouts/+types/2x2';
import { Screen } from '../../screen/screen';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Multi Viewer > Layouts > 2x2' },
    { name: 'description', content: 'Multi Viewer with a 2x2 layout' },
  ];
}

export default function Home() {
  const [showHome, setShowHome] = useState(false);
  if (showHome) {
    setTimeout(() => setShowHome(false), 5000);
  }

  return (
    <main
      className="flex relative mx-auto"
      onMouseMove={() => setShowHome(true)}
    >
      {showHome && (
        <NavLink
          to="/"
          className="absolute z-99 top-0 left-0 p-4 bg-blue-500 text-white cursor-pointer"
        >
          Home
        </NavLink>
      )}
      <div className="flex-1 h-screen">
        <div className="h-1/2 bg-gray-100">
          <Screen />
        </div>
        <div className="h-1/2 bg-gray-200">
          <Screen />
        </div>
      </div>
      <div className="flex-1 h-screen">
        <div className="h-1/2 bg-gray-300">
          <Screen />
        </div>
        <div className="h-1/2 bg-gray-400">
          <Screen />
        </div>
      </div>
    </main>
  );
}

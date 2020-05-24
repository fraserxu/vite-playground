import React from 'react'

import Dropdwon from './dropdown'

function App() {
  return (
    <div className="max-w-2xl mx-auto px-8">
      <header className="flex justify-center py-16 text-2xl">
        <h1 className="">Vite Playground</h1>
      </header>

      <main>
        <h2 className="py-4 px-0 text-lg">Stacks:</h2>
        <ul className="flex flex-col list-disc pl-4">
          <li>
            <a
              className="hover:underline"
              href="https://github.com/vitejs/vite"
            >
              Vite
            </a>
          </li>
          <li>
            <a className="hover:underline" href="https://tailwindcss.com/">
              Tailwind
            </a>
          </li>
          <li>
            <a className="hover:underline" href="http://reactjs.org/">
              React
            </a>
          </li>
        </ul>

        <div className="mx-auto my-8">
          <h2 className="py-4 px-0 text-lg">
            Animation with <span className="font-bold">react-spring</span>{' '}
            example:
          </h2>
          <Dropdwon />
        </div>
      </main>
    </div>
  )
}

export default App

import React from 'react'

import Dropdwon from './dropdown'
import Tab from './tab'

function App() {
  return (
    <div className="max-w-2xl mx-auto px-8">
      <header className="flex justify-center py-16 text-2xl">
        <h1 className="">Vite Playground</h1>
      </header>

      <main>
        <div className="mx-auto my-8">
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
        </div>

        <div className="mx-auto my-8">
          <h2 className="py-4 px-0 text-lg">
            Animation with <span className="font-bold">react-spring</span>{' '}
            example:
          </h2>
          <Dropdwon />
        </div>

        <div className="mx-auto my-8">
          <h2 className="py-4 px-0 text-lg">Tabs</h2>
          <Tab />
        </div>
      </main>
    </div>
  )
}

export default App

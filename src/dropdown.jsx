import React, { useState, useCallback } from 'react'
import { useSpring, animated } from 'react-spring'

const Dropdown = () => {
  const [isOpen, setOpen] = useState(false)

  const handleClick = useCallback(() => {
    setOpen(!isOpen)
  }, [isOpen, setOpen])

  const opacity = isOpen ? 0 : 1
  const transform = isOpen ? 'scaleY(1)' : 'scaleY(0)'

  const props = useSpring({
    opacity: isOpen ? 1 : 0,
    transform,
    from: { opacity, transform },
  })

  return (
    <div className="relative inline-block text-left">
      <div>
        <span className="rounded-md shadow-sm">
          <button
            type="button"
            onClick={handleClick}
            className="inline-flex justify-center w-full rounded-md border border-gray-300 px-4 py-2 bg-white text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800 transition ease-in-out duration-150"
          >
            Options
            <svg
              className="-mr-1 ml-2 h-5 w-5"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </span>
      </div>
      <animated.div style={props}>
        <div className="origin-top-right absolute left-0 mt-2 w-56 rounded-md shadow-lg">
          <div className="rounded-md bg-white shadow-xs">
            <div className="py-1">
              <a
                href="#"
                className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
              >
                Edit
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
              >
                Duplicate
              </a>
            </div>
            <div className="border-t border-gray-100"></div>
            <div className="py-1">
              <a
                href="#"
                className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
              >
                Archive
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
              >
                Move
              </a>
            </div>
            <div className="border-t border-gray-100"></div>
            <div className="py-1">
              <a
                href="#"
                className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
              >
                Share
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
              >
                Add to favorites
              </a>
            </div>
            <div className="border-t border-gray-100"></div>
            <div className="py-1">
              <a
                href="#"
                className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
              >
                Delete
              </a>
            </div>
          </div>
        </div>
      </animated.div>
    </div>
  )
}

export default Dropdown

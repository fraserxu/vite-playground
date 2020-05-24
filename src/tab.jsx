import React, { useState } from 'react'

const data = [
  {
    name: 'CMS Template',
    categories: ['Drupal', 'Joomla'],
  },
  {
    name: 'Wordpress',
    categories: ['Muse', 'Opencart'],
  },
  {
    name: '3D',
    categories: ['Ghost', 'Tumblr', 'Muse', 'Opencart'],
  },
  {
    name: 'Free Files',
    categories: ['Shopify', 'Muse', 'Opencart'],
  },
]

const Tab = () => {
  const [index, setIndex] = useState(0)
  return (
    <div className="bg-white rounded shadow-xl p-4">
      <ul className="relative w-1/2 border-solid border-r border-gray-200">
        {data.map((item, i) => (
          <div key={item.name}>
            <li
              className={`text-lg cursor-pointer px-2 py-1 mr-8 hover:bg-gray-200 rounded ${
                i === index && 'bg-gray-200 rounded'
              }`}
              onClick={() => setIndex(i)}
            >
              <span className="">{item.name}</span>
            </li>
            {i === index && (
              <div className="absolute top-0 inset-full ml-8">
                <span className="uppercase text-gray-500 whitespace-no-wrap">
                  {item.name}
                </span>
                <ul>
                  {item.categories.map((category) => (
                    <li className="text-sm" key={category}>
                      {category}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </ul>
    </div>
  )
}

export default Tab

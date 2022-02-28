import { useState, useRef, useEffect } from 'react'
import { filter, wrap } from 'fuzzaldrin-plus'
import { Combobox } from '@headlessui/react'
import { SearchIcon } from '@heroicons/react/solid'
import clsx from 'clsx'

const posts = [
  { id: 1, title: 'Checking your static sites for dead URLs' },
  { id: 2, title: 'On code folding and minimaps' },
  { id: 3, title: 'Custom project-based ESLint rules' },
  { id: 4, title: 'dependencies or devDependencies' },
  { id: 5, title: 'What Tailwind taught me about the separation of concerns' },
  { id: 6, title: 'Make your JavaScript project accessible to newcomers' },
  { id: 7, title: 'Managing complex tasks with gulp v4' },
  { id: 8, title: 'Taking Control of Your Git History' },
  {
    id: 9,
    title: 'A Built-in Alternative to Redux with React Context and Hooks',
  },
  { id: 10, title: 'Mocking with Jest' },
  { id: 11, title: 'Integrating and Enforcing Prettier & ESLint' },
  { id: 12, title: 'Why I Migrated Away from Medium' },
  { id: 13, title: 'The Nuances of React Transition Group' },
  { id: 14, title: "Don't Split render() into Functions" },
]

export default function App() {
  const [query, setQuery] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)

  const filteredPosts =
    query !== '' ? filter(posts, query, { key: 'title' }) : []

  useEffect(() => {
    inputRef.current?.focus()
  }, [open])

  return (
    <Combobox
      as="div"
      className="mx-auto max-w-xl transform divide-y divide-gray-100 overflow-hidden rounded-xl bg-white shadow-2xl ring-1 ring-black ring-opacity-5 transition-all"
      value={filteredPosts[0]}
      onChange={(post) => {
        console.log(post.id)
      }}
    >
      <div className="relative">
        <SearchIcon
          className="pointer-events-none absolute top-3.5 left-4 h-5 w-5 text-gray-400"
          aria-hidden="true"
        />
        <Combobox.Input
          className="h-12 w-full border-0 bg-transparent pl-11 pr-4 text-gray-800 placeholder-gray-400 focus:ring-0 sm:text-sm"
          placeholder="Search posts..."
          onChange={(event) => setQuery(event.target.value)}
        />
      </div>

      {filteredPosts.length > 0 && (
        <Combobox.Options
          // static
          className="max-h-72 scroll-py-2 overflow-y-auto py-2 text-sm text-gray-800"
        >
          {filteredPosts.map((post) => (
            <Combobox.Option
              key={post.id}
              value={post}
              className={({ active }) =>
                clsx(
                  'cursor-default select-none px-4 py-2',
                  active && 'bg-purple-600 text-white',
                )
              }
              dangerouslySetInnerHTML={{
                __html: wrap(post.title, query),
              }}
            />
          ))}
        </Combobox.Options>
      )}
      {query !== '' && filteredPosts.length === 0 && (
        <p className="p-4 text-sm text-gray-500">No posts found.</p>
      )}
    </Combobox>
  )
}

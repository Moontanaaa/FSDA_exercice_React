import { useContext } from 'react';
import { UserContext } from './context/UserContext';
import { Link } from 'react-router-dom';
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/20/solid';

export default function App() {
  const { users, loading, error } = useContext(UserContext);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {users.map((person, index) => (
          <li key={index} className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow">
            <div className="flex w-full items-center justify-between space-x-6 p-6">
              <div className="flex-1 truncate">
                <div className="flex items-center space-x-3">
                  <Link
                    to={`/user/${index}`}
                    className="truncate text-sm font-medium text-blue-600 hover:underline"
                  >
                    {person.name.first} {person.name.last}
                  </Link>
                  <span className="inline-flex shrink-0 items-center rounded-full bg-green-50 px-1.5 py-0.5 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                    {person.gender}
                  </span>
                </div>
                <p className="mt-1 truncate text-sm text-gray-500">{person.email}</p>
              </div>
              <img
                alt=""
                src={person.picture.large}
                className="size-10 shrink-0 rounded-full bg-gray-300"
              />
            </div>
            <div>
              <div className="-mt-px flex divide-x divide-gray-200">
                <div className="flex w-0 flex-1">
                  <a href={`mailto:${person.email}`} className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-sm font-semibold text-gray-900">
                    <EnvelopeIcon aria-hidden="true" className="size-5 text-gray-400" />
                    Email
                  </a>
                </div>
                <div className="-ml-px flex w-0 flex-1">
                  <a href={`tel:${person.phone}`} className="relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-br-lg border border-transparent py-4 text-sm font-semibold text-gray-900">
                    <PhoneIcon aria-hidden="true" className="size-5 text-gray-400" />
                    Call
                  </a>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}



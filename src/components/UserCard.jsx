import { useParams, Link } from 'react-router-dom';

function UserCard({ people }) {
  const { id } = useParams();
  const person = people[id];

  if (!person) {
    return <div>User not found</div>;
  }

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <img
        alt={`${person.name.first} ${person.name.last}`}
        src={person.picture.large}
        className="mx-auto mb-4 rounded-full"
      />
      <h1 className="text-xl font-semibold text-center">
        {person.name.first} {person.name.last}
      </h1>
      <p className="text-center text-gray-600">{person.email}</p>
      <p className="text-center text-gray-600">{person.phone}</p>
      <Link
        to="/"
        className="mt-4 inline-block rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
      >
        Back to list
      </Link>
    </div>
  );
}

export default UserCard;

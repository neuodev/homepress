import { gql, useQuery } from '@apollo/client';
import React, { useState } from 'react';
const GET_PROPERITYES = gql`
  query($sort: String!, $bath: Int) {
    properties(filter: { sort: [$sort], bath: $bath }) {
      title
      price
      near {
        food {
          name
        }
      }
    }
  }
`;
const Home = () => {
  const [sort, setSort] = useState('name');
  const [bath, setPath] = useState(1);
  const { data, loading, error } = useQuery(GET_PROPERITYES, {
    variables: {
      sort,
      bath,
    },
  });
  const updateId = id => {
    setSort(id);
    console.log(id);
    console.log(GET_PROPERITYES);
  };
  console.log(data, loading, bath);
  return (
    <div>
      <header className='App-header'>
        <label htmlFor=''>sort</label>
        <input
          type='text'
          value={sort}
          onChange={e => updateId(e.target.value)}
        />
        <label htmlFor=''>Bath</label>
        <input
          type='number'
          value={bath}
          onChange={e => setPath(Number(e.target.value))}
        />
        {loading ? (
          <h1>Loading</h1>
        ) : error ? (
          <h1>Error ???</h1>
        ) : (
          data.properties.map(item => (
            <div>
              <h1>{item.title}</h1>
              <p>{item.price}</p>
            </div>
          ))
        )}
      </header>
    </div>
  );
};

export default Home;

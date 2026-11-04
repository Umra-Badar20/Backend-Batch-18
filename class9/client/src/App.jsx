import React from 'react'
import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client/react";

// const query = gql`
//   query getTodos {
//     getTodos {
//       id
//       title
//       completed
//     }
//   }
// `;

const query = gql`
    query getProducts{
    getProducts{
    _id
    name
    image
    desc
    }
    }
`
const App = () => {
 const { loading, error, data } = useQuery(query);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;
  return data.getProducts.map(({_id, name, image, desc}) => (
   <div key={_id}>
      <h3>{name}</h3>
      <p>id:{_id}</p>
      <img width="400" height="250" alt="location-reference" src={`${image}`} />
      <br />
      <b>About this Product:</b>
      <p>{desc}</p>
      <br />
    </div>
  ));






  // const { loading, error, data } = useQuery(query);
  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error : {error.message}</p>;
  // return data.getTodos.map(({ id, title, completed }) => (
  //   <div key={id}>
  //     <h3>{title}</h3>
  //     <p>Completed: {completed.toString()}</p>
  //   </div>
  // ));

}

export default App

import * as React from "react";
import { useState } from "react";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return {
    props: { ninjas: data },
  }
}

const Practice = ({ninjas}) => {
  const [comment, setComment] = useState("")

  async function submitComment() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        title: {comment},
      }),
      headers: {
        "Content-Type": "application/json"
      }
    })
    const data = await response.json()
    console.log( data );
  }

  return (
  <div>
    <input type="text" value={comment} onChange={e => setComment(e.target.value)}></input>
    <button onClick={submitComment}>Submit</button>
    <h1>All Ninjas</h1>
    {ninjas.map(ninja => (
      <div key={ninja.id}>
        <a>
          <h3>{ninja.name}</h3>
        </a>
      </div>
    ) )}
  </div>
  );
}

export default Practice;
import React, { useState, useEffect } from 'react';
import { createClient } from 'urql';
import './App.css';

function App() {
  const [tokens, setTokens] = useState([]);

  const QueryURL = "https://gateway.thegraph.com/api/5f9227293001bd3707722ea03ac0c218/subgraphs/id/ELUcwgpm14LKPLrBRuVvPvNKHQ9HvwmtKgKSH6123cr7";

  const query = `{
    tokens(first: 5) {
      id
      name
      symbol
      decimals
    }
  }`;

  const client = createClient({
    url: QueryURL
  });

  useEffect(() => {
    const getTokens = async () => {
      const { data } = await client.query(query).toPromise();
      console.log(data);
      setTokens(data.tokens);
    };
    getTokens();
  }, []);

  return (
    <>
      <div>
        <h1>Token List</h1>
        {tokens !== null && tokens.length > 0 && tokens.map((token) => {
          return (
            <div key={token.id}>
              <div>{token.id}</div>
              <div>{token.name}</div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;

import Head from 'next/head';
import Layout from './layout/layout.js';
import React, { useEffect, useState } from 'react';

export default function Motivation() {
  const [inspiration, setInspiration] = useState('Meow!');
  const [person, setPerson] = useState('kitty');
  const [key, setKey] = useState(Math.random());

  useEffect(() => {
    fetch(`https://api.goprogram.ai/inspiration?key=${key}`)
      .then((response) => response.json())
      .then((data) => {
        setInspiration(data.quote);
        setPerson(data.author);
      });
  }, [key]);

  return (
    <Layout>
      <Head>
        <title>Motivation</title>
      </Head>
      <div id='inspire'>"{inspiration}" - {person}</div>
    </Layout>
  );
}

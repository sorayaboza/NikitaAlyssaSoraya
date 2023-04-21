import Head from 'next/head';
import Layout from './layout/layout.js';
import React, { useEffect, useState } from 'react';

export default function Motivation() {
  const [inspiration, setInspiration] = useState('Meow!');
  const [person, setPerson] = useState('cat');
  const [key, setKey] = useState(Math.random());
  const [image, setImage] = useState('');

  useEffect(() => {
    fetch(`https://api.goprogram.ai/inspiration?key=${key}`)
      .then((response) => response.json())
      .then((data) => {
        setInspiration(data.quote);
        setPerson(data.author);
      });

    const images = ['/images/motivation_cats_1.png', '/images/motivation_cats_2.png', '/images/motivation_cats_3.png'];
    const randomIndex = Math.floor(Math.random() * images.length);
    setImage(images[randomIndex]);
  }, [key]);

  return (
    <Layout>
      <Head>
        <title>Motivation</title>
      </Head>
      <div className="cat-bg">
        <div id='inspire'>"{inspiration}" - {person}</div>
      </div>
      <div id="cats">
        <img src={image} alt="Motivational cats"></img>
      </div>
    </Layout>
  );
}

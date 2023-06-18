import Head from 'next/head';
import styles from '../styles/Home.module.css';
import collections from '../pages/collections';
import Image from 'next/image'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';


export default function Home() {
  return (
    <div className={styles.container}>

      <main>
        <header className={styles.header}>
          <div className={styles.headertop}>
            <div className={styles.headertopleft} >
              <Image
                src="/images/chippercash.png"
                width={300}
                height={80}
                alt="chippercash"
              />
            </div>

            <div className={styles.headertopright} >
              <h1>X</h1>

            </div>

          </div>


          <h2>How can we help you? Find the answers to your questions here.</h2>

          <form >
            <input className={styles.form} type="text" placeholder="Search for articles..."></input>
          </form>
        </header>





        <div className={styles.grid}>

          <Grid container rowSpacing={4} >
            <Grid item xs={6}>
              <a href="..\mycode\nextjs\supportpage\nextjs-blog\pages\collections" className={styles.card}>

                <h3>Learn &rarr;</h3>
                <p>Learn about Next.js in an interactive course with quizzes!</p>
              </a>
            </Grid>

            <Grid item xs={6}>

              <a href="" className={styles.card}>
                <h3>Documentation &rarr;</h3>
                <p>Find in-depth information about Next.js features and API.</p>
              </a>
              {/* <Item>2</Item> */}
            </Grid>
            <Grid item xs={6}>

              <a href="" className={styles.card}>
                <h3>Learn &rarr;</h3>
                <p>Learn about Next.js in an interactive course with quizzes!</p>
              </a>
              {/* <Item>3</Item> */}
            </Grid>
            <Grid item xs={6}>
              <a href="" className={styles.card}>
                <h3>Learn &rarr;</h3>
                <p>Learn about Next.js in an interactive course with quizzes!</p>
              </a>
              {/* <Item>4</Item> */}
            </Grid>
          </Grid>





        </div>
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel" className={styles.logo} />
        </a>
      </footer>

      <style jsx>{`
        main {
          width: 100%;
          height: 90%;
          border: 5px solid green;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 10%;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}

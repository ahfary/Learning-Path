import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';
import { JSX } from 'react';

// Komponen Header (Hero)
function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        
        {/* BUTTON CONTAINER */}
        <div className={styles.buttons} style={{ gap: '15px', display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
          
          {/* 1. Tombol HTML */}
          <Link
            className="button button--secondary button--lg"
            to="/docs/html/pengenalan/apa-itu-html">
            HTML 5
          </Link>
          
          {/* 2. Tombol CSS */}
          <Link
            className="button button--secondary button--lg"
            to="/docs/css/pengenalan-css/apa-itu-css">
            CSS 3
          </Link>

          {/* 3. Tombol JS */}
          <Link
            className="button button--secondary button--lg"
            to="/docs/javascript/pengenalan/intro-js">
            JavaScript
          </Link>
          
          {/* 4. Tombol Tailwind (LINK DIPERBAIKI) */}
          <Link
            className="button button--secondary button--lg"
            to="/docs/tailwind/pengenalan/apa-itu-tailwind">
            Tailwind CSS
          </Link>
          
          {/* 5. Tombol TypeScript (LINK DIPERBAIKI) */}
          {/* Folder: 01-dasar, File: 01-apa-itu-ts.md */}
          <Link
            className="button button--secondary button--lg"
            to="/docs/typescript/dasar/apa-itu-ts">
            TypeScript
          </Link>

          {/* 6. Tombol React (LINK DIPERBAIKI) */}
          {/* Folder: 01-dasar, File: 01-pengenalan.md */}
          <Link
            className="button button--secondary button--lg"
            to="/docs/react/dasar/pengenalan">
            React.js
          </Link>
        </div>
      </div>
    </header>
  );
}

// ... Sisanya (HomeContent dan Default Function) biarkan sama ...
// (Pastikan HomeContent dan function Home tetap ada di bawah)
function HomeContent() {
  return (
    <section style={{padding: '4rem 0'}}>
      <div className="container">
        <div className="row">
          <div className="col col--4">
            <div className="text--center">
              <span style={{fontSize: '4rem'}}>🧱</span>
            </div>
            <div className="text--center padding-horiz--md">
              <Heading as="h3">Struktur (HTML)</Heading>
              <p>Pelajari fondasi web. Memahami tag semantik, formulir, dan tata letak dokumen.</p>
            </div>
          </div>
          <div className="col col--4">
            <div className="text--center">
              <span style={{fontSize: '4rem'}}>🎨</span>
            </div>
            <div className="text--center padding-horiz--md">
              <Heading as="h3">Tampilan (CSS)</Heading>
              <p>Mempercantik web dengan Flexbox, Grid, dan Animasi Responsif.</p>
            </div>
          </div>
          <div className="col col--4">
            <div className="text--center">
              <span style={{fontSize: '4rem'}}>⚡</span>
            </div>
            <div className="text--center padding-horiz--md">
              <Heading as="h3">Logika (React & TS)</Heading>
              <p>Membangun aplikasi web modern yang interaktif dan aman.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Home`}
      description="Dokumentasi perjalanan belajar web development">
      <HomepageHeader />
      <main>
        <HomeContent />
      </main>
    </Layout>
  );
}
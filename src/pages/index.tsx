import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

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
            HTML 5 🧱
          </Link>
          
          {/* 2. Tombol CSS */}
          <Link
            className="button button--secondary button--lg"
            to="/docs/css/pengenalan-css/apa-itu-css">
            CSS 3 🎨
          </Link>

          {/* 3. Tombol JS (BARU) */}
          <Link
            className="button button--secondary button--lg"
            to="/docs/js/pengenalan/intro-js">
            JavaScript ⚡
          </Link>
          
        </div>
      </div>
    </header>
  );
}

// Komponen Konten (3 Pilar)
function HomeContent() {
  return (
    <section style={{padding: '4rem 0'}}>
      <div className="container">
        <div className="row">
          
          {/* Kolom 1: HTML */}
          <div className="col col--4">
            <div className="text--center">
              {/* Icon HTML (Bisa diganti gambar jika mau) */}
              <span style={{fontSize: '4rem'}}>🧱</span>
            </div>
            <div className="text--center padding-horiz--md">
              <Heading as="h3">Struktur (HTML)</Heading>
              <p>
                Pelajari fondasi web. Memahami tag semantik, formulir, 
                dan tata letak dokumen yang standar.
              </p>
            </div>
          </div>

          {/* Kolom 2: CSS */}
          <div className="col col--4">
            <div className="text--center">
              <span style={{fontSize: '4rem'}}>🎨</span>
            </div>
            <div className="text--center padding-horiz--md">
              <Heading as="h3">Tampilan (CSS)</Heading>
              <p>
                Mempercantik web dengan Flexbox, Grid, dan Animasi. 
                Membuat tampilan responsif di semua perangkat.
              </p>
            </div>
          </div>

          {/* Kolom 3: JS */}
          <div className="col col--4">
            <div className="text--center">
              <span style={{fontSize: '4rem'}}>⚡</span>
            </div>
            <div className="text--center padding-horiz--md">
              <Heading as="h3">Logika (JavaScript)</Heading>
              <p>
                Menghidupkan website. Belajar algoritma, DOM Manipulation, 
                hingga persiapan masuk ke React.js.
              </p>
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
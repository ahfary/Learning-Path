import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';
import { JSX } from 'react';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          {/* Tombol ke Modul HTML */}
          <Link
            className="button button--secondary button--lg"
            to="/docs/html/pengenalan/apa-itu-html">
            Mulai Belajar HTML 🚀
          </Link>
          
          {/* Tombol ke Modul CSS (jarak dikit) */}
          <Link
            className="button button--outline button--secondary button--lg"
            style={{marginLeft: '10px'}}
            to="/docs/css/pengenalan-css/apa-itu-css">
            Lanjut ke CSS 🎨
          </Link>
        </div>
      </div>
    </header>
  );
}

// Bagian Konten Tambahan di Bawah Header
function HomeContent() {
  return (
    <section style={{padding: '4rem 0'}}>
      <div className="container">
        <div className="row">
          
          {/* Kolom 1 */}
          <div className="col col--4">
            <div className="text--center">
              <span style={{fontSize: '3rem'}}>📚</span>
            </div>
            <div className="text--center padding-horiz--md">
              <Heading as="h3">Materi Terstruktur</Heading>
              <p>
                Dokumentasi ini disusun berdasarkan urutan belajar saya, 
                dari fundamental hingga konsep tingkat lanjut.
              </p>
            </div>
          </div>

          {/* Kolom 2 */}
          <div className="col col--4">
            <div className="text--center">
              <span style={{fontSize: '3rem'}}>🛠️</span>
            </div>
            <div className="text--center padding-horiz--md">
              <Heading as="h3">Tech Stack Modern</Heading>
              <p>
                Fokus pada teknologi web terkini termasuk HTML5, CSS3, 
                dan ekosistem JavaScript modern.
              </p>
            </div>
          </div>

          {/* Kolom 3 */}
          <div className="col col--4">
            <div className="text--center">
              <span style={{fontSize: '3rem'}}>📝</span>
            </div>
            <div className="text--center padding-horiz--md">
              <Heading as="h3">Catatan Pribadi</Heading>
              <p>
                Bukan sekadar teori, tapi juga berisi tips, trik, dan 
                solusi dari error yang pernah saya alami.
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
      title={`Hello from ${siteConfig.title}`}
      description="Dokumentasi perjalanan belajar web development">
      <HomepageHeader />
      <main>
        <HomeContent />
      </main>
    </Layout>
  );
}
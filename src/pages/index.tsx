import React from 'react';
// import cn from 'classnames';
// import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import styles from './styles.module.scss';

import header from './assets/header.png';
import compsStyles from './assets/compsStyles.png';
import docs from './assets/docs.png';
import arch from './assets/arch.png';
import workStart from './assets/workStart.png';
import benefits from './assets/benefits.png';
import chars from './assets/chars.png';
import disSources from './assets/disSources.png';
import sync from './assets/sync.png';
import devSources from './assets/devSources.png';
import goalsTasks from './assets/goalsTasks.png';
import prior from './assets/prior.png';
import integration from './assets/integration.png';
import detailization from './assets/detailization.png';
import statuses from './assets/statuses.png';
import support from './assets/support.png';
import team from './assets/team.png';

export default function Home() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={siteConfig.title}
      description='Компоненты, стили и утилиты с широкими настройками функциональных возможностей 
  и гибкой темизацией их отображения'
    >
      <header className={styles.header}>
        <img src={header} />
      </header>

      <section className={styles.section}>
        <img src={compsStyles} />
      </section>

      <section className={styles.section}>
        <img src={docs} />
      </section>

      <section className={styles.section}>
        <img src={arch} />
      </section>

      <section className={styles.section}>
        <img src={workStart} />
      </section>

      <section className={styles.section}>
        <img src={benefits} />
      </section>

      <section className={styles.section}>
        <img src={chars} />
      </section>

      <section className={styles.section}>
        <img src={disSources} />
      </section>

      <section className={styles.section}>
        <img src={sync} />
      </section>

      <section className={styles.section}>
        <img src={devSources} />
      </section>

      <section className={styles.section}>
        <img src={goalsTasks} />
      </section>

      <section className={styles.section}>
        <img src={prior} />
      </section>

      <section className={styles.section}>
        <img src={integration} />
      </section>

      <section className={styles.section}>
        <img src={detailization} />
      </section>

      <section className={styles.section}>
        <img src={statuses} />
      </section>

      <section className={styles.section}>
        <img src={support} />
      </section>

      <section className={styles.section}>
        <img src={team} />
      </section>
    </Layout>
  );
}

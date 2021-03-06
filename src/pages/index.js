import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: 'Introducción a la materia',
    imageUrl: 'img/robot-intro.svg',
    description: (
      <>
        <p>Todo lo que necesitás saber para arrancar la cursada.</p>
        <p>Condiciones de aprobación, canales de comunicación, herramientas a instalar, guía de estilo, bibliografía y más.</p>
      </>
    ),
  },
  {
    title: 'Apuntes teóricos',
    imageUrl: 'img/robot-apuntes.svg',
    description: (
      <>
        <p>En esta sección encontrarán la explicación teórica de cada uno de los temas de la materia.</p>
        <p>Recomendamos leer los apuntes antes y después de cada clase.</p>
        <p><b>¡No dejes de practicar la teoría con los cuestionarios al final de cada módulo!</b></p>
      
      </>
    ),
  },
  {
    title: 'Ejercicios',
    imageUrl: 'img/robot-programando.svg',
    description: (
      <>
        <p>Muy pronto tendremos una nueva versión de la guía de ejercicios.</p>
        <p><b>Por ahora seguiremos usando la guía que se encuentra en <a href="https://classroom.google.com/u/0/c/NTQ1MTg2NjM5NDBa">Google Classroom.</a></b></p>
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/introduccion/informacion-materia')}>
              ¡Arranquemos!
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;

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
    imageUrl: 'base/robot-intro.svg',
    description: (
      <>
        <p>Todo lo que necesitás saber para arrancar la cursada.</p>
        <p>Condiciones de aprobación, canales de comunicación, herramientas a instalar, guía de estilo, y más.</p>
      </>
    ),
  },
  {
    title: 'Clases',
    imageUrl: 'base/robot-apuntes.svg',
    description: (
      <>
        <p>En esta sección encontrarán los <b>apuntes</b> de cada uno de los temas de la materia junto con <b>ejercicios</b> prácticos y teóricos.</p>
      
      </>
    ),
  },
  {
    title: 'Evaluaciones',
    imageUrl: 'base/robot-programando.svg',
    description: (
      <>
        <p>Aquí encontrarán <b>modelos de parciales</b> para ambas materias y las consignas de los <b>trabajos prácticos</b> de Laboratorio de Computación.</p>
      </>
    ),
  },
  {
    title: 'Campus virtual',
    imageUrl: 'base/campus.svg',
    description: (
      <>
        <p>La planificación, las grabaciones de las clases y las calificaciones se encuentran en <b><a target="_blank" href="https://classroom.google.com/u/0/c/NTQ1MTg2NjM5NDBa">Google Classroom</a></b>.</p>
      </>
    ),
  },
  {
    title: 'Slack',
    imageUrl: 'base/robots-hablando.svg',
    description: (
      <>
        <p>Nos mantenemos al día y nos comunicamos afuera del aula a través de <b><a target="_blank" href="https://join.slack.com/t/utn-prog2/shared_invite/zt-a7q2ca78-HDLaVbxtzMLSzVrxct3xWg">Slack</a></b>.</p>
      </>
    ),
  },
  {
    title: 'Ejercicios resueltos',
    imageUrl: 'base/resueltos.svg',
    description: (
      <>
        <p>Encontrarás la resolución de algunos ejercicios en <b><a target="_blank" href="https://github.com/codeutnfra/programacion_2_laboratorio_2">Github </a></b> 
        y en nuestro canal de <b><a target="_blank" href="https://www.youtube.com/channel/UC2Z2ADpWCh4aTHz07K3os2g/featured">You Tube</a></b>.</p>
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
              to={useBaseUrl('docs/introduccion/descripcion-materia')}>
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

import Head from "next/head";
import Footer from "../components/footer";
import Header from "../components/header";

import styles from "../styles/Who.module.scss";

import whoImg from "../public/brescia.webp";
import clienteImg from "../public/cliente.webp";

export default function Who() {
  return (
    <>
      <Head>
        <title>Chi siamo | Don't Worry</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header></Header>
        <div
          className={styles.header}
          style={{
            backgroundImage: `url(${whoImg.src})`,
          }}
        ></div>
        <section className={styles.section}>
          <div className={styles.container}>
            <div className={styles.sectionHead}>
              <h1>Chi siamo</h1>
              <h3>Competenza e creatività al vostro servizio</h3>
            </div>
            <p>
              Don't worry è un'azienda specializzata nella produzione di gadget
              personalizzati per eventi. Il nostro obiettivo è quello di creare
              esperienze uniche per i nostri clienti, offrendo soluzioni
              creative e innovative per promuovere il loro marchio o evento.
              Siamo un team appassionato e altamente qualificato che lavora con
              dedizione per soddisfare le esigenze di ogni cliente. Siamo
              orgogliosi della qualità dei nostri prodotti e della nostra
              capacità di fornire un servizio affidabile e puntuale. Se state
              cercando un partner affidabile per la vostra prossima campagna
              promozionale o evento, siamo qui per aiutarvi!
            </p>
          </div>
        </section>
        <section
          className={styles.workTogheter}
          style={{
            backgroundImage: `url(${clienteImg.src})`,
          }}
        >
          <div className={styles.container}>
            <div className={styles.sectionHead}>
              <h3>
                Diamo forma alle idee, restando al vostro fianco in ogni
                progetto. Rendiamo ogni vostro evento unico e speciale.
              </h3>
            </div>
          </div>
        </section>
        <section className={styles.section}>
          <div className={styles.container}>
            <div className={styles.sectionHead}>
              <h3>Marina Brognoli</h3>
            </div>
            <p>Nasce a Brescia il 3 ottobre 1980.
              Sin da piccola coltiva molte passioni, prime fra tutte la
              scrittura e la lettura. Sperimenta diverse tecniche di scrittura,
              mettendosi alla prova partecipando a vari concorsi letterari.
              Dopo le scuole superiori si iscrive alla Facolt&agrave; di Storia
              Medioevale, presso l'Università degli Studi di Milano. Durante gli
              anni in Universit&agrave; scopre la passione per la ricerca e per
              gli archivi, cos&igrave;, conseguita la laurea, si iscrive al
              Master di I° livello "Archiviazione dei beni ecclesiastici" presso
              l'Universit&agrave; Cattolica di Brescia.
            </p>
          </div>
        </section>
        <Footer></Footer>
      </main>
    </>
  );
}

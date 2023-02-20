import Head from "next/head";
import Footer from "../components/footer";
import Header from "../components/header";
import styles from "../styles/Home.module.scss";

import heroImg from "../public/take-care.webp";
import magliettaImg from "../public/magliette.webp";
import vetrofaniaImg from "../public/vetrofania.webp";
import festaImg from "../public/festa.webp";
import workTogheterImg from '../public/work-togheter.webp'

import Image from "next/image";
import Services from "../components/services";
import Contacts from "../components/contacts";

export default function Home() {
  return (
    <>
      <Head>
        <title>Marina Brognoli - Don't Worry</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <section className={styles.heroContainer}>
          <Header></Header>
          <div
            className={styles.hero}
            style={{
              backgroundImage: `url(${heroImg.src})`,
            }}
          ></div>
        </section>
        <section className={styles.about}>
          <div className={styles.box}>
            <div className={styles.logo}>
              <Image src="logo-white.svg" width="200" height="100" alt="logo"></Image>
            </div>
            <div className={styles.content}>
              <h1>I take care of you</h1>
              <p>
                Diamo forma alle vostre idee restando al vostro fianco in ogni
                progetto. Rendiamo ogni vostro evento unico e speciale. Ci
                prendiamo cura dei vostri progetti.
              </p>
            </div>
          </div>
        </section>
        <section className={styles.section}>
          <div className={styles.sectionHead}>
            <h2>Cosa facciamo</h2>
            <h3>I nostri servizi</h3>
          </div>
          <div className={styles.container}>
            <Services />
          </div>
        </section>
        <section className={styles.workTogheter} style={{
              backgroundImage: `url(${workTogheterImg.src})`,
            }}>
          <div className={styles.sectionHead}>
              <h3>Lavoriamo insieme</h3>
            </div>
            <div className={styles.container}>
              <button>Contattami</button>
              </div>
        </section>
        <section className={styles.section}>
          <div className={styles.sectionHead}>
            <h2>Cosa abbiamo fatto</h2>
            <h3>I nostri lavori</h3>
          </div>
          <div className={styles.container}>
            <div className={styles.useCases}>
              <div className={styles.useCase}>
                <div
                  className={styles.useCaseImg}
                  style={{
                    backgroundImage: `url(${magliettaImg.src})`,
                  }}
                ></div>
                <div className={styles.useCaseContent}>
                  <p>
                    Abbiamo aiutato l'azienda ABC a creare magliette
                    personalizzate di alta qualità utilizzando la nostra
                    tecnologia di stampa avanzata. Grazie alla nostra soluzione
                    personalizzata, l'azienda è riuscita a creare un'immagine di
                    marca unica e a differenziarsi dai concorrenti, ottenendo
                    anche una maggiore visibilità sul mercato. La nostra soluzione
                    di stampa personalizzata su magliette può fare lo stesso per
                    la tua azienda.
                  </p>
                  <button>Scopri di più</button>
                </div>
              </div>
              <div className={styles.useCase}>
                <div
                  className={styles.useCaseImg}
                  style={{
                    backgroundImage: `url(${vetrofaniaImg.src})`,
                  }}
                ></div>
                <div className={styles.useCaseContent}>
                  <p>
                    Aiutiamo la tua azienda a creare un'immagine accattivante e di
                    impatto con le nostre vetrofanie personalizzate. Utilizziamo
                    materiali di alta qualità e una tecnologia di stampa avanzata
                    per garantire un'alta risoluzione dei colori. Grazie alla
                    nostra soluzione, la tua azienda può creare un'immagine di
                    marca unica e rafforzare la propria presenza sul mercato.
                  </p>
                  <button>Scopri di più</button>
                </div>
              </div>
              <div className={styles.useCase}>
                <div
                  className={styles.useCaseImg}
                  style={{
                    backgroundImage: `url(${festaImg.src})`,
                  }}
                ></div>
                <div className={styles.useCaseContent}>
                  <p>
                    Aiutiamo la tua azienda a creare eventi indimenticabili per i
                    tuoi dipendenti e i tuoi clienti. Abbiamo lavorato con
                    l'azienda ABC per organizzare un evento aziendale su misura
                    per le loro esigenze, fornendo servizi di pianificazione,
                    coordinamento, e gestione logistica. Grazie alla nostra
                    soluzione personalizzata, l'azienda ABC è stata in grado di
                    creare un'esperienza di evento coinvolgente e memorabile per i
                    propri ospiti. La nostra soluzione di eventi aziendali su
                    misura può fare lo stesso per la tua azienda, fornendo una
                    gestione professionale e personalizzata per i tuoi eventi
                    aziendali.
                  </p>
                  <button>Scopri di più</button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.section}>
          <div className={styles.sectionHead}>
            <h2>Restiamo in contatto</h2>
            <h3>Contatti</h3>
          </div>
          <div className={styles.container}>
            <div className={styles.contacts}>
              <Contacts />
            </div>
          </div>
        </section>
        <Footer></Footer>
      </main>
    </>
  );
}

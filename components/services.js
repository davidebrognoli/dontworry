import styles from "../styles/Services.module.scss";
import Service from "./service";

import eventsImg from "../public/events.webp";
import gadgetImg from "../public/gadget.webp";

const gadget = {
  title: "Gadget",
  bgImg: gadgetImg,
  text: "Ti aiutiamo a scegliere il gadget più adatto e ti supportiamo dall'idea alla realizzazione",
  link: "#",
};

const events = {
  title: "Eventi",
  bgImg: eventsImg,
  text: "Ti forniamo tutti i servizi necessari per realizzare al meglio il tuo evento",
  link: "#",
};

const services = [gadget, events]

export default function Services() {
  return (
    <div className={styles.services}>
      {services.map((service) => {
        return <Service params={service} key={`service-${service.title.toLowerCase()}`}></Service>
      })}
    </div>
  );
}
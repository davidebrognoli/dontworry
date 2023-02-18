import styles from "../styles/Contacts.module.scss";

import PhoneIcon from "../public/phone.svg";
import EmailIcon from "../public/email.svg";
import AddressIcon from "../public/address.svg";

export default function Contacts() {
  return (
    <div className={styles.contacts}>
      <div className={styles.contact}>
        <AddressIcon></AddressIcon>
        <p>Via Trento 14, 25060 Collebeato (BS)</p>
      </div>
      <div className={styles.contact}>
        <PhoneIcon></PhoneIcon>
        <p><a href="tel:+393496420720">0039.3496420720</a></p>
      </div>
      <div className={styles.contact}>
        <EmailIcon></EmailIcon>
        <p><a href="mail:marina.brognoli@alice.it">marina.brognoli@alice.it</a></p>
      </div>
    </div>
  );
}
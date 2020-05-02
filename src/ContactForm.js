import React from 'react';
import './ContactForm.css';

const ContactForm = (props) => {

  return (
    <div>
      <h2>Sie haben Wünsche oder Anmerkungen?</h2>
      <h3>Schreiben Sie uns eine Nachricht!</h3>
      <form>

        <label for="email">E-Mail Adresse</label>
        <input type="text" id="email" name="email" placeholder="z. B. maxmustermann@gmail.com" />

        <label for="betreff">Betreff</label>
        <input type="text" id="betreff" name="betreff" placeholder="z. B. Kundenservice" />

        <label for="nachricht">Nachricht</label>
        <textarea id="nachricht" name="nachricht" />

        <label for="land">Land</label>
        <select id="land" name="land">
          <option value="deutschland">Deutschland</option>
          <option value="oesterreich">Österreich</option>
          <option value="schweiz">Schweiz</option>
        </select>

        <input type="submit" value="Submit" />
      </form>
    </div>

  );

}

export default ContactForm;

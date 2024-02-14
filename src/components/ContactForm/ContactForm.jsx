import css from './ContactForm.module.css';
import { nanoid } from 'nanoid';

const ContactForm = ({ addContact }) => {
  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.target;

    const newContact = {
      id: nanoid(),
      name: form.name.value,
      number: form.number.value,
    };
    console.log(newContact);
    const isAdded = addContact(newContact);

    if (isAdded) {
      form.reset();
    }
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <div className={css.inputs}>
        <label className={css.label} htmlFor="name">
          Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          // pattern="^([a-zA-Zа-яА-ЯіІїЇєЄґҐ]{2,}\s[a-zA-Zа-яА-ЯіІїЇєЄґҐ]{1,}'?-?[a-zA-Zа-яА-ЯіІїЇєЄґҐ]{2,}\s?([a-zA-Zа-яА-ЯіІїЇєЄґҐ]{1,})?)"
          // title="Name may contain only letters, apostrophe, dash and spaces. For example Jacob Mercer, Charles d'Artagnan"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <label className={css.label} htmlFor="number">
          Number
        </label>
        <input
          type="tel"
          name="number"
          id="number"
          // pattern="^\(\d{3}\)\s\d{3}-\d{4}$"
          // title="Phone number must be digits and have next format (000) 000-0000"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </div>
      <button className={css.btn} type="submit">
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;

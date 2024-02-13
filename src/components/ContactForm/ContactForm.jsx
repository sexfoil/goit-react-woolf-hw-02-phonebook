import { Component } from 'react';
import css from './ContactForm.module.css';
import { nanoid } from 'nanoid';

class ContactForm extends Component {
  handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.target;

    if (this.props.hasContact(form.name.value)) {
      alert(`${form.name.value} is already in contacts.`);
      return;
    }

    const newContact = {
      id: nanoid(),
      name: form.name.value,
      number: form.number.value,
    };
    this.props.addContact(newContact);

    form.reset();
  };

  handleChange = ({ target: { name, value } }) => {
    this.props.hasContact(name, value);
  };

  render() {
    return (
      <form className={css.form} onSubmit={this.handleSubmit}>
        <div className={css.inputs}>
          <label className={css.label} htmlFor="name">
            Name
          </label>
          <input
            type="text"
            name="name"
            // value={this.name}
            onChange={this.handleChange}
            id="name"
            pattern="^[a-zA-Z]+(([' -][a-zA-Z ])?[a-zA-Z]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <label className={css.label} htmlFor="number">
            Number
          </label>
          <input
            type="tel"
            name="number"
            // value={this.number}
            onChange={this.handleChange}
            id="number"
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
  }
}

export default ContactForm;

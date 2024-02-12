import { Component } from 'react';
import css from './ContactForm.module.css';
import { nanoid } from 'nanoid';

class ContactForm extends Component {
  handleSubmit = evt => {
    evt.preventDefault();
    const inputName = evt.target.name.value;
    const inputNumber = evt.target.number.value;

    const newContact = { id: nanoid(), name: inputName, number: inputNumber };
    this.props.updateContacts(newContact);
  };

  handleChange = ({ target: { name, value } }) => {
    this.props.updateInput(name, value);
  };

  render() {
    const { name, number } = this.props;
    return (
      <form className={css.form} onSubmit={this.handleSubmit}>
        <div className={css.inputs}>
          <label className={css.label} htmlFor="name">
            Name
          </label>
          <input
            type="text"
            name="name"
            value={name}
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
            value={number}
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

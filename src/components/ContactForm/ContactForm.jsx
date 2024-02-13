import { Component } from 'react';
import css from './ContactForm.module.css';
import { nanoid } from 'nanoid';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

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

    this.reset();
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState(() => {
      return {
        [name]: value,
      };
    });
  };

  reset() {
    this.setState({
      name: '',
      number: '',
    });
  }

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
            value={this.state.name}
            onChange={this.handleChange}
            id="name"
            pattern="^([a-zA-Zа-яА-ЯіІїЇєЄґҐ]{2,}\s[a-zA-Zа-яА-ЯіІїЇєЄґҐ]{1,}'?-?[a-zA-Zа-яА-ЯіІїЇєЄґҐ]{2,}\s?([a-zA-Zа-яА-ЯіІїЇєЄґҐ]{1,})?)"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Jacob Mercer, Charles d'Artagnan"
            required
          />
          <label className={css.label} htmlFor="number">
            Number
          </label>
          <input
            type="tel"
            name="number"
            value={this.state.number}
            onChange={this.handleChange}
            id="number"
            pattern="^\(\d{3}\)\s\d{3}-\d{4}$"
            title="Phone number must be digits and have next format (000) 000-0000"
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

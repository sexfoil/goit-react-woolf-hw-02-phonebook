import { Component } from 'react';
import css from './ContactList.module.css';

class ContactsList extends Component {
  handleClick = evt => {
    this.props.removeContact(evt.target.id);
  };

  render() {
    const { filter, contacts } = this.props;
    return (
      <ul className={css['contact-list']}>
        {contacts.map(contact => {
          return (
            contact.name.toLowerCase().includes(filter.toLowerCase()) && (
              <li key={contact.id} className={css.contact}>
                <span>
                  {contact.name}: {contact.number}
                </span>
                <button
                  id={contact.id}
                  className={css['btn-delete']}
                  type="button"
                  onClick={this.handleClick}
                >
                  Delete
                </button>
              </li>
            )
          );
        })}
      </ul>
    );
  }
}

export default ContactsList;

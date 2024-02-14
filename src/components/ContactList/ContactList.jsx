import css from './ContactList.module.css';

const ContactList = ({ contacts, removeContact }) => {
  const handleClick = evt => {
    removeContact(evt.target.id);
  };

  return (
    <ul className={css['contact-list']}>
      {contacts.map(contact => {
        return (
          <li key={contact.id} className={css.contact}>
            <span>
              {contact.name}: {contact.number}
            </span>
            <button
              id={contact.id}
              className={css['btn-delete']}
              type="button"
              onClick={handleClick}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;

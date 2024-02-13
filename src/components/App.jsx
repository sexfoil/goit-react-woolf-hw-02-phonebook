import { Component } from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactsList from './ContactList/ContactList';
import Filter from './Filter/Filter';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = contact => {
    this.setState(prev => {
      const updatedContacts = [...prev.contacts, contact];
      return {
        contacts: updatedContacts,
      };
    });
  };

  removeContact = contactId => {
    this.setState(prev => {
      const updatedContacts = prev.contacts.filter(
        contact => contact.id !== contactId
      );
      return {
        contacts: updatedContacts,
      };
    });
  };

  hasContact = name => {
    return this.state.contacts.find(
      element => element.name.toLowerCase().trim() === name.toLowerCase().trim()
    );
  };

  updateFilter = value => {
    this.setState(prev => {
      return { filter: value };
    });
  };

  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'start',
          alignItems: 'start',
          paddingLeft: '24px',
          fontSize: 18,
          color: '#010101',
        }}
      >
        <h1>Phonebook</h1>
        <ContactForm
          hasContact={this.hasContact}
          addContact={this.addContact}
        />
        <h2>Contacts</h2>
        <Filter filter={this.state.filter} updateFilter={this.updateFilter} />
        <ContactsList
          filter={this.state.filter}
          contacts={this.state.contacts}
          removeContact={this.removeContact}
        />
      </div>
    );
  }
}

export default App;

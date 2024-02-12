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
    name: '',
    number: '',
  };

  updateContacts = contact => {
    this.setState(prev => {
      const updatedContacts = [...prev.contacts, contact];
      return {
        contacts: updatedContacts,
      };
    });
    this.formReset();
  };

  updateInput = (name, value) => {
    this.setState(() => {
      return { [name]: value };
    });
  };

  updateFilter = value => {
    this.setState(prev => {
      return { filter: value };
    });
  };

  formReset = () => {
    this.setState(() => {
      return { name: '', number: '', filter: '' };
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
          alignItems: 'center',
          fontSize: 18,
          color: '#010101',
        }}
      >
        <h1>Phonebook</h1>
        <ContactForm
          name={this.state.name}
          number={this.state.number}
          updateInput={this.updateInput}
          updateContacts={this.updateContacts}
          formReset={this.formReset}
        />
        <h2>Contacts</h2>
        <Filter filter={this.state.filter} updateFilter={this.updateFilter} />
        <ContactsList
          filter={this.state.filter}
          contacts={this.state.contacts}
        />
      </div>
    );
  }
}

export default App;

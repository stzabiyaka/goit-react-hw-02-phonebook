import React, { Component } from 'react';
import { Application } from './App.styled';
import { PageTitle } from 'components/PageTitle';
import { Footer } from 'components/Footer/Footer';
import { Section } from 'components/Section';
import { AddContactForm } from 'components/AddContactForm';
import { ContactList } from 'components/ContactList';
import { Filter } from 'components/Filter';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    ],
    filter: '',
  };

  addContact = contact => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact],
    }));
  };

  removeContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  setFilter = filter => {
    this.setState({ filter: filter.toLowerCase() });
  };

  filterContacts = () => {
    const { contacts, filter } = this.state;
    return filter
      ? contacts.filter(contact => contact.name.toLowerCase().includes(filter))
      : contacts;
  };

  isContactExist = name => {
    const { contacts } = this.state;
    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      alert(`${name} is already in contacts`);
      return true;
    }
    return false;
  };

  render() {
    return (
      <Application>
        <PageTitle title="React homework #02 - phonebook" />

        <Section title="Phonebook">
          <AddContactForm
            onSubmit={this.addContact}
            onCheck={this.isContactExist}
          />
        </Section>

        <Section title="Contacts">
          <Filter onFilter={this.setFilter} />
          <ContactList
            contacts={this.filterContacts()}
            onDelete={this.removeContact}
          />
        </Section>

        <Footer
          name="Stanislav Zabiyaka"
          href="https://github.com/stzabiyaka/"
        />
      </Application>
    );
  }
}

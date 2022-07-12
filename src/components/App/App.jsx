import React, { Component } from 'react';
import { Application } from './App.styled';
import { PageTitle } from 'components/PageTitle';
import { Footer } from 'components/Footer/Footer';
import { Section } from 'components/Section';
import { Form } from 'components/Form';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  render() {
    return (
      <Application>
        <PageTitle title="React homework #02 - phonebook" />

        <Section title="Phonebook">
          <Form />
        </Section>

        <Section title="Contacts"></Section>

        <Footer
          name="Stanislav Zabiyaka"
          href="https://github.com/stzabiyaka/"
        />
      </Application>
    );
  }
}

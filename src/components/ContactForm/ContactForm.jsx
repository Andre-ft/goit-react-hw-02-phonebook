import React, { Component } from 'react';
import shortid from 'shortid';
import s from './ContactForm.module.css';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
    btnEnable: true,
  };

  nameInputId = shortid.generate();
  numberInputId = shortid.generate();

  checkName(name) {
    const check = this.props.contactList.find(
      contact => contact.name.toLowerCase() === name.toLowerCase(),
    );
    if (check) {
      this.setState({ btnEnable: false });
      alert(`${name} is already in contacts`);
      return;
    }
    this.setState({ btnEnable: true });
  }

  handleChange = e => {
    const { name, value } = e.currentTarget;

    name === 'name' && this.checkName(value);

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state);

    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    return (
      <form className={s.form} onSubmit={this.handleSubmit}>
        <label htmlFor={this.nameInputId} className={s.input}>
          Name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={this.state.name}
            onChange={this.handleChange}
            id={this.nameInputId}
          />
        </label>

        <label htmlFor={this.numberInputId} className={s.input}>
          Number
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={this.state.number}
            onChange={this.handleChange}
            id={this.numberInputId}
          />
        </label>
        <button
          type="submit"
          className={s.button}
          disabled={!this.state.btnEnable}
        >
          Add contact
        </button>
      </form>
    );
  }
}

export default ContactForm;

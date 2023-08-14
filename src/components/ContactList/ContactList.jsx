import { List } from './ContactList.styled';
import { ContactItem } from 'components/ContactItem/ContactItem';
import { deleteContact, fetchContacts } from 'redux/operations';
import Notiflix from 'notiflix';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectFilter } from 'redux/selectors';
import { useEffect } from 'react';

export const ContactList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const filterContacts = () => {
    const query = filter.toLocaleLowerCase();

    const filteredContacts = contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(query)
    );

    if (query && !filteredContacts.length) {
      Notiflix.Notify.warning('No contacts matching your request');
      return [];
    }
    return filteredContacts;
  };

  const handleDeleteContact = (id, name) => {
    dispatch(deleteContact(id));
    Notiflix.Notify.info(`${name} was successfully deleted from your contacts`);
  };

  return (
    <List>
      {filterContacts().map(contact => {
        return (
          <ContactItem
            id={contact.id}
            key={contact.id}
            name={contact.name}
            number={contact.number}
            onDeleteBtnClick={() =>
              handleDeleteContact(contact.id, contact.name)
            }
          />
        );
      })}
    </List>
  );
};

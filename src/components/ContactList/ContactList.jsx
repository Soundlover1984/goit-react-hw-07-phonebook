
import { List } from './ContactList.styled';
import { ContactItem } from 'components/ContactItem/ContactItem';
import { deleteContact, fetchContacts } from 'redux/operations';
import Notiflix from 'notiflix';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
import { useEffect } from 'react';

export const ContactList = () => {
  const dispatch = useDispatch();

    useEffect(() => {
      dispatch(fetchContacts());
    }, [dispatch]);

  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const filterContacts = () => {
    const query = filter.toLocaleLowerCase();

    const filteredContacts = contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(query)
    );

    if (query && !filteredContacts.length) {
      Notiflix.Notify.warning(
        'No contacts matching your request'
      );
      return [];
    }
    return filteredContacts;
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
            onDeleteBtnClick={() => dispatch(deleteContact(contact.id))}
          />
        );
      })}
    </List>
  );
};


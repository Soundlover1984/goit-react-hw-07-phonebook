import { Container, MainHeader, SubHeader } from './App.styled';
import { ContactForm } from "./ContactForm/ContactForm";
import { Filter } from "./Filter/Filter";
import { ContactList } from "./ContactList/ContactList";
import { Loader } from './Loader/Loader';
import { useSelector } from 'react-redux';
import { getLoader } from 'redux/selectors';


export const App = () => {
  
  const loader = useSelector(getLoader);
  
    return (
      <Container>
        {loader && <Loader />}
        <MainHeader>Phonebook</MainHeader>
        <ContactForm />
        <SubHeader>Contacts</SubHeader>
        <Filter />
        <ContactList />
      </Container>
    );
};

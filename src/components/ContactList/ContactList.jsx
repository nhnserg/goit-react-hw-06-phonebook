import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from '../../redux/selector';
import { deleteContactAction } from '../../redux/contacts/contactSlice';
import { List, ListItem, DeleteButton } from './ContactList.styled';
import { getContacts } from '../../redux/selector';


export const ContactList = () => {
    const filter = useSelector(getFilter);
    const { contacts } = useSelector(getContacts);

    let normalized = filter ? filter.toLowerCase() : '';
    const visibleContacts = contacts.filter(contact =>
        contact.name.toLowerCase().includes(normalized)
    );
    const dispatch = useDispatch();
    const deleteContact = contactId => {
        dispatch(deleteContactAction(contactId));
    };

    return (
        <List>
            {visibleContacts.map(contact => (
                <ListItem key={contact.id}>
                    {contact.name}:{contact.number}
                    <DeleteButton type="text" onClick={() => deleteContact(contact.id)}>
                        Delete
                    </DeleteButton>
                </ListItem>
            ))}
        </List>
    );
};

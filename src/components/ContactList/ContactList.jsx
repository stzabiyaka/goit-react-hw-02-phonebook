import PropTypes from 'prop-types';
import { List, ListItem } from './ContactList.styled';
import { Button } from 'utilities';

export function ContactList({ contacts, onDelete }) {
  return (
    <List>
      {contacts
        .sort((a, b) => a.name.localeCompare(b.name))
        .map(({ id, name, number }) => {
          return (
            <ListItem key={id}>
              {name}: {number}{' '}
              <Button type="button" onClick={() => onDelete(id)}>
                Delete
              </Button>
            </ListItem>
          );
        })}
    </List>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
};

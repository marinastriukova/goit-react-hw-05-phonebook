import style from './ContactsList.module.css';
import styles from '../Phonebook.module.css';
import PropTypes from 'prop-types';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

function ContactsList({ contacts, onRemove }) {

    return (
        <TransitionGroup component="ul" className={style.list}>
            {contacts.map(contact => {
                return (
                <CSSTransition key={contact.id} in={true} appear={true} timeout={250} classNames={styles} unmountOnExit>
                    <li className={style.items}>
                        <p>
                            <span>{contact.name}: </span>
                            <span>{contact.number}</span>
                        </p>
                        <button className={style.button} onClick={() => onRemove(contact.id)}>Delete</button>
                    </li>
                </CSSTransition>)
            }
            )}
        </TransitionGroup>)
}

ContactsList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
        })),
    onRemove: PropTypes.func
}

export default ContactsList;


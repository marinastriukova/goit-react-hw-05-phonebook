import style from './ErrorMessage.module.css';

export default function ErrorMessage() {
    return <p className={style.alert}>This contact is already in phonebook</p>
}
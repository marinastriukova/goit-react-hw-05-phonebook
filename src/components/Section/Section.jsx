import PropTypes from 'prop-types';
import style from './Section.module.css';
import { CSSTransition } from 'react-transition-group';
import styles from '../Phonebook.module.css';

function Section({ title, children }) {
    return (<div className={style.section}>
        <CSSTransition in={true} appear={true} timeout={500} classNames={styles} unmountOnExit>
            <h1 className={style.title}>{title}</h1>
        </CSSTransition>
        {children}
    </div>
    )
}

Section.propTypes = {
    title: PropTypes.string,
    children: PropTypes.any
}

export default Section;
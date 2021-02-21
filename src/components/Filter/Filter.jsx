import style from './Filter.module.css'
import PropTypes from 'prop-types';

function Filter({value, onChangeFilter}) {
    return(
        <label className={style.label}>
            Find contacts by name
            <input 
            type="text"
            value={value}
            onChange={e => onChangeFilter(e.target.value)}
            className={style.input}
            />
        </label>
    )
}

Filter.propTypes = {
    value: PropTypes.string.isRequired,
    onChangeFilter: PropTypes.func,
  };

export default Filter
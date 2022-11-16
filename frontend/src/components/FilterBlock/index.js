import classNames from 'classnames/bind';
import { FaChevronDown } from 'react-icons/fa';
import ColorSelection from '../ColorSelection';
import styles from './FilterBlock.module.scss';

const cx = classNames.bind(styles);
function FilterBlock({ ListColor, title, ListCheckBox }) {
    return (
        <div className={cx('filter-block-wrap', 'col-4')}>
            <div className={cx('filter-block')}>
                <div className={cx('subtitle')}>
                    <span>{title}</span>
                    <span className={cx('icon')}>
                        <FaChevronDown />
                    </span>
                </div>
                <div className={cx('content')}>
                    {ListColor ? (
                        <ul className={cx('color-list')}>
                            {ListColor.map((item, index) => {
                                return (
                                    <li key={index}>
                                        <ColorSelection color={item} />
                                    </li>
                                );
                            })}
                        </ul>
                    ) : (
                        <ul className={cx('checkbox-list')}>
                            {ListCheckBox.map((item, index) => (
                                <li key={index}>
                                    <input type="checkbox" />
                                    <label>{item}</label>
                                </li>
                            ))}
                        </ul>
                    )}
                    <ul className={cx('checkbox-list')}></ul>
                </div>
            </div>
        </div>
    );
}

export default FilterBlock;

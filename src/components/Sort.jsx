import { useState } from 'react';
import './styles/Sort.css';

export default function Sort() {

    const [isVisible, setIsVisible] = useState(false);
    const [selected, setSelected] = useState(0);
    const list = ['популярности', 'цене', 'алфавиту'];
    const sortName = list[selected];

    const onClickListItem = (i) => {
        setSelected(i);
        setIsVisible(false);
    }

    return (
        <div className="sort-wrapper">
            <div className="sort__lable">
                <b>Сортировка по:</b>
                <span className='test' onClick={() => setIsVisible(!isVisible)}>{sortName}</span>
            </div>
            {
                isVisible && (
                    <div className="sort__popup">
                        <ul className="sort__popup_content">

                            {list.map((name, i) => (
                                <li
                                    key={i}
                                    onClick={() => onClickListItem(i)}
                                    className={selected === i ? 'sort-active' : ''}
                                >
                                    {name}
                                </li>
                            ))}
                        </ul>
                    </div>
                )
            }
        </div>
    )
}
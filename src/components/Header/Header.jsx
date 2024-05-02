import React, { useContext } from 'react';
import { CgDarkMode } from 'react-icons/cg';
import { DarkModeContext } from '../../context/DarkModeContext';
import { v4 as uuidv4 } from 'uuid';

export default function Header({ filters, filterType, setFilterType }) {
    const { isDarkMode, toggleDarkMode } = useContext(DarkModeContext);

    const showByFilter = (e) => {
        const targetText = e.target.textContent;
        setFilterType(targetText);
    };

    return (
        <nav>
            <ul className="navBar">
                <li className="pointer_cursor">
                    <CgDarkMode onClick={toggleDarkMode} className="darkmode_icon" />
                </li>
                {filters.map((filter) => (
                    <li key={uuidv4()} className="pointer_cursor">
                        <span onClick={showByFilter} className={filterType === filter ? 'selected' : undefined}>
                            {filter}
                        </span>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

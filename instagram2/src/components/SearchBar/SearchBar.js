import React from 'react';
import './SearchBar.css';
import {StyledHeader} from '../../Styles';

const SearchBar = props => {
    return (
        //<div className="search-bar-container">
        <StyledHeader>
            <div className="logo-container">
                <div className="image-container">
                    <i class="fab fa-instagram 2x"></i>
                    <div className="instagram">Instagram</div>
                </div>
            </div>
            <div className="search-bar">
                <input
                    type="text"
                    placeholder="Search"
                />
            </div>
            <div className="icon-container">
                <div className="icon-button">
                    <i class="far fa-compass"></i>
                </div>
                <div className="icon-button">
                    <i class="far fa-heart"></i>
                </div>
                <div className="icon-button">
                    <i class="far fa-user"></i>
                </div>
            </div>
        </StyledHeader>
    );
};
export default SearchBar;
import styled from 'styled-components';
import { Component } from 'react';
import PropTypes from 'prop-types';

const Header = styled.header`
    display: flex;
    justify-content: space-between;
    cursor: default;
    padding-top: 50px;
    padding-bottom: 50px;
`;

const Title = styled.h1`
    font-family: 'Roboto Condensed';
    font-size: 28px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    span {
        color: #9F0013;
    }
`;

const NavigationTitle = styled.h2`
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    cursor: pointer;
`;

const SwitchMenuSpan = styled.span`
    color: ${(props) => props.isSelected ? '#9F0013' : '#000'};
`;


class AppHeader extends Component {
    render() {
        const { isCharactresSelected, toggleContent } = this.props;

        return (
            <Header>
                <Title><span>Marvel </span>information portal</Title>
                <NavigationTitle>
                    <SwitchMenuSpan 
                        id='characters'
                        isSelected={isCharactresSelected}
                        onClick={() => toggleContent(true)}>Characters</SwitchMenuSpan> 
                    / 
                    <SwitchMenuSpan
                        id='comics'
                        isSelected={!isCharactresSelected}
                        onClick={() => toggleContent(false)}>Comics</SwitchMenuSpan></NavigationTitle>
            </Header>
        )
    }
}

AppHeader.propTypes = {
    isCharactresSelected: PropTypes.bool,
    toggleContent: PropTypes.func
}

export default AppHeader;
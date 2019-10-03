import React from 'react';
import PropTypes from 'prop-types';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { AppConsumer } from '../../Contexts/Provider';
import Tool from './Tests/Tool';
import Obj from './Tests/Obj';
import withToggleState from '../../HOC/withToggleState';

const DropdownTests = ({ isOpen, toggle }) => (
    <AppConsumer>
        {({ changeTool, changeObj }) => (
            <Dropdown isOpen={isOpen} toggle={toggle} nav>
                <DropdownToggle nav caret>
                    Examples
                </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem onClick={changeTool.bind(this, Tool)}>Tool Example</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem onClick={changeObj.bind(this, Obj)}>Object Example</DropdownItem>
                </DropdownMenu>
            </Dropdown>
        )}
    </AppConsumer>
);

DropdownTests.propTypes = {
    feedback: PropTypes.string,
    isOpen: PropTypes.bool,
    toggle: PropTypes.func,
};

const DropdownWithToggleState = withToggleState(DropdownTests);

export default DropdownWithToggleState;

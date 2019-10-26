import React, { useState, useCallback } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

import { AppConsumer } from 'context';
import tool from 'modules/example/tool';
import obj from 'modules/example/obj';

const Examples = () => {
    const [isOpen, setOpen] = useState(false);
    const toggle = useCallback(() => {
        setOpen(!isOpen);
    }, [isOpen]);
    return (
        <AppConsumer>
            {({ changeTool, changeObj }) => (
                <Dropdown isOpen={isOpen} toggle={toggle} nav>
                    <DropdownToggle nav caret>
                        Examples
                    </DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem onClick={changeTool.bind(this, tool)}>Tool Example</DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem onClick={changeObj.bind(this, obj)}>Object Example</DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            )}
        </AppConsumer>
    );
};

export default Examples;

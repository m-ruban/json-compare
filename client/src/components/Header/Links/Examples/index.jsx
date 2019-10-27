import React, { useState, useCallback } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import PropTypes from 'prop-types';

import withConsumer from 'hoc/withConsumer';
import trl from 'modules/translation';
import tool from 'modules/example/tool';
import obj from 'modules/example/obj';

const Examples = ({ changeTool, changeObj }) => {
    const [isOpen, setOpen] = useState(false);
    const toggle = useCallback(() => {
        setOpen(!isOpen);
    }, [isOpen]);
    const onClickTool = useCallback(() => {
        changeTool(tool);
    }, [changeTool]);
    const onClickObj = useCallback(() => {
        changeObj(obj);
    }, [changeObj]);

    return (
        <Dropdown isOpen={isOpen} toggle={toggle} nav>
            <DropdownToggle nav caret>
                {trl('Header.Links.Examples.title')}
            </DropdownToggle>
            <DropdownMenu>
                <DropdownItem onClick={onClickTool}>{trl('Header.Links.Examples.tool')}</DropdownItem>
                <DropdownItem divider />
                <DropdownItem onClick={onClickObj}>{trl('Header.Links.Examples.obj')}</DropdownItem>
            </DropdownMenu>
        </Dropdown>
    );
};

Examples.propTypes = {
    changeTool: PropTypes.func,
    changeObj: PropTypes.func,
};

export default withConsumer(Examples);

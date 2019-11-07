import React from 'react';
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';

import withConsumer from 'hoc/withConsumer';
import obj from 'modules/example/obj';
import tool from 'modules/example/tool';
import trl from 'modules/translation';

import 'components/Header/Links/Examples/Examples.less';

interface IExamplesProps {
    changeTool: (event: React.SyntheticEvent) => void;
    changeObj: (event: React.SyntheticEvent) => void;
}

const Examples = ({ changeTool, changeObj }: IExamplesProps) => {
    const [isOpen, setOpen] = React.useState(false);
    const toggle = React.useCallback(() => {
        setOpen(!isOpen);
    }, [isOpen]);
    const onClickTool = React.useCallback(() => {
        changeTool(tool);
    }, [changeTool]);
    const onClickObj = React.useCallback(() => {
        changeObj(obj);
    }, [changeObj]);

    return (
        <Dropdown className="examples" isOpen={isOpen} toggle={toggle} nav>
            <DropdownToggle className="examples__toggle" nav caret>
                {trl('Header.Links.Examples.title')}
            </DropdownToggle>
            <DropdownMenu className="bg-dark examples__dropdown">
                <DropdownItem className="examples__dropdown-item" onClick={onClickTool}>
                    {trl('Header.Links.Examples.tool')}
                </DropdownItem>
                <DropdownItem className="examples__dropdown-item" onClick={onClickObj}>
                    {trl('Header.Links.Examples.obj')}
                </DropdownItem>
            </DropdownMenu>
        </Dropdown>
    );
};

export default withConsumer(Examples);

// @flow

import * as React from 'react';
import TypesTab from './tabs/typesTab';
import EntitiesTab from './tabs/entitiesTab';

type Props = {}

type State = {
    tabs: Array<Tab>,
    selected: Tab,
}

type Tab = {
    name: string,
    component: React.ComponentType<{}>
}

class Menu extends React.Component<Props, State> {
    state: State = Menu._initState();

    static _initState() {
        const tabs = [
            {name: 'Types', component: TypesTab},
            {name: 'Entities', component: EntitiesTab},
        ];
        return {
            tabs,
            selected: tabs[0],
        };
    }

    renderSelected() {
        const Selected = this.state.selected.component;

        return <Selected/>;
    }

    render() {
        const {selected} = this.state;

        return (
            <div id="menu">
                <div className="header">
                    {this.state.tabs.map(tab => (
                        <div className={`tab${tab === selected ? ' active' : ''}`} onClick={() => {
                            this.setState({
                                selected: tab
                            });
                        }}>
                            {tab.name}
                        </div>
                    ))}
                </div>
                <div className="content">
                    {this.renderSelected()}
                </div>
            </div>
        );
    }
}

export default Menu;
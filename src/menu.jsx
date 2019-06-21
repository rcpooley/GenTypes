// @flow

import * as React from 'react';
import TypesTab from './tabs/typesTab';
import EntitiesTab from './tabs/entitiesTab';

type Props = {}

type State = {
    tabs: Array<Tab>,
    selected: Tab,
    nodes: Array<React.Node>
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
            nodes: [],
        };
    }

    constructor(props: Props) {
        super(props);

        window._genTypes.renderNode = (node: React.Node) => {
            const {nodes} = this.state;
            nodes.push(node);
            this.setState({nodes});
        };

        window._genTypes.removeNode = (node: React.Node) => {
            const {nodes} = this.state;
            const idx = nodes.indexOf(node);
            if (idx !== -1) {
                nodes.splice(idx, 1);
                this.setState({nodes});
            }
        };
    }


    renderSelected() {
        const Selected = this.state.selected.component;

        return <Selected/>;
    }

    render() {
        const {selected, nodes} = this.state;

        return (
            <div id="menu">
                {nodes.map((node, idx) => <div key={idx}>{node}</div>)}
                <div className="header">
                    {this.state.tabs.map(tab => (
                        <div
                            key={tab.name}
                            className={`tab${tab === selected ? ' active' : ''}`}
                            onClick={() => {
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
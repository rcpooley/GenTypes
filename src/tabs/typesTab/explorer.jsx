// @flow

import React from 'react';

type Props = {
    items: Array<Item>,
}

export type Item = {
    name: string,
    children?: Array<Item>,
    onClick?: () => any,
}

class Explorer extends React.Component<Props> {
    render() {
        const {items} = this.props;

        return (
            <div className="explorer">
                {items.map((item, idx) => (
                    <div key={idx} className="item">
                        <div className="name" onClick={item.onClick}>{item.name}</div>
                        <div style={{
                            marginLeft: '20px'
                        }}>
                            {item.children && <Explorer items={item.children}/>}
                        </div>
                    </div>
                ))}
            </div>
        );
    }
}

export default Explorer;
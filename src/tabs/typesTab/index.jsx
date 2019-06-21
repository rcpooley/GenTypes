// @flow

import React from 'react';
import Explorer from './explorer';
import Modal from '../../modal';
import AddTypesModalContent from './addTypesModalContent';

class TypesTab extends React.Component<{}> {
    render() {
        return (
            <div>
                <Explorer items={[
                    {
                        name: 'Item 1', children: [
                            {
                                name: 'sub 1.1', children: [
                                    {name: 'sub 1.1.1'},
                                    {name: 'sub 1.1.2'}
                                ]
                            },
                            {name: 'sub 1.2'}
                        ]
                    },
                    {name: 'Item 2'}
                ]}/>
                <button onClick={() => {
                    const modal = <Modal
                        onHide={() => {
                            window._genTypes.removeNode(modal);
                        }}
                        content={<AddTypesModalContent/>}
                    />;
                    window._genTypes.renderNode(modal);
                }}>Add Type
                </button>
            </div>
        );
    }
}

export default TypesTab;
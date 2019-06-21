// @flow

import * as React from 'react';

type Props = {
    onHide: () => any,
    content: React.Node
}

class Modal extends React.Component<Props> {
    render() {
        return (
            <div className="modal">
                <div className="cover"
                    onClick={this.props.onHide}
                />
                <div className="content">
                    {this.props.content}
                </div>
            </div>
        );
    }
}

export default Modal;
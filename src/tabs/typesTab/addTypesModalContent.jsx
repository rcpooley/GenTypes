// @flow

import React from 'react';
import TypeInput from '../../typeInput';
import type {FieldType} from "../../types";

type State = {
    type: FieldType
}

class AddTypesModalContent extends React.Component<{}, State> {
    state: State = {
        type: null,
    };

    render() {
        return (
            <div className="addTypesModalContent">
                <div className="name-field">
                    <div>Name:</div>
                    <input type="text"/>
                </div>
                <TypeInput
                    types={window.PRELOADED.types}
                    value={this.state.type}
                    onChange={(type) => {
                        this.setState({type});
                    }}
                />
            </div>
        );
    }
}

export default AddTypesModalContent;
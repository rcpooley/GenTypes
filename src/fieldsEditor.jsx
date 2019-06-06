// @flow
import type {FieldType} from "./types";

import React from 'react';
import FieldInput from './fieldInput';

type Props = {}

type State = {
    fields: Array<FieldType | null>
}

class FieldsEditor extends React.Component<Props, State> {
    constructor(props) {
        super(props);

        this.state = {
            fields: [null]
        };
    }


    render() {
        const fields = this.state.fields;

        return (
            <div>
                {fields.map((field, idx) => (
                    <FieldInput
                        key={idx}
                        types={window.PRELOADED.types}
                        value={field}
                        onChange={value => {
                            fields[idx] = value;
                            this.setState({fields});
                        }}
                    />
                ))}
            </div>
        );
    }
}

export default FieldsEditor;
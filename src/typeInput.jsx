// @flow
import type {FieldType} from './types';

import React from 'react'
import Selector from './selector';

type Props = {
    types: Array<FieldType>,
    value: FieldType | null,
    onChange: (value: FieldType) => any
}

class TypeInput extends React.Component<Props> {
    getType(idx: number): FieldType {
        const type = this.props.types[idx];
        const value = this.props.value;
        if (value !== null && value.name === type.name) {
            return value;
        }
        return {
            ...type,
            data: new Array(type.numArgs).fill(null)
        };
    }

    render() {
        const {types, value, onChange} = this.props;

        const dictKeyTypes = types.filter(type => type.dictKey);

        return (
            <div className="typeInput">
                <div className="d-inline">
                    <Selector
                        prompt="Choose type"
                        value={value ? value.name : null}
                        options={types.map(type => type.name)}
                        onChange={({idx}) => onChange(this.getType(idx))}
                    />
                </div>
                {(value !== null) && (
                    <div className="moreInput">
                        {value.name === 'Union' && (
                            <span>(<div className="d-inline">
                                <Selector
                                    prompt="#"
                                    value={value.numArgs}
                                    options={new Array(8).fill(null).map((_, idx) => (idx + 2).toString())}
                                    onChange={({opt}) => {
                                        value.numArgs = parseInt(opt);
                                        value.data = value.data.slice(0, value.numArgs);
                                        while (value.data.length < value.numArgs) {
                                            value.data.push(null);
                                        }
                                        onChange(value);
                                    }}
                                />
                            </div>)</span>
                        )}
                        {value.numArgs > 0 && (
                            <div className="d-flex">
                                <div className="arrow">&lt;</div>
                                {value.data.map((subType, idx) => [
                                    <div key={idx * 2}>
                                        <TypeInput
                                            types={(idx === 0 && value.name === 'Dict') ? dictKeyTypes : types}
                                            value={subType}
                                            onChange={val => {
                                                value.data[idx] = val;
                                                onChange(value);
                                            }}
                                        />
                                    </div>,
                                    (idx < value.numArgs - 1) && <div key={idx * 2 + 1}>,&nbsp;</div>
                                ])}
                                <div className="arrow">&gt;</div>
                            </div>
                        )}
                    </div>
                )}
            </div>
        );
    }
}

export default TypeInput;

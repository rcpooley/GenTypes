// @flow
import React from 'react';
import Selection from './selection';

type Props = {
    prompt: string,
    value: string,
    options: Array<string>,
    onChange: (resp: {opt: string, idx: number}) => any
}

type State = {
    changing: boolean
}

class Selector extends React.Component<Props, State> {
    constructor(props) {
        super(props);

        this.state = {
            changing: false
        };
    }

    render() {
        const {value, onChange} = this.props;
        const {changing} = this.state;

        return (
            <div className="selector">
                {(value !== null && !changing)
                    ? (
                        <div
                            className="selectedValue"
                            onClick={() => {
                                this.setState({changing: true});
                            }}
                        >{value}</div>
                    )
                    : (
                        <Selection
                            prompt={this.props.prompt}
                            options={this.props.options}
                            onSelect={(e) => {
                                onChange(e);
                                if (this.state.changing) {
                                    this.setState({changing: false});
                                }
                            }}
                            onBlur={() => {
                                if (this.state.changing) {
                                    this.setState({changing: false});
                                }
                            }}
                        />
                    )
                }
            </div>
        );
    }
}

export default Selector;
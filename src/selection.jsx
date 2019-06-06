// @flow
import React from 'react';

type Props = {
    prompt: string,
    options: Array<string>,
    onSelect: (resp: {opt: string, idx: number}) => any,
    onBlur?: () => any
}

class Selection extends React.Component<Props> {
    constructor(props) {
        super(props);

        this.mainDiv = React.createRef();
    }

    componentDidMount() {
        this.mainDiv.current.focus();
    }

    render() {
        return (
            <div
                ref={this.mainDiv}
                className="selection"
                tabIndex={0}
                onBlur={() => {
                    if (this.props.onBlur) {
                        this.props.onBlur();
                    }
                }}
            >
                {this.props.prompt}
                <div>
                    <br/>
                    {this.props.options.map((opt, idx) => (
                        <div
                            className="opt"
                            key={idx}
                            onClick={() => this.props.onSelect({opt, idx})}
                        >{opt}</div>
                    ))}
                </div>
            </div>
        );
    }
}

export default Selection;
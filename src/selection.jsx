// @flow
import * as React from 'react';

type Props = {
    prompt: string,
    options: Array<string>,
    onSelect: (resp: {opt: string, idx: number}) => any,
    onBlur?: () => any
}

type State = {
    mainDiv: React.ElementRef<any>
}

class Selection extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            mainDiv: React.createRef(),
        };
    }

    componentDidMount() {
        this.state.mainDiv.current.focus();
    }

    render() {
        return (
            <div
                ref={this.state.mainDiv}
                className="selection"
                tabIndex={0}
                onBlur={() => {
                    if (this.props.onBlur) {
                        this.props.onBlur();
                    }
                }}
            >
                {this.props.prompt}
                <div className="popup">
                    <br/>
                    <input
                        className="search"
                        type="text"
                        onFocus={() => {
                            console.log('focus');
                        }}
                    />
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

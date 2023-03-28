import React, { createElement } from "react";

const wrapperStyle = {
    color: '#FFF',
    display: 'flex',
    flexDirection: 'row',
    height: '57px',
    justifyContent: 'center',
    alignItems: 'center',
}

const btnStyle = {
    color: '#FFF',
    backgroundColor: '#F65261',
    borderRadius: '0.7vmin',
    width: '4em',
    height: '57px',
    fontSize: '20px',
}

export class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: props.startFrom ?? 0,
        }
    }

    addHandler() {
        this.setState({ count: ++this.state.count });
    }

    subHandler() {
        this.setState({ count: --this.state.count });
    }

    render() {
        return createElement(
            'div',
            { style: wrapperStyle },
            createElement('button', { onClick: this.addHandler.bind(this), style: btnStyle }, '+'),
            createElement('div', {style: { padding: '0 1vmin', fontSize: '45px' }}, this.state.count),
            createElement('button', { onClick: this.subHandler.bind(this), style: btnStyle }, '-'),
        );
    }
}

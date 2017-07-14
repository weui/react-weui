import React, { Component } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

class Accordion extends Component {
    static defaultProps = {
        transitionName: 'slide'
    }

    constructor(props){
        super(props);
        this.state = {
            showContent: false,
            headerOpacity: 1
        };
    }

    handleClick(e){
        this.setState({
            showContent: !this.state.showContent,
            headerOpacity: this.state.showContent ? 1 : 0.4
        });
    }

    render() {
        const { children, header, transitionName } = this.props;
        let content = this.state.showContent ? children : <div></div>;
        return (
            <div>
                <div onClick={this.handleClick.bind(this)}>
                    <div style={{
                        opacity: this.state.headerOpacity,
                        transition: 'opacity .3s'
                    }}>{ header }</div>
                </div>
                <CSSTransition
                  classNames={transitionName}
                  appear={this.state.showContent}
                  in={this.state.showContent}
                  timeout={{ enter: 300, exit: 0, appear: 500}}>
                    {content}
                </CSSTransition>
            </div>
        );
    }
}

export default Accordion;

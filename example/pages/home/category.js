import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

class Category extends Component {

    constructor(props){
        super(props)
        this.state = {
            showContent: false
        }
    }

    onClick(e){
        this.setState({
            showContent: !this.state.showContent
        })
    }


    render() {
        const { children, header } = this.props
        return (
            <div>
                <div onClick={this.onClick.bind(this)}>
                { header }
                </div>
                {
                    this.state.showContent ?
                    <ReactCSSTransitionGroup
                      transitionName="example"
                      transitionEnterTimeout={500}
                      transitionLeaveTimeout={500}
                      transitionAppear={true}
                      transitionAppearTimeout={1500}>
                      <div className="page__category js_categoryInner">
                            { children }
                      </div>
                    </ReactCSSTransitionGroup> : false
                }

            </div>
        )
    }
}

export default Category;
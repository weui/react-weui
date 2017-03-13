import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import LoadMore from '../loadmore';

import './infiniteloader.less';

/**
 *  A Container trigger loading once it reach certain scrolltop
 *
 */
class InfiniteLoader extends Component{

     static propTypes = {
        /**
         * height for the container, use string like '10px', default for '100vh'
         *
         */
        height: PropTypes.string,
        /**
         * element(icon) for default loader when there is no more content
         *
         */
        loaderDefaultIcon: PropTypes.object,
        /**
         * element(icon) for loading loader
         *
         */
        loaderLoadingIcon: PropTypes.object,
        /**
         * percentage of scrollTop to trigger loading
         *
         */
        triggerPercent: PropTypes.number,
        /**
         * callback when it's requesting for more content, pass resolve function and finish function
         *
         */
        onLoadMore: PropTypes.func,
    };

    static defaultProps = {
        height: '100vh',
        triggerPercent: 75,
        loaderLoadingIcon: <LoadMore loading> Loading... </LoadMore>,
        loaderDefaultIcon: <LoadMore showLine> No Data</LoadMore>,
    }

    constructor(props){
        super(props);

        this.state = {
            loading: false,
            finish: false
        };

        this.scrollHandle = this.scrollHandle.bind(this);
        this.resolveLoading = this.resolveLoading.bind(this);
        this.finish = this.finish.bind(this);
    }

    finish(){
        this.setState({
            loading: false,
            finish: true
        });
    }

    resolveLoading(){
        this.setState({
            loading: false,
            finish: false
        });
    }

    scrollHandle(e){
        if (this.state.loading || this.state.finish) return;

        let target = e.target;
        let scrollPercent = Math.floor(( (target.scrollTop + target.clientHeight) / target.scrollHeight) * 100);

        if (scrollPercent > this.props.triggerPercent) {
            this.setState({
                loading: true
            });

            this.props.onLoadMore(this.resolveLoading, this.finish);
        }
    }

    render(){

        const { children, className, height, triggerPercent, loaderLoadingIcon, loaderDefaultIcon, onLoadMore, ...domProps } = this.props;
        const clx = classNames( 'react-weui-infiniteloader', className );

        let containerStyle = {
            height,
        };

        let loaderStyle = {
            display: this.state.loading || this.state.finish ? 'block' : 'none'
        };

        return (
            <div
                className={clx}
                style={containerStyle}
                {...domProps}
            >
                <div
                    className="react-weui-infiniteloader__content"
                    onScroll={this.scrollHandle}
                    ref="container"
                >
                    { children }
                    <div style={loaderStyle}>
                        { this.state.finish ? loaderDefaultIcon : this.state.loading ? loaderLoadingIcon : false }
                    </div>
                </div>
            </div>
        );
    }
}

export default InfiniteLoader;
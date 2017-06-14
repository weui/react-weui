import React, { Component, PropTypes } from 'react';
import classNames from '../../utils/classnames';
import PullToRefresh from '../ptr/index';
import InfiniteLoader from '../infiniteloader/index';
import './page.less';
/**
 * A Component for a standard page
 *
 */
class Page extends Component {
    static propTypes = {
        /**
         * indicate to use ptr
         *
         */
        ptr: PropTypes.bool,
        /**
         * function to call when ptr refresh, pass function resolve to finish loading
         *
         */
        ptrOnRefresh: PropTypes.func,
    };

    static defaultProps = {
        ptr: true,
        ptrOnRefresh: resolve => {
            setTimeout(()=>{
                resolve();
            }, 1000);
        }
    };

    constructor(props){
        super(props);

        this.state = {
            ptrRefreshing: false,
            contentScrolling: false,
        };

        this.handleRefresh = this.handleRefresh.bind(this);
    }

    handleRefresh(resolve){
        this.setState({
            ptrRefreshing: true
        }, ()=>{
            this.props.ptrOnRefresh(()=>{
                this.setState({
                    ptrRefreshing: false
                });
                resolve();
            });
        });
    }

    render(){
        const { children } = this.props;
        return (
            <div className="weui-page">
                <PullToRefresh
                    onRefresh={this.handleRefresh}
                    disable={this.state.contentScrolling}
                >
                    <InfiniteLoader
                        height="100%"
                        disable={this.state.ptrRefreshing}
                        onScroll={ ()=> this.setState({contentScrolling: true}) }
                        onScrollEnd={ ()=> this.setState({contentScrolling: false}) }
                        onLoadMore={ (resolve, finish) => {
                            //mock request
                            setTimeout( ()=> {
                                finish();
                            }, 1000);
                        }}
                    >
                        { children }
                    </InfiniteLoader>
                </PullToRefresh>
            </div>
        );
    }
}

export default Page;
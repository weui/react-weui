import React from 'react';
import classNames from 'classnames';

import TabBody from './tab_body';
import TabBodyItem from './tab_body_item';
import NavBar from './navbar';
import NavBarItem from './navbar_item';
import TabBar from './tabbar';
import TabBarItem from './tabbar_item';
import TabBarIcon from './tabbar_icon';
import TabBarLabel from './tabbar_label';

/**
 *  Weui Tab component, can be auto mount items or mannually display items
 *
 */
export default class Tab extends React.Component {
    static propTypes = {
        /**
         * layout of the tab, auto mount components when set to `navbar` or `tabbar`
         *
         */
        type: React.PropTypes.string,
        /**
         * default select index
         *
         */
        defaultIndex: React.PropTypes.number,
        onChange: React.PropTypes.func
    };

    static defaultProps = {
      type: 'normal',
      defaultIndex: 0
    };

    state={
        index: this.props.defaultIndex
    };

    handleHeaderClick(idx) {
        this.setState({index: idx});
        if(this.props.onChange) this.props.onChange(idx);
    }

    parseNavBar(children) {
        const navHeaders = [];
        const navContents = [];

        React.Children.map(children, child => {
            if(!child) return;
            const {children, type, ...others} = child.props;
            if(child.type === NavBarItem){
              navHeaders.push(child);
              if(children) navContents.push(<TabBodyItem children={children}/>);
            }else if(child.type === TabBodyItem){
              navContents.push(child);
            }
        });

        return {navHeaders, navContents};
    }

    renderNavBar(headers, contents, cls) {
        let _headers = headers.map((item, idx)=>{
            return React.cloneElement(item, {
                key: idx,
                active: this.state.index === idx,
                onClick: this.handleHeaderClick.bind(this, idx, item)
            });
        });

        let _contents = contents.map((item, idx)=>{
            return React.cloneElement(item, {
                key: idx,
                active: this.state.index === idx,
                tabIndex: idx
            });
        });

        return (
            <div className={cls}>
                <NavBar>
                    {_headers}
                </NavBar>
                <TabBody>
                    {_contents}
                </TabBody>
            </div>
        );
    }

    parseTabBar(children) {
        const tabHeaders = [];
        const tabContents = [];

        React.Children.map(children, child => {
            if(!child) return;
            const {children, type, ...others} = child.props;
            if(child.type === TabBarItem){
              tabHeaders.push(child);
              if(children) tabContents.push(<TabBodyItem children={children}/>);
            }else if(child.type === TabBodyItem){
              tabContents.push(child);
            }
        });

        return {tabHeaders, tabContents};
    }

    renderTabBar(headers, contents, cls) {
        let _headers = headers.map((item, idx)=>{
            return React.cloneElement(item, {
                key: idx,
                active: this.state.index === idx,
                onClick: this.handleHeaderClick.bind(this, idx, item)
            });
        });

        let _contents = contents.map((item, idx)=>{
            return React.cloneElement(item, {
                key: idx,
                active: this.state.index === idx,
                tabIndex: idx
            });
        });

        return (
            <div className={cls}>
                <TabBody>
                    {_contents}
                </TabBody>
                <TabBar>
                    {_headers}
                </TabBar>
            </div>
        );
    }

    render() {
        const {children, className, type, ...others} = this.props;
        const divProps = Object.assign({}, others);
        delete divProps.defaultIndex;

        const cls = classNames({
            'weui-tab': true
        }, className);

        switch(type){
            case 'tabbar':
                const {tabHeaders, tabContents} = this.parseTabBar(children);
                return this.renderTabBar(tabHeaders, tabContents, cls);
                break;
            case 'navbar':
                const {navHeaders, navContents} = this.parseNavBar(children);
                return this.renderNavBar(navHeaders, navContents, cls);
                break;
            default:
                return (
                    <div className={cls} {...divProps}>
                        {children}
                    </div>
                );
                break;
        }
    }
}

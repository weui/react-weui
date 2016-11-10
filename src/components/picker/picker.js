import React, { Component, PropTypes } from 'react';
import PickerGroup from './picker_group';
import classNames from 'classnames';

/**
 *  Mobile select ui, currently only support Touch Events
 *
 */
class Picker extends Component {
    static propTypes = {
        /**
         * consists of array of object(max 2) with property `label` and others pass into element
         *
         */
        actions: PropTypes.array,
        /**
         * array objects consists of groups for each scroll group
         *
         */
        groups: PropTypes.array,
        /**
         * default group index thats selected, if not provide, automatic chose the best fiting item when mounted
         *
         */
        defaultSelect: PropTypes.array,
        /**
         * trigger when individual group change, pass property(`item`, `item index in group`, `group index in groups`)
         *
         */
        onGroupChange: PropTypes.func,
        /**
         * on selected change, pass property `selected` for array of slected index to `groups`
         *
         */
        onChange: PropTypes.func
    };

    static defaultProps = {
        actions: [],
        groups: [],
    }

    constructor(props){
        super(props)

        this.state = {
            selected : this.props.defaultSelect ? this.props.defaultSelect : Array(this.props.groups.length).fill(-1)
        }

        this.handleChanges = this.handleChanges.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChanges(){
        if(this.props.onChange) this.props.onChange(this.state.selected, this)
    }

    handleChange(item, i, groupIndex){
        let selected = this.state.selected;

        selected[groupIndex] = i;
        this.setState({ selected },()=>{
            if(this.props.onGroupChange) this.props.onGroupChange(item, i, groupIndex)
            this.handleChanges();
        });
    }

    renderActions(){
        if(this.props.actions.length == 0) return false;

        let elActions = this.props.actions.map( (action, i)=> {
            const { label, ...others } = action;
            return <a {...others} key={i} className="weui-picker__action"> { label }</a>
        })

        return (
            <div className="weui-picker__hd">
                { elActions }
            </div>
        )
    }

    renderGroups(){
        return this.props.groups.map( (group, i) => {
            return <PickerGroup  key={i} {...group} onChange={this.handleChange} groupIndex={i} defaultIndex={this.state.selected[i]} />;
        })
    }

    render(){
        const { className, ...others } = this.props;
        const cls = classNames('weui-picker', className);

        return (
            <div className={cls} {...others} style={{ position: 'relative' }}>
                { this.renderActions() }
                <div className="weui-picker__bd">
                    { this.renderGroups() }
                </div>
            </div>
        )
    }
}

export default Picker;
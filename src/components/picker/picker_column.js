import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from '../../utils/classnames';

class PickerColumn extends Component {
    static propTypes = {
        data: PropTypes.array.isRequired,
        datamap: PropTypes.object,
        className: PropTypes.string,
        height: PropTypes.number,
        itemHeight: PropTypes.number,
        indicatorTop: PropTypes.number,
        indicatorHeight: PropTypes.number,
        onChange: PropTypes.func,
        aniamtion: PropTypes.bool,
        columnIndex: PropTypes.number,
        defaultIndex: PropTypes.number,
    }

    static defaultProps = {
        data: [],
        datamap: {},
        height: 238,
        itemHeight: 25 + 9, //content + padding
        indicatorTop: 102,
        indicatorHeight: 34,
        aniamtion: true,
        columnIndex: -1,
        defaultIndex: -1,
    }

    constructor(props){
        super(props);

        this.state = {
            translate: 0,
            selectedIndex: 0,
            animating: props.aniamtion,
            touching: false,
            ogY: 0,
            ogTranslate: 0,
            touchId: undefined,
            totalHeight: 0,
            datamap: Object.assign({
                text: 'text',
                value: 'value',
                disable: 'disable',
                sub: 'sub',
            }, props.datamap),
        };

        this.handleTouchStart = this.handleTouchStart.bind(this);
        this.handleTouchMove = this.handleTouchMove.bind(this);
        this.handleTouchEnd = this.handleTouchEnd.bind(this);
        this.updateSelected = this.updateSelected.bind(this);
    }

    componentDidMount(){
        this.adjustPosition();
    }

    componentWillReceiveProps(nextProps){
        this.adjustPosition(nextProps);
    }

    adjustPosition(props) {
        const { data, defaultIndex, itemHeight, indicatorTop, indicatorHeight } = props || this.props;
        const totalHeight = data.length * itemHeight;
        let { translate } = this.state;

        translate = indicatorTop - itemHeight * defaultIndex;

        this.setState({
            selectedIndex: defaultIndex,
            ogTranslate: translate,
            totalHeight,
            translate,
        }, () => {if (defaultIndex <= -1) this.updateSelected();});
    }

    adjustSelectedIndex() {
        const { data, itemHeight, indicatorTop, indicatorHeight } = this.props;
        const { translate, datamap } = this.state;
        let selectedIndex = 0;

        for (let i = 0; i < data.length; i++) {
            if (!data[i][datamap.disable] && (itemHeight * i + translate) >= indicatorTop
                && ((i + 1) * itemHeight + translate) <= indicatorTop + indicatorHeight){
                selectedIndex = i;
                break;
            }
        }

        return selectedIndex;
    }

    updateSelected() {
        const { data, onChange, columnIndex } = this.props;
        const selectedIndex = this.adjustSelectedIndex();
        if (onChange) {
            onChange(data[selectedIndex], selectedIndex, columnIndex);
        }
    }

    handleTouchStart(e){
        const { data } = this.props;
        const { touching, translate } = this.state;
        if (touching || data.length <= 1) return;
        this.setState({
            touching: true,
            ogTranslate: translate,
            touchId: e.targetTouches[0].identifier,
            ogY: e.targetTouches[0].pageY - translate,
            animating: false
        });
    }

    handleTouchMove(e){
        const { data } = this.props;
        const { touching, touchId, ogY } = this.state;
        if (!touching || data.length <= 1) return;
        if (e.targetTouches[0].identifier !== touchId) return;

        //prevent move background
        e.preventDefault();

        const pageY = e.targetTouches[0].pageY;
        const diffY = pageY - ogY;

        this.setState({
            translate: diffY
        });
    }

    handleTouchEnd(e){
        const { data, indicatorTop, indicatorHeight, itemHeight } = this.props;
        const { touching, ogTranslate, totalHeight } = this.state;
        let { translate } = this.state;
        if (!touching || data.length <= 1) return;

        if ( Math.abs(translate - ogTranslate) < ( itemHeight * .51 ) ){
            translate = ogTranslate;
        } else if (translate > indicatorTop) {
            //top boundry
            translate = indicatorTop;
        } else if (translate + totalHeight < indicatorTop + indicatorHeight) {
            //bottom
            translate = indicatorTop + indicatorHeight - totalHeight;
        } else {
            //pass single item range but not exceed boundry
            let step = 0, adjust = 0, diff = (translate - ogTranslate) / itemHeight;

            if (Math.abs(diff) < 1){
                step = diff > 0 ? 1 : -1;
            } else {
                adjust = Math.abs((diff % 1) * 100) > 50 ? 1 : 0;
                step = diff > 0 ? Math.floor(diff) + adjust : Math.ceil(diff) - adjust;
            }

            translate = ogTranslate + ( step * itemHeight );
        }

        this.setState({
            touching: false,
            ogY: 0,
            touchId: undefined,
            ogTranslate: 0,
            animating: true,
            translate
        }, ()=>this.updateSelected());
    }

    render() {
        const { data, className, height, itemHeight, indicatorTop, indicatorHeight, onChange, aniamtion, columnIndex, defaultIndex, ...others } = this.props;
        const { datamap, translate, animating } = this.state;

        const styles = {
            'transform': `translate(0, ${translate}px)`,
            'transition': animating ? 'transform .3s' : 'none'
        };

        return (
            <div className={classNames('weui-picker__group', className)}
                { ...others }
                onTouchStart={this.handleTouchStart}
                onTouchMove={this.handleTouchMove}
                onTouchEnd={this.handleTouchEnd}
            >
                <div className="weui-picker__mask"></div>
                <div className="weui-picker__indicator"></div>
                <div className="weui-picker__content"
                    style={styles}
                    ref="content">
                    {
                        data.map( (item, j) => {
                            const itemCls = classNames('weui-picker__item', {
                                'weui-picker__item_disabled': item[datamap.disable]
                            });
                            return <div key={j} value={ item[datamap.value] } className={itemCls}>{ item[datamap.text] }</div>;
                        })
                    }
                </div>
            </div>
        );
    }
}

export default PickerColumn;

/**
 * Created by jf on 15/12/9.
 */

"use strict";

import React from 'react';
import { shallow } from 'enzyme';
import assert from 'assert';
import WeUI from '../src/index';

const {ActionSheet, Mask} = WeUI;

describe('<ActionSheet></ActionSheet>', ()=> {
    const menus = [{
        label: '拍照'
    }, {
        label: '从相册中选取'
    }];
    const actions = [{
        label: '取消'
    }, {
        label: '确定'
    }];
    const wrapper = shallow(
        <ActionSheet menus={menus} actions={actions}/>
    );

    it('should render <ActionSheet></ActionSheet> component', () => {
        assert(wrapper.instance() instanceof ActionSheet);
    });

    it(`<ActionSheet></ActionSheet> should have a hidden <Mask></Mask>`, ()=> {
        const mask = wrapper.find(Mask).shallow();
        assert(mask.instance() instanceof Mask);
        assert(mask.prop('style').display === 'none');
    });

    it(`<ActionSheet></ActionSheet> state.active should be false when created`, ()=> {
        assert(wrapper.state('active') === false);
    });

    it(`<ActionSheet></ActionSheet> should render ${menus.length} menu items `, ()=> {
        const menuItems = wrapper.find('.weui_actionsheet_menu').shallow().find('.weui_actionsheet_cell');
        assert(menuItems.length === menus.length);

        menuItems.map((menuItem, index)=> {
            assert(menuItem.text() === menus[index].label);
        });
    });

    it(`<ActionSheet></ActionSheet> should render ${actions.length} actions`, ()=> {
        const actionItems = wrapper.find('.weui_actionsheet_action').shallow().find('.weui_actionsheet_cell');
        assert(actionItems.length === actions.length);

        actionItems.map((actionItem, index)=> {
            assert(actionItem.text() === actions[index].label);
        });
    });

    it(`<ActionSheet></ActionSheet> should have 'show' & 'hide' method`, ()=> {
        // TODO
    });

    it(`<ActionSheet></ActionSheet> method`, ()=> {
        assert(wrapper.state('active') === false);
    });
});
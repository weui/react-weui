/**
 * Created by n7best
 */

"use strict";

import React from 'react';
import { shallow } from 'enzyme';
import assert from 'assert';
import WeUI from '../src/index';

const {MediaBoxBody} = WeUI;

describe('<MediaBoxBody></MediaBoxBody>', ()=> {
    [undefined, null, '', 'custom_class'].map((clazz)=>{
        ['MediaBox body wording', <img src="http://mmrb.github.io/avatar/jf.jpg" />, <div><h2 className="title">文章标题</h2><p className="desc">文章描述</p></div>].map((child)=>{
            describe(`<MediaBoxBody className=${clazz}>${child}</MediaBoxBody>`, ()=>{
                const wrapper = shallow(
                    <MediaBoxBody className={clazz}>{child}</MediaBoxBody>
                );

                it(`should render <MediaBoxBody></MediaBoxBody> component `, ()=>{
                    assert(wrapper.instance() instanceof MediaBoxBody);
                });

                it(`should have 'weui_media_bd' class name`, ()=>{
                    assert(wrapper.hasClass(`weui_media_bd`));
                });

                it(`should have custom class name ${clazz}`, ()=>{
                    if (clazz) {
                        assert(wrapper.hasClass(`${clazz}`));
                    }
                });

                it(`should have child ${child}`, ()=>{
                    assert(wrapper.contains(child));
                });
            });
        });
    });
});
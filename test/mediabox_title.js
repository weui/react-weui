/**
 * Created by n7best
 */

"use strict";

import React from 'react';
import { shallow } from 'enzyme';
import assert from 'assert';
import WeUI from '../src/index';

const {MediaBoxTitle} = WeUI;

describe('<MediaBoxTitle></MediaBoxTitle>', ()=> {
    [undefined, null, '', 'custom_class'].map((clazz)=>{
        ['MediaBox Title wording', <img src="http://mmrb.github.io/avatar/jf.jpg" />, <div><h2 className="title">文章标题</h2><p className="desc">文章描述</p></div>].map((child)=>{
            describe(`<MediaBoxTitle className=${clazz}>${child}</MediaBoxTitle>`, ()=>{
                const wrapper = shallow(
                    <MediaBoxTitle className={clazz}>{child}</MediaBoxTitle>
                );

                it(`should render <MediaBoxTitle></MediaBoxTitle> component `, ()=>{
                    assert(wrapper.instance() instanceof MediaBoxTitle);
                });

                it(`should have 'weui_media_title' class name`, ()=>{
                    assert(wrapper.hasClass(`weui_media_title`));
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
/**
 * Created by n7best
 */

"use strict";

import React from 'react';
import { shallow } from 'enzyme';
import assert from 'assert';
import WeUI from '../src/index';

const {MediaBoxDescription} = WeUI;

describe('<MediaBoxDescription></MediaBoxDescription>', ()=> {
    [undefined, null, '', 'custom_class'].map((clazz)=>{
        ['MediaBox Description wording', <img src="http://mmrb.github.io/avatar/jf.jpg" />, <div><h2 className="title">文章标题</h2><p className="desc">文章描述</p></div>].map((child)=>{
            describe(`<MediaBoxDescription className=${clazz}>${child}</MediaBoxDescription>`, ()=>{
                const wrapper = shallow(
                    <MediaBoxDescription className={clazz}>{child}</MediaBoxDescription>
                );

                it(`should render <MediaBoxDescription></MediaBoxDescription> component `, ()=>{
                    assert(wrapper.instance() instanceof MediaBoxDescription);
                });

                it(`should have 'weui_media_desc' class name`, ()=>{
                    assert(wrapper.hasClass(`weui_media_desc`));
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
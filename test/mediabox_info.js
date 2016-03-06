/**
 * Created by n7best.
 */

"use strict";

import React from 'react';
import { shallow } from 'enzyme';
import assert from 'assert';
import WeUI from '../src/index';

const {MediaBoxInfo, MediaBoxInfoMeta} = WeUI;
const testdata = [
    {
        label: 'no extra'
    },
    {
        label: 'yes extra',
        extra: true
    }
];

describe('<MediaBoxInfo></MediaBoxInfo>', ()=> {
    [testdata, []].map(data=>{
        [true, false].map(extra=>{
            [undefined, null, '', 'custom_class'].map((clazz)=>{
                ['MediaBox Info wording', <img src="http://mmrb.github.io/avatar/jf.jpg" />, <p>MediaBox Info wording</p>].map((child)=>{
                    describe(`<MediaBoxInfo data=${data} className=${clazz} extra=${extra}>${child}</MediaBoxInfo>`, ()=>{
                        const wrapper = shallow(
                            <MediaBoxInfo data={data} className={clazz} extra={extra}>{child}</MediaBoxInfo>
                        );

                        it(`should render <MediaBoxInfo></MediaBoxInfo> component `, ()=>{
                            assert(wrapper.instance() instanceof MediaBoxInfo);
                        });

                        it(`should have 'weui_media_info' class name`, ()=>{
                            assert(wrapper.hasClass(`weui_media_info`));
                        });

                        it(`should have custom class name ${clazz}`, ()=>{
                            if (clazz) {
                                assert(wrapper.hasClass(`${clazz}`));
                            }
                        });

                        it(`should render testDatas with 2 metas, second one with extra tag`, ()=>{
                            if(data.length > 0){
                                assert(wrapper.find(MediaBoxInfoMeta).first().shallow().hasClass(`weui_media_info_meta`));
                                assert(wrapper.find(MediaBoxInfoMeta).last().shallow().hasClass(`weui_media_info_meta`));
                                assert(wrapper.find(MediaBoxInfoMeta).last().shallow().hasClass(`weui_media_info_meta_extra`));
                            }
                        });

                        it(`should have child ${child}`, ()=>{
                            if(data.length == 0){
                                assert(wrapper.contains(child));
                            }
                        });
                    });
                });
            });
        });
    });
});
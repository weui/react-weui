/**
 * Created by n7best.
 */

"use strict";

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import { shallow } from 'enzyme';
import assert from 'assert';
import WeUI from '../src/index';
var jsdom = require('jsdom');

const {Uploader} = WeUI;
const files = [
    {
        data: 'http://mmrmb.github.io/avatar/bear.jpg',
        onClick: e=>alert('事件测试')
    },
    {
        data: 'http://mmrmb.github.io/avatar/bear.jpg'
    },
    {
        data: 'http://mmrmb.github.io/avatar/bear.jpg'
    },
    {
        data: 'http://mmrmb.github.io/avatar/bear.jpg',
        error: true
    },
    {
        data: 'http://mmrmb.github.io/avatar/bear.jpg',
        status: '50%'
    }
];
const title = '提示';
const enlang = {
    maxError: maxCount => `Max ${maxCount} photos allowed`
};
describe('<Uploader></Uploader>', ()=> {
    [enlang, undefined].map(lang=> {
        [undefined, 5, 30].map(maxCount=> {
            [files, []].map(files=> {
                describe(`<Uploader lang=${lang} title=${title} files=${files} maxCount=${maxCount}></Uploader>`, ()=> {
                    let verifyErrors;
                    const wrapper = shallow(
                        <Uploader lang={lang} title={title} files={files} maxCount={maxCount} onError={msg=>verifyErrors=msg}/>
                    );

                    it('should render <Uploader></Uploader> component', () => {
                        assert(wrapper.instance() instanceof Uploader);
                        assert(wrapper.hasClass('weui_uploader'));
                    });

                    it('should render header with class weui_uploader_hd, weui_cell', () => {
                        assert(wrapper.children().first().hasClass('weui_uploader_hd'));
                        assert(wrapper.children().first().hasClass('weui_cell'));
                    });

                    it('should render body with class weui_uploader_bd', () => {
                        assert(wrapper.children().last().hasClass('weui_uploader_bd'));
                    });

                    let bd = wrapper.children().last().children();

                    it('should render lists container with weui_uploader_files', () => {
                        assert(bd.find('ul').hasClass('weui_uploader_files'));
                    });

                    it('should render input wrapper with weui_uploader_input_wrp', () => {
                        assert(bd.last().hasClass('weui_uploader_input_wrp'));
                    });

                    it('should render input with weui_uploader_input', () => {
                        assert(bd.last().find('input').hasClass('weui_uploader_input'));
                    });

                    it('should render file preview with weui_uploader_file', () => {
                        if(files.length > 0){
                            assert(bd.first().find('ul').children().first().hasClass('weui_uploader_file'));
                        }
                    });

                    it('should render file preview with weui_uploader_status when error is true or status is set', () => {
                        if(files.length > 0){
                            assert(bd.first().find('ul').children().at(3).hasClass('weui_uploader_status'));
                            assert(bd.first().find('ul').children().at(4).hasClass('weui_uploader_status'));
                        }
                    });

                    it('should render div with weui_uploader_status_content when error is true or status is set', () => {
                        if(files.length > 0){
                            assert(bd.first().find('ul').children().at(3).find('div').hasClass('weui_uploader_status_content'));
                            assert(bd.first().find('ul').children().at(4).find('div').hasClass('weui_uploader_status_content'));
                        }
                    });

                    it('should render icon with weui_icon_warn when error is true', () => {
                        if(files.length > 0){
                            assert(bd.first().find('ul').children().at(3).find('div').find('i').hasClass('weui_icon_warn'));
                        }
                    });

                    it('should render status when status is set', () => {
                        if(files.length > 0){
                            assert.equal('50%',bd.first().find('ul').children().at(4).find('div').text());
                        }
                    });

                    it('should render chinese error message', () => {
                        let _maxCount = maxCount ? maxCount : 4;
                        if(files.length > _maxCount && !lang){
                            verifyErrors = '';
                            let expectedmsg = `最多只能上传${_maxCount}张图片`;
                            let input = assert(bd.last().find('input'));
                            let changefiles = { 0: {name:'foo', size: 500001} };
                            bd.last().find('input').simulate('change',{target:{files:changefiles}});
                            assert.equal(expectedmsg,verifyErrors);
                        }
                    });

                    it('should render english error message', () => {
                        let _maxCount = maxCount ? maxCount : 4;
                        if(files.length > _maxCount && lang){
                            verifyErrors = '';
                            let expectedmsg = `Max ${_maxCount} photos allowed`;
                            let input = assert(bd.last().find('input'));
                            let changefiles = { 0: {name:'foo', size: 500001} };
                            bd.last().find('input').simulate('change',{target:{files:changefiles}});
                            assert.equal(expectedmsg,verifyErrors);
                        }
                    });

                    it('should return nothing on event when no file is chose', () => {
                        let beforeHtml = bd.last().html();
                        let input = assert(bd.last().find('input'));
                        let changefiles = [];
                        bd.last().find('input').simulate('change',{target:{files:changefiles}});
                        assert.equal(bd.last().html(),beforeHtml);

                    });
                });
            });
        });
    });
});
describe('<Uploader></Uploader>', ()=> {
    let verifyFiles = {};
    let changefiles = {target:{files:{ 0: {
        name:'foo.jpg',
        size: 500001,
        lastModified: 1452633679000,
        lastModifiedDate: new Date(),
        type: "image/jpeg"
    }}}};
    before(function (done) {
        //setup jsdom
       global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
       global.window = document.defaultView;
       global.navigator = {userAgent: 'node.js'};

       //real handler
       var changeHandle = (_files)=>{
            verifyFiles = _files;
            done();
       };

       //setup uploader
       var uploader = TestUtils.renderIntoDocument(
           <Uploader onChange={changeHandle}/>
       );
       //get node
       var uploaderNode = ReactDOM.findDOMNode(uploader);

       //mock event to trigger async
       var event = document.createEvent("HTMLEvents");
       event.initEvent('onChange', true, true);
       event.eventName = "onChange";

       //mock handler
       uploaderNode.addEventListener("onChange", function(e) {
         //trigger real handler
         uploader.handleChange = uploader.handleChange.bind(uploader);
         uploader.handleChange(changefiles);
       });

       setTimeout(function(){
           uploaderNode.dispatchEvent(event);
       }, 50);
    })

    it('should process files when input a image', () => {
        assert.equal(verifyFiles, changefiles.target.files[0]);
    });
});

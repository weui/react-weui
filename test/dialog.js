import React from 'react';
import { shallow } from 'enzyme';
import assert from 'assert';
import WeUI from '../src/index';
import sinon from 'sinon';

const {Dialog, Mask} = WeUI;
const testStyles = {
    'alert': {
        buttons: [
            {
                label: 'Ok',
                onClick: sinon.spy()
            }
        ]
    },
    'confirm': {
        title: 'Heading',
        buttons: [
            {
                type: 'default',
                cls: 'weui-dialog__btn_default',
                label: 'Cancel',
                onClick: sinon.spy()
            },
            {
                type: 'primary',
                cls: 'weui-dialog__btn_primary',
                label: 'Ok',
                onClick: sinon.spy()
            }
        ]
}}
//for dialog

describe('<Dialog></Dialog>', ()=> {
    [undefined, true, false].map((show)=> {
        ['ios', 'android', null].map(type=>{
            ['alert', 'confirm'].map(buttons=>{
                [true, false].map(autoDectect=>{
                    const title = 'Note';
                    const body = 'Description';

                    describe(`<Dialog title='${title}' buttons='${buttons}' show='${show}' type='${type}' autoDectect='${autoDectect}'></Dialog>`, ()=> {

                        const wrapper = shallow(
                            <Dialog title={title} buttons={testStyles[buttons].buttons} show={show} type={type} autoDectect={autoDectect}>
                                {body}
                            </Dialog>
                        );

                        it('should render div with `weui-dialog`', () => {
                            assert(wrapper.find('div.weui-dialog').length > 0);
                        });

                        it(`should render a non transparent <Mask></Mask>`, ()=> {
                            const mask = wrapper.find(Mask).shallow();
                            assert(mask.hasClass('weui-mask'));
                            assert(!mask.hasClass('weui-mask_transparent'));
                        });

                        it(`should be hidden when 'show' prop is false or undefined`, ()=> {
                            if (show) {
                                assert(wrapper.prop('style').display === 'block');
                            }
                            else {
                                assert(wrapper.prop('style').display === 'none');
                            }
                        });

                        it(`should have title ${title}`, ()=> {
                            const $title = wrapper.find('.weui-dialog__title');
                            assert($title.text() === title);
                        });

                        it(`should have body ${body}`, ()=> {
                            const $body = wrapper.find('.weui-dialog__bd');
                            assert($body.text() === body);
                        });

                        it(`should render ${testStyles[buttons].buttons.length} buttons`, ()=> {
                            const $buttons = wrapper.find('.weui-dialog__btn');
                            assert($buttons.length === testStyles[buttons].buttons.length);

                            $buttons.forEach(($button, index) => {
                                assert($button.text() === testStyles[buttons].buttons[index].label);

                                if(testStyles[buttons].buttons[index].type){
                                    assert($button.hasClass(testStyles[buttons].buttons[index].cls));
                                }

                                $button.simulate('click')
                                assert(testStyles[buttons].buttons[index].onClick.called)
                                testStyles[buttons].buttons[index].onClick.reset()
                            })
                        });

                        //type
                        if(type == 'android'){
                            it('should have render `weui-skin_android` class' ,  ()=> {
                                //console.log(wrapper.debug())
                                assert(wrapper.find('div.weui-dialog').hasClass('weui-skin_android'));
                            })
                        }

                        //test auto detect
                        if(!type && autoDectect ) {
                            wrapper.setState({ isAndroid: true })
                            it(`when no type define, should detect android and have "weui-skin_android" class on main wrapper`, ()=> {
                                assert(wrapper.find('div.weui-dialog').hasClass('weui-skin_android'));
                            });
                        }

                    })
                })
            })
        })
    });
});
import React from 'react';
import { shallow } from 'enzyme';
import assert from 'assert';
import WeUI from '../src/index';


const {Msg, Icon, Button, Footer} = WeUI;

describe('<Msg></Msg>', ()=> {
    const type = 'success';
    const title = '成功';
    const description = '感谢你的反馈';
    const buttons = [{
        type: 'primary',
        label: '确定',
        onClick: ()=>{
            console.log('ok');
        }
    }];
    const TestFooter = () => <Footer />;

    it('should have footer for 0.4.x method', ()=> {
        const $warningWrapper = shallow(
            <Msg extraHref="test" extraText="label" />
        )

        assert($warningWrapper.find(Footer).shallow().hasClass('weui-footer'));
        //assert(spy.calledOnce());
    });

    ['success', 'info', 'waiting', 'warn'].map((type) => {
        describe(`<msg type="${type}"></msg>`, ()=> {
            const wrapper = shallow(
                <Msg type={type} title={title} description={description} buttons={buttons} footer={TestFooter} />
            );

            it('should render <Msg></Msg> component', ()=> {
                assert(wrapper.instance() instanceof Msg);
                assert(wrapper.hasClass('weui-msg'));
            });

            it(`should have <Icon value="${type}"></Icon>`, ()=> {
                const $icon = wrapper.find(Icon).shallow();
                assert($icon.instance() instanceof Icon);
                assert($icon.hasClass(`weui-icon-${type}`));
            });

            it(`should have title ${title}`, ()=> {
                const $title = wrapper.find('.weui-msg__title');
                assert($title.text() === title);
            });

            it(`should have description ${description}`, ()=> {
                const $desc = wrapper.find('.weui-msg__desc');
                assert($desc.text() === description);
            });

            it(`should render ${buttons.length} buttons`, ()=> {
                const $buttons = wrapper.find(Button).shallow();
                assert($buttons.length === buttons.length);
                $buttons.map(($button, index) => {
                    assert($button.text() === buttons[index].label);
                    assert($button.prop('onClick') === buttons[index].onClick);
                    assert($button.hasClass(`weui-btn_${buttons[index].type}`));
                });
            });

            it('should have <Footer>', ()=> {
                const $footer = wrapper.find(Footer).shallow();
                assert($footer.hasClass('weui-footer'));
            });

        });

    });
});

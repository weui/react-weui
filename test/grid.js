import React from 'react';
import { shallow } from 'enzyme';
import assert from 'assert';
import WeUI from '../src/index';

const {Grids, Grid, GridIcon, GridLabel} = WeUI;

const testIcon =
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M13.664 5.789c3.015-.714 7.986.497 10.336 2.568-1.74-4.282-6.446-7.357-11.993-7.357-4.904 0-9.084 3.078-9.863 7.265-.794 4.258 2.152 8.84 8.208 9.923-3.019.714-8.005-.5-10.352-2.581 1.729 4.3 6.445 7.393 12.007 7.393l.308-.003c4.828-.099 8.882-3.169 9.633-7.294.778-4.275-2.194-8.827-8.284-9.914zm1 7.643c-.759.771-2.571.755-4.042-.036-1.475-.792-2.046-2.058-1.286-2.829.759-.771 2.568-.755 4.043.037 1.469.792 2.046 2.057 1.285 2.828z"/></svg>

describe('<Grid></Grid>', ()=> {

    [<testIcon/>, false].map(icon => {
        ['testlabe', null].map(label => {
            describe(`<Grid icon="${icon}" label="${label}"></Grid>`, ()=> {
                const child = <Grid><GridIcon><testIcon/></GridIcon><GridLabel>testLabel</GridLabel></Grid>;
                const customWrapper = shallow(<Grid><GridIcon><testIcon/></GridIcon><GridLabel>testLabel</GridLabel></Grid>);
                const customClassName = 'customClassName1 customClassName2';
                const wrapper = shallow(
                    <Grid icon={icon} label={label} className={customClassName}>{child}</Grid>
                );

                it(`should render <Grid></Grid> component `, ()=> {
                    assert(wrapper.instance() instanceof Grid);
                });

                it(`should have 'weui-grid' class name`, ()=> {
                    assert(wrapper.hasClass(`weui-grid`));
                });

                it(`should have custom class name ${customClassName}`, ()=> {
                    assert(wrapper.hasClass(customClassName));
                });

                it(`should render content with custom block`, ()=> {
                    if(!icon && !label) {
                        assert(customWrapper.html() === shallow(child).html());
                    }
                });
            });
        });
    });
});
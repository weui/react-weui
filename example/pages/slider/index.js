import React from 'react';
import { Slider, CellsTitle, Button, ButtonArea } from '../../../src/index';
import Page from '../../component/page';

class SliderDemo extends React.Component {

    state = {
        controlValue: 50
    };

    render() {
        return (
            <Page className="slider" title="Slider" subTitle="滑块" spacing>
                <CellsTitle>Basic Example</CellsTitle>
                <Slider
                    min={1}
                    max={5}
                    step={1}
                    onChange={ value => console.log(value) }
                />

                <CellsTitle>Disabled Example</CellsTitle>
                <Slider
                    disabled
                    onChange={ value => console.log(value) }
                />

                <CellsTitle>Controlled Example</CellsTitle>

                <Slider
                    max={100}
                    step={2}
                    value={this.state.controlValue}
                    onChange={ value => this.setState({ controlValue: value }) }
                />

                <ButtonArea>
                    <Button
                        size="small"
                        onClick={()=> {
                            if(this.state.controlValue >= 10) this.setState({ controlValue: this.state.controlValue - 10})
                        }}>
                        - 10
                    </Button>
                    <Button
                        style={{marginLeft: '10px'}}
                        size="small"
                        onClick={()=> {
                            if(this.state.controlValue <= 90) this.setState({ controlValue: this.state.controlValue + 10})
                        }}>
                        + 10
                    </Button>
                </ButtonArea>

                <br/>

                <CellsTitle>No snap & No show value</CellsTitle>
                <Slider
                    snapToValue={false}
                    showValue={false}
                />
            </Page>
        );
    }

};

export default SliderDemo
import React from 'react';
import { Button, Popup, Picker} from '../../../src/index';
import Page from '../../component/page';

class PickerDemo extends React.Component {

    state = {
        picker_show: false,
    };

    hide(){
        this.setState({
            picker_show: false,
        })
    }

    render() {
        return (
            <Page className="picker" title="Picker" subTitle="多列选择器" spacing>
                <Button type="default" onClick={e=>this.setState({picker_show: true})}>Default Picker</Button>
                <Popup
                    show={this.state.picker_show}
                    onRequestClose={e=>this.setState({picker_show: false})}
                >
                    <Picker
                        onChange={selected=>console.log(selected)}
                        onGroupChange={(item,i,gi)=>console.log(item,i,gi)}
                        defaultSelect={[4]}
                        actions={[
                            {
                                label: 'Cancel',
                                onClick: e=>this.setState({picker_show: false})
                            },
                            {
                                label: 'Ok',
                                onClick: e=>this.setState({picker_show: false})
                            }
                        ]}
                        groups={[
                            {
                                items: [
                                    {
                                        label: 'Item1'
                                    },
                                    {
                                        label: 'Item2'
                                    },
                                    {
                                        label: 'Item3'
                                    },
                                    {
                                        label: 'Item4'
                                    },
                                    {
                                        label: 'Item5'
                                    }
                                ]
                            }
                        ]}
                    />
                </Popup>

                <br/>

            </Page>
        );
    }
};
export default PickerDemo;
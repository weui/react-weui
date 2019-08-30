import React from 'react';
//import { Popup, Picker, CascadePicker, CityPicker, Form, FormCell, CellBody, CellHeader, Label, Input } from '../../../build/packages';
import { Popup, Picker, GroupPicker, CityPicker, CascadePicker, Form, FormCell, CellBody, CellHeader, Label, Input } from '../../../src';
import Page from '../../component/page';
import cnCity from './cnCity';


class PickerDemo extends React.Component {

    state = {
        picker_show: false,
        picker_value: '',
        picker_data: [
            {
                items: [
                    {
                        label: 'Item1'
                    },
                    {
                        label: 'Item2 (Disabled)',
                        disabled: true
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
        ],



        group_show: false,
        group_value: '',
        group_data: [
            [
                {
                    label: 'A1 (Disabled)',
                    value: 'A1',
                    disable: true
                },
                {
                    label: 'A2',
                    value: 'A2',
                },
                {
                    label: 'A3',
                    value: 'A3',
                },
                {
                    label: 'A4 (Disabled)',
                    value: 'A4',
                    disable: true
                },
                {
                    label: 'A5',
                    value: 'A5',
                },
                {
                    label: 'A6',
                    value: 'A6',
                },
                {
                    label: 'A7',
                    value: 'A7',
                }
            ],
            [
                {
                    label: 'B1',
                    value: 'B1',
                },
                {
                    label: 'B2',
                    value: 'B2',
                },
                {
                    label: 'B3 (Disabled)',
                    value: 'B3',
                    disable: true,
                },
                {
                    label: 'B4',
                    value: 'B4',
                },
            ],
            [
                {
                    label: 'C1',
                    value: 'C1',
                },
                {
                    label: 'C2',
                    value: 'C2',
                },
                {
                    label: 'C3 (Disabled)',
                    value: 'C3',
                    disable: true,
                },
                {
                    label: 'C4',
                    value: 'C4',
                },
            ],
        ],


        city_show: false,
        city_value: '',

        cascade_show: false,
        cascade_value: '',
    };

    hide(){
        this.setState({
            group_show: false,
            city_show: false
        })
    }

    render() {
        return (
            <Page className="picker" title="Picker" subTitle="多列选择器" >
                <Form>
                    <FormCell>
                        <CellHeader>
                            <Label>Direct Picker</Label>
                        </CellHeader>
                        <CellBody>
                            <Input
                                type="text"
                                onClick={e=>{
                                    e.preventDefault()
                                    this.setState({picker_show: true})
                                }}
                                placeholder="Pick a item"
                                value={this.state.picker_value}
                                readOnly={true}
                            />
                        </CellBody>
                    </FormCell>
                </Form>
                <Picker
                    onChange={selected=>{
                        let value = ''
                        selected.forEach( (s, i)=> {
                            value = this.state.picker_data[i]['items'][s].label
                        })
                        this.setState({
                            picker_value: value,
                            picker_show: false
                        })
                    }}
                    groups={this.state.picker_data}
                    show={this.state.picker_show}
                    onCancel={e=>this.setState({picker_show: false})}
                />

                <Form>
                    <FormCell>
                        <CellHeader>
                            <Label>City</Label>
                        </CellHeader>
                        <CellBody>
                            <Input type="text"
                                value={this.state.city_value}
                                onClick={ e=> {
                                    e.preventDefault();
                                    this.setState({city_show: true})
                                }}
                                placeholder="Chose Your City"
                                readOnly={true}
                            />
                        </CellBody>
                    </FormCell>
                </Form>
                <CityPicker
                    data={cnCity}
                    onCancel={e=>this.setState({city_show: false})}
                    onOk={text=>this.setState({city_value: text, city_show: false})}
                    onChange={text=>this.setState({city_value: text, city_show: false})}
                    show={this.state.city_show}
                />

                <Form>
                    <FormCell>
                        <CellHeader>
                            <Label>Group Picker</Label>
                        </CellHeader>
                        <CellBody>
                            <Input
                                type="text"
                                onClick={e=>{
                                    e.preventDefault()
                                    this.setState({group_show: true})
                                }}
                                placeholder="Pick a item"
                                value={this.state.group_value}
                                readOnly={true}
                            />
                        </CellBody>
                    </FormCell>
                </Form>
                <GroupPicker
                    onOk={selected=>{
                        let value = ''
                        selected.forEach( (s, i)=> {
                            value += this.state.group_data[i][s].value
                        })
                        this.setState({
                            group_value: value,
                            group_show: false
                        })
                    }}
                    data={this.state.group_data}
                    datamap={{text: 'label'}}
                    show={this.state.group_show}
                    onCancel={e=>this.setState({group_show: false})}
                />

                <Form>
                    <FormCell>
                        <CellHeader>
                            <Label>Cascade</Label>
                        </CellHeader>
                        <CellBody>
                            <Input type="text"
                                value={this.state.cascade_value}
                                onClick={ e=> {
                                    e.preventDefault();
                                    this.setState({cascade_show: true})
                                }}
                                placeholder="Chose Your cascade value"
                                readOnly={true}
                            />
                        </CellBody>
                    </FormCell>
                </Form>
                <CascadePicker
                    data={cnCity}
                    datamap={{text: 'name', value: 'code', sub: 'sub'}}
                    onCancel={e=>this.setState({cascade_show: false})}
                    onOk={selected => {
                        let value = cnCity;

                        selected.forEach( (s, i)=> {
                            if(i === selected.length - 1) {
                                value = value[s].code
                            } else {
                                value = value[s].sub;
                            }
                        })
                        this.setState({
                            cascade_value: value,
                            cascade_show: false
                        })
                    }}
                    show={this.state.cascade_show}
                />

                <br/>

            </Page>
        );
    }
};
export default PickerDemo;
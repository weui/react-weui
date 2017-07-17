import React from 'react';
import {
    PullToRefresh,
    Cells,
    CellsTitle,
    Cell,
    CellBody,
    CellFooter
} from '../../../build/packages';
import Page from '../../component/page';
import momentLoader from './momentloader.svg';
import './ptr.less';

class PtrDemo extends React.Component {

    constructor(props){
        super(props)

        this.state = {
            items: [1,2,3,4,5,6,7,8,9]
        }
    }

    render(){
        return (
        <Page className="ptr" title="Pull To Refresh" subTitle="下拉刷新" >
            <div style={{
                height: '200px',
                background: '#fff'
            }}>
                <PullToRefresh
                    onRefresh={
                        resolve => {
                            //mock add item after 1s and then resolve
                            setTimeout(()=>{
                                this.setState({
                                    items: this.state.items.concat([this.state.items.length + 1])
                                }, ()=> resolve())
                            }, 1000)
                        }
                    }
                >
                    <CellsTitle>List with link</CellsTitle>
                    <Cells>
                    {
                        this.state.items.map( (item, i) => {
                            return (
                                <Cell href="javascript:;" key={i} access>
                                    <CellBody>
                                        {item}
                                    </CellBody>
                                    <CellFooter/>
                                </Cell>
                            )
                        })
                    }
                    </Cells>

                </PullToRefresh>
            </div>
            <br/>

            <div style={{
                height: '200px',
                background: '#fff'
            }}>
                <PullToRefresh
                    loaderDefaultIcon={
                        (progress) => {
                            let style = {
                                transform: `rotate(-${progress * 5}deg)`
                            }
                            return (
                                <div style={{ flex: 1, padding: '5px' }}>
                                    <img src={momentLoader} width="40px" style={style}/>
                                </div>
                            )
                        }
                    }
                    loaderLoadingIcon={
                        <div style={{
                            flex: 1,
                            padding: '5px',
                        }}>
                            <img src={momentLoader} width="40px" style={{
                                animation: '0.4s spin infinite linear'
                            }}/>
                        </div>
                    }
                    onRefresh={
                        resolve => {
                            //mock add item after 1s and then resolve
                            setTimeout(()=>{
                                this.setState({
                                    items: this.state.items.concat([this.state.items.length + 1])
                                }, ()=> resolve())
                            }, 1000)
                        }
                    }
                >
                    <CellsTitle>Moment Loader Example</CellsTitle>
                    <Cells>
                    {
                        this.state.items.map( (item, i) => {
                            return (
                                <Cell href="javascript:;" key={i} access>
                                    <CellBody>
                                        {item}
                                    </CellBody>
                                    <CellFooter/>
                                </Cell>
                            )
                        })
                    }
                    </Cells>

                </PullToRefresh>
            </div>
        </Page>
        )
    }
}

export default PtrDemo;
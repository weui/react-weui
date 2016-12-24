import React from 'react';
import ReactDOM from 'react-dom';
import {
    InfiniteLoader,
    Cells,
    CellsTitle,
    Cell,
    CellBody,
    CellFooter
} from '../../../src/index';
import Page from '../../component/page';


class InfiniteDemo extends React.Component {

    constructor(props){
        super(props)

        this.state = {
            items: [...Array(20).keys()]
        }
    }

    render(){
        return (
            <InfiniteLoader
                onLoadMore={ (resolve, finish) => {
                    //mock request
                    setTimeout( ()=> {
                        if(this.state.items.length > 22){
                            finish()
                        }else{
                            this.setState({
                                items: this.state.items.concat([this.state.items.length])
                            }, ()=> resolve())
                        }
                    }, 1000)
                }}
            >
            <Page className="infinite" title="Infinite Loader" subTitle="滚动加载" >

                    <CellsTitle>List with 22 Max</CellsTitle>
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

            </Page>
            </InfiniteLoader>
        )
    }
}

export default InfiniteDemo;
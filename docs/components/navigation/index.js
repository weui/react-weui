import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import { Link } from 'react-router'
import { SearchBar, Cells, CellsTitle, Cell, CellHeader, CellBody, CellFooter } from '../../../src';
import './style.css';

class Navigation extends Component {

    constructor(props){
        super(props);
        this.state = {
            searchFilter: ''
        }
    }

    onSearch(text){
        this.setState({
            searchFilter: text
        })
    }

    renderSideBar() {
        return this.props.data.map((doc, i)=>{
            return (
              <Link
                to={`/docs/${i}/articles/0`}
                className="navmenu__item"
                activeClassName="active"
                key={i}
              >
                <FontAwesome name={doc.icon} size="2x" />
                <p>{doc.name}</p>
              </Link>
            )
        })
    }

    renderMenu() {
        if(!this.props.current.id) return false;
        let item = this.props.data[this.props.current.id]
        let menus = item.items;
        //sort
        //menus.sort((a,b)=>a.name.localeCompare(b.name))

        if(item.type == 'menu'){
            return (
                <div>
                    <CellsTitle>{ !this.state.searchFilter ? `${menus.length} Items` : 'Results' }</CellsTitle>
                    <Cells>
                    {
                        menus.map((item, i)=>{
                            if(!this.state.searchFilter || item.name.toLowerCase().indexOf(this.state.searchFilter.toLowerCase()) > -1){
                                return (
                                    <Cell link component={Link} className="weui_cell" activeClassName="active" key={i} to={`/docs/${this.props.current.id}/articles/${i}`}>
                                        <CellHeader>
                                            <img src={item.icon} alt={item.name} className="navMenu--icon" />
                                        </CellHeader>
                                        <CellBody></CellBody>
                                        <CellFooter>{item.name}</CellFooter>
                                    </Cell>
                                )
                            }else{
                                return false
                            }

                        })
                    }
                    </Cells>
                </div>
            )
        }

    }

    render(){
        const { langs, logo } = this.props;
        return (
            <div className="App__nav">
                <nav className="navSidebar background--nav">
                  <div className="navSidebar--logo">
                      <img src={logo} alt="logo"/>
                  </div>
                  <ul className="navmenu">
                    { this.renderSideBar() }
                  </ul>
                </nav>
                <div className="navMenu">
                    <SearchBar
                        lang={langs.searchbar}
                        placeholder={langs.searchbar.placeholder}
                        onChange={this.onSearch.bind(this)}
                    />
                    { this.renderMenu() }
                </div>
            </div>
        )
    }
}
export default Navigation;
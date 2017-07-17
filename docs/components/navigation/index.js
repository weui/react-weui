import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import { NavLink as Link } from 'react-router-dom';
import { SearchBar, Cells, CellsTitle, FormCell, Label, Select, Cell, CellHeader, CellBody, CellFooter, Dialog } from '../../../build/packages';
import './style.css';

class Navigation extends Component {

    constructor(props){
        super(props);
        this.state = {
            searchFilter: '',
            showSetting: false,
            showMenu: true,
        };
    }

    onSearch(text){
        this.setState({
            searchFilter: text
        });
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
                <p>{typeof doc.name === 'object' ? doc.name[this.props.locale] : doc.name }</p>
              </Link>
            );
        });
    }

    renderMenu() {
        if (!this.props.current.id) return false;

        const { langs, locale } = this.props;
        let item = this.props.data[this.props.current.id];

        if (item.type == 'menu'){
            let menus = item.items;
            return (
                <div className="menuItems">
                    <CellsTitle>{ !this.state.searchFilter ? `${menus.length} ${langs.searchbar.items}` : langs.searchbar.result }</CellsTitle>
                    <Cells>
                    {
                        menus.map((item, i)=>{
                            if (!this.state.searchFilter || item.name.toLowerCase().indexOf(this.state.searchFilter.toLowerCase()) > -1){
                                return (
                                    <Cell link component={Link} className="weui_cell" activeClassName="active" key={i} to={`/docs/${this.props.current.id}/articles/${i}`}>
                                        <CellBody></CellBody>
                                        <CellFooter>{ typeof item.name === 'object' ? item.name[locale] : item.name }</CellFooter>
                                    </Cell>
                                );
                            } else {
                                return false;
                            }

                        })
                    }
                    </Cells>
                </div>
            );
        }

    }

    render(){
        const { langs, logo, langsOptions, changeLang, data, current } = this.props;
        let item = data[current.id] ? data[current.id] : data[0];

        return (
            <div className={`App__nav ${ item.type == 'menu' ? 'menu' : 'nomenu'}`} >
                <nav className="navSidebar background--nav">
                  <div className="navSidebar--logo">
                      <img src={logo} alt="logo"/>
                  </div>
                  <ul className="navmenu">
                    { this.renderSideBar() }
                    <div className="navmenu--bottom">
                        <a
                            className="navmenu__item"
                            onClick={ e => this.setState({ showSetting: true }) }
                        >
                            <FontAwesome name="cog" size="2x" />
                            <p>{langs.setting.title}</p>
                        </a>
                    </div>
                  </ul>
                </nav>
                { item.type == 'menu' ? <div className="mobileToggle" onClick={ e=> this.setState({showMenu: !this.state.showMenu}) } ><FontAwesome name="bars" /></div> : false }
                { item.type == 'menu' && this.state.showMenu ?
                <div className="navMenu">
                    <SearchBar
                        lang={langs.searchbar}
                        placeholder={langs.searchbar.placeholder}
                        onChange={this.onSearch.bind(this)}
                    />
                    { this.renderMenu() }
                </div> : false }
                <Dialog
                    type="android"
                    title={langs.setting.title}
                    show={this.state.showSetting}
                    buttons={[{
                        label: 'Ok',
                        onClick: e => this.setState({ showSetting: false })
                    }]}
                    >

                    <Cells>
                        <FormCell select selectPos="after">
                            <CellHeader>
                                <Label>{langs.setting.language}</Label>
                            </CellHeader>
                            <CellBody>
                                <Select
                                    data={ langsOptions.map( op => ({label: op, value: op }) ) }
                                    onChange= { e => changeLang(e.target.value) }
                                    defaultValue={ this.props.locale }
                                />
                            </CellBody>
                        </FormCell>
                    </Cells>

                </Dialog>
            </div>
        );
    }
}
export default Navigation;

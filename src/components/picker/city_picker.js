import React from 'react';
import Picker from './picker';

class CityPicker extends React.Component {

    static defaultProps = {
        inline: false,
        data: [],
        dataMap: {
            id: 'name',
            items: 'sub'
        },
        selected: [],
        lang: {
            leftBtn: 'Cancel',
            rightBtn: 'Ok'
        }
    }

    constructor(props){
        super(props)
        const { data, selected, dataMap } = this.props;
        const { groups, newselected } = this.parseData(data, dataMap.items, selected);
        this.state = {
            groups,
            selected: newselected,
            picker_show: false,
            text: ''
        }
        //console.log(this.state.groups)
        this.updateGroup = this.updateGroup.bind(this);
        this.parseData = this.parseData.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    //@return array of group with options
    parseData(data, subKey, selected = [], group = [], newselected= []){
      let _selected = 0;

      if( Array.isArray(selected) && selected.length > 0){
        let _selectedClone = selected.slice(0)
        _selected = _selectedClone.shift()
        selected = _selectedClone
      }

      if(typeof data[_selected] == 'undefined'){
          _selected = 0;
      }
      //auto set middle
        //   else if(selected.length == 0){
        //       _selected = Math.floor(data.length / 2)
        //   }

      newselected.push(_selected)

      let item = data[_selected];

      var _group = JSON.parse(JSON.stringify(data));
      _group.forEach(g=>delete g[subKey])
      group.push({ items: _group, mapKeys: { 'label': this.props.dataMap.id } })

      if(typeof item[subKey] !== 'undefined' && Array.isArray(item[subKey])){
        return this.parseData(item[subKey], subKey, selected, group, newselected)
      }else{
        return { groups: group, newselected };
      }
    }


    updateGroup(selected, picker){
        const { data, dataMap, inline, onChange } = this.props;
        //validate if item exists

        const { groups, newselected } = this.parseData(data, dataMap.items, selected);

        let text = ''
        try{
            groups.forEach( (group, i) => {
                text += `${group['items'][selected[i]][this.props.dataMap.id]} `
            })
        }catch(err){
            //wait
            text = this.state.text
        }


        //console.log(groups)
        this.setState({
            groups,
            text,
            selected: newselected
        })

        //update picker
        picker.setState({
            selected: newselected
        })

        if(inline && onChange) onChange(this.state.text)

    }

    handleChange(){
        if(this.props.onChange) this.props.onChange(this.state.text);
    }

    render(){
        return (
            <Picker
                onChange={this.updateGroup}
                defaultSelect={this.state.selected}
                actions={ !this.props.inline ? [
                    {
                        label: this.props.lang.leftBtn,
                        onClick: e=>{ if(this.props.onCancel) this.props.onCancel(this.state.text) }
                    },
                    {
                        label: this.props.lang.rightBtn,
                        onClick: this.handleChange
                    }
                ] : [] }
                groups={this.state.groups}
            />
        )
    }

}

export default CityPicker;
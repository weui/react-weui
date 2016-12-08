
Guide
-------------

####  Visibility
To use `ActionSheet`, you want to first setup a state variable to toggle it's visibility for `show` property and a callback function `onRequestClose` property when users wants to  hide the `ActionSheet`.

```javascript
//inside your component state
state = {
	show: false
}

//button to toggle the ActionSheet
<Button
    onClick={ e => this.setState({ show: true }) }
/>

//inside the render function
<ActionSheet
	show={ this.state.show }
	onRequestClose={
	    //function to hide ActionSheet
		e => this.setState({ show: false })
	}
/>
```

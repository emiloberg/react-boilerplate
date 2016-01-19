import React from 'react';

import Input from 'react-toolbox/lib/input';

class mdInput extends React.Component {

	constructor(props) {
		super(props);
		this.state = { inputValue: '' };
	}

	onEnterPress() {
		if (this.props.onEnterPress) {
			this.props.onEnterPress(this.state.inputValue);
			if (this.props.clearAfterEnter) {
				this.setState({ inputValue: '' });
			}
			if (this.props.blurAfterEnter) {
				this.textInput.blur();
			}
		}
	}

	keyPress(e) {
		if (e.key === 'Enter') {
			this.onEnterPress();
		}
	}

	handleChange(name, value) {
		this.setState({ ...this.state, [name]: value });
	}

	render() {
		return (
			<Input
				{...this.props}
				ref={(ref) => this.textInput = ref}
				value={this.state.inputValue}
				onChange={this.handleChange.bind(this, 'inputValue')}
				onKeyPress={this.keyPress.bind(this)}
			/>
		);
	}
}
mdInput.propTypes = {
	onEnterPress: React.PropTypes.func,
	clearAfterEnter: React.PropTypes.bool,
	blurAfterEnter: React.PropTypes.bool
};
mdInput.defaultProps = {
	clearAfterEnter: true,
	blurAfterEnter: true
};

export default mdInput;

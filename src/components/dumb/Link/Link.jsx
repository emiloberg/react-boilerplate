import React from 'react';

class Link extends React.Component {
	render() {
		const { active, children, onClick } = this.props;
		if (active) {
			return (<span>{children}</span>);
		}
		return (
			<a href="#" onClick={(e) => {
			e.preventDefault();
			onClick();
		}}>
				{children}
			</a>
		);
	}
}

Link.propTypes = {
	active: React.PropTypes.bool,
	children: React.PropTypes.string,
	onClick: React.PropTypes.func
};

export default Link;
/**
 * External dependencies.
 */
import { Component, Fragment } from '@wordpress/element';

class SwitchField extends Component {
	/**
	 * Handles the change of the input.
	 *
	 * @param  {Object} e
	 * @return {void}
	 */
	handleChange = (e) => {
		const { id, onChange } = this.props;

		onChange(id, e.target.checked);
	};

	/**
	 * Renders the component.
	 *
	 * @return {Object}
	 */
	render() {
		const { id, name, value, field } = this.props;

		return (
			<Fragment>
				<div class="cf-switch-wrapper ui-toggle">
					<div className="cf-field__label">{field.option_label}</div>
					<input
						type="checkbox"
						id={id}
						name={name}
						checked={value}
						value={value ? field.option_value : ''}
						className="cf-switch__input"
						onChange={this.handleChange}
						{...field.attributes}
					/>
					<label className="cf-checkbox__label custom-field-switch" htmlFor={id}>
						<div />
					</label>
				</div>
			</Fragment>
		);
	}
}

export default SwitchField;

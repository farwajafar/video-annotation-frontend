import React, { Component } from "react";

class DropDown extends Component {
	render() {
		const {
			name,
			label,
			placeHolder,
			handleChange,
			divClassName,
			isRequired,
			isDisabled,
			DropDownLists,
			selected,
		} = this.props;

		// console.log("Selected: => ", selected);
		// const dropDownLabels = []
		const dropDownLabels = DropDownLists.map((DropDownList) => (
			
			<option
				key={DropDownList.id}
				value={DropDownList.id}
				selected={selected === DropDownList.id}>
				{DropDownList.label}
			</option>
		));

		return (
			<>
				{/* <div className="form-group col-md-3">  */}
				<div className={divClassName}>
					<label>{label}</label>
					{isRequired && <span className="text-danger">*</span>}
					<div className="input-group">
						<select
							name={name}
							onChange={handleChange}
							className="custom-select"
							id="inputGroupSelectTitle"
							required={isRequired}
							disabled={isDisabled}>
							<option>{placeHolder}</option>
							{dropDownLabels}
						</select>
					</div>
				</div>
			</>
		);
	}
}

DropDown.defaultProps = {
	isRequired: false,
	divClassName: "form-group col-md-3",
	isDisabled: false,
};

export default DropDown;

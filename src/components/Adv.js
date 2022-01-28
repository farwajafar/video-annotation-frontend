import React, { Component } from 'react'
import Api from '../Api';
// import DropDown from './shared/DropDown';
// import axios from 'axios'
class Adv extends Component {
	constructor(props) {
		super(props)

		this.state = {
            name: '',
            category: '',
            subCategory: '',
            caption:'',
		}
       
	}
	componentDidMount=()=>{
		Api.getCategories()
			.then((response) => {
				console.log("getCategories", response.data);
				this.setState({ category: response.data });
				console.log("Titles ", this.category);
			})
			.catch((error) => {
				console.log(error);
			});
	}
	handleChange = e => {
		this.setState({ [e.target.name]: e.target.value })
	}

	submitHandler = e => {
		e.preventDefault()
		console.log(this.state)
	
	}

	render() {
		const { category,subCategory, caption,name } = this.state
		return (
			<div>
				<form onSubmit={this.submitHandler}>
                <div>
                   Brand Name <input
							type="text"
							name="name"
							value={name}
							onChange={this.handleChange}
						/>
					</div>
					<div>
                    Category <input
							type="text"
							name="category"
							value={category}
							onChange={this.changeHandler}
						/>
					</div>
					  {/* <DropDown
								name="category"
								label="Category"
								placeHolder="Name of Category"
                // divClassName="form-group col-md-4"
                // defaultValue={this.props.parentState.program}
                value={this.state.category}
                selected={this.state.category}
								handleChange={this.state.handleChange}
								isRequired={true}
								DropDownLists={this.props.parentState.schoolList}
							/> */}
					<div>
					SubCategory	<input
							type="text"
							name="subCategory"
							value={subCategory}
							onChange={this.handleChange}
						/>
					</div>
                    <div>
						Captions<input
							type="text"
							name="caption"
							value={caption}
							onChange={this.handleChange}
						/>
					</div>
                   
					<button type="submit">Submit</button>
				</form>
			</div>
		)
	}
}

export default Adv
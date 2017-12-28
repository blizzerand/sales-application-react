import React from 'react';


const CreateOrderForm = (props) => {
	
	const textAreaStyle = {
		overflow: 'hidden'
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		props.onSubmit();
	}

	const handleChange = (e) => {
		const inputName = e.target.name;
		const inputValue = e.target.value;
	
		props.onChange(inputName,inputValue);
	}


	return(
		<div className="col-md-8 offset-md-2">
		  	<br/>
		  	
		  	<h2 className="col-md-6 offset-md-3"> Create an Order </h2>
		  	<br/>
		  	<form onSubmit  = {handleSubmit} onChange= {handleChange} >
			 	 <div className="form-group row">
			 		
				 	<div className="input-group input-group-lg col-10">
				 		<span className="input-group-addon" id="sizing-addon1">Order #</span>
				   		<input className="form-control" name="id" type="number" id="example-number-input" />
				  	
					</div>
				 
				</div>
				<div className="form-group row">
				    <div className="input-group input-group-lg col-10">
				 		<span className="input-group-addon" id="sizing-addon1">Name</span>
				   		<input className="form-control" name="name" type="text" id="example-text-input" />
				    </div>
				</div>

				<div className="form-group row">
				 	<div className="input-group input-group-lg col-10">
				 		<span className="input-group-addon" id="sizing-addon1">Email</span>
				   		<input className="form-control" name="email" type="email" id="example-email-input" />
				    </div>
				</div>

				<div className="form-group row">
				   	<div className="input-group input-group-lg col-10">
				 		<span className="input-group-addon" id="sizing-addon1">@</span>
				    	<textarea className="form-control" name="address" cols="50" rows="3" style= {textAreaStyle} type="address" id="example-address"/>
				  	</div>
				</div>

				<div className="form-group row">
				 	<div className="input-group input-group-lg col-10">
				 		<span className="input-group-addon" id="sizing-addon1">Phone</span>
				    	<input className="form-control" name="phone" type="tel" id="example-tel-input" />
				    </div>
				</div>

				<div className="form-group row">
				    <div className="input-group input-group-lg col-10">
				 		<span className="input-group-addon" id="sizing-addon1">Units</span>
				    	<input className="form-control"name="units" type="number" id="example-number-input" />
				    </div>
				</div>

				 <div className="form-group row">
   					 <div className="offset-md-4">
						<button type="submit"  className="btn btn-primary btn-lg"> Submit </button>
						
					</div>
				</div>

			</form>	
		</div>

		)
}

export default CreateOrderForm;
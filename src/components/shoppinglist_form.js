import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';

class ShoppingListForm extends Component {

    renderField(field) {

        // Destructure field and meta for cleaner code 
        const { meta: { touched, error } } = field;
        // Check if validation errors exist and set class
        const className = `form-group ${touched && error ? 'has-danger' : ''}`;
        return (
            <div className={className}>
                <label>{field.label}</label>
                <input className="form-control" type={field.type} {...field.input} />
                <div className="text-help">
                    {touched ? error : ''}
                </div>
            </div>
        );
    }

    render() {
        const { handleSubmit, onSubmit } = this.props;
        return (
            <form onSubmit={handleSubmit(onSubmit)}>
                <Field
                    name="name"
                    label="Name"
                    type="text"
                    component={this.renderField} />
                <Field
                    name="description"
                    label="Description"
                    type="text"
                    component={this.renderField} />
                <button type="submit" className="btn btn-primary">Submit</button>
                <Link to="/shoppinglists" className="btn btn-danger">Cancel</Link>
            </form>
        );
    }
}

function validate(values) {
    const errors = {};
    if (!values.name || values.name.length < 3) {
        errors.name = "Enter title that is more than three characters !";
    }

    return errors;
}

export default reduxForm({
    validate,
    form: 'ShoppingListForm'
})(ShoppingListForm);
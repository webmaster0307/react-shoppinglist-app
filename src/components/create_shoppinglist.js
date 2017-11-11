import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
class CreateShoppingList extends Component {
    renderField(field) {
        //Destructure field and meta for cleaner code 
        const { meta: { touched, error } } = field;
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

    onSubmit(values) {
        console.log('Form has been submited:', values);
    }

    render() {
        const { handleSubmit } = this.props;
        return (
            <div>
                Create New shopping List
                <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
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
                </form>
            </div>
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
    form: 'CreateShoppingListForm'
})(CreateShoppingList);
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { removeCategory, updateCategory } from '../store/category'; 
import CategoryForm from './CategoryForm';


class CategoryItem extends Component {

  state = {
    editing: false
  }

  onDelete = () => {
    this.props.removeCategory(this.props.category);
  }

  onEdit = () => {
    this.setState({ editing: true })
  }

  onUpdate = (category) => {
    this.props.updateCategory(category);
    this.setState({editing: false});
  }

  render() {
    return (
      <li onClick={this.onEdit}>
        <p>
          {this.props.category.name}
        </p>
        <p>
        ${this.props.category.budget}
        </p>
        <p>
          {new Date(this.props.category.timestamp).toLocaleDateString()}
        </p>
        <p>
          <button onClick={this.onDelete}>x</button>
        </p>

        {this.state.editing && <CategoryForm onComplete={this.onUpdate} buttonText="Edit" category={this.props.category} />}
      </li>
    );
  }
}



const mapDispatchToProps = (dispatch) => ({
  removeCategory: category => dispatch(removeCategory(category)),
  updateCategory: category => dispatch(updateCategory(category)),
});

CategoryItem.propTypes = {
  removeCategory: PropTypes.func,
  updateCategory: PropTypes.func,
  category: PropTypes.object,
}

export default connect(null, mapDispatchToProps)(CategoryItem);



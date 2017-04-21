import React from 'react'
import { connect } from 'react-redux'
import { getProducts } from '../../redux/actionCreators'
import Header from '../../components/Header'


class Product extends React.Component {
  static propTypes = {
    products: React.PropTypes.array,
    buttonHandler: React.PropTypes.func
  }

  static defaultProps = {
    products: []
  }

  componentWillMount() {
    if(this.props.products.length === 0) {
      this.props.getProducts()
    }
  }

  render() {
    return (
    <div>
      <Header />
      <h1>Product List</h1>
      {this.props.products.map((product) => <p key={product._links.self.href}>{product.name}</p>)}
    </div>
    )
  }

}

const mapStateToProps = (state) => ({
  products: state.Product.products
})

const mapDispatchToProps = (dispatch) => ({
  getProducts: () => dispatch(getProducts())
})

export default connect(mapStateToProps, mapDispatchToProps)(Product);
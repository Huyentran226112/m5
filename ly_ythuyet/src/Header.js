import PropTypes from "prop-types";

// class Header extends React.Component {
//   render() {
//     return (
//       <>
//         <h1>Header {this.props.name} - {this.props.phone}</h1>
//       </>
//     )
//   }
// }


function Header( props ){
    return (
      <>
        <h1>Header {props.name} - {props.phone}</h1>
        <ul>
        {
          props.products.map( (product) => (
            <li>{ product.name } - { product.price }</li>
          )  )
        }
        </ul>
      </>
    )
}
// Props mac dinh
Header.defaultProps = {
  name: 'CodeGym'
}

// Xac thuc Props
Header.propTypes = {
  name: PropTypes.string,
  phone: PropTypes.number,
  products: PropTypes.object
};

export default Header;
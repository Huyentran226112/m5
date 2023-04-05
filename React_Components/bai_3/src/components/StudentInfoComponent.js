// import React, { Component } from 'react';
// class StudentInfoComponent extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       students: [
//         { id: 1, name: 'nho', age: 20, address: 'chuồng trâu' },
//         { id: 2, name: 'ngoc', age: 21, address: 'chuồng bò' },
//         { id: 3, name: 'phong', age: 22, address: 'chuồng gà' }
//       ]
//     };
//   }

//   render() {
//     const { students } = this.state;

//     return (
//       <div>
//         <h1>Student List</h1>
//         <table border={1}>
//           <thead>
//             <tr>
//               <th>ID</th>
//               <th>Name</th>
//               <th>Age</th>
//               <th>Address</th>
//             </tr>
//           </thead>
//           <tbody>
//             {students.map(student => (
//               <tr key={student.id}>
//                 <td>{student.id}</td>
//                 <td>{student.name}</td>
//                 <td>{student.age}</td>
//                 <td>{student.address}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     );
//   }
// }

// export default StudentInfoComponent;
// cách 2
import React from 'react';

class StudentInfoComponent extends React.Component {
  render() {
    const { products } = this.props; // Lấy giá trị của props

    return (
      <table border={1}>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Age</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {products.map(student => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.age}</td>
              <td>{student.address}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default StudentInfoComponent;


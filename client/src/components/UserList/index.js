// import React, { useState } from 'react';
// import Calendly from '../Calendly';
// import { useQuery, useMutation } from '@apollo/client';
// import { QUERY_ME } from '../../utils/queries';
// import { ADD_USER } from '../../utils/mutations';
// import auth from '../../utils/auth';

// const UserList = () => {
//   const { loading, error, data } = useQuery(QUERY_ME);
//   // const loggedIn = Auth.loggedIn();
//   const [formState, setFormState] = useState({
//     userName: '',
//     userEmail: '',
//     userPassword: '',
//   });
// //   const [addUser, { e }] = useMutation(ADD_USER);

//   const handleChange = (event) => {
//     const { name, value } = event.target;

//     setFormState({
//       ...formState,
//       [name]: value,
//     });
//   };

// //   const handleFormSubmit = async (event) => {
// //     event.preventDefault();

// //     try {
// //       const { data } = await addHaircut({
// //         variables: { ...formState },
// //       });
// //     } catch (e) {
// //       console.log(e);
// //     }

// //     setFormState({
// //       userName: '',
// //       userEmail: '',
// //       userPassword: ''
// //     });

// //     window.location.reload();
// //   };

//   if (loading) {
//     return <div>Loading...</div>;
//   } else if (error) {
//     console.log(error);
//     return <div>Error!</div>;
//   } else {
//     const user = data.me;

//     return (
//       <div className="profile-wrapper">
//         <div className="profile-page">
//           <div className="sidebar">
//             <div className="profile-pic">
//               {/* {loggedIn && ( */}
//               <img
//                 className="img-fluid"
//                 src={require('../assets/images/profile-user.png').default}
//                 alt="User"
//               />
//               {/* )} */}
//             </div>
//             <div>{user.name}</div>
//             <div>{user.email}</div>
//           </div>
//           <form onSubmit={handleFormSubmit} className="enter-haircut">
//             <label htmlFor="userName">Enter New User:</label>
//             <textarea
//               className="profile-input"
//               type="text"
//               id="userName"
//               name="userName"
//               value={formState.userName}
//               onChange={handleChange}
//             ></textarea>
//             <br></br>
//             <label htmlFor="userEmail">Enter User's Email:</label>
//             <textarea
//               className="profile-input-int"
//               type="text"
//               id="userEmail"
//               name="userEmail"
//               value={formState.userEmail}
//               onChange={handleChange}
//             ></textarea>
//             <br></br>
//             <label htmlFor="userPassword">Enter User's Password:</label>
//             <textarea
//               className="profile-input-int"
//               type="text"
//               id="userPassword"
//               name="userPassword"
//               value={formState.userPassword}
//               onChange={handleChange}
//             ></textarea>
//             <button type="submit" className="save-btn">
//               Save User
//             </button>
//           </form>
//         </div>
//         <div className="profile-body">
//           {haircuts ? (
//             haircuts.map((haircut) => (
//               <div key={haircut._id} className="card">
//                 <div className="container">
//                   <h4>
//                     <b>Haircut: {haircut.haircutText}</b>
//                   </h4>
//                   <p>Special Instructions: {haircut.instructions}</p>
//                   <button type="button" className="delete-btn">
//                     Delete Haircut
//                   </button>
//                 </div>
//               </div>
//             ))
//           ) : (
//             <div className="card">
//               <div className="container">
//                 <h4>
//                   <b>No Haircuts Yet</b>
//                 </h4>
//                 <p>No Special Instructions</p>
//               </div>
//             </div>
//           )}
//         </div>
//         <Calendly />
//       </div>
//     );
//   }
// };

// export default UserList;

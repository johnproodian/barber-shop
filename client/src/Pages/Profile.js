import React, { useState } from 'react';
import Calendly from '../components/Calendly';
import { useQuery, useMutation } from '@apollo/client';
import { QUERY_ME } from '../utils/queries';
import { ADD_HAIRCUT, DELETE_HAIRCUT } from '../utils/mutations';
console.log(QUERY_ME)

const Profile = () => {
  const { loading, error, data } = useQuery(QUERY_ME);
  // const loggedIn = Auth.loggedIn();
  const [formState, setFormState] = useState({
    haircutText: '',
    instructions: '',
  });

  const [addHaircut, { e }] = useMutation(ADD_HAIRCUT);
  const [deleteHaircut, { err }] = useMutation(DELETE_HAIRCUT);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // let tester = {};
    // tester = {variables: { ...formState }};
    // console.log(tester);
    // console.log(tester.variables);


    try {
      const { data } = await addHaircut({
        variables: { ...formState },
      });
    } catch (e) {
      console.log(e);
    }

    setFormState({
      haircutText: '',
      instructions: '',
    });

    window.location.reload();
  };

  const handleDelete = (event) => {
    const haircutId = event.target.getAttribute("id");    

    try {
      const { data } = deleteHaircut({
        variables: { _id: haircutId }
      });
      
    } catch (err) {
      console.log(err);
    }

    window.location.reload();
  }

  if (loading) {
    return <div>Loading...</div>;
  } else if (error) {
    console.log(error);
    return <div>Error!</div>;
  } else {
    const user = data.me;
    const haircuts = user.haircuts;

    return (
      <div className="profile-wrapper">
        <div className="profile-page">
          <div className="sidebar">
            <div className="profile-pic">
              {/* {loggedIn && ( */}
              <img
                className="img-fluid"
                src={require('../assets/images/profile-user.png').default}
                alt="User"
              />
              {/* )} */}
            </div>
            <div>{user.name}</div>
            <div>{user.email}</div>
          </div>
          <form onSubmit={handleFormSubmit} className="enter-haircut">
            <label htmlFor="haircutText">Enter New Haircut:</label>
            <textarea
              className="profile-input"
              type="text"
              id="haircutText"
              name="haircutText"
              value={formState.haircutText}
              onChange={handleChange}
            ></textarea>
            <br></br>
            <label htmlFor="instructions">Enter special instructions:</label>
            <textarea
              className="profile-input-int"
              type="text"
              id="instructions"
              name="instructions"
              value={formState.instructions}
              onChange={handleChange}
            ></textarea>
            <button type="submit" className="save-btn">
              Save Haircut
            </button>
          </form>
        </div>
        <div className="profile-body">
          {haircuts ? (
            haircuts.map((haircut) => (
              <div key={haircut._id} className="card">
                <div className="container" key={haircut._id}>
                  <h4 className="haircut-text">
                    <b>Haircut:</b> {haircut.haircutText}
                  </h4>
                  <p className="hair-instructions haircut-text"> <b>Special Instructions:</b> {haircut.instructions}</p>
                  <button type="button" className="delete-btn" id={haircut._id} onClick={handleDelete}>
                    Delete Haircut
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="card">
              <div className="container">
                <h4>
                  <b>No Haircuts Yet</b>
                </h4>
                <p>No Special Instructions</p>
              </div>
            </div>
          )}
        </div>
        <Calendly />
      </div>
    );
  }
};

export default Profile;

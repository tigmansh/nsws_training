// import module.css here;
// import styles from "./userDetails.module.css";

const UserDetails = ({ avatar,first_name,last_name,address,karma,followers,is_following,posts }) => {
  return (
    <>
     
       
          <div data-testid="user-container">
            <img src={avatar} alt={first_name} />
            <div>
              <div>
                <h3 data-testid="user-fname">{first_name}</h3>
                <h3 data-testid="user-lname">{last_name}</h3>
              </div>
              <div>
                <p data-testid="user-address">{address}</p>
              </div>
            </div>
            <div>
              <h3 data-testid="user-karma">{karma}</h3>
            </div>
            <div>
              <h3 data-testid="user-followers">{followers}</h3>
            </div>
            <div>
              <h3 data-testid="user-posts">{posts}</h3>
            </div>
            <button data-testid="follow-btn">
              {is_following ? "Unfollow" : "Follow"}
            </button>
          </div>
    </>
  );
};
export default UserDetails;

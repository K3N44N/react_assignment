import { useSelector } from "react-redux";
import "./profile.css";

const Profile = () => {
  const profile = useSelector((x) => x.profile);
  const profileData = profile.profileData;

  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marign: "20px",
        }}
      >
        <h1>Profile</h1>
      </div>
      <div
        style={{ border: "gray solid 1px", margin: "50px", padding: "20px" }}
      >
        <table>
          <tbody>
            <tr>
              <td>
                <strong>First Name:</strong>
              </td>
              <td>{profile.firstName}</td>
            </tr>
            <tr>
              <td>
                <strong>Last Name:</strong>
              </td>
              <td>{profile.lastName}</td>
            </tr>
            <tr>
              <td>
                <strong>Username:</strong>
              </td>
              <td>{profile.username}</td>
            </tr>
            <tr>
              <td>
                <strong>Email:</strong>
              </td>
              <td>{profile.email}</td>
            </tr>
            <tr>
              <td>
                <strong>Phone Number:</strong>
              </td>
              <td>{profile.phoneNumber}</td>
            </tr>
            <tr>
              <td>
                <strong>Password:</strong>
              </td>
              <td>{profile.password}</td>
            </tr>
            <tr>
              <td>
                <strong>ID:</strong>
              </td>
              <td>{profile.id}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Profile;

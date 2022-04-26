export default function Profile(props) {
    
    return <div className="w3-container">
    <div className="w3-card-4 w3-section w3-content">
      <header className="w3-container w3-green">
        <h2>Your profile</h2>
      </header>

      <div className="w3-container">
        <p>Id:</p>
        <h3 id="id">5</h3>
        <hr />
        <p>Name:</p>
        <h3 id="name">Jméno</h3>
        <hr />
        <p>Email:</p>
        <h3 id="email">mail@com.com</h3>
        <hr />

        <p>
          <input
            id="update-button"
            className="w3-btn w3-green"
            type="button"
            value="Update profile"
          />
        </p>
      </div>
    </div>
  </div>;
};

import './Body.css';

const Body = () => {
  const handleGetTickets = () => {
    window.location.href = "https://popouttickets.com/events/antilove"; // replace with your ticket link
  };

  return (
    <div>
     <div className="App">
      <div className="center-group">
        <div>ANTILOVE RAVE</div>
        <button className="tickets-btn" onClick={handleGetTickets}>GET TICKETS</button>
      </div>
      </div>
        <section className="info-section">
        <div className="section-container">
          <div className="section-image">
            <img src="/images/antilove.jpeg" alt="Antilove Rave" />
          </div>
          <div className="section-text">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
          </div>
        </div>
      </section>
     <section className="subscribe-section">
  <div className="subscribe-container">
    <div className="subscribe-text">
      <h2>
        Subscribe <span className="highlight">Now</span>
      </h2>
      <p>Stay updated with the latest events and news from Antilove Community.</p>
    </div>

    <form className="subscribe-form">
      <input type="text" placeholder="Full Name" name="fullname" required />
      <input type="email" placeholder="Email" name="email" required />
      <button type="submit">Subscribe</button>
    </form>
  </div>
</section>

    </div>
  )
}

export default Body
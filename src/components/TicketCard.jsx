import React from "react";

const TicketCard = ({ ticket}) => (
  <div className="ticket-card">
    <h4>{ticket.title}</h4>
    <p>{ticket.description}</p>
    <div className="ticket-info">
      <span>User: {ticket.assigned_user}</span>
    </div>
  </div>
);

export default TicketCard;

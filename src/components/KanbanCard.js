import React from "react";

const KanbanCard = ({ ticket }) => {
  return (
    <div className="kanban-card">
      <p className="ticket-info">{ticket.id}</p>
      <div className="card-header">
        <h4>{ticket.title}</h4>
      </div>
      <p className="ticket-info">{ticket.tag.join(", ")}</p>
      <div className="ticket-meta">  
      </div>
    </div>
  );
};


export default KanbanCard;

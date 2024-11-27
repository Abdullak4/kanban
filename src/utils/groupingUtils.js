export const groupByStatus = (tickets) => 
  tickets.reduce((acc, ticket) => {
    acc[ticket.status] = acc[ticket.status] || [];
    acc[ticket.status].push(ticket);
    return acc;
  }, {});

export const groupByUser = (tickets, users) => {
  const userMap = users.reduce((acc, user) => {
    acc[user.id] = user.name; 
    return acc;
  }, {});

  const grouped = tickets.reduce((acc, ticket) => {
    const userName = userMap[ticket.userId] || "Unknown User"; 
    if (!acc[userName]) {
      acc[userName] = [];
    }
    acc[userName].push(ticket); 
    return acc;
  }, {});

  return grouped;
};

export const groupByPriority = (tickets) => 
  tickets.reduce((acc, ticket) => {
    const priority = ["No Priority", "Low", "Medium", "High", "Urgent"][ticket.priority];
    acc[priority] = acc[priority] || [];
    acc[priority].push(ticket);
    return acc;
  }, {});

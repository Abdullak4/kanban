export const fetchTickets = async () => {
    try {
      const response = await fetch("https://api.quicksell.co/v1/internal/frontend-assignment");
      const data = await response.json();
      console.log("Fetched tickets:", data); 
      return {
        tickets: data.tickets, 
        users: data.users      
      };
    } catch (error) {
      console.error("Error fetching tickets:", error);
      return []; 
    }
  };
  
document.addEventListener('DOMContentLoaded', function () {
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
      initialView: 'dayGridMonth',
        events: [
  { 
    title: "Volunteer Event!", 
    start: "2023-05-19", 
    end: "2023-05-24"
  },
  { 
    title: "Volunteer Event!", 
    start: "2023-07-02", 
    end: "2023-07-05"
  },
  { 
    title: "Volunteer Event!", 
    start: "2023-07-20", 
    end: "2023-07-20"
  }
]
    });
    calendar.render();
  });


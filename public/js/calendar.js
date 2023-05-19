document.addEventListener('DOMContentLoaded', function () {
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
      initialView: 'dayGridMonth',
        events: [
  { 
    title: "Volunteer Event!", 
    start: "2023-05-19", 
    end: "2023-05-24"
  }
]
    });
    calendar.render();
  });


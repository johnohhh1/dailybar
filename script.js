document.addEventListener('DOMContentLoaded', function() {
  const checklist = [
    "CLEAN ALL BAR STOOLS & CHAIRS",
    "KEEP BAR COUNTER CLEAN AND CLUTTER FREE",
    "ROTATE AND STOCK ALL BEER AFTER EACH SHIFT",
    "ROTATE AND STOCK ALL JUICE, MIXERS, FRUIT AFTER EACH SHIFT (PM THROW AWAY FRUIT)",
    "CLEAN TABLETOP DEVICES AND KEEP CHARGED (PM PUT ON CHARGER)",
    "REFILL AND LABEL ALL ITEMS PREPPED",
    "CLEAN AND SWEEP BAR AREA FLOORS AND BEHIND THE BAR",
    "TAKE OUT TRASH AND GLASS CONTAINER AFTER EACH SHIFT & RE-BAG",
    "WIPE DOWN ALL BAR COOLERS, BAR EQUIPMENT, GASKETS AFTER EACH SHIFT",
    "CLEAN ALL BOTTLES & RAILS",
    "MELT AND SANITIZE ICE WELL THEN FILL (PM ONLY)",
    "STOCK ALL BAR GLASSES SHIFTLY",
    "EMPTY DISH TANK SHIFTLY",
    "ROLL SILVERWARE AND KEEP STOCKED BEHIND THE BAR EACH SHIFT",
    "SODA GUN WIPED AND CLEANED AFTER EACH SHIFT",
    "CLEAN ALL STAINLESS STEEL BEHIND BAR",
    "CLEAN ALL BAR SINKS, HAND SINKS, (STOCK SOAP, PAPER TOWEL, CHEMICALS AS NEEDED)",
    "CLEAN ALL BAR TAPS & BEER TAP DRAINS",
    "KEEP MARGARITA MACHINE CLEANED AND LABELED",
    "END OF EACH OF YOUR SHIFT CLEAN AND PLACE YOUR IPAD ON THE CHARGER IN THE OFFICE."
  ];

  const tasksContainer = document.getElementById('tasksContainer');
  
  checklist.forEach(task => {
    const taskDiv = document.createElement('div');
    taskDiv.classList.add('task-item');
    
    const label = document.createElement('label');
    label.textContent = task;
    
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.name = 'tasks';
    
    const signatureInput = document.createElement('input');
    signatureInput.type = 'text';
    signatureInput.classList.add('signature-input');
    signatureInput.placeholder = 'Signature';
    
    taskDiv.appendChild(checkbox);
    taskDiv.appendChild(label);
    taskDiv.appendChild(signatureInput);
    
    tasksContainer.appendChild(taskDiv);
  });

  const checklistForm = document.getElementById('checklistForm');
  checklistForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const formData = new FormData(checklistForm);
    
    // Convert FormData to JSON
    const checklistData = {};
    formData.forEach((value, key) => {
      checklistData[key] = value;
    });
    
    console.log(checklistData);
    // Here you can send the checklistData to a server or do something else with it
  });
});

function postData() {
  alert("Calling POST");
  var title = document.getElementById("title").value;
  var description = document.getElementById("description").value;
  const Task = Parse.Object.extend("Task");
  const task = new Task();
  task.set("title", title);
  task.set("description", description);
  task.save()
    .then((object) => {
      // Success
      alert('New object created with objectId: ' + object.id);
    }, (error) => {
      // Save fails
      alert('Failed to create new object, with error code: ' + error.message);
      alert("I am done!");
    });
}

function getData() {
  alert("Calling GET");
  var title = document.getElementById("title").value;
  var description = document.getElementById("description").value;
  const Task = Parse.Object.extend("Task");
  const query = new Parse.Query(Task);
  query.equalTo("title", title);
  query.equalTo("description", description);
  
  query.find().then((results) => {
    // You can use the "get" method to get the value of an attribute
    alert(`title----> ${results[0].get('title')}`);
    alert(`description----> ${results[0].get('description')}`);
    
    if (typeof document !== 'undefined') {
      document.write(`Person found: ${JSON.stringify(results)}`);
    }
    
    console.log('Person found', results);
  }).catch((error) => {
    if (typeof document !== 'undefined') {
      document.write(`Error while fetching Record: ${JSON.stringify(error)}`);
    }
    console.error('Error while fetching Record', error);
  });
}

function updateData() {
  alert("Calling UPDATE!");
 
  var u_objectId = document.getElementById("u_objectId").value;
  var u_title = document.getElementById("u_title").value;
  var u_description = document.getElementById("u_description").value;
  
 
  var u_objectId = document.getElementById("u_objectId").value;
  const Task = Parse.Object.extend("Task");
  const query = new Parse.Query(Task);
   
 query.get(u_objectId).then((object) => {
  console.log(object.get('title'));
  object.set('title',u_title)
  object.set('title', u_title);
  object.set('description', u_description);
  return object.save();
   }).then((response) => {
      alert(`Updated title: ${response.get("title")}`);
      alert(`Updated description: ${response.get("description")}`);
      console.log('Updated Record', response);
    }).catch((error) => {
      console.error('Error while updating Record', error);
    }); 
   
}

function deleteData() {
  alert("Calling DELETE");
  var d_objectId = document.getElementById("d_objectId").value;
  const Task = Parse.Object.extend("Task");
  const query = new Parse.Query(Task);
  
  query.get(d_objectId).then((object) => {
  console.log(object.title);
    object.destroy().then((response) => {
      if (typeof document !== 'undefined') {
        document.write(`Deleted Record: ${JSON.stringify(response)}`);
      }
      console.log('Deleted Record', response);
    }).catch((error) => {
      if (typeof document !== 'undefined') {
        document.write(`Error while deleting Record: ${JSON.stringify(error)}`);
      }
      console.error('Error while deleting Record', error);
    });
  }).catch((error) => {
    if (typeof document !== 'undefined') {
      document.write(`Error while fetching Record: ${JSON.stringify(error)}`);
    }
    console.error('Error while fetching Record', error);
  });
}


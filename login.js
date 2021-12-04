/* ======================================================================
  Author Custom JavaScript
====================================================================== */
//
async function getUsers() {
    let url = 'https://opensheet.vercel.app/1A0DlNZRwa0RgB-bO9P2TjM-oArqLC4KJvJwfeHGMnY8/Dues+Tracker';
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}
async function renderUsers() {
    let users = await getUsers();
    // console.log(users)
    const user = users;
    //console.log(user)
  //
  	var user_id = document.getElementById('username').value
	var first_name = document.getElementById('password').value

	for(var i = 0; i < user.length; i++) {
		// check is user input matches username and password of a current index of the user array
		if(user_id == user[i].user_id && first_name == user[i].first_name) {
			//console.log(username + " is logged in!!!")
      //alert("Successfully login!");
      document.getElementById("errors").style.display = "none";
      document.getElementById("formDisplay").style.display = "none";
//
    const result = user.find( ({ user_id }) => user_id === user[i].user_id );
     // console.log(result)
    let html = '';
   
        let htmlSegment = `<div class="user">
                            <img src="${result.profileURL}" >
                            <h2>${result.first_name}</h2>
                            <p> User ID: ${result.user_id}</p>
                            <p>Balance: <strong>${result.balance}</strong></p>
                            <p>Pourcentage: ${result.pourcentage}</p>
                            <p>Last updated: ${result.last_update}</p>
                        </div>`;

        html += htmlSegment;

    let container = document.querySelector('.container');
    container.innerHTML = html;
			// stop the function if this is found to be true
			return
		}
	}
	let msgErrors = document.querySelector('#errors');
  msgErrors.innerHTML = "<span style='color:red'><strong>Incorrect user_id or Name</strong></span>";
	//console.log("incorrect username or password")
}
  renderUsers();

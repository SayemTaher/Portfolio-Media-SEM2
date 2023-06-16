let myLeads = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");
const deleteBtn = document.getElementById("delete-btn");
const myTab = document.getElementById("tab-btn");

// Retrieve the stored data from local storage
const localStorageValue = JSON.parse(localStorage.getItem("myLeads"));

// const tab=[{url : "https://sayemtaher.site"}]

// Check if there is stored data in local storage
if (localStorageValue && localStorageValue.length > 0) {
  myLeads = localStorageValue;
  render(myLeads);
}
// save tab event

myTab.addEventListener("click", function () {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
  myLeads.push(tabs[0].url);
  localStorage.setItem("myLeads", JSON.stringify(myLeads))
  render(myLeads);
  })
  
})

inputBtn.addEventListener("click", function () {
  if (inputEl.value === "") {
    window.alert("Please provide a value");
  } else {
    myLeads.push(inputEl.value);
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    render(myLeads);
    inputEl.value = "";
  }
});

deleteBtn.addEventListener("dblclick", function () {
  if (myLeads.length > 0) {
    localStorage.clear();
    myLeads = [];
    render(myLeads);
  } else {
    window.alert("There is nothing in the local storage");
  }
});

function render(leads) {
  let listItems = "";
  for (let i = 0; i < leads.length; i++) {
    listItems += `
      <li>
        <a target='_blank' href='${leads[i]}'>
          ${leads[i]}
        </a>
      </li>
    `;
  }
  ulEl.innerHTML = listItems;
}

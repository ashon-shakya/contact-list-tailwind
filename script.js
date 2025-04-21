const apiUrl = "https://randomuser.me/api/?results=2";

const fetchRandomUserData = async () => {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    // check user data
    console.log(data.results);

    let contactList = "";

    data.results.map((user) => {
      let contactListItem = `<li class="contact-item">
                <div
                  class="contact-item-summary flex items-center justify-between p-4 cursor-pointer hover:bg-gray-50"
                >
                  <div class="flex items-center min-w-0">
                    <!-- Contact Image -->
                    <img
                      src=${user.picture.medium}
                      alt="Contact Avatar"
                      class="contact-avatar w-10 h-10 rounded-full mr-3 flex-shrink-0"
                      onerror="this.onerror=null; this.dataset.failed='true';"
                    />
                    <div class="min-w-0">
                      <!-- Contact Name -->
                      <p class="text-md font-semibold text-blue-700 truncate">
                      ${user.name.title} ${user.name.first} ${user.name.last}
                      </p>
                      <!-- Contact Phone -->
                      <p class="text-sm text-gray-600 truncate">${user.cell}</p>
                    </div>
                  </div>
                </div>
                <div
                  class="contact-item-details p-4 border-t border-gray-200 bg-gray-50"
                >
                  <p class="text-sm font-medium text-gray-700 mb-1">
                    Phone:
                    <span class="font-normal">${user.phone}</span>
                  </p>
                  <p class="text-sm font-medium text-gray-700 mb-1">
                    Email:
                    <span class="font-normal">${user.email}</span>
                  </p>
                  <p class="text-sm font-medium text-gray-700 mb-1">
                    Address:
                    <span class="font-normal">${user.location.street.number} ${user.location.street.name}, ${user.location.state}, ${user.location.country} ${user.location.postcode}</span>
                  </p>
                </div>
              </li>`;

      contactList += contactListItem;
    });

    const contactListUl = document.getElementById("contact-list-ul");
    contactListUl.innerHTML = contactList;
  } catch (err) {
    console.log(err);
  }
};

fetchRandomUserData();

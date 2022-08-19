const monthSelect = document.querySelector(".month");
const daySelect = document.querySelector(".day");
const yearSelect = document.querySelector(".year");


const setMonths = () => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  months.forEach((month) => {
    const monthOption = document.createElement("option");
    monthOption.textContent = month;
    monthSelect.appendChild(monthOption);
  });
};

const setDays = () => {
  for (let i = 1; i <= 31; i++) {
    const dayOption = document.createElement("option");
    dayOption.textContent = i;
    daySelect.appendChild(dayOption);
  }
};

const setYear = () => {
  const today = new Date();
  const year = today.getFullYear();
  const isLegal = year - 18;

  for (let i = 1900; i <= isLegal; i++) {
    const yearOption = document.createElement("option");
    yearOption.textContent = i;
    yearSelect.appendChild(yearOption);
  }
};

setMonths();
setDays();
setYear();

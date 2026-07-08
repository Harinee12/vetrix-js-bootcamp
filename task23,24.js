const dashboard = document.getElementById("dashboard");

dashboard.style.backgroundColor = "#333";
dashboard.style.color = "white";
dashboard.style.padding = "20px";
dashboard.style.borderRadius = "12px";
dashboard.style.width = "350px";
dashboard.style.margin = "20px auto";
dashboard.style.textAlign = "center";

console.log("Dashboard styled successfully.");

const projectLink = document.getElementById("projectLink");

projectLink.setAttribute("href", "https://github.com");
projectLink.setAttribute("target", "_blank");

projectLink.innerText = "Open GitHub";

console.log(projectLink);

// OData URLs for the allegations and complaints datasets
const allegationsUrl = "https://data.cityofnewyork.us/api/odata/v4/6xgr-kwjq";
const complaintsUrl = "https://data.cityofnewyork.us/api/odata/v4/2mby-ccnw";

// Data for storing the complaints and allegations
let complaintsData = [];
let allegationsData = [];

// Fetch the complaints data from OData
fetch(complaintsUrl)
  .then(response => response.json())
  .then(data => {
    complaintsData = data.value;
    console.log("Complaints Data:", complaintsData);
    processData();  // Process data after complaints are loaded
  })
  .catch(error => console.error("Error fetching complaints data:", error));

// Fetch the allegations data from OData
fetch(allegationsUrl)
  .then(response => response.json())
  .then(data => {
    allegationsData = data.value;
    console.log("Allegations Data:", allegationsData);
    processData();  // Process data after allegations are loaded
  })
  .catch(error => console.error("Error fetching allegations data:", error));

// Function to process the data
function processData() {
  // Make sure both datasets are loaded
  if (complaintsData.length === 0 || allegationsData.length === 0) return;

  // Join complaints and allegations data on Complaint Id
  const joinedData = complaintsData.map(complaint => {
    const allegation = allegationsData.find(allegation => allegation.ComplaintId === complaint.ComplaintId);
    return { ...complaint, allegation };
  }).filter(item => item.allegation);  // Only keep matched complaints

  // Filter and aggregate data by year and mayor administration
  const yearlyData = {};

  joinedData.forEach(entry => {
    const closeDate = new Date(entry.CloseDate);
    const year = closeDate.getFullYear();
    const administration = getAdministration(closeDate);

    // Initialize year data if not yet created
    if (!yearlyData[year]) {
      yearlyData[year] = { Bloomberg: { total: 0, substantiated: 0, unsubstantiated: 0 },
                           deBlasio: { total: 0, substantiated: 0, unsubstantiated: 0 },
                           Adams: { total: 0, substantiated: 0, unsubstantiated: 0 }};
    }

    // Increment total complaints and substantiated/unsubstantiated splits
    const result = entry.allegation.Substantiated === "True" ? 'substantiated' : 'unsubstantiated';
    yearlyData[year][administration].total++;
    yearlyData[year][administration][result]++;
  });

  // Now we have the aggregated data by year and administration, let's draw the chart
  drawTotalComplaintsChart(yearlyData);
}

// Helper function to get the administration based on the year
function getAdministration(date) {
  if (date >= new Date('2002-01-01') && date <= new Date('2013-12-31')) {
    return "Bloomberg";
  } else if (date >= new Date('2014-01-01') && date <= new Date('2021-12-31')) {
    return "deBlasio";
  } else if (date >= new Date('2022-01-01') && date <= new Date('2024-12-16')) {
    return "Adams";
  }
  return "Unknown"; // For dates that don't match any administration
}

// Function to draw the bar chart
function drawTotalComplaintsChart(yearlyData) {
  const margin = { top: 40, right: 40, bottom: 40, left: 60 };
  const width = 700 - margin.left - margin.right;
  const height = 400 - margin.top - margin.bottom;

  const svg = d3.select("#complaints-chart")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", `translate(${margin.left},${margin.top})`);

  // Flatten the yearly data into an array of years and complaints counts
  const years = Object.keys(yearlyData);
  const administrations = ["Bloomberg", "deBlasio", "Adams"];
  
  const x = d3.scaleBand()
    .domain(years)
    .range([0, width])
    .padding(0.4);

  const y = d3.scaleLinear()
    .domain([0, d3.max(years, year => d3.max(administrations, admin => yearlyData[year][admin].total))])
    .range([height, 0]);

  // Draw X and Y axes
  svg.append("g")
    .attr("transform", `translate(0,${height})`)
    .call(d3.axisBottom(x));

  svg.append("g")
    .call(d3.axisLeft(y));

  // Draw bars for each administration and year
  administrations.forEach(admin => {
    svg.selectAll(`.${admin}-bar`)
      .data(years)
      .enter()
      .append("rect")
      .attr("class", `${admin}-bar`)
      .attr("x", year => x(year))
      .attr("y", year => y(yearlyData[year][admin].total))
      .attr("width", x.bandwidth() / administrations.length)
      .attr("height", year => height - y(yearlyData[year][admin].total))
      .attr("fill", admin === "Bloomberg" ? "#003DA5" : admin === "deBlasio" ? "#FF0000" : "#00A3E0")
      .attr("transform", (year, i) => `translate(${x(year) + i * x.bandwidth() / administrations.length}, 0)`)
      .on("mouseover", function (event, d) {
        tooltip.transition().duration(200).style("opacity", 0.9);
        tooltip.html(`Total: ${yearlyData[d][admin].total}`)
          .style("left", `${event.pageX}px`)
          .style("top", `${event.pageY - 28}px`);
      })
      .on("mouseout", () => {
        tooltip.transition().duration(500).style("opacity", 0);
      });
  });
}

// Tooltip for hover effects
const tooltip = d3.select("body").append("div")
  .attr("class", "tooltip")
  .style("opacity", 0);
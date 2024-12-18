// URLs for the datasets in your GitHub repository
const complaintsDataUrl = 'https://raw.githubusercontent.com/thomagin/Fagin_CCRB/main/data/Civilian_Complaint_Review_Board__Complaints_Against_Police_Officers_20241217.csv';
const allegationsDataUrl = 'https://raw.githubusercontent.com/thomagin/Fagin_CCRB/main/data/Civilian_Complaint_Review_Board__Allegations_Against_Police_Officers_20241217.csv';

// Tooltip for hover effects
const tooltip = d3.select("body").append("div")
    .attr("class", "tooltip")
    .style("opacity", 0);

// Set up chart dimensions
const margin = { top: 40, right: 40, bottom: 40, left: 60 };
const width = 700 - margin.left - margin.right;
const height = 400 - margin.top - margin.bottom;

// Load the data and process it
Promise.all([
    d3.csv(complaintsDataUrl),
    d3.csv(allegationsDataUrl)
])
.then(([complaintsData, allegationsData]) => {
    console.log('Complaints Data:', complaintsData);
    console.log('Allegations Data:', allegationsData);

    // Data processing (modify as needed)
    const processedData = processData(complaintsData, allegationsData);

    // Draw the chart
    drawTotalComplaintsChart(processedData);
})
.catch(error => {
    console.error('Error fetching data:', error);
});

// Process the data
function processData(complaintsData, allegationsData) {
    // Example: Filter and process data (make sure Complaint Id matches and adjust date ranges)
    const result = [];

    // Example of processing and filtering by date and Complaint Id matching
    // Modify this logic as needed to combine data correctly
    complaintsData.forEach(complaint => {
        const allegation = allegationsData.find(a => a['Complaint Id'] === complaint['Complaint Id']);
        if (allegation) {
            const complaintYear = new Date(complaint['Close Date']).getFullYear();
            const substantiated = allegation['Allegation Substantiated'] === 'Yes' ? 1 : 0;
            const unsubstantiated = 1 - substantiated;

            result.push({
                year: complaintYear,
                substantiated,
                unsubstantiated,
                totalComplaints: 1
            });
        }
    });

    // Aggregate data by year
    const aggregatedData = d3.nest()
        .key(d => d.year)
        .rollup(values => ({
            totalComplaints: d3.sum(values, v => v.totalComplaints),
            substantiated: d3.sum(values, v => v.substantiated),
            unsubstantiated: d3.sum(values, v => v.unsubstantiated)
        }))
        .entries(result);

    return aggregatedData;
}

// Draw the bar chart for total complaints by year and mayoral administration
function drawTotalComplaintsChart(data) {
    const svg = d3.select("#complaints-chart")
        .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", `translate(${margin.left},${margin.top})`);

    // X and Y scales
    const x = d3.scaleBand()
        .domain(data.map(d => d.key))  // Using year as the x-axis
        .range([0, width])
        .padding(0.4);

    const y = d3.scaleLinear()
        .domain([0, d3.max(data, d => d.value.totalComplaints)])
        .range([height, 0]);

    // X and Y axes
    svg.append("g")
        .attr("transform", `translate(0,${height})`)
        .call(d3.axisBottom(x));

    svg.append("g")
        .call(d3.axisLeft(y));

    // Bars for substantiated complaints (Blue)
    svg.selectAll(".substantiated-bar")
        .data(data)
        .enter()
        .append("rect")
        .attr("class", "substantiated-bar")
        .attr("x", d => x(d.key))
        .attr("y", d => y(d.value.substantiated))
        .attr("width", x.bandwidth() / 2)
        .attr("height", d => height - y(d.value.substantiated))
        .attr("fill", "#003DA5")  // Blue for substantiated
        .on("mouseover", function(event, d) {
            tooltip.transition().duration(200).style("opacity", 0.9);
            tooltip.html(`Year: ${d.key}<br>Substantiated: ${d.value.substantiated}`)
                .style("left", `${event.pageX}px`)
                .style("top", `${event.pageY - 28}px`);
        })
        .on("mouseout", () => {
            tooltip.transition().duration(500).style("opacity", 0);
        });

    // Bars for unsubstantiated complaints (Red)
    svg.selectAll(".unsubstantiated-bar")
        .data(data)
        .enter()
        .append("rect")
        .attr("class", "unsubstantiated-bar")
        .attr("x", d => x(d.key) + x.bandwidth() / 2)
        .attr("y", d => y(d.value.unsubstantiated))
        .attr("width", x.bandwidth() / 2)
        .attr("height", d => height - y(d.value.unsubstantiated))
        .attr("fill", "#FF0000")  // Red for unsubstantiated
        .on("mouseover", function(event, d) {
            tooltip.transition().duration(200).style("opacity", 0.9);
            tooltip.html(`Year: ${d.key}<br>Unsubstantiated: ${d.value.unsubstantiated}`)
                .style("left", `${event.pageX}px`)
                .style("top", `${event.pageY - 28}px`);
        })
        .on("mouseout", () => {
            tooltip.transition().duration(500).style("opacity", 0);
        });
}

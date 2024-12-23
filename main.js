// main.js
const data = [
    {
        administration: 'Bloomberg',
        totalComplaints: 218933,
        substantiatedRate: 2.97,
        unsubstantiatedRate: 97.03
    },
    {
        administration: 'de Blasio',
        totalComplaints: 102913,
        substantiatedRate: 4.29,
        unsubstantiatedRate: 95.71
    },
    {
        administration: 'Adams',
        totalComplaints: 62530,
        substantiatedRate: 11.46,
        unsubstantiatedRate: 88.54
    }
];

// Set up dimensions for the charts
const margin = { top: 40, right: 40, bottom: 40, left: 60 };
const width = 700 - margin.left - margin.right;
const height = 400 - margin.top - margin.bottom;

// Tooltip for hover effects
const tooltip = d3.select("body").append("div")
    .attr("class", "tooltip")
    .style("opacity", 0);

// Draw Bar Chart
function drawTotalComplaintsChart() {
    const svg = d3.select("#complaints-chart")
        .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", `translate(${margin.left},${margin.top})`);

    // X scale and axis for administrations
    const x = d3.scaleBand()
        .domain(data.map(d => d.administration))
        .range([0, width])
        .padding(0.4);

    svg.append("g")
        .attr("transform", `translate(0,${height})`)
        .call(d3.axisBottom(x));

    // Y scale and axis for total complaints
    const y = d3.scaleLinear()
        .domain([0, d3.max(data, d => d.totalComplaints)])
        .range([height, 0]);

    svg.append("g")
        .call(d3.axisLeft(y));

    // Bars for total complaints
    svg.selectAll(".bar")
        .data(data)
        .enter()
        .append("rect")
        .attr("class", "bar")
        .attr("x", d => x(d.administration))
        .attr("y", height)
        .attr("width", x.bandwidth())
        .attr("height", 0)
        .on("mouseover", function(event, d) {
            tooltip.transition()
                .duration(200)
                .style("opacity", .9);
            tooltip.html(`Total Complaints: ${d.totalComplaints}`)
                .style("left", (event.pageX) + "px")
                .style("top", (event.pageY - 28) + "px");
        })
        .on("mouseout", function() {
            tooltip.transition()
                .duration(500)
                .style("opacity", 0);
        })
        .transition()
        .duration(1000)
        .attr("y", d => y(d.totalComplaints))
        .attr("height", d => height - y(d.totalComplaints));
}

// Draw Pie Chart
function drawPieChart(administration) {
    const svg = d3.select(`#${administration.replace(' ', '-').toLowerCase()}-chart`)
        .append("svg")
        .attr("width", width)
        .attr("height", height)
        .append("g")
        .attr("transform", `translate(${width / 2}, ${height / 2})`);

    const pieData = [
        { label: 'Substantiated', value: data.find(d => d.administration === administration).substantiatedRate },
        { label: 'Unsubstantiated', value: data.find(d => d.administration === administration).unsubstantiatedRate }
    ];

    const pie = d3.pie().value(d => d.value);
    const arc = d3.arc().innerRadius(0).outerRadius(100);

    svg.selectAll(".arc")
        .data(pie(pieData))
        .enter()
        .append("g")
        .attr("class", "arc")
        .append("path")
        .attr("d", arc)
        .attr("fill", (d, i) => i === 0 ? "#003DA5" : "#FF0000")
        .on("mouseover", function(event, d) {
            tooltip.transition()
                .duration(200)
                .style("opacity", .9);
            tooltip.html(`${d.data.label}: ${d.data.value}%`)
                .style("left", (event.pageX) + "px")
                .style("top", (event.pageY - 28) + "px");
        })
        .on("mouseout", function() {
            tooltip.transition()
                .duration(500)
                .style("opacity", 0);
        });

    svg.append("text")
        .attr("class", "pie-label")
        .attr("text-anchor", "middle")
        .attr("y", 10)
        .text(`CCR Substantiated ${administration}: ${data.find(d => d.administration === administration).substantiatedRate}%`);
}

// Board data
const designees = [
    { type: "Mayoral Appointee", label: "Mayoral Appointee", name: "John Siegal, Esq.", color: "#003DA5" },
    { type: "Mayoral Appointee", label: "Mayoral Appointee", name: "June Northern", color: "#003DA5" },
    { type: "Mayoral Appointee", label: "Mayoral Appointee", name: "Pat Smith", color: "#003DA5" },
    { type: "Mayoral Appointee", label: "Mayoral Appointee", name: "Vacant", color: "#003DA5" },
    { type: "Mayoral Appointee", label: "Mayoral Appointee", name: "Vacant", color: "#003DA5" },
    { type: "Public Advocate Designee", label: "Public Advocate Designee", name: "Esmeralda Simmons, Esq.", color: "#003DA5" },
    { type: "City Council Designee", label: "City Council Designee", name: "Joseph A. Puma", color: "#003DA5" },
    { type: "City Council Designee", label: "City Council Designee", name: "AU Hogan", color: "#003DA5" },
    { type: "City Council Designee", label: "City Council Designee", name: "Vacant", color: "#003DA5" },
    { type: "City Council Designee", label: "City Council Designee", name: "Herman Merritt", color: "#003DA5" },
    { type: "City Council Designee", label: "City Council Designee", name: "Dr. Mohammad Khalid", color: "#003DA5" },
    { type: "Police Commissioner Designee", label: "Police Commissioner Designee", name: "Frank Dwyer", color: "#003DA5" },
    { type: "Police Commissioner Designee", label: "Police Commissioner Designee", name: "Charlane Brown, Esq.", color: "#003DA5" },
    { type: "Police Commissioner Designee", label: "Police Commissioner Designee", name: "Joe Fox", color: "#003DA5" },
    { type: "Chair", label: "Chair", name: "Vacant", color: "#003DA5" },
];

// Create scroll sections
const boardSection = document.querySelector('#board-visualization');

// Create two text sections for the scrollytelling
const textSections = `
    <div class="scroll-section" id="initial-view">
        <h2 class="license-plate">Current Board Composition</h2>
        <p>The CCRB board consists of 15 members with different appointment sources.</p>
    </div>
    <div class="scroll-section" id="vacant-view">
        <h2 class="license-plate">Vacant Positions Under Adams</h2>
        <p>Several key positions remain unfilled, affecting the board's ability to function.</p>
    </div>
`;

// Insert text sections before the grid
d3.select("#board-visualization")
    .insert("div", "#designeeGrid")
    .attr("class", "scroll-container")
    .html(textSections);

let isShowingVacant = false;

function transitionToVacantView(show) {
    if (isShowingVacant === show) return;
    isShowingVacant = show;
    
    const svg = d3.select("#designeeGrid");
    const duration = 750;

    // Transition for squares
    svg.selectAll(".square")
        .transition()
        .duration(duration)
        .attr("fill", d => isShowingVacant ? 
            (d.name === "Vacant" ? "#808080" : "#003DA5") : 
            d.color)
        .attr("opacity", d => isShowingVacant ?
            (d.name === "Vacant" ? 1 : 0.3) :
            0.8);

    // Transition for labels
    svg.selectAll(".label")
        .selectAll("tspan")
        .transition()
        .duration(duration)
        .style("opacity", 0)
        .remove();

    // Add new labels after a brief delay
    setTimeout(() => {
        svg.selectAll(".label")
            .each(function(d) {
                const textElement = d3.select(this);
                const words = d.type.split(" ");
                let lineHeight = 15;

                // Clear existing tspans
                textElement.selectAll("tspan").remove();

                // Add position type
                words.forEach((word, i) => {
                    textElement.append("tspan")
                        .attr("x", textElement.attr("x"))
                        .attr("dy", i === 0 ? -15 : lineHeight)
                        .style("opacity", 0)
                        .text(word)
                        .transition()
                        .duration(duration)
                        .style("opacity", isShowingVacant ? 
                            (d.name === "Vacant" ? 1 : 0.3) : 
                            1);
                });

                // Add name or "Vacant" label
                textElement.append("tspan")
                    .attr("x", textElement.attr("x"))
                    .attr("dy", lineHeight * 1.5)
                    .style("opacity", 0)
                    .text(isShowingVacant ? 
                        (d.name === "Vacant" ? "Vacant" : d.name) : 
                        d.name)
                    .style("font-weight", d.name === "Vacant" ? "bold" : "normal")
                    .transition()
                    .duration(duration)
                    .style("opacity", isShowingVacant ? 
                        (d.name === "Vacant" ? 1 : 0.3) : 
                        1);
            });
    }, duration / 2);
}

// Draw the initial grid
function drawGrid() {
    const svg = d3.select("#designeeGrid");
    
    if (svg.empty()) {
        console.error("SVG with ID 'designeeGrid' not found.");
        return;
    }

    const gridWidth = +svg.attr("width");
    const gridHeight = +svg.attr("height");
    const squareSize = 100;
    const padding = 20;

    // Grid positions
    const cols = 5;
    const rows = Math.ceil(designees.length / cols);
    const xScale = d3.scaleBand()
        .domain(d3.range(cols))
        .range([0, gridWidth])
        .paddingInner(0.1);

    const yScale = d3.scaleBand()
        .domain(d3.range(rows))
        .range([0, gridHeight])
        .paddingInner(0.1);

    // Draw squares
    const squares = svg.selectAll(".square")
        .data(designees)
        .join("rect")
        .attr("class", "square")
        .attr("x", (_, i) => xScale(i % cols) || 0)
        .attr("y", (_, i) => yScale(Math.floor(i / cols)) || 0)
        .attr("width", squareSize)
        .attr("height", squareSize)
        .attr("fill", d => d.color)
        .attr("stroke", "#fff")
        .attr("opacity", 0.8);

    // Add labels
    svg.selectAll(".label")
        .data(designees)
        .join("text")
        .attr("class", "label")
        .attr("x", (_, i) => (xScale(i % cols) || 0) + squareSize / 2)
        .attr("y", (_, i) => (yScale(Math.floor(i / cols)) || 0) + squareSize / 2)
        .attr("text-anchor", "middle")
        .attr("dominant-baseline", "middle")
        .style("fill", "white")
        .style("font-size", "12px")
        .style("line-height", "14px")
        .style("white-space", "pre-line")
        .style("word-wrap", "break-word")
        .style("text-transform", "capitalize")
        .each(function(d) {
            const words = d.type.split(" ");
            const textElement = d3.select(this);
            
            let lineHeight = 15;
            // Add position type
            words.forEach((word, i) => {
                textElement.append("tspan")
                    .attr("x", textElement.attr("x"))
                    .attr("dy", i === 0 ? -15 : lineHeight)
                    .text(word);
            });
            
            // Add name
            textElement.append("tspan")
                .attr("x", textElement.attr("x"))
                .attr("dy", lineHeight * 1.5)
                .text(d.name);
        });
}

// Set up Intersection Observer for scroll triggers
const scrollOptions = {
    root: null,
    threshold: 0.9
};

const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            if (entry.target.id === 'vacant-view') {
                transitionToVacantView(true);
            } else if (entry.target.id === 'initial-view') {
                transitionToVacantView(false);
            }
        }
    });
}, scrollOptions);

// Observe both scroll sections
document.querySelectorAll('.scroll-section').forEach(section => {
    scrollObserver.observe(section);
});

// HISTOGRAM
// Load the data from the JSON file
// Load the data from the JSON file
d3.json('https://raw.githubusercontent.com/thomagin/Fagin_CCRB/main/data/monthmayors.json').then(function(data) {

    // Set up chart dimensions and margins
    var margin = { top: 20, right: 30, bottom: 40, left: 40 };
    var width = 800 - margin.left - margin.right;
    var height = 400 - margin.top - margin.bottom;

    // Parse the date format correctly
    var parseDate = d3.timeParse("%Y-%m-%d");
    var formatDate = d3.timeFormat("%B %Y"); // Format the date as Month Year

    // Set up the scales
    var xScale = d3.scaleTime()
        .domain([
            d3.min(Object.values(data).flatMap(mayorData => mayorData.map(d => parseDate(d.Date)))), // min date
            d3.max(Object.values(data).flatMap(mayorData => mayorData.map(d => parseDate(d.Date))))  // max date
        ])
        .range([0, width]);

    var yScale = d3.scaleLinear()
        .domain([0, d3.max(Object.values(data).flatMap(mayorData => mayorData.map(d => d["Total Complaints"])))])
        .nice()
        .range([height, 0]);

    // Set up the SVG element
    var svg = d3.select('body').append('svg')
        .attr('width', width + margin.left + margin.right)
        .attr('height', height + margin.top + margin.bottom)
        .append('g')
        .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

    // Add the x-axis with exact placement for January labels
    svg.append('g')
        .attr('transform', 'translate(0,' + height + ')')
        .call(d3.axisBottom(xScale).ticks(d3.timeYear.every(1)).tickFormat(d3.timeFormat("%Y"))) // Place ticks at the year marks
        .selectAll('text')
        .style('text-anchor', 'middle')
        .style('font-size', '12px')
        .attr('transform', 'rotate(-45)') // Rotate labels to avoid crowding
        .style('font-weight', 'bold');

    // Add the y-axis
    svg.append('g')
        .call(d3.axisLeft(yScale));

    // Calculate the width of each bar based on the total number of bars (bars for each mayor)
    var totalBars = Object.values(data).flatMap(mayorData => mayorData).length;
    var barWidth = width / totalBars;

    // Add bars for each mayor
    var mayorColors = {
        "Bloomberg": "#F9A825", // New York yellow
        "de Blasio": "#388E3C",  // New York green
        "Adams": "#1976D2"       // New York blue
    };

    // Create the tooltip div
    var tooltip = d3.select("body").append("div")
        .attr("class", "tooltip")
        .style("position", "absolute")
        .style("visibility", "hidden")
        .style("background-color", "white")
        .style("border", "1px solid #ccc")
        .style("padding", "10px")
        .style("border-radius", "5px")
        .style("font-size", "12px");

    // For each mayor, add bars
    Object.keys(data).forEach(function(mayor, mayorIndex) {
        svg.selectAll('.bar-' + mayor)
            .data(data[mayor])
            .enter().append('rect')
            .attr('class', 'bar-' + mayor)
            .attr('x', function(d) {
                // Bar position based on date, without extra space between mayors
                return xScale(parseDate(d.Date));
            })
            .attr('y', function(d) { return yScale(d["Total Complaints"]); })
            .attr('width', barWidth)  // Use calculated bar width
            .attr('height', function(d) { return height - yScale(d["Total Complaints"]); })
            .attr('fill', mayorColors[mayor])
            .attr('stroke', '#fff')  // Light white border around bars
            .attr('stroke-width', 1)
            .on('mouseover', function(event, d) {
                tooltip.style("visibility", "visible")
                    .html(`
                        <strong>Mayor:</strong> ${mayor} <br>
                        <strong>Month/Year:</strong> ${formatDate(parseDate(d.Date))} <br>
                        <strong>Total Complaints:</strong> ${d["Total Complaints"]} <br>
                        <strong>Rate of Substantiation:</strong> ${(d["Substantiated"] / d["Total Complaints"] * 100).toFixed(2)}%
                    `)
                    .style("left", (event.pageX + 5) + "px")
                    .style("top", (event.pageY - 28) + "px");
            })
            .on('mouseout', function() {
                tooltip.style("visibility", "hidden");
            });
    });

}).catch(function(error) {
    console.log("Error loading the data: ", error);
});

// Initialize all visualizations
drawPieChart('Bloomberg');
drawPieChart('de Blasio');
drawPieChart('Adams');
drawGrid();
drawTotalComplaintsChart();
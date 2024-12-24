//JS/D3

const data = [
    {
        administration: 'Bloomberg',
        totalComplaints: 218933,
        substantiatedRate: 2.97,
        unsubstantiatedRate: 97.03,
        substantiations: [
            { label: 'Substantiated (Charges)', value: 84.88, cases: 5522 },
            { label: 'Substantiated (Command Discipline A)', value: 0.00, cases: 0 },
            { label: 'Substantiated (Command Discipline B)', value: 0.00, cases: 0 },
            { label: 'Substantiated (Command Discipline)', value: 15.12, cases: 984 },
            { label: 'Substantiated (Formal Training)', value: 0.00, cases: 0 }
        ]
    },
    {
        administration: 'de Blasio',
        totalComplaints: 102913,
        substantiatedRate: 4.29,
        unsubstantiatedRate: 95.71,
        substantiations: [
            { label: 'Substantiated (Charges)', value: 37.29, cases: 1646 },
            { label: 'Substantiated (Command Discipline A)', value: 33.17, cases: 1464 },
            { label: 'Substantiated (Command Discipline B)', value: 25.37, cases: 1120 },
            { label: 'Substantiated (Command Discipline)', value: 4.17, cases: 184 },
            { label: 'Substantiated (Formal Training)', value: 0.00, cases: 0 }
        ]
    },
    {
        administration: 'Adams',
        totalComplaints: 62530,
        substantiatedRate: 11.46,
        unsubstantiatedRate: 88.54,
        substantiations: [
            { label: 'Substantiated (Charges)', value: 14.89, cases: 1067 },
            { label: 'Substantiated (Command Discipline A)', value: 65.64, cases: 4705 },
            { label: 'Substantiated (Command Discipline B)', value: 19.48, cases: 1396 },
            { label: 'Substantiated (Command Discipline)', value: 0.00, cases: 0 },
            { label: 'Substantiated (Formal Training)', value: 0.00, cases: 0 }
        ]
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

// Draw Donut Chart
function drawSubstantiationPieChart(admin) {
    const width = 400;
    const height = 400;
    const radius = Math.min(width, height) / 2;

    const svg = d3.select(`#${admin.replace(' ', '-').toLowerCase()}-chart`)
        .append("svg")
        .attr("width", width)
        .attr("height", height)
        .append("g")
        .attr("transform", `translate(${width / 2}, ${height / 2})`);

    // Find substantiations data for the selected administration
    const substantiations = data.find(d => d.administration === admin).substantiations;

    const pie = d3.pie()
        .value(d => d.value); // Use the 'value' field for slice sizes

    // Create the donut chart with an inner radius
    const arc = d3.arc()
        .innerRadius(radius * 0.6) // Inner radius for the donut
        .outerRadius(radius);

    // Custom Colors Mapping
    const customColors = {
        "Charges": "#FF0000", // Red
        "Command Discipline A": "#FFEB3B", // Empire State Blue
        "Command Discipline B": "#FF5900", // Knicks Orange
        "Command Discipline": "#008000" // Green
    };

    // Create pie slices
    svg.selectAll(".arc")
        .data(pie(substantiations))
        .enter()
        .append("g")
        .attr("class", "arc")
        .append("path")
        .attr("d", arc)
        .attr("fill", d => customColors[d.data.label.split('(')[1].replace(')', '')] || "#CCCCCC") // Use custom colors for the slices
        .on("mouseover", function (event, d) {
            tooltip.transition()
                .duration(200)
                .style("opacity", 0.9);
            tooltip.html(d.data.label.split('(')[1].replace(')', '')) // Extract and display only the type
                .style("left", (event.pageX) + "px")
                .style("top", (event.pageY - 28) + "px");
        })
        .on("mouseout", function () {
            tooltip.transition()
                .duration(500)
                .style("opacity", 0);
        });

    // Add percentages as labels inside the pie slices
    svg.selectAll(".label")
        .data(pie(substantiations))
        .enter()
        .append("text")
        .filter(d => d.data.value > 0) // Only include slices with a value > 0
        .attr("transform", d => `translate(${arc.centroid(d)})`)
        .attr("text-anchor", "middle")
        .attr("dy", "0.35em")
        .text(d => `${d.data.value}%`); // Display percentage only if > 0

    // Add mayor's name in the center of the donut
    svg.append("text")
        .attr("text-anchor", "middle")
        .attr("dy", "0.35em")
        .style("font-size", "1.5em")
        .style("font-weight", "bold")
        .text(admin);
}

function drawLegend() {
    const legendData = [
        ...new Set(
            data.flatMap(d =>
                d.substantiations
                    .filter(item => item.value > 0) // Only include non-zero values
                    .map(item => item.label.split('(')[1].replace(')', '')) // Extract type
            )
        ),
    ];

    const itemsPerRow = 2; // Set the number of items per row
    const legendWidth = 400; // Adjusted width for your needs
    const legendHeight = Math.ceil(legendData.length / itemsPerRow) * 30; // Adjust height based on rows
    const spacingX = 150; // Horizontal spacing
    const spacingY = 30; // Vertical spacing

    const customColors = {
        "Charges": "#FF0000", // Red
        "Command Discipline A": "#FFEB3B", // Yellow
        "Command Discipline B": "#FF5900", // Knicks Orange
        "Command Discipline": "#008000" // Green
    };

    const legend = d3.select("#legend")
        .append("svg")
        .attr("width", legendWidth)
        .attr("height", legendHeight)
        .append("g")
        .attr("transform", "translate(10, 10)");

    legend.selectAll(".legend-item")
        .data(legendData)
        .enter()
        .append("g")
        .attr("class", "legend-item")
        .attr("transform", (d, i) => `translate(${(i % itemsPerRow) * spacingX}, ${Math.floor(i / itemsPerRow) * spacingY})`) // Grid layout
        .each(function (d, i) {
            d3.select(this)
                .append("rect")
                .attr("x", 0)
                .attr("y", 0)
                .attr("width", 15)
                .attr("height", 15)
                .attr("fill", customColors[d] || "#CCCCCC"); // Default to grey if missing color

            d3.select(this)
                .append("text")
                .attr("x", 20)
                .attr("y", 12)
                .text(d)
                .attr("font-size", "12px")
                .attr("alignment-baseline", "middle");
        });
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

// Create scroll section with increased spacing
const textSections = `
    <div class="scroll-section" id="initial-view">
        <h2 class="license-plate">Current Board Composition</h2>
        <p>The CCRB board consists of 15 members with different appointment sources.</p>
        <div style="height: 0.5vh;"></div>
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
    const duration = 100;

    // Restore color transition for squares
    svg.selectAll(".square")
        .transition()
        .duration(duration)
        .attr("fill", d => show ? 
            (d.name === "Vacant" ? "#808080" : "#003DA5") : 
            "#003DA5")
        .attr("opacity", d => show ?
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

                // Only add "Vacant" text where applicable
                if (d.name === "Vacant") {
                    textElement.append("tspan")
                        .attr("x", textElement.attr("x"))
                        .attr("dy", lineHeight * 1.5)
                        .style("opacity", 0)
                        .text("Vacant")
                        .transition()
                        .duration(duration)
                        .style("opacity", isShowingVacant ? 1 : 1);
                }
            });
    }, duration / 1);
}
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
            const textElement = d3.select(this);
            let lineHeight = 15;
            
            if (d.type === "City Council Designee") {
                textElement.append("tspan")
                    .attr("x", textElement.attr("x"))
                    .attr("dy", "-20")
                    .text("City Council");
                
                textElement.append("tspan")
                    .attr("x", textElement.attr("x"))
                    .attr("dy", lineHeight)
                    .text("Designee");
            } else {
                const words = d.type.split(" ");
                words.forEach((word, i) => {
                    textElement.append("tspan")
                        .attr("x", textElement.attr("x"))
                        .attr("dy", i === 0 ? -15 : lineHeight)
                        .text(word);
                });
            }
        });
}

function transitionToVacantView(show) {
    if (isShowingVacant === show) return;
    isShowingVacant = show;
    
    const svg = d3.select("#designeeGrid");
    const duration = 100;

    // Transition squares
    svg.selectAll(".square")
        .transition()
        .duration(duration)
        .attr("fill", d => show ? 
            (d.name === "Vacant" ? "#808080" : "#003DA5") : 
            "#003DA5")
        .attr("opacity", d => show ?
            (d.name === "Vacant" ? 1 : 0.3) :
            0.8);

    // Remove all existing labels first
    svg.selectAll(".label")
        .selectAll("tspan")
        .transition()
        .duration(duration)
        .style("opacity", 0)
        .remove();

    // Add new labels with proper timing
    setTimeout(() => {
        svg.selectAll(".label")
            .each(function(d) {
                const textElement = d3.select(this);
                let lineHeight = 15;

                // Handle text layout based on type
                if (d.type === "City Council Designee") {
                    textElement.append("tspan")
                        .attr("x", textElement.attr("x"))
                        .attr("dy", "-20")
                        .style("opacity", 0)
                        .text("City Council")
                        .transition()
                        .duration(duration)
                        .style("opacity", show ? 
                            (d.name === "Vacant" ? 1 : 0.3) : 
                            1);
                    
                    textElement.append("tspan")
                        .attr("x", textElement.attr("x"))
                        .attr("dy", lineHeight)
                        .style("opacity", 0)
                        .text("Designee")
                        .transition()
                        .duration(duration)
                        .style("opacity", show ? 
                            (d.name === "Vacant" ? 1 : 0.3) : 
                            1);
                } else {
                    const words = d.type.split(" ");
                    words.forEach((word, i) => {
                        textElement.append("tspan")
                            .attr("x", textElement.attr("x"))
                            .attr("dy", i === 0 ? -15 : lineHeight)
                            .style("opacity", 0)
                            .text(word)
                            .transition()
                            .duration(duration)
                            .style("opacity", show ? 
                                (d.name === "Vacant" ? 1 : 0.3) : 
                                1);
                    });
                }

                // Only add "Vacant" text for vacant positions when showing vacant view
                if (d.name === "Vacant" && show) {
                    textElement.append("tspan")
                        .attr("x", textElement.attr("x"))
                        .attr("dy", lineHeight * 1.5)
                        .style("opacity", 0)
                        .text("Vacant")
                        .transition()
                        .duration(duration)
                        .style("opacity", 1);
                }
            });
    }, duration);
}

// Modified Intersection Observer options
const scrollOptions = {
    root: null,
    threshold: 0.1 //trigger point for change
};

const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            transitionToVacantView(entry.target.id === 'vacant-view');
        }
    });
}, scrollOptions);

document.querySelectorAll('.scroll-section').forEach(section => {
    scrollObserver.observe(section);
});

// HISTOGRAM

// histogram.js
document.addEventListener('DOMContentLoaded', function() {
    // Load the data from the JSON file
    d3.json('https://raw.githubusercontent.com/thomagin/Fagin_CCRB/main/data/monthmayors.json')
        .then(createHistogram)
        .catch(error => console.error("Error loading the data:", error));
});

function createHistogram(data) {
    // Set up chart dimensions and margins
    const margin = { top: 40, right: 60, bottom: 60, left: 80 };
    const width = 960 - margin.left - margin.right;
    const height = 500 - margin.top - margin.bottom;

    // Parse the date format correctly
    const parseDate = d3.timeParse("%Y-%m-%d");
    const formatDate = d3.timeFormat("%B %Y");

    // Set up the scales with padding
    const xScale = d3.scaleTime()
    .domain([
        d3.min(Object.values(data).flatMap(mayorData => mayorData.map(d => parseDate(d.Date)))),
        new Date('2025-12-16') // Set end date to December 16, 2024
    ])
    .range([0, width]);

    const yScale = d3.scaleLinear()
        .domain([0, d3.max(Object.values(data).flatMap(mayorData => mayorData.map(d => d["Total Complaints"]))) * 1.1])
        .nice()
        .range([height, 0]);

    // Set up the SVG element
    const svg = d3.select('#histogram')
        .append('svg')
        .attr('width', width + margin.left + margin.right)
        .attr('height', height + margin.top + margin.bottom)
        .append('g')
        .attr('transform', `translate(${margin.left},${margin.top})`);

    // Add title
    svg.append("text")
        .attr("x", width / 2)
        .attr("y", -margin.top / 2)
        .attr("text-anchor", "middle")
        .style("font-size", "18px")
        .style("font-weight", "bold")
        .text("CCRB Complaints by Mayor (2010-2024)");

    // Add axes and labels
    addAxes(svg, xScale, yScale, width, height, margin);

    // Calculate bar width and define colors
    const totalBars = Object.values(data).flatMap(mayorData => mayorData).length;
    const barWidth = width / totalBars * 0.8;

    const mayorColors = {
        "Bloomberg": "#FFC107",
        "de Blasio": "#4CAF50",
        "Adams": "#2196F3"
    };

    // Create tooltip
    const tooltip = createTooltip();

    // Add bars and interactions
    addBarsAndInteractions(svg, data, xScale, yScale, height, barWidth, mayorColors, parseDate, formatDate, tooltip);

    // Add legend
    addLegend(svg, mayorColors, width);
}

function addAxes(svg, xScale, yScale, width, height, margin) {
    // Add X axis
    svg.append('g')
        .attr('transform', `translate(0,${height})`)
        .call(d3.axisBottom(xScale)
            .ticks(d3.timeYear.every(1))
            .tickFormat(d3.timeFormat("%Y")))
        .selectAll('text')
        .style('text-anchor', 'end')
        .style('font-size', '12px')
        .attr('transform', 'rotate(-45) translate(-10, 0)')
        .style('font-weight', 'bold');

    // Add X axis label
    svg.append("text")
        .attr("x", width / 2)
        .attr("y", height + margin.bottom - 5)
        .attr("text-anchor", "middle")
        .style("font-size", "14px")
        .style("font-weight", "bold")
        .text("Year");

    // Add Y axis with grid lines
    svg.append('g')
        .call(d3.axisLeft(yScale)
            .ticks(10)
            .tickFormat(d => d.toLocaleString()))
        .call(g => g.selectAll(".tick line")
            .clone()
            .attr("x2", width)
            .attr("stroke-opacity", 0.1));

    // Add Y axis label
    svg.append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", -margin.left + 30)
        .attr("x", -(height / 2))
        .attr("text-anchor", "middle")
        .style("font-size", "14px")
        .style("font-weight", "bold")
        .text("Total Cases Closed");
}

function createTooltip() {
    return d3.select("body").append("div")
        .attr("class", "tooltip")
        .style("opacity", 0);
}

function addBarsAndInteractions(svg, data, xScale, yScale, height, barWidth, mayorColors, parseDate, formatDate, tooltip) {
    Object.keys(data).forEach(function(mayor) {
        svg.selectAll('.bar-' + mayor.replace(/\s+/g, '-'))
            .data(data[mayor])
            .enter().append('rect')
            .attr('class', 'bar-' + mayor.replace(/\s+/g, '-'))
            .attr('x', d => xScale(parseDate(d.Date)) - barWidth/2)
            .attr('width', barWidth)
            .attr('y', height)
            .attr('height', 0)
            .attr('fill', mayorColors[mayor])
            .attr('stroke', '#fff')
            .attr('stroke-width', 1)
            .transition()
            .duration(1000)
            .delay((d, i) => i * 10)
            .attr('y', d => yScale(d["Total Complaints"]))
            .attr('height', d => height - yScale(d["Total Complaints"]));

        // Add hover effects
        addHoverEffects(svg, mayor, mayorColors, tooltip, parseDate, formatDate);
        
    });
}

function addHoverEffects(svg, mayor, mayorColors, tooltip, parseDate, formatDate) {
    svg.selectAll('.bar-' + mayor.replace(/\s+/g, '-'))
        .on('mouseover', function(event, d) {
            d3.select(this)
                .transition()
                .duration(200)
                .attr('fill', d3.color(mayorColors[mayor]).brighter(0.2));

            tooltip.transition()
                .duration(200)
                .style("opacity", 1);
                
            tooltip.html(`
                <strong>${mayor}</strong><br>
                <strong>Date:</strong> ${formatDate(parseDate(d.Date))}<br>
                <strong>Total Complaints:</strong> ${d["Total Complaints"].toLocaleString()}<br>
                <strong>Substantiated:</strong> ${(d["Substantiated"] / d["Total Complaints"] * 100).toFixed(1)}%
            `)
                .style("left", (event.pageX + 10) + "px")
                .style("top", (event.pageY - 28) + "px");
        })
        .on('mouseout', function() {
            d3.select(this)
                .transition()
                .duration(200)
                .attr('fill', mayorColors[mayor]);

            tooltip.transition()
                .duration(500)
                .style("opacity", 0);
        });
}

function addLegend(svg, mayorColors, width) {
    const legend = svg.append("g")
        .attr("class", "legend")
        .attr("transform", `translate(${width - 120}, 0)`);

    Object.entries(mayorColors).forEach(([mayor, color], i) => {
        const legendRow = legend.append("g")
            .attr("transform", `translate(0, ${i * 20})`);

        legendRow.append("rect")
            .attr("width", 15)
            .attr("height", 15)
            .attr("fill", color);

        legendRow.append("text")
            .attr("x", 20)
            .attr("y", 12)
            .style("font-size", "12px")
            .text(mayor);
    });
}

// Initialize all visualizations
drawSubstantiationPieChart('Bloomberg');
drawSubstantiationPieChart('de Blasio');
drawSubstantiationPieChart('Adams');
drawLegend();
drawGrid();
drawTotalComplaintsChart();
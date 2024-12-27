//JS/D3

const data = [
    {
        administration: 'Bloomberg',
        totalComplaints: 218933,
        substantiatedRate: 2.97,
        unsubstantiatedRate: 97.03,
        substantiated: Math.round(218933 * (2.97 / 100)),
        unsubstantiated: Math.round(218933 * (97.03 / 100)),
        substantiations: [
            { label: 'Substantiated (Charges)', value: 84.88, cases: 5522 },
            { label: 'Substantiated (Command Discipline A)', value: 0.00, cases: 0 },
            { label: 'Substantiated (Command Discipline B)', value: 0.00, cases: 0 },
            { label: 'Substantiated (Command Discipline)', value: 15.12, cases: 984 },
            { label: 'Substantiated (Formal Training)', value: 0.00, cases: 0 }
        ],
        complaintTypes: [
            {
                type: 'Force',
                total: 67494,
                substantiatedRate: 1.13,
                unsubstantiatedRate: 98.87,
                substantiated: Math.round(67494 * (1.13 / 100)),
                unsubstantiated: Math.round(67494 * (98.87 / 100))
            },
            {
                type: 'Abuse of Authority',
                total: 104933,
                substantiatedRate: 4.61,
                unsubstantiatedRate: 95.39,
                substantiated: Math.round(104933 * (4.61 / 100)),
                unsubstantiated: Math.round(104933 * (95.39 / 100))
            },
            {
                type: 'Discourtesy',
                total: 37320,
                substantiatedRate: 2.14,
                unsubstantiatedRate: 97.86,
                substantiated: Math.round(37320 * (2.14 / 100)),
                unsubstantiated: Math.round(37320 * (97.86 / 100))
            },
            {
                type: 'Offensive Language',
                total: 6209,
                substantiatedRate: 1.76,
                unsubstantiatedRate: 98.24,
                substantiated: Math.round(6209 * (1.76 / 100)),
                unsubstantiated: Math.round(6209 * (98.24 / 100))
            }
        ]
    },
    {
        administration: 'de Blasio',
        totalComplaints: 102913,
        substantiatedRate: 4.29,
        unsubstantiatedRate: 95.71,
        substantiated: Math.round(102913 * (4.29 / 100)),
        unsubstantiated: Math.round(102913 * (95.71 / 100)),
        substantiations: [
            { label: 'Substantiated (Charges)', value: 37.29, cases: 1646 },
            { label: 'Substantiated (Command Discipline A)', value: 33.17, cases: 1464 },
            { label: 'Substantiated (Command Discipline B)', value: 25.37, cases: 1120 },
            { label: 'Substantiated (Command Discipline)', value: 4.17, cases: 184 },
            { label: 'Substantiated (Formal Training)', value: 0.00, cases: 0 }
        ],
        complaintTypes: [
            {
                type: 'Force',
                total: 27371,
                substantiatedRate: 2.52,
                unsubstantiatedRate: 97.48,
                substantiated: Math.round(27371 * (2.52 / 100)),
                unsubstantiated: Math.round(27371 * (97.48 / 100))
            },
            {
                type: 'Abuse of Authority',
                total: 56129,
                substantiatedRate: 5.43,
                unsubstantiatedRate: 94.57,
                substantiated: Math.round(56129 * (5.43 / 100)),
                unsubstantiated: Math.round(56129 * (94.57 / 100))
            },
            {
                type: 'Discourtesy',
                total: 13070,
                substantiatedRate: 4.10,
                unsubstantiatedRate: 95.90,
                substantiated: Math.round(13070 * (4.10 / 100)),
                unsubstantiated: Math.round(13070 * (95.90 / 100))
            },
            {
                type: 'Offensive Language',
                total: 2873,
                substantiatedRate: 3.97,
                unsubstantiatedRate: 96.03,
                substantiated: Math.round(2873 * (3.97 / 100)),
                unsubstantiated: Math.round(2873 * (96.03 / 100))
            }
        ]
    },
    {
        administration: 'Adams',
        totalComplaints: 62530,
        substantiatedRate: 11.46,
        unsubstantiatedRate: 88.54,
        substantiated: Math.round(62530 * (11.46 / 100)),
        unsubstantiated: Math.round(62530 * (88.54 / 100)),
        substantiations: [
            { label: 'Substantiated (Charges)', value: 14.89, cases: 1067 },
            { label: 'Substantiated (Command Discipline A)', value: 65.64, cases: 4705 },
            { label: 'Substantiated (Command Discipline B)', value: 19.48, cases: 1396 },
            { label: 'Substantiated (Command Discipline)', value: 0.00, cases: 0 },
            { label: 'Substantiated (Formal Training)', value: 0.00, cases: 0 }
        ],
        complaintTypes: [
            {
                type: 'Force',
                total: 10415,
                substantiatedRate: 4.75,
                unsubstantiatedRate: 95.25,
                substantiated: Math.round(10415 * (4.75 / 100)),
                unsubstantiated: Math.round(10415 * (95.25 / 100))
            },
            {
                type: 'Abuse of Authority',
                total: 22704,
                substantiatedRate: 12.68,
                unsubstantiatedRate: 87.32,
                substantiated: Math.round(22704 * (12.68 / 100)),
                unsubstantiated: Math.round(22704 * (87.32 / 100))
            },
            {
                type: 'Discourtesy',
                total: 4030,
                substantiatedRate: 20.72,
                unsubstantiatedRate: 79.28,
                substantiated: Math.round(4030 * (20.72 / 100)),
                unsubstantiated: Math.round(4030 * (79.28 / 100))
            },
            {
                type: 'Offensive Language',
                total: 863,
                substantiatedRate: 15.53,
                unsubstantiatedRate: 84.47,
                substantiated: Math.round(863 * (15.53 / 100)),
                unsubstantiated: Math.round(863 * (84.47 / 100))
            }
        ]
    }
];

//BAR CHART

// Set up chart dimensions
const margin = { top: 40, right: 30, bottom: 60, left: 80 };
const width = 800 - margin.left - margin.right;
const height = 500 - margin.top - margin.bottom;

// Create SVG container with clipping path for animations
const svg = d3.select("#bar-chart")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", `translate(${margin.left},${margin.top})`);

// Add clipping path
svg.append("defs")
    .append("clipPath")
    .attr("id", "clip")
    .append("rect")
    .attr("width", width)
    .attr("height", height);

// Create tooltip with enhanced styling
const tooltip = d3.select("body")
    .append("div")
    .attr("class", "tooltip")
    .style("opacity", 0);

// Set up scales with nice round numbers
const x = d3.scaleBand()
    .domain(data.map(d => d.administration))
    .range([0, width])
    .padding(0.3);

const y = d3.scaleLinear()
    .domain([0, d3.max(data, d => d.totalComplaints) * 1.1]) // Add 10% padding
    .nice() // Round to nice numbers
    .range([height, 0]);

// Create grid lines
const yGrid = d3.axisLeft(y)
    .tickSize(-width)
    .tickFormat("")
    .ticks(8);

svg.append("g")
    .attr("class", "grid")
    .call(yGrid)
    .style("stroke", "#e0e0e0")
    .style("stroke-dasharray", "3,3");

// Create axes with enhanced styling
const xAxis = svg.append("g")
    .attr("transform", `translate(0,${height})`)
    .call(d3.axisBottom(x))
    .style("font-size", "12px");

const yAxis = svg.append("g")
    .call(d3.axisLeft(y)
        .tickFormat(d3.format(","))
        .ticks(8))
    .style("font-size", "12px");

// Add axis labels with enhanced styling
svg.append("text")
    .attr("class", "axis-label")
    .attr("x", width / 2)
    .attr("y", height + 40)
    .style("text-anchor", "middle")
    .style("font-size", "14px")
    .style("font-weight", "bold")
    .text("Administration");

svg.append("text")
    .attr("class", "axis-label")
    .attr("transform", "rotate(-90)")
    .attr("x", -height / 2)
    .attr("y", -60)
    .style("text-anchor", "middle")
    .style("font-size", "14px")
    .style("font-weight", "bold")
    .text("Number of Complaints");

// Create stacked data
const stackedData = data.map(d => ({
    administration: d.administration,
    segments: [
        {
            type: "substantiated",
            value: d.substantiated,
            y0: 0,
            y1: d.substantiated
        },
        {
            type: "unsubstantiated",
            value: d.unsubstantiated,
            y0: d.substantiated,
            y1: d.totalComplaints
        }
    ]
}));

// Create groups for each bar
const barGroups = svg.selectAll(".bar-group")
    .data(stackedData)
    .join("g")
    .attr("class", "bar-group")
    .attr("transform", d => `translate(${x(d.administration)},0)`);

// Add segments with enhanced interactions
barGroups.each(function(d) {
    const group = d3.select(this);
    
    group.selectAll("rect")
        .data(d.segments)
        .join("rect")
        .attr("class", d => d.type)
        .attr("x", 0)
        .attr("y", d => y(d.y1))
        .attr("width", x.bandwidth())
        .attr("height", d => y(d.y0) - y(d.y1))
        .style("fill", d => d.type === "substantiated" ? "#FFD700" : "#003DA5")
        .style("stroke", "white")
        .style("stroke-width", 1)
        .style("transition", "all 0.3s ease")
        .on("mouseover", function(event, d) {
            const parentData = this.parentNode.__data__;
            
            // Highlight effect
            d3.select(this)
                .style("opacity", 0.8)
                .style("stroke-width", 2);

            tooltip.transition()
                .duration(200)
                .style("opacity", 0.9);

            // Find original data for accurate percentages
            const originalData = data.find(item => item.administration === parentData.administration);
            const percentage = d.type === "substantiated" 
                ? originalData.substantiatedRate 
                : originalData.unsubstantiatedRate;
            
            tooltip.html(`
                <strong>${parentData.administration} Administration</strong><br/>
                ${d.type.charAt(0).toUpperCase() + d.type.slice(1)}: ${d.value.toLocaleString()} (${percentage.toFixed(1)}%)<br/>
                Total Complaints: ${originalData.totalComplaints.toLocaleString()}
            `)
                .style("left", (event.pageX + 10) + "px")
                .style("top", (event.pageY - 28) + "px");
        })
        .on("mouseout", function() {
            // Remove highlight
            d3.select(this)
                .style("opacity", 1)
                .style("stroke-width", 1);

            tooltip.transition()
                .duration(500)
                .style("opacity", 0);
        });
});

// Add legend with enhanced styling
const legend = svg.append("g")
    .attr("class", "legend")
    .attr("transform", `translate(${width - 160}, ${margin.top})`);

const legendData = [
    { label: "Substantiated", color: "#FFD700" },
    { label: "Unsubstantiated", color: "#003DA5" }
];

const legendItems = legend.selectAll(".legend-item")
    .data(legendData)
    .join("g")
    .attr("class", "legend-item")
    .attr("transform", (d, i) => `translate(0, ${i * 25})`);

legendItems.append("rect")
    .attr("width", 18)
    .attr("height", 18)
    .attr("rx", 2)
    .attr("ry", 2)
    .style("fill", d => d.color)
    .style("stroke", "white")
    .style("stroke-width", 1);

legendItems.append("text")
    .attr("x", 24)
    .attr("y", 14)
    .style("font-size", "12px")
    .text(d => d.label);




// DONUT CHART
// Create a flex container for the charts
d3.select("#rates-charts")
    .style("display", "flex")
    .style("flex-direction", "column")
    .style("align-items", "center");

// Create a row container for the charts
const chartsRow = d3.select("#rates-charts")
    .append("div")
    .style("display", "flex")
    .style("flex-direction", "row")
    .style("justify-content", "center")
    .style("width", "100%")
    .style("margin", "20px 0");

function drawSubstantiationPieChart(admin) {
    const width = 280;  // Slightly smaller to ensure fit
    const height = 280;
    const radius = Math.min(width, height) / 2;

    // Create a container div for each chart
    const chartDiv = chartsRow
        .append("div")
        .attr("class", "chart-container")
        .style("flex", "0 1 auto")
        .style("margin", "0 10px");

    const svg = chartDiv
        .append("svg")
        .attr("width", width)
        .attr("height", height)
        .append("g")
        .attr("transform", `translate(${width / 2}, ${height / 2})`);

    // Find substantiations data for the selected administration
    const substantiations = data.find(d => d.administration === admin).substantiations;

    const pie = d3.pie()
        .value(d => d.value);

    const arc = d3.arc()
        .innerRadius(radius * 0.6)
        .outerRadius(radius);

    // Custom Colors Mapping
    const customColors = {
        "Charges": "#FF0000",
        "Command Discipline A": "#FFEB3B",
        "Command Discipline B": "#FF5900",
        "Command Discipline": "#008000"
    };

    // Create pie slices
    svg.selectAll(".arc")
        .data(pie(substantiations))
        .enter()
        .append("g")
        .attr("class", "arc")
        .append("path")
        .attr("d", arc)
        .attr("fill", d => customColors[d.data.label.split('(')[1].replace(')', '')] || "#CCCCCC")
        .on("mouseover", function (event, d) {
            tooltip.transition()
                .duration(200)
                .style("opacity", 0.9);
            tooltip.html(d.data.label.split('(')[1].replace(')', ''))
                .style("left", (event.pageX) + "px")
                .style("top", (event.pageY - 28) + "px");
        })
        .on("mouseout", function () {
            tooltip.transition()
                .duration(500)
                .style("opacity", 0);
        });

    // Add percentages as labels
    svg.selectAll(".label")
        .data(pie(substantiations))
        .enter()
        .append("text")
        .filter(d => d.data.value > 0)
        .attr("transform", d => `translate(${arc.centroid(d)})`)
        .attr("text-anchor", "middle")
        .attr("dy", "0.35em")
        .style("fill", "#333")  // Match your text color
        .style("font-size", "12px")
        .text(d => `${d.data.value}%`);

    // Add mayor's name in the center
    svg.append("text")
        .attr("text-anchor", "middle")
        .attr("dy", "0.35em")
        .style("font-size", "1.2em")
        .style("font-weight", "bold")
        .style("fill", "#003DA5")  // Match your brand color
        .text(admin);
}

function drawLegend() {
    // Create legend container
    const legendDiv = d3.select("#legend")
        .style("width", "100%")
        .style("text-align", "center")
        .style("margin-bottom", "20px");

    const legendData = [
        ...new Set(
            data.flatMap(d =>
                d.substantiations
                    .filter(item => item.value > 0)
                    .map(item => item.label.split('(')[1].replace(')', ''))
            )
        ),
    ];

    const legendWidth = 400;
    const itemsPerRow = 2;
    const legendHeight = Math.ceil(legendData.length / itemsPerRow) * 30;
    const spacingX = 150;
    const spacingY = 30;

    const customColors = {
        "Charges": "#FF0000",
        "Command Discipline A": "#FFEB3B",
        "Command Discipline B": "#FF5900",
        "Command Discipline": "#008000"
    };

    const legend = legendDiv
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
        .attr("transform", (d, i) => `translate(${(i % itemsPerRow) * spacingX}, ${Math.floor(i / itemsPerRow) * spacingY})`)
        .each(function (d, i) {
            d3.select(this)
                .append("rect")
                .attr("x", 0)
                .attr("y", 0)
                .attr("width", 15)
                .attr("height", 15)
                .attr("fill", customColors[d] || "#CCCCCC");

            d3.select(this)
                .append("text")
                .attr("x", 20)
                .attr("y", 12)
                .text(d)
                .style("font-size", "12px")
                .style("fill", "#333")
                .attr("alignment-baseline", "middle");
        });
}

// Initialize everything
function initializeCharts() {
    // First draw the legend
    drawLegend();
    
    // Then draw all charts
    data.forEach(d => drawSubstantiationPieChart(d.administration));
}



//GRID VISUALIZATION


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
(function() {
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
        new Date('2024-12-16') // Set end date to December 16, 2024
    ])
    .range([0, width]);

    const yScale = d3.scaleLinear()
        .domain([0, d3.max(Object.values(data).flatMap(mayorData => mayorData.map(d => d["Total Complaints"]))) * 1.1])
        .nice()
        .range([height, 0]);

    // Set up the SVG element
    const svg = d3.select('#monthly-histogram')
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
})();

//LINE GRAPH
// Load and process the data
// Wait for the DOM to be fully loaded
(function() {
    document.addEventListener('DOMContentLoaded', function() {
        d3.json('https://raw.githubusercontent.com/thomagin/Fagin_CCRB/main/data/monthmayors.json')
            .then(createLineChart)
            .catch(error => console.error("Error loading the data:", error));
    });

    function createLineChart(data) {
        // Debug log to check data structure
        console.log("Raw data:", data);

        // Set up chart dimensions and margins
        const margin = { top: 40, right: 120, bottom: 60, left: 80 }; // Increased right margin
        const width = 960 - margin.left - margin.right;
        const height = 500 - margin.top - margin.bottom;

    // Parse the date format correctly
    const parseDate = d3.timeParse("%Y-%m-%d");
    const formatDate = d3.timeFormat("%B %Y");

    // Define mayor colors (matching exact case from data)
    const mayorColors = {
        "Bloomberg": "#FFC107",
        "de Blasio": "#4CAF50",
        "Adams": "#2196F3"
    };

    // Combine and process all mayor data with correct case
    const allData = [];
    if (data.Bloomberg) allData.push(...data.Bloomberg.map(d => ({ ...d, mayor: "Bloomberg" })));
    if (data["de Blasio"]) allData.push(...data["de Blasio"].map(d => ({ ...d, mayor: "de Blasio" })));
    if (data.Adams) allData.push(...data.Adams.map(d => ({ ...d, mayor: "Adams" })));

    // Process dates and calculate rates
    allData.forEach(d => {
        d.Date = parseDate(d.Date);
        d.SubstantiationRate = (d.Substantiated / d["Total Complaints"]) * 100;
    });

    console.log("Processed data:", allData);

        // Set up scales
        const xScale = d3.scaleTime()
            .domain([
                d3.min(allData, d => d.Date),
                new Date('2024-12-31') // Changed to end of 2024
            ])
            .range([0, width]);

    const yScale = d3.scaleLinear()
        .domain([0, d3.max(allData, d => d.SubstantiationRate)])
        .nice()
        .range([height, 0]);

    // Set up the SVG element
    const svg = d3.select('#monthly-line-chart')
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
        .text("CCRB Substantiation Rate by Mayor (2010-2024)");

    // Add axes
    addAxes(svg, xScale, yScale, width, height, margin);

    // Define line generator
    const line = d3.line()
        .x(d => xScale(d.Date))
        .y(d => yScale(d.SubstantiationRate))
        .curve(d3.curveMonotoneX);

    // Create tooltip
    const tooltip = createTooltip();

    // Group data by mayor
    const mayorData = d3.group(allData, d => d.mayor);

    // Add lines for each mayor
    mayorData.forEach((data, mayor) => {
        // Add the line
        svg.append("path")
            .datum(data)
            .attr("fill", "none")
            .attr("stroke", mayorColors[mayor])
            .attr("stroke-width", 2)
            .attr("d", line);

        // Add dots for hover interaction
        svg.selectAll(`.dot-${mayor.replace(/\s+/g, '-')}`)
            .data(data)
            .enter()
            .append("circle")
            .attr("class", `dot-${mayor.replace(/\s+/g, '-')}`)
            .attr("cx", d => xScale(d.Date))
            .attr("cy", d => yScale(d.SubstantiationRate))
            .attr("r", 4)
            .attr("fill", mayorColors[mayor])
            .style("opacity", 0)
            .on("mouseover", function(event, d) {
                d3.select(this).style("opacity", 1);
                tooltip.transition()
                    .duration(200)
                    .style("opacity", 1);
                tooltip.html(`
                    <strong>${mayor}</strong><br>
                    <strong>Date:</strong> ${formatDate(d.Date)}<br>
                    <strong>Substantiation Rate:</strong> ${d.SubstantiationRate.toFixed(1)}%<br>
                    <strong>Substantiated Cases:</strong> ${d.Substantiated}<br>
                    <strong>Total Cases:</strong> ${d["Total Complaints"]}
                `)
                    .style("left", (event.pageX + 10) + "px")
                    .style("top", (event.pageY - 28) + "px");
            })
            .on("mouseout", function() {
                d3.select(this).style("opacity", 0);
                tooltip.transition()
                    .duration(500)
                    .style("opacity", 0);
            });
    });

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
            .tickFormat(d => d.toFixed(1) + '%'))
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
        .text("Substantiation Rate (%)");
}

function createTooltip() {
    return d3.select("body").append("div")
        .attr("class", "tooltip")
        .style("opacity", 0);
}


function addLegend(svg, mayorColors, width) {
    const legend = svg.append("g")
        .attr("class", "legend")
        .attr("transform", `translate(${width + 30}, 0)`); // Shifted legend right

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
})();

///FADO CHARTS

// Wrap all functionality in a namespace to avoid conflicts
// Wrap all functionality in a namespace to avoid conflicts
const ComplaintsVisualization = {
    init: function() {
        this.createVisualization();
        this.addResizeHandler();
    },

    createVisualization: function() {
        // Clear existing visualization
        // Ensure tooltip exists
if (d3.select('#complaints-small-multiples-tooltip').empty()) {
    d3.select('#complaints-small-multiples')
        .append('div')
        .attr('id', 'complaints-small-multiples-tooltip');
}
        d3.select('#complaints-small-multiples-vis').selectAll('*').remove();

        // Adjust dimensions to accommodate legend
        const width = Math.min(1200, window.innerWidth - 40);
        const height = 500;
        const margin = { top: 100, right: 40, bottom: 40, left: 200 };
        const innerWidth = width - margin.left - margin.right;
        const innerHeight = height - margin.top - margin.bottom;

        // Create SVG
        const svg = d3.select('#complaints-small-multiples-vis')
            .append('svg')
            .attr('width', width)
            .attr('height', height)
            .attr('viewBox', [0, 0, width, height])
            .attr('class', 'complaints-multiples-svg');

        // Create scales
        const complaintTypes = ['Force', 'Abuse of Authority', 'Discourtesy', 'Offensive Language'];
        const rowScale = d3.scaleBand()
            .domain(complaintTypes)
            .range([0, innerHeight])
            .padding(0.2);

        const administrations = ['Bloomberg', 'de Blasio', 'Adams'];
        const colScale = d3.scaleBand()
            .domain(administrations)
            .range([0, innerWidth])
            .padding(0.2);

        const colorScale = d3.scaleSequential(d3.interpolateBlues)
            .domain([0, 25]);

        // Size scale
        const maxComplaints = d3.max(data, d => d3.max(d.complaintTypes, c => c.total));
        const sizeScale = d3.scaleSqrt()
            .domain([0, maxComplaints])
            .range([0, Math.min(rowScale.bandwidth(), colScale.bandwidth())]);

        // Create main group
        const g = svg.append('g')
            .attr('class', 'complaints-multiples-main')
            .attr('transform', `translate(${margin.left},${margin.top})`);

        // Add row labels
        g.selectAll('.complaints-multiples-row-label')
            .data(complaintTypes)
            .join('text')
            .attr('class', 'complaints-multiples-row-label')
            .attr('x', -10)
            .attr('y', d => rowScale(d) + rowScale.bandwidth() / 2)
            .attr('text-anchor', 'end')
            .text(d => d);

        // Add column labels
        g.selectAll('.complaints-multiples-col-label')
            .data(administrations)
            .join('text')
            .attr('class', 'complaints-multiples-col-label')
            .attr('x', d => colScale(d) + colScale.bandwidth() / 2)
            .attr('y', -20)
            .attr('text-anchor', 'middle')
            .text(d => d);

        // Create tooltip
        const tooltip = d3.select('#complaints-small-multiples-tooltip');

        // Create cells
        complaintTypes.forEach(type => {
            data.forEach(admin => {
                const complaint = admin.complaintTypes.find(c => c.type === type);
                const size = sizeScale(complaint.total);
                
                const cell = g.append('g')
                    .attr('class', 'complaints-multiples-cell-group')
                    .attr('transform', `translate(
                        ${colScale(admin.administration) + colScale.bandwidth() / 2},
                        ${rowScale(type) + rowScale.bandwidth() / 2}
                    )`);

                // Add square
                cell.append('rect')
                    .attr('class', 'complaints-multiples-cell')
                    .attr('x', -size / 2)
                    .attr('y', -size / 2)
                    .attr('width', size)
                    .attr('height', size)
                    .attr('fill', colorScale(complaint.substantiatedRate))
                    .attr('stroke', '#fff')
                    .attr('stroke-width', 2)
                    .on('mouseover', function(event) {
                        d3.select(this)
                            .attr('stroke', '#003DA5')
                            .attr('stroke-width', 3);

                        tooltip
                            .style('opacity', 1)
                            .style('visibility', 'visible')
                            .style('left', event.clientX + 'px')
                            .style('top', event.clientY + 'px')
                            .html(`
                                <strong>${type} under ${admin.administration}</strong>
                                Total Complaints: ${complaint.total.toLocaleString()}<br>
                                Substantiated: ${complaint.substantiatedRate.toFixed(1)}%<br>
                                Substantiated Cases: ${complaint.substantiated.toLocaleString()}<br>
                                Unsubstantiated: ${complaint.unsubstantiatedRate.toFixed(1)}%
                            `);
                    })
                    .on('mousemove', function(event) {
                        tooltip
                            .style('left', event.clientX + 'px')
                            .style('top', event.clientY + 'px');
                    })
                    .on('mouseout', function() {
                        d3.select(this)
                            .attr('stroke', '#fff')
                            .attr('stroke-width', 2);
                        tooltip
                            .style('opacity', 0)
                            .style('visibility', 'hidden');
                    });

                // Add value label if square is large enough
                if (size > 40) {
                    cell.append('text')
                        .attr('class', 'complaints-multiples-value-label')
                        .attr('text-anchor', 'middle')
                        .attr('dy', '0.35em')
                        .text(`${complaint.substantiatedRate.toFixed(1)}%`);
                }
            });
        });

        this.createLegends(svg, margin, height, colorScale, sizeScale);
    },

    createLegends: function(svg, margin, height, colorScale, sizeScale) {
        // Move legend to top
        const legendGroup = svg.append('g')
            .attr('class', 'complaints-multiples-legend')
            .attr('transform', `translate(${margin.left}, 30)`);

        // Color legend setup
        const legendWidth = 200;
        const legendHeight = 15;

        // Create gradient with unique ID
        const gradientId = 'complaints-multiples-gradient';
        const defs = svg.append('defs');
        const linearGradient = defs.append('linearGradient')
            .attr('id', gradientId)
            .attr('x1', '0%')
            .attr('x2', '100%');

        // Create more color stops for smoother gradient
        d3.range(0, 31).forEach(d => {
            linearGradient.append('stop')
                .attr('offset', `${(d/30 * 100)}%`)
                .attr('stop-color', colorScale(d * 15/30));
        });

        // Add legends with unique classes
        this.addColorLegend(legendGroup, legendWidth, legendHeight, gradientId);
        this.addSizeLegend(legendGroup, legendWidth, sizeScale);
    },

    addColorLegend: function(legendGroup, legendWidth, legendHeight, gradientId) {
        const colorLegend = legendGroup.append('g')
            .attr('class', 'complaints-multiples-color-legend');
        
        colorLegend.append('rect')
            .attr('width', legendWidth)
            .attr('height', legendHeight)
            .style('fill', `url(#${gradientId})`);

        const colorScale2 = d3.scaleLinear()
            .domain([0, 25])
            .range([0, legendWidth]);

        const colorAxis = d3.axisBottom(colorScale2)
            .ticks(5)
            .tickFormat(d => d + '%');

        colorLegend.append('g')
            .attr('transform', `translate(0,${legendHeight})`)
            .call(colorAxis);

        colorLegend.append('text')
            .attr('x', legendWidth / 2)
            .attr('y', -5)
            .attr('text-anchor', 'middle')
            .text('Substantiation Rate');
    },

    addSizeLegend: function(legendGroup, legendWidth, sizeScale) {
        const sizeLegend = legendGroup.append('g')
            .attr('class', 'complaints-multiples-size-legend')
            .attr('transform', `translate(${legendWidth + 50},0)`);

        const legendSizes = [1000, 5000, 10000].map(value => ({
            value: value,
            radius: sizeScale(value) / 2
        }));

        const sizeLegendGroups = sizeLegend.selectAll('g')
            .data(legendSizes)
            .join('g')
            .attr('transform', (d, i) => `translate(${i * 70},0)`);

        sizeLegendGroups.append('rect')
            .attr('x', d => -d.radius)
            .attr('y', d => -d.radius)
            .attr('width', d => d.radius * 2)
            .attr('height', d => d.radius * 2)
            .attr('fill', 'none')
            .attr('stroke', '#666')
            .attr('stroke-dasharray', '2,2');

        sizeLegendGroups.append('text')
            .attr('y', d => -d.radius - 5)
            .attr('text-anchor', 'middle')
            .text(d => d3.format(',')(d.value));
    },

    addResizeHandler: function() {
        window.addEventListener('resize', () => {
            this.createVisualization();
        });
    }
};

// Initialize the visualization
document.addEventListener('DOMContentLoaded', () => {
    ComplaintsVisualization.init();
});


// CHOKEHOLD RATE

const chokeholdData = {
    before: {
        rate: 1.09,
        complaints: 2293
    },
    after: {
        rate: 6.22,
        complaints: 1639
    }
};

// Create the visualization container
const container = d3.select('#visualization')
    .append('div')
    .attr('class', 'comparison-container');

// Before period box
const beforeBox = container.append('div')
    .attr('class', 'period-box')
    .html(`
        <div class="period-label">Before Eric Garner Incident</div>
        <div class="rate">${chokeholdData.before.rate}%</div>
        <div class="total-complaints">of ${chokeholdData.before.complaints.toLocaleString()} complaints substantiated</div>
    `);

// Arrow
const arrowContainer = container.append('div')
    .attr('class', 'arrow-container')
    .html(`
        <div class="arrow">→</div>
    `);

// After period box
const afterBox = container.append('div')
    .attr('class', 'period-box highlighted')
    .html(`
        <div class="period-label">After Eric Garner Incident</div>
        <div class="rate">${chokeholdData.after.rate}%</div>
        <div class="total-complaints">of ${chokeholdData.after.complaints.toLocaleString()} complaints substantiated</div>
    `);

// Add transition effects
d3.selectAll('.period-box')
    .style('opacity', 0)
    .transition()
    .duration(800)
    .style('opacity', 1);

d3.select('.arrow-container')
    .style('opacity', 0)
    .transition()
    .delay(400)
    .duration(800)
    .style('opacity', 1);

// BAR CHART YEARLY
// Set up dimensions
const yearlyMargin = { top: 40, right: 120, bottom: 60, left: 80 };
const yearlyWidth = 900 - yearlyMargin.left - yearlyMargin.right;
const yearlyHeight = 500 - yearlyMargin.top - yearlyMargin.bottom;

// Create SVG container
const yearlySvg = d3.select("#yearly-complaints-chart")
    .append("svg")
    .attr("width", yearlyWidth + yearlyMargin.left + yearlyMargin.right)
    .attr("height", yearlyHeight + yearlyMargin.top + yearlyMargin.bottom)
    .append("g")
    .attr("transform", `translate(${yearlyMargin.left},${yearlyMargin.top})`);

// Fetch data from GitHub
d3.json('https://raw.githubusercontent.com/thomagin/Fagin_CCRB/main/data/yearmayors.json')
    .then(function(yearlyData) {
    // Flatten the nested data structure
    const yearlyFlatData = [];
    Object.entries(yearlyData).forEach(([mayor, years]) => {
        years.forEach(yearData => {
            yearlyFlatData.push({
                year: yearData.Year,
                date: yearData.Date,
                mayor: mayor,
                substantiated: yearData.Substantiated,
                unsubstantiated: yearData.Unsubstantiated,
                total: yearData['Total Complaints']
            });
        });
    });

    // Sort by date
    yearlyFlatData.sort((a, b) => new Date(a.date) - new Date(b.date));

    // Set up scales
    const yearlyXScale = d3.scaleBand()
        .domain(yearlyFlatData.map(d => d.year))
        .range([0, yearlyWidth])
        .padding(0.3);

    const yearlyYScale = d3.scaleLinear()
        .domain([0, d3.max(yearlyFlatData, d => d.total) * 1.1])
        .nice()
        .range([yearlyHeight, 0]);

    // Create color scale for mayors
    const yearlyMayorColors = {
        "Bloomberg": "#003DA5",
        "de Blasio": "#FFD700",
        "Adams": "#FF4500"
    };

    // Add grid lines
    const yearlyYGrid = d3.axisLeft(yearlyYScale)
        .tickSize(-yearlyWidth)
        .tickFormat("")
        .ticks(8);

    yearlySvg.append("g")
        .attr("class", "grid")
        .call(yearlyYGrid)
        .style("stroke", "#e0e0e0")
        .style("stroke-dasharray", "3,3");

    // Add axes
    yearlySvg.append("g")
        .attr("transform", `translate(0,${yearlyHeight})`)
        .call(d3.axisBottom(yearlyXScale))
        .selectAll("text")
        .style("text-anchor", "end")
        .attr("dx", "-.8em")
        .attr("dy", ".15em")
        .attr("transform", "rotate(-45)");

    yearlySvg.append("g")
        .call(d3.axisLeft(yearlyYScale)
            .tickFormat(d3.format(","))
            .ticks(8));

    // Add labels
    yearlySvg.append("text")
        .attr("class", "axis-label")
        .attr("x", yearlyWidth / 2)
        .attr("y", yearlyHeight + 50)
        .style("text-anchor", "middle")
        .text("Year");

    yearlySvg.append("text")
        .attr("class", "axis-label")
        .attr("transform", "rotate(-90)")
        .attr("x", -yearlyHeight / 2)
        .attr("y", -60)
        .style("text-anchor", "middle")
        .text("Number of Complaints");

    // Create tooltip
    const yearlyTooltip = d3.select("body")
        .append("div")
        .attr("class", "tooltip")
        .style("opacity", 0);

    // Add stacked bars
    const yearlyBarGroups = yearlySvg.selectAll(".bar-group")
        .data(yearlyFlatData)
        .join("g")
        .attr("class", "bar-group")
        .attr("transform", d => `translate(${yearlyXScale(d.year)},0)`);

    // Add substantiated complaints
    yearlyBarGroups.append("rect")
        .attr("class", "substantiated")
        .attr("y", d => yearlyYScale(d.substantiated))
        .attr("height", d => yearlyHeight - yearlyYScale(d.substantiated))
        .attr("width", yearlyXScale.bandwidth())
        .style("fill", "#2F2F2F")
        .style("stroke", "white")
        .style("stroke-width", 1);

    // Add unsubstantiated complaints
    yearlyBarGroups.append("rect")
        .attr("class", "unsubstantiated")
        .attr("y", d => yearlyYScale(d.total))
        .attr("height", d => yearlyYScale(d.substantiated) - yearlyYScale(d.total))
        .attr("width", yearlyXScale.bandwidth())
        .style("fill", d => yearlyMayorColors[d.mayor])
        .style("stroke", "white")
        .style("stroke-width", 1);

    // Add hover interactions
    yearlyBarGroups.selectAll("rect")
        .on("mouseover", function(event, d) {
            const parentData = this.parentNode.__data__;
            const substantiationRate = (parentData.substantiated / parentData.total * 100).toFixed(1);
            
            d3.select(this)
                .style("opacity", 0.8)
                .style("stroke-width", 2);

            yearlyTooltip.transition()
                .duration(200)
                .style("opacity", 0.9);

            yearlyTooltip.html(`
                <strong>${parentData.year} (${parentData.mayor})</strong><br/>
                Total Complaints: ${parentData.total.toLocaleString()}<br/>
                Substantiated: ${parentData.substantiated.toLocaleString()} (${substantiationRate}%)<br/>
                Unsubstantiated: ${parentData.unsubstantiated.toLocaleString()}
            `)
                .style("left", (event.pageX + 10) + "px")
                .style("top", (event.pageY - 28) + "px");
        })
        .on("mouseout", function() {
            d3.select(this)
                .style("opacity", 1)
                .style("stroke-width", 1);

            yearlyTooltip.transition()
                .duration(500)
                .style("opacity", 0);
        });

    // Add legend
    const yearlyLegend = yearlySvg.append("g")
        .attr("class", "legend")
        .attr("transform", `translate(${yearlyWidth + 10}, 0)`);

    Object.entries(yearlyMayorColors).forEach(([mayor, color], i) => {
        const legendGroup = yearlyLegend.append("g")
            .attr("transform", `translate(0, ${i * 60})`);

        legendGroup.append("rect")
            .attr("width", 18)
            .attr("height", 18)
            .style("fill", color)
            .style("stroke", "white");

        legendGroup.append("text")
            .attr("x", 24)
            .attr("y", 14)
            .text(mayor);

        // Add substantiated indicator
        legendGroup.append("rect")
            .attr("width", 18)
            .attr("height", 9)
            .attr("y", 25)
            .style("fill", "#2F2F2F")
            .style("stroke", "white");

        legendGroup.append("text")
            .attr("x", 24)
            .attr("y", 32)
            .style("font-size", "12px")
            .text("Substantiated");

        // Add unsubstantiated indicator
        legendGroup.append("rect")
            .attr("width", 18)
            .attr("height", 9)
            .attr("y", 40)
            .style("fill", color)
            .style("stroke", "white");

        legendGroup.append("text")
            .attr("x", 24)
            .attr("y", 47)
            .style("font-size", "12px")
            .text("Unsubstantiated");
    });
});



// Initialize all visualizations
drawSubstantiationPieChart('Bloomberg');
drawSubstantiationPieChart('de Blasio');
drawSubstantiationPieChart('Adams');
drawLegend();
drawGrid();
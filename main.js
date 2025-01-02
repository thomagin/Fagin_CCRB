//JS/D3

const data = [
    {
      "administration": "Bloomberg",
      "period": {
        "start": "2002-01-01",
        "end": "2013-12-31"
      },
      "totalComplaints": 218933,
      "substantiatedRate": 2.97,
      "unsubstantiatedRate": 97.03,
      "substantiated": 6506,
      "unsubstantiated": 212427,
      "substantiations": [
        { "label": "Substantiated (Charges)", "value": 84.88, "cases": 5522 },
        { "label": "Substantiated (Command Discipline A)", "value": 0.00, "cases": 0 },
        { "label": "Substantiated (Command Discipline B)", "value": 0.00, "cases": 0 },
        { "label": "Substantiated (Command Discipline)", "value": 15.12, "cases": 984 },
        { "label": "Substantiated (Formal Training)", "value": 0.00, "cases": 0 }
      ],
      "complaintTypes": [
        {
          "type": "Force",
          "total": 67494,
          "substantiatedRate": 1.13,
          "unsubstantiatedRate": 98.87,
          "substantiated": 763,
          "unsubstantiated": 66731
        },
        {
          "type": "Abuse of Authority",
          "total": 104933,
          "substantiatedRate": 4.61,
          "unsubstantiatedRate": 95.39,
          "substantiated": 4837,
          "unsubstantiated": 100096
        },
        {
          "type": "Discourtesy",
          "total": 37320,
          "substantiatedRate": 2.14,
          "unsubstantiatedRate": 97.86,
          "substantiated": 799,
          "unsubstantiated": 36521
        },
        {
          "type": "Offensive Language",
          "total": 6209,
          "substantiatedRate": 1.76,
          "unsubstantiatedRate": 98.24,
          "substantiated": 109,
          "unsubstantiated": 6100
        }
      ],
      "demographics": [
        {
          "race": "Hispanic",
          "gender": "Male/Man",
          "rate": 3.85,
          "total": 29278,
          "substantiated": 1127
        },
        {
          "race": "Hispanic",
          "gender": "Female/Woman",
          "rate": 2.34,
          "total": 8246,
          "substantiated": 193
        },
        {
          "race": "Black",
          "gender": "Male/Man",
          "rate": 4.32,
          "total": 70618,
          "substantiated": 3050
        },
        {
          "race": "Black",
          "gender": "Female/Woman",
          "rate": 2.62,
          "total": 19825,
          "substantiated": 519
        },
        {
          "race": "White",
          "gender": "Male/Man",
          "rate": 3.59,
          "total": 14977,
          "substantiated": 537
        },
        {
          "race": "White",
          "gender": "Female/Woman",
          "rate": 3.56,
          "total": 4940,
          "substantiated": 176
        },
        {
          "race": "Asian",
          "gender": "Male/Man",
          "rate": 3.57,
          "total": 2354,
          "substantiated": 84
        },
        {
          "race": "Asian",
          "gender": "Female/Woman",
          "rate": 1.81,
          "total": 552,
          "substantiated": 10
        }
      ]
    },
    {
      "administration": "de Blasio",
      "period": {
        "start": "2014-01-01",
        "end": "2021-12-31"
      },
      "totalComplaints": 102913,
      "substantiatedRate": 4.29,
      "unsubstantiatedRate": 95.71,
      "substantiated": 4414,
      "unsubstantiated": 98499,
      "substantiations": [
        { "label": "Substantiated (Charges)", "value": 37.29, "cases": 1646 },
        { "label": "Substantiated (Command Discipline A)", "value": 33.17, "cases": 1464 },
        { "label": "Substantiated (Command Discipline B)", "value": 25.37, "cases": 1120 },
        { "label": "Substantiated (Command Discipline)", "value": 4.17, "cases": 184 },
        { "label": "Substantiated (Formal Training)", "value": 0.00, "cases": 0 }
      ],
      "complaintTypes": [
        {
          "type": "Force",
          "total": 27371,
          "substantiatedRate": 2.52,
          "unsubstantiatedRate": 97.48,
          "substantiated": 690,
          "unsubstantiated": 26681
        },
        {
          "type": "Abuse of Authority",
          "total": 56129,
          "substantiatedRate": 5.43,
          "unsubstantiatedRate": 94.57,
          "substantiated": 3048,
          "unsubstantiated": 53081
        },
        {
          "type": "Discourtesy",
          "total": 13070,
          "substantiatedRate": 4.10,
          "unsubstantiatedRate": 95.90,
          "substantiated": 536,
          "unsubstantiated": 12534
        },
        {
          "type": "Offensive Language",
          "total": 2873,
          "substantiatedRate": 3.97,
          "unsubstantiatedRate": 96.03,
          "substantiated": 114,
          "unsubstantiated": 2759
        }
      ],
      "demographics": [
        {
          "race": "Hispanic",
          "gender": "Male/Man",
          "rate": 5.09,
          "total": 13896,
          "substantiated": 708
        },
        {
          "race": "Hispanic",
          "gender": "Female/Woman",
          "rate": 3.05,
          "total": 3875,
          "substantiated": 118
        },
        {
          "race": "Black",
          "gender": "Male/Man",
          "rate": 5.98,
          "total": 30109,
          "substantiated": 1800
        },
        {
          "race": "Black",
          "gender": "Female/Woman",
          "rate": 3.26,
          "total": 9001,
          "substantiated": 293
        },
        {
          "race": "White",
          "gender": "Male/Man",
          "rate": 5.35,
          "total": 6785,
          "substantiated": 363
        },
        {
          "race": "White",
          "gender": "Female/Woman",
          "rate": 3.18,
          "total": 2826,
          "substantiated": 90
        },
        {
          "race": "Asian",
          "gender": "Male/Man",
          "rate": 5.61,
          "total": 1621,
          "substantiated": 91
        },
        {
          "race": "Asian",
          "gender": "Female/Woman",
          "rate": 0.68,
          "total": 440,
          "substantiated": 3
        }
      ]
    },
    {
      "administration": "Adams",
      "period": {
        "start": "2022-01-01",
        "end": "2024-12-16"
      },
      "totalComplaints": 62530,
      "substantiatedRate": 11.46,
      "unsubstantiatedRate": 88.54,
      "substantiated": 7168,
      "unsubstantiated": 55362,
      "substantiations": [
        { "label": "Substantiated (Charges)", "value": 14.89, "cases": 1067 },
        { "label": "Substantiated (Command Discipline A)", "value": 65.64, "cases": 4705 },
        { "label": "Substantiated (Command Discipline B)", "value": 19.48, "cases": 1396 },
        { "label": "Substantiated (Command Discipline)", "value": 0.00, "cases": 0 },
        { "label": "Substantiated (Formal Training)", "value": 0.00, "cases": 0 }
      ],
      "complaintTypes": [
        {
          "type": "Force",
          "total": 10415,
          "substantiatedRate": 4.75,
          "unsubstantiatedRate": 95.25,
          "substantiated": 495,
          "unsubstantiated": 9920
        },
        {
          "type": "Abuse of Authority",
          "total": 22704,
          "substantiatedRate": 12.68,
          "unsubstantiatedRate": 87.32,
          "substantiated": 2879,
          "unsubstantiated": 19825
        },
        {
          "type": "Discourtesy",
          "total": 4030,
          "substantiatedRate": 20.72,
          "unsubstantiatedRate": 79.28,
          "substantiated": 835,
          "unsubstantiated": 3195
        },
        {
          "type": "Offensive Language",
          "total": 863,
          "substantiatedRate": 15.53,
          "unsubstantiatedRate": 84.47,
          "substantiated": 134,
          "unsubstantiated": 729
        }
      ],
      "demographics": [
        {
          "race": "Hispanic",
          "gender": "Male/Man",
          "rate": 16.95,
          "total": 3722,
          "substantiated": 631
        },
        {
          "race": "Hispanic",
          "gender": "Female/Woman",
          "rate": 9.48,
          "total": 1571,
          "substantiated": 149
        },
        {
          "race": "Black",
          "gender": "Male/Man",
          "rate": 14.65,
          "total": 9458,
          "substantiated": 1386
        },
        {
          "race": "Black",
          "gender": "Female/Woman",
          "rate": 10.76,
          "total": 3670,
          "substantiated": 395
        },
        {
          "race": "White",
          "gender": "Male/Man",
          "rate": 12.24,
          "total": 1895,
          "substantiated": 232
        },
        {
          "race": "White",
          "gender": "Female/Woman",
          "rate": 9.74,
          "total": 1098,
          "substantiated": 107
        },
        {
          "race": "Asian",
          "gender": "Male/Man",
          "rate": 20.27,
          "total": 513,
          "substantiated": 104
        },
        {
          "race": "Asian",
          "gender": "Female/Woman",
          "rate": 19.35,
          "total": 279,
          "substantiated": 54
        }
      ]
    }
  ]

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

function createLineChart(data) {
    // Set up dimensions
    const margin = { top: 40, right: 120, bottom: 60, left: 80 };
    const container = document.querySelector('.chart-sticky-container');
    const width = container.clientWidth - margin.left - margin.right;
    const height = container.clientHeight - margin.top - margin.bottom;

    // Parse dates and calculate rates
    const parseDate = d3.timeParse("%Y-%m-%d");
    const formatDate = d3.timeFormat("%B %Y");

    // Define mayor colors
    const mayorColors = {
        "Bloomberg": "#FFC107",
        "de Blasio": "#4CAF50",
        "Adams": "#2196F3"
    };

    // Process data
    const allData = [];
    if (data.Bloomberg) allData.push(...data.Bloomberg.map(d => ({ ...d, mayor: "Bloomberg" })));
    if (data["de Blasio"]) allData.push(...data["de Blasio"].map(d => ({ ...d, mayor: "de Blasio" })));
    if (data.Adams) allData.push(...data.Adams.map(d => ({ ...d, mayor: "Adams" })));

    allData.forEach(d => {
        d.Date = parseDate(d.Date);
        d.SubstantiationRate = (d.Substantiated / d["Total Complaints"]) * 100;
    });

    // Set up SVG
    const svg = d3.select('.chart-sticky-container')
        .append('svg')
        .attr('width', width + margin.left + margin.right)
        .attr('height', height + margin.top + margin.bottom)
        .append('g')
        .attr('transform', `translate(${margin.left},${margin.top})`);

    // Set up scales
    const xScale = d3.scaleTime()
        .domain([d3.min(allData, d => d.Date), new Date('2024-12-31')])
        .range([0, width]);

    const yScale = d3.scaleLinear()
        .domain([0, d3.max(allData, d => d.SubstantiationRate)])
        .nice()
        .range([height, 0]);

    // Add axes
    addAxes(svg, xScale, yScale, width, height);

    // Define line generator
    const line = d3.line()
        .x(d => xScale(d.Date))
        .y(d => yScale(d.SubstantiationRate))
        .curve(d3.curveMonotoneX);

    // Group data by mayor
    const mayorData = d3.group(allData, d => d.mayor);

    // Add lines for each mayor
    mayorData.forEach((data, mayor) => {
        const lineClass = mayor === "de Blasio" ? 
            "line-de-blasio" : 
            `line-${mayor.toLowerCase()}`;
            
        svg.append("path")
            .datum(data)
            .attr("class", lineClass)
            .attr("fill", "none")
            .attr("stroke", mayorColors[mayor])
            .attr("stroke-width", 2)
            .attr("d", line);
    });


    // Add scroll event listener
    const annotationSections = document.querySelectorAll('.annotation-section');
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Get current mayor from section ID and normalize it
                const currentMayor = entry.target.id.split('-')[0];
                const normalizedCurrentMayor = currentMayor === 'deblasio' ? 'de blasio' : currentMayor.toLowerCase();
                
                // Update line opacities
                Object.keys(mayorColors).forEach(mayor => {
                    const lineClass = mayor === "de Blasio" ? 
                        "line-de-blasio" : 
                        `line-${mayor.toLowerCase()}`;
                    
                    const normalizedMayor = mayor.toLowerCase();
                    const line = svg.select(`.${lineClass}`);
                    
                    if (line.node()) {
                        line.transition()
                            .duration(300)
                            .style("opacity", normalizedMayor === normalizedCurrentMayor ? 1 : 0.2);
                    }
                });

                // Update annotation visibility
                if (entry.target && entry.target.classList) {
                    entry.target.classList.add('active');
                }
            } else if (entry.target && entry.target.classList) {
                entry.target.classList.remove('active');
            }
        });
    }, observerOptions);

    annotationSections.forEach(section => observer.observe(section));
}

function addAxes(svg, xScale, yScale, width, height) {
    // Add X axis
    svg.append('g')
        .attr('transform', `translate(0,${height})`)
        .call(d3.axisBottom(xScale)
            .ticks(d3.timeYear.every(1))
            .tickFormat(d3.timeFormat("%Y")))
        .selectAll('text')
        .style('text-anchor', 'end')
        .attr('transform', 'rotate(-45)');

    // Add Y axis
    svg.append('g')
        .call(d3.axisLeft(yScale)
            .tickFormat(d => d + '%'));

    // Add axis labels
    svg.append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", -60)
        .attr("x", -height/2)
        .attr("text-anchor", "middle")
        .text("Substantiation Rate (%)");

    //svg.append("text")
       // .attr("x", width/2)
       // .attr("y", height + 50)
       // .attr("text-anchor", "middle")
       // .text("Year");
}

// Initialize the visualization when the data is loaded
document.addEventListener('DOMContentLoaded', function() {
    d3.json('https://raw.githubusercontent.com/thomagin/Fagin_CCRB/main/data/monthmayors.json')
        .then(createLineChart)
        .catch(error => console.error("Error loading the data:", error));
});





///FADO CHARTS

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
        const margin = { top: 130, right: 40, bottom: -30, left: 200 };
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

// Create tooltip first (outside the data loading)
const yearlyTooltip = d3.select("body")
    .append("div")
    .attr("class", "tooltip")
    .style("opacity", 0)
    .style("z-index", "9999")  // Ensure tooltip is always on top
    .style("pointer-events", "none");

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
        "Bloomberg": "#FFC107",  // Amber
        "de Blasio": "#4CAF50",  // Green
        "Adams": "#2196F3"       // Blue
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
                .style("stroke-width", 1);

            yearlyTooltip.transition()
                .duration(500)
                .style("opacity", 0);
        });

    // Function to handle mayor focus - now inside the data loading scope
    function focusMayor(mayor) {
        const yearRanges = {
            'Bloomberg': [2002, 2013],
            'de Blasio': [2014, 2021],
            'Adams': [2022, 2024]
        };
        
        const range = yearRanges[mayor];
        
        yearlyBarGroups.selectAll("rect")
            .transition()
            .duration(500)
            .style("opacity", function(d) {
                const parentData = d3.select(this.parentNode).datum();
                return (parentData.year >= range[0] && parentData.year <= range[1]) ? 1 : 0.15;
            });

        console.log('Focusing mayor:', mayor);
        console.log('Year range:', range);
    }



// Add legend
const legend = yearlySvg.append("g")
    .attr("class", "legend")
    .attr("transform", `translate(${yearlyWidth - 120}, 0)`);

    const legendData = {
        "Bloomberg": "#FFC107",
        "de Blasio": "#4CAF50",
        "Adams": "#2196F3",
        "Substantiated": "#2F2F2F"
    };

Object.entries(legendData).forEach(([mayor, color], i) => {
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

    // Set up intersection observer - now inside the data loading scope
    const observerOptions = {
        root: null,
        rootMargin: '-40% 0px -40% 0px',
        threshold: [0, 0.2, 0.4, 0.6, 0.8, 1]
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const section = entry.target;
            // Check if section and textElement exist before accessing classList
            const textElement = section?.querySelector('.annotation-text');
            
            if (entry.isIntersecting && textElement) {
                textElement.classList.add('active');
                
                if (section.id === 'bloomberg-section') {
                    focusMayor('Bloomberg');
                } else if (section.id === 'deblasio-section') {
                    focusMayor('de Blasio');
                } else if (section.id === 'adams-section') {
                    focusMayor('Adams');
                }
            } else if (textElement) {
                textElement.classList.remove('active');
            }
        });
    }, observerOptions);

    // Start observing
    document.querySelectorAll('.annotation-section').forEach(section => {
        observer.observe(section);
    });
});





//RACE AND SEX HEATMAP

function createDemographicsHeatmap() {
    const margin = { top: 50, right: 120, bottom: 60, left: 120 };
    const width = 900 - margin.left - margin.right;
    const height = 400 - margin.top - margin.bottom;

    const svg = d3.select("#demographics-heatmap")
        .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", `translate(${margin.left},${margin.top})`);

    const races = ["Asian", "Black", "Hispanic", "White"];
    const genders = ["Woman", "Man"];  // Updated gender labels

    const x = d3.scaleBand()
        .domain(races)
        .range([0, width])
        .padding(0.1);

    const y = d3.scaleBand()
        .domain(genders)
        .range([0, height])
        .padding(0.1);

    const buttonContainer = d3.select("#demographics-heatmap")
        .insert("div", "svg")
        .style("text-align", "center")
        .style("margin-bottom", "20px");

    buttonContainer.selectAll("button")
        .data(data)
        .join("button")
        .text(d => d.administration)
        .style("margin", "0 10px")
        .style("padding", "8px 16px")
        .style("border", "none")
        .style("border-radius", "4px")
        .style("background-color", "#003DA5")
        .style("color", "white")
        .style("cursor", "pointer")
        .style("transition", "background-color 0.3s")
        .on("mouseover", function() {
            d3.select(this).style("background-color", "#002D7A");
        })
        .on("mouseout", function() {
            d3.select(this).style("background-color", "#003DA5");
        })
        .on("click", function(event, d) {
            updateHeatmap(d);
            buttonContainer.selectAll("button")
                .style("opacity", 0.7);
            d3.select(this)
                .style("opacity", 1);
        });

    const tooltip = d3.select("body")
        .append("div")
        .attr("class", "tooltip")
        .style("opacity", 0);

    svg.append("g")
        .attr("transform", `translate(0,${height})`)
        .call(d3.axisBottom(x))
        .selectAll("text")
        .style("text-anchor", "middle")
        .attr("transform", "rotate(0)");

    svg.append("g")
        .call(d3.axisLeft(y));

    d3.select("#demographics-heatmap")
        .insert("div", "svg")
        .style("text-align", "center")
        .style("margin-bottom", "20px")
        .append("h3")
        .attr("class", "heatmap-title")
        .text("Substantiation Rates by Race and Gender");

    function updateHeatmap(mayorData) {
        // Map the incoming data's gender values to the new format
        const mappedData = mayorData.demographics.map(d => ({
            ...d,
            gender: d.gender === "Female/Woman" ? "Woman" : "Man"
        }));

        const colorScale = d3.scaleSequential(d3.interpolateBlues)
            .domain([
                d3.min(mappedData, d => d.rate),
                d3.max(mappedData, d => d.rate)
            ]);

        d3.select(".heatmap-title")
            .text(`Substantiation Rates by Race and Gender - ${mayorData.administration} Administration`);

        const cells = svg.selectAll("rect")
            .data(mappedData);

        cells.enter()
            .append("rect")
            .merge(cells)
            .transition()
            .duration(750)
            .attr("x", d => x(d.race))
            .attr("y", d => y(d.gender))
            .attr("width", x.bandwidth())
            .attr("height", y.bandwidth())
            .style("fill", d => colorScale(d.rate));

        svg.selectAll("rect")
            .on("mouseover", function(event, d) {
                d3.select(this)
                    .transition()
                    .duration(200)
                    .style("opacity", 0.8);

                tooltip.transition()
                    .duration(200)
                    .style("opacity", 0.9);

                tooltip.html(`
                    <strong>${d.race} ${d.gender}</strong><br/>
                    Substantiation Rate: ${d.rate.toFixed(1)}%<br/>
                    Total Complaints: ${d.total.toLocaleString()}<br/>
                    Substantiated: ${d.substantiated.toLocaleString()}
                `)
                    .style("left", (event.pageX + 10) + "px")
                    .style("top", (event.pageY - 28) + "px");
            })
            .on("mouseout", function() {
                d3.select(this)
                    .transition()
                    .duration(200)
                    .style("opacity", 1);

                tooltip.transition()
                    .duration(500)
                    .style("opacity", 0);
            });

        const labels = svg.selectAll(".cell-label")
            .data(mappedData);

        labels.enter()
            .append("text")
            .attr("class", "cell-label")
            .merge(labels)
            .transition()
            .duration(750)
            .attr("x", d => x(d.race) + x.bandwidth() / 2)
            .attr("y", d => y(d.gender) + y.bandwidth() / 2)
            .attr("text-anchor", "middle")
            .attr("dy", ".35em")
            .style("fill", d => d.rate > 15 ? "white" : "black")
            .text(d => `${d.rate.toFixed(1)}%`);

        cells.exit().remove();
        labels.exit().remove();
    }

    updateHeatmap(data[0]);
}

document.addEventListener('DOMContentLoaded', createDemographicsHeatmap);

// RADAR CHART FADO TYPE

// Radar Chart Class
class RadarChart {
    constructor(containerId) {
        this.container = d3.select(containerId);
        this.features = ['Force', 'Abuse of Authority', 'Discourtesy', 'Offensive Language'];
        this.width = 330;
        this.height = 400;
        this.margin = {top: 35, right: 55, bottom: 35, left: 45}; // Restored original margins
        this.radius = Math.min(this.width - this.margin.left - this.margin.right, 
                             this.height - this.margin.top - this.margin.bottom) / 2;
        this.angleSlice = (Math.PI * 2) / this.features.length;
        
        this.init();
    }

    init() {
        this.container
            .style('display', 'flex')
            .style('justify-content', 'center')
            .style('flex-wrap', 'nowrap')  // Changed to nowrap
            .style('gap', '10px');         // Reduced gap

        data.forEach(admin => this.createChart(admin));
    }

    createChart(adminData) {
        const adminMaxValue = d3.max(adminData.complaintTypes, c => c.substantiatedRate);

        const svg = this.container.append('svg')
            .attr('width', this.width)
            .attr('height', this.height)
            .attr('viewBox', `0 0 ${this.width} ${this.height}`);

        const g = svg.append('g')
            .attr('transform', `translate(${this.width/2},${this.height/2 + 5})`);

        this.drawGrid(g, adminMaxValue);
        this.drawAxes(g);
        this.plotData(g, adminData, adminMaxValue);
        this.addTitle(svg, adminData.administration);
    }

    drawGrid(g, maxValue) {
        const rScale = d3.scaleLinear()
            .domain([0, maxValue])
            .range([0, this.radius]);

        const levels = 5;
        const gridData = [...Array(levels).keys()].map(i => (i + 1) * (maxValue / levels));
        
        gridData.forEach(level => {
            g.append('circle')
                .attr('r', rScale(level))
                .attr('class', 'grid-circle');

            g.append('text')
                .attr('y', -rScale(level))
                .attr('dy', '0.4em')
                .attr('class', 'value-label')
                .text(`${level.toFixed(1)}%`);
        });
    }

    drawAxes(g) {
        this.features.forEach((feature, i) => {
            const angle = i * this.angleSlice;
            const lineCoords = {
                x: this.radius * Math.cos(angle - Math.PI/2),
                y: this.radius * Math.sin(angle - Math.PI/2)
            };

            g.append('line')
                .attr('x1', 0)
                .attr('y1', 0)
                .attr('x2', lineCoords.x)
                .attr('y2', lineCoords.y)
                .style('stroke', '#ddd')
                .style('stroke-width', 1);

            const labelDistance = this.radius + 15;
            const labelAngle = angle - Math.PI/2;
            const isTopLabel = Math.abs(labelAngle + Math.PI/2) < 0.1;
            const yOffset = isTopLabel ? -12 : 0;

            const label = g.append('text')
                .attr('class', 'axis-label')
                .attr('x', labelDistance * Math.cos(labelAngle))
                .attr('y', (labelDistance * Math.sin(labelAngle)) + yOffset)
                .style('text-anchor', 'middle');

            // Handle different label cases
            if (feature === 'Abuse of Authority') {
                label.append('tspan')
                    .attr('x', labelDistance * Math.cos(labelAngle))
                    .text('Abuse of')
                    .attr('dy', '-0.3em');
                label.append('tspan')
                    .attr('x', labelDistance * Math.cos(labelAngle))
                    .attr('dy', '1.2em')
                    .text('Authority');
            } else if (feature === 'Offensive Language') {
                label.append('tspan')
                    .attr('x', labelDistance * Math.cos(labelAngle))
                    .text('Offensive')
                    .attr('dy', '-0.3em');
                label.append('tspan')
                    .attr('x', labelDistance * Math.cos(labelAngle))
                    .attr('dy', '1.2em')
                    .text('Language');
            } else {
                label.text(feature);
            }
        });
    }
    plotData(g, adminData, maxValue) {
        const rScale = d3.scaleLinear()
            .domain([0, maxValue])
            .range([0, this.radius]);

        const complaintData = this.features.map((feature, i) => {
            const complaint = adminData.complaintTypes.find(c => c.type === feature);
            return {
                value: complaint.substantiatedRate,
                angle: i * this.angleSlice,
                complaint: complaint
            };
        });

        const radarLine = d3.lineRadial()
            .radius(d => rScale(d.value))
            .angle(d => d.angle)
            .curve(d3.curveLinearClosed);

        g.append('path')
            .datum(complaintData)
            .attr('class', 'radar-path')
            .style('fill', '#003DA5')
            .style('fill-opacity', 0.3)
            .style('stroke', '#003DA5')
            .style('stroke-width', 2)
            .attr('d', radarLine);

        g.selectAll('.radar-point')
            .data(complaintData)
            .join('circle')
            .attr('class', 'radar-point')
            .attr('cx', d => rScale(d.value) * Math.cos(d.angle - Math.PI/2))
            .attr('cy', d => rScale(d.value) * Math.sin(d.angle - Math.PI/2))
            .attr('r', 4)
            .style('fill', '#003DA5')
            .on('mouseover', (event, d) => {
                d3.select(event.currentTarget)
                    .transition()
                    .duration(200)
                    .attr('r', 6);

                const tooltip = d3.select('body')
                    .append('div')
                    .attr('class', 'radar-tooltip')
                    .style('opacity', 0);

                tooltip.transition()
                    .duration(200)
                    .style('opacity', 1);

                tooltip.html(`
                    <strong>${d.complaint.type}</strong><br>
                    Substantiation Rate: ${d.complaint.substantiatedRate.toFixed(1)}%<br>
                    Total Cases: ${d.complaint.total.toLocaleString()}<br>
                    Substantiated: ${d.complaint.substantiated.toLocaleString()}
                `)
                    .style('left', (event.pageX + 10) + 'px')
                    .style('top', (event.pageY - 10) + 'px');
            })
            .on('mouseout', (event) => {
                d3.select(event.currentTarget)
                    .transition()
                    .duration(200)
                    .attr('r', 4);

                d3.selectAll('.radar-tooltip')
                    .remove();
            });
    }

    addTitle(svg, administration) {
        svg.append('text')
            .attr('class', 'chart-title')
            .attr('x', this.width/2)
            .attr('y', 25)
            .text(administration);
    }
}

// Initialize visualization when the page loads
document.addEventListener('DOMContentLoaded', () => {
    new RadarChart('#radar-charts-container');


// Set up intersection observer for radar chart annotations
// Add CSS to allow pointer events through annotations
const style = document.createElement('style');
style.textContent = `
    .annotations {
        pointer-events: none;
    }
    .annotation-text {
        pointer-events: auto;
    }
`;
document.head.appendChild(style);

// Set up intersection observer for radar chart annotations
const radarObserverOptions = {
    root: null,
    rootMargin: '-40% 0px -40% 0px',
    threshold: [0, 0.2, 0.4, 0.6, 0.8, 1]
};

const radarObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        const section = entry.target;
        const textElement = section.querySelector('.annotation-text');
        
        if (entry.isIntersecting && textElement) {
            textElement.classList.add('active');
            
            // Update radar chart based on section
            if (section.id === 'intro-section') {
                // Start with lower opacity
                setAllRadarOpacity(0.2);
            } else if (section.id === 'abuse-authority-section') {
                highlightRadarCategory('Abuse of Authority');
            } else if (section.id === 'force-section') {
                highlightRadarCategory('Force');
            } else if (section.id === 'language-courtesy-section') {
                highlightRadarCategories(['Discourtesy', 'Offensive Language']);
            }
        } else if (textElement) {
            textElement.classList.remove('active');
            // If no section is active, reset to lower opacity
            if (!document.querySelector('.annotation-text.active')) {
                setAllRadarOpacity(0.2);
            }
        }
    });
}, radarObserverOptions);

// Start observing all radar annotation sections
document.querySelectorAll('#complaints-section .annotation-section').forEach(section => {
    radarObserver.observe(section);
});

// Helper functions for highlighting radar categories
function highlightRadarCategory(category) {
    const paths = document.querySelectorAll('.radar-path');
    paths.forEach(path => {
        // Set highlighted paths to full opacity, others to low opacity
        path.style.opacity = path.dataset.category === category ? '1' : '0.2';
    });
}

function highlightRadarCategories(categories) {
    const paths = document.querySelectorAll('.radar-path');
    paths.forEach(path => {
        // Set highlighted paths to full opacity, others to low opacity
        path.style.opacity = categories.includes(path.dataset.category) ? '1' : '0.2';
    });
}

function setAllRadarOpacity(opacity) {
    const paths = document.querySelectorAll('.radar-path');
    paths.forEach(path => {
        path.style.opacity = opacity;
    });
}

// Initialize with low opacity
document.addEventListener('DOMContentLoaded', () => {
    setAllRadarOpacity(0.2);
});


    
});

// BWC Impact Visualization
function createBWCVisualization() {
    // Set up dimensions
    const margin = { top: 40, right: 120, bottom: 60, left: 80 };
    const container = document.querySelector('#bwc-chart');
    const width = container.clientWidth - margin.left - margin.right;
    const height = container.clientHeight - margin.top - margin.bottom;

    // Create SVG
    const svg = d3.select('#bwc-chart')
        .append('svg')
        .attr('width', width + margin.left + margin.right)
        .attr('height', height + margin.top + margin.bottom)
        .append('g')
        .attr('transform', `translate(${margin.left},${margin.top})`);

    // Create scales
    const x = d3.scaleBand()
        .range([0, width])
        .padding(0.3);

    const y = d3.scaleLinear()
        .range([height, 0]);

    // Add grid lines
    function addGrid() {
        svg.append('g')
            .attr('class', 'grid')
            .call(d3.axisLeft(y)
                .tickSize(-width)
                .tickFormat('')
            )
            .style('stroke', '#e0e0e0')
            .style('stroke-dasharray', '3,3');
    }

    // Create tooltip
    const tooltip = d3.select('body')
        .append('div')
        .attr('class', 'bwc-tooltip')
        .style('opacity', 0);

    // Load and process data
    d3.json('ccrb_bwc_stats.json').then(data => {
        // Process the most recent year's data
        const recentYear = d3.max(data, d => d.year);
        const bwcData = data.find(d => d.year === recentYear);
        
        const processedData = [
            {
                category: 'Without BWC',
                substantiated: bwcData.no_bwc_substantiated_rate,
                notSubstantiated: bwcData.no_bwc_not_substantiated_rate,
                total: bwcData.no_bwc_total
            },
            {
                category: 'With BWC',
                substantiated: bwcData.bwc_substantiated_rate,
                notSubstantiated: bwcData.bwc_not_substantiated_rate,
                total: bwcData.bwc_total
            }
        ];

        // Update scales
        x.domain(processedData.map(d => d.category));
        y.domain([0, 100]);

        // Add grid
        addGrid();

        // Add axes
        svg.append('g')
            .attr('transform', `translate(0,${height})`)
            .call(d3.axisBottom(x));

        svg.append('g')
            .call(d3.axisLeft(y)
                .tickFormat(d => d + '%'));

        // Create stacked bars
        processedData.forEach(d => {
            // Not substantiated portion
            svg.append('rect')
                .attr('x', x(d.category))
                .attr('y', y(100))
                .attr('width', x.bandwidth())
                .attr('height', height - y(d.notSubstantiated))
                .attr('fill', '#ff7f7f')
                .on('mouseover', function(event) {
                    tooltip.transition()
                        .duration(200)
                        .style('opacity', .9);
                    tooltip.html(`
                        <strong>${d.category}</strong><br/>
                        Not Substantiated: ${d.notSubstantiated.toFixed(1)}%<br/>
                        Total Cases: ${d.total.toLocaleString()}
                    `)
                        .style('left', (event.pageX + 10) + 'px')
                        .style('top', (event.pageY - 28) + 'px');
                })
                .on('mouseout', function() {
                    tooltip.transition()
                        .duration(500)
                        .style('opacity', 0);
                });

            // Substantiated portion
            svg.append('rect')
                .attr('x', x(d.category))
                .attr('y', y(d.substantiated))
                .attr('width', x.bandwidth())
                .attr('height', height - y(d.substantiated))
                .attr('fill', '#7f7fff')
                .on('mouseover', function(event) {
                    tooltip.transition()
                        .duration(200)
                        .style('opacity', .9);
                    tooltip.html(`
                        <strong>${d.category}</strong><br/>
                        Substantiated: ${d.substantiated.toFixed(1)}%<br/>
                        Total Cases: ${d.total.toLocaleString()}
                    `)
                        .style('left', (event.pageX + 10) + 'px')
                        .style('top', (event.pageY - 28) + 'px');
                })
                .on('mouseout', function() {
                    tooltip.transition()
                        .duration(500)
                        .style('opacity', 0);
                });

            // Add percentage labels
            svg.append('text')
                .attr('x', x(d.category) + x.bandwidth() / 2)
                .attr('y', y(d.substantiated / 2))
                .attr('text-anchor', 'middle')
                .attr('fill', 'white')
                .text(`${d.substantiated.toFixed(1)}%`);
        });

        // Add legend
        const legend = svg.append('g')
            .attr('class', 'legend')
            .attr('transform', `translate(${width - 160}, 0)`);

        const legendData = [
            { label: 'Substantiated', color: '#7f7fff' },
            { label: 'Not Substantiated', color: '#ff7f7f' }
        ];

        legendData.forEach((d, i) => {
            const legendRow = legend.append('g')
                .attr('transform', `translate(0, ${i * 20})`);

            legendRow.append('rect')
                .attr('width', 18)
                .attr('height', 18)
                .attr('fill', d.color);

            legendRow.append('text')
                .attr('x', 24)
                .attr('y', 14)
                .text(d.label);
        });
    });
}

// Initialize visualization when document is loaded
document.addEventListener('DOMContentLoaded', createBWCVisualization);

// Initialize all visualizations
drawSubstantiationPieChart('Bloomberg');
drawSubstantiationPieChart('de Blasio');
drawSubstantiationPieChart('Adams');
drawLegend();
drawGrid();
const data = [
  { date: "4/10/2022", ageGroup: "15-25", gender: "Male", values: [789, 762, 268, 70, 786, 886] },
  { date: "4/10/2022", ageGroup: ">25", gender: "Male", values: [604, 299, 219, 400, 683, 620] },
  { date: "4/10/2022", ageGroup: "15-25", gender: "Female", values: [708, 907, 621, 31, 429, 736] },
  { date: "4/10/2022", ageGroup: ">25", gender: "Female", values: [950, 278, 597, 696, 361, 990] },
  { date: "5/10/2022", ageGroup: "15-25", gender: "Male", values: [140, 986, 265, 956, 595, 24] },
  { date: "5/10/2022", ageGroup: ">25", gender: "Male", values: [779, 735, 44, 362, 500, 9] },
  { date: "5/10/2022", ageGroup: "15-25", gender: "Female", values: [132, 264, 66, 370, 348, 171] },
  { date: "5/10/2022", ageGroup: ">25", gender: "Female", values: [378, 505, 547, 655, 533, 643] },
  { date: "6/10/2022", ageGroup: "15-25", gender: "Male", values: [533, 124, 58, 985, 278, 369] },
  { date: "6/10/2022", ageGroup: ">25", gender: "Male", values: [439, 542, 412, 378, 160, 321] },
  { date: "6/10/2022", ageGroup: "15-25", gender: "Female", values: [498, 214, 973, 205, 408, 46] },
  { date: "6/10/2022", ageGroup: ">25", gender: "Female", values: [461, 837, 296, 859, 458, 810] },
  { date: "7/10/2022", ageGroup: "15-25", gender: "Male", values: [611, 512, 844, 819, 666, 182] },
  { date: "7/10/2022", ageGroup: ">25", gender: "Male", values: [912, 395, 566, 788, 162, 76] },
  { date: "7/10/2022", ageGroup: "15-25", gender: "Female", values: [502, 860, 596, 381, 865, 216] },
  { date: "7/10/2022", ageGroup: ">25", gender: "Female", values: [75, 364, 495, 130, 340, 757] },
  { date: "8/10/2022", ageGroup: "15-25", gender: "Male", values: [299, 382, 610, 951, 179, 57] },
  { date: "8/10/2022", ageGroup: ">25", gender: "Male", values: [41, 303, 985, 659, 151, 451] },
  { date: "8/10/2022", ageGroup: "15-25", gender: "Female", values: [264, 47, 54, 659, 986, 755] },
  { date: "8/10/2022", ageGroup: ">25", gender: "Female", values: [747, 698, 407, 667, 714, 820] },
  { date: "9/10/2022", ageGroup: "15-25", gender: "Male", values: [141, 161, 961, 760, 447, 570] },
  { date: "9/10/2022", ageGroup: ">25", gender: "Male", values: [454, 812, 244, 958, 488, 262] },
  { date: "9/10/2022", ageGroup: "15-25", gender: "Female", values: [273, 55, 995, 877, 971, 140] },
  { date: "9/10/2022", ageGroup: ">25", gender: "Female", values: [679, 685, 598, 43, 667, 843] },
  { date: "10/10/2022", ageGroup: "15-25", gender: "Male", values: [757, 958, 980, 470, 953, 604] },
  { date: "10/10/2022", ageGroup: ">25", gender: "Male", values: [556, 112, 730, 561, 953, 965] },
  { date: "10/10/2022", ageGroup: "15-25", gender: "Female", values: [95, 481, 995, 697, 900, 766] },
  { date: "10/10/2022", ageGroup: ">25", gender: "Female", values: [375, 850, 70, 260, 836, 452] },
  { date: "11/10/2022", ageGroup: "15-25", gender: "Male", values: [941, 289, 305, 940, 50, 717] },
  { date: "11/10/2022", ageGroup: ">25", gender: "Male", values: [676, 781, 893, 411, 114, 997] },
  { date: "11/10/2022", ageGroup: "15-25", gender: "Female", values: [114, 906, 191, 8, 949, 784] },
  { date: "11/10/2022", ageGroup: ">25", gender: "Female", values: [674, 744, 71, 687, 248, 151] },
  { date: "12/10/2022", ageGroup: "15-25", gender: "Male", values: [731, 936, 536, 247, 739, 3] },
  { date: "12/10/2022", ageGroup: ">25", gender: "Male", values: [959, 661, 116, 31, 372, 908] },
  { date: "12/10/2022", ageGroup: "15-25", gender: "Female", values: [570, 969, 768, 183, 318, 598] },
  { date: "12/10/2022", ageGroup: ">25", gender: "Female", values: [579, 545, 428, 963, 917, 549] },
  { date: "13/10/2022", ageGroup: "15-25", gender: "Male", values: [184, 325, 604, 594, 252, 679] },
  { date: "13/10/2022", ageGroup: ">25", gender: "Male", values: [759, 132, 507, 442, 37, 602] },
  { date: "13/10/2022", ageGroup: "15-25", gender: "Female", values: [281, 661, 130, 749, 730, 780] },
  { date: "13/10/2022", ageGroup: ">25", gender: "Female", values: [226, 722, 407, 580, 269, 827] },
  { date: "14/10/2022", ageGroup: "15-25", gender: "Male", values: [699, 965, 1, 360, 893, 982] },
  { date: "14/10/2022", ageGroup: ">25", gender: "Male", values: [317, 565, 77, 224, 129, 904] },
  { date: "14/10/2022", ageGroup: "15-25", gender: "Female", values: [764, 21, 107, 481, 856, 776] },
  { date: "14/10/2022", ageGroup: ">25", gender: "Female", values: [692, 561, 532, 925, 133, 718] },
  { date: "15/10/2022", ageGroup: "15-25", gender: "Male", values: [457, 303, 602, 86, 478, 68] },
  { date: "15/10/2022", ageGroup: ">25", gender: "Male", values: [451, 280, 867, 129, 738, 393] },
  { date: "15/10/2022", ageGroup: "15-25", gender: "Female", values: [864, 921, 993, 609, 792, 540] },
  { date: "15/10/2022", ageGroup: ">25", gender: "Female", values: [103, 623, 733, 991, 1, 861] },
  { date: "16/10/2022", ageGroup: "15-25", gender: "Male", values: [5, 813, 340, 713, 500, 305] },
  { date: "16/10/2022", ageGroup: ">25", gender: "Male", values: [817, 754, 516, 145, 912, 135] },
  { date: "16/10/2022", ageGroup: "15-25", gender: "Female", values: [661, 299, 67, 549, 501, 146] },
  { date: "16/10/2022", ageGroup: ">25", gender: "Female", values: [728, 5, 460, 882, 737, 368] },
  { date: "17/10/2022", ageGroup: "15-25", gender: "Male", values: [976, 246, 221, 695, 330, 690] },
  { date: "17/10/2022", ageGroup: ">25", gender: "Male", values: [89, 110, 683, 398, 34, 478] },
  { date: "17/10/2022", ageGroup: "15-25", gender: "Female", values: [167, 34, 48, 621, 186, 519] },
  { date: "17/10/2022", ageGroup: ">25", gender: "Female", values: [238, 361, 142, 446, 716, 861] },
  { date: "18/10/2022", ageGroup: "15-25", gender: "Male", values: [751, 786, 946, 487, 822, 217] },
  { date: "18/10/2022", ageGroup: ">25", gender: "Male", values: [38, 186, 498, 591, 562, 570] },
  { date: "18/10/2022", ageGroup: "15-25", gender: "Female", values: [223, 613, 17, 216, 727, 624] },
  { date: "18/10/2022", ageGroup: ">25", gender: "Female", values: [410, 234, 454, 93, 624, 3] },
  { date: "19/10/2022", ageGroup: "15-25", gender: "Male", values: [181, 228, 956, 462, 259, 639] },
  { date: "19/10/2022", ageGroup: ">25", gender: "Male", values: [66, 547, 905, 959, 803, 651] },
  { date: "19/10/2022", ageGroup: "15-25", gender: "Female", values: [114, 903, 541, 226, 609, 889] },
  { date: "19/10/2022", ageGroup: ">25", gender: "Female", values: [850, 199, 398, 921, 800, 809] },
  { date: "20/10/2022", ageGroup: "15-25", gender: "Male", values: [540, 461, 839, 542, 886, 454] },
  { date: "20/10/2022", ageGroup: ">25", gender: "Male", values: [224, 925, 388, 865, 164, 411] },
  { date: "20/10/2022", ageGroup: "15-25", gender: "Female", values: [648, 624, 72, 906, 304, 136] },
  { date: "20/10/2022", ageGroup: ">25", gender: "Female", values: [181, 662, 115, 751, 38, 554] },
  { date: "21/10/2022", ageGroup: "15-25", gender: "Male", values: [533, 208, 860, 694, 187, 917] },
  { date: "21/10/2022", ageGroup: ">25", gender: "Male", values: [140, 426, 47, 237, 907, 964] },
  { date: "21/10/2022", ageGroup: "15-25", gender: "Female", values: [795, 573, 235, 956, 646, 18] },
  { date: "21/10/2022", ageGroup: ">25", gender: "Female", values: [311, 956, 696, 609, 251, 229] },
  { date: "22/10/2022", ageGroup: "15-25", gender: "Male", values: [585, 448, 834, 968, 673, 550] },
  { date: "22/10/2022", ageGroup: ">25", gender: "Male", values: [525, 771, 404, 17, 980, 13] },
  { date: "22/10/2022", ageGroup: "15-25", gender: "Female", values: [584, 243, 240, 318, 580, 809] },
  { date: "22/10/2022", ageGroup: ">25", gender: "Female", values: [25, 538, 968, 418, 220, 802] },
  { date: "23/10/2022", ageGroup: "15-25", gender: "Male", values: [571, 953, 691, 939, 182, 916] },
  { date: "23/10/2022", ageGroup: ">25", gender: "Male", values: [179, 523, 662, 672, 966, 862] },
  { date: "23/10/2022", ageGroup: "15-25", gender: "Female", values: [599, 269, 542, 70, 594, 414] },
  { date: "23/10/2022", ageGroup: ">25", gender: "Female", values: [172, 670, 417, 475, 982, 457] },
  { date: "24/10/2022", ageGroup: "15-25", gender: "Male", values: [828, 120, 867, 259, 609, 396] },
  { date: "24/10/2022", ageGroup: ">25", gender: "Male", values: [458, 972, 332, 600, 503, 761] },
  { date: "24/10/2022", ageGroup: "15-25", gender: "Female", values: [318, 17, 798, 864, 251, 629] },
  { date: "24/10/2022", ageGroup: ">25", gender: "Female", values: [121, 976, 938, 291, 25, 212] },
  { date: "25/10/2022", ageGroup: "15-25", gender: "Male", values: [607, 641, 49, 526, 513, 346] },
  { date: "25/10/2022", ageGroup: ">25", gender: "Male", values: [209, 869, 297, 977, 812, 979] },
  { date: "25/10/2022", ageGroup: "15-25", gender: "Female", values: [528, 754, 341, 527, 504, 1000] },
  { date: "25/10/2022", ageGroup: ">25", gender: "Female", values: [27, 633, 37, 995, 595, 911] },
  { date: "26/10/2022", ageGroup: "15-25", gender: "Male", values: [74, 554, 970, 806, 322, 245] },
  { date: "26/10/2022", ageGroup: ">25", gender: "Male", values: [73, 722, 395, 153, 106, 627] },
  { date: "26/10/2022", ageGroup: "15-25", gender: "Female", values: [205, 6, 672, 835, 897, 129] },
  { date: "26/10/2022", ageGroup: ">25", gender: "Female", values: [651, 788, 554, 340, 852, 705] },
  { date: "27/10/2022", ageGroup: "15-25", gender: "Male", values: [595, 981, 596, 999, 655, 440] },
  { date: "27/10/2022", ageGroup: ">25", gender: "Male", values: [879, 692, 577, 242, 757, 967] },
  { date: "27/10/2022", ageGroup: "15-25", gender: "Female", values: [623, 172, 922, 935, 329, 895] },
  { date: "27/10/2022", ageGroup: ">25", gender: "Female", values: [150, 975, 624, 767, 578, 560] },
  { date: "28/10/2022", ageGroup: "15-25", gender: "Male", values: [323, 90, 566, 658, 870, 630] },
  { date: "28/10/2022", ageGroup: ">25", gender: "Male", values: [563, 466, 506, 948, 16, 421] },
  { date: "28/10/2022", ageGroup: "15-25", gender: "Female", values: [865, 935, 843, 615, 786, 857] },
  { date: "28/10/2022", ageGroup: ">25", gender: "Female", values: [303, 929, 909, 629, 382, 175] },
  { date: "29/10/2022", ageGroup: "15-25", gender: "Male", values: [35, 918, 681, 20, 99, 512] },
  { date: "29/10/2022", ageGroup: ">25", gender: "Male", values: [710, 631, 256, 984, 31, 970] },
  { date: "29/10/2022", ageGroup: "15-25", gender: "Female", values: [623, 760, 664, 393, 336, 71] },
  { date: "29/10/2022", ageGroup: ">25", gender: "Female", values: [68, 229, 592, 928, 70, 19] }
];
const dateFilter = document.getElementById("dateFilter");
    const ageFilter = document.getElementById("ageFilter");
    const genderFilter = document.getElementById("genderFilter");
    const dataTable = document.getElementById("dataTable").querySelector("tbody");
    const chartCanvas = document.getElementById("chart");

    function populateFilters() {
      const uniqueDates = [...new Set(data.map(row => row.date))];
      uniqueDates.forEach(date => {
        const option = document.createElement("option");
        option.value = date;
        option.textContent = date;
        dateFilter.appendChild(option);
      });
    }

    document.querySelectorAll("#filters select").forEach(filter => {
      filter.addEventListener("change", applyFilters);
    });

    function applyFilters() {
      const dateFilter = document.querySelector("#dateFilter").value;
      const ageFilter = document.querySelector("#ageFilter").value;
      const genderFilter = document.querySelector("#genderFilter").value;

      const filteredData = data.filter(row => {
        return (dateFilter === "all" || row.date === dateFilter) &&
               (ageFilter === "all" || row.ageGroup === ageFilter) &&
               (genderFilter === "all" || row.gender.toLowerCase() === genderFilter.toLowerCase());
      });

      dataTableBody.innerHTML = ""; // Clear current table rows
      populateTable(filteredData);  // Add filtered rows
    }

    const dataTableBody = document.querySelector("#dataTable tbody");

    function populateTable(data) {
      data.forEach(row => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
          <td>${row.date}</td>
          <td>${row.ageGroup}</td>
          <td>${row.gender}</td>
          ${row.values.map(value => `<td>${value}</td>`).join("")}
        `;
        dataTableBody.appendChild(tr);
      });
    }

    populateTable(data);

    function renderChart(filteredData) {
      const ctx = chartCanvas.getContext("2d");
      const labels = filteredData.map(row => row.date);
      const datasets = [];

      filteredData.forEach(row => {
        datasets.push({
          label: `${row.ageGroup} - ${row.gender}`,
          data: row.values,
          backgroundColor: `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 0.5)`,
          borderColor: `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 1)`,
          borderWidth: 1,
        });
      });

      new Chart(ctx, {
        type: "bar",
        data: {
          labels: ["A", "B", "C", "D", "E", "F"],
          datasets,
        },
        options: {
          responsive: true,
          scales: {
            y: { beginAtZero: true },
          },
        },
      });
    }

    data.forEach(entry => {
      const avg = entry.values.reduce((sum, val) => sum + val, 0) / entry.values.length;
      console.log(`Date: ${entry.date}, Age Group: ${entry.ageGroup}, Gender: ${entry.gender}, Avg: ${avg}`);
    });

    const csv = data.map(entry =>
      `${entry.date},${entry.ageGroup},${entry.gender},${entry.values.join(",")}`).join("\n");

    console.log(csv);

    document.getElementById("viewChartButton").addEventListener("click", () => {
      const filteredData = filterData();
      populateTable(filteredData);
      renderChart(filteredData);
    });

    // Initial Setup
    populateFilters();
    populateTable(data);

    function goToLoginPage() {
      window.location.href = "index.html";
    }

    dateFilter.addEventListener("change", () => {
      const filteredData = filterData(); // Use existing filterData function
      populateTable(filteredData); // Re-render the table
    });

    document.getElementById("viewChartButton").addEventListener("click", () => {
      const selectedDate = dateFilter.value;
      const filteredData = selectedDate === "all" ? data : data.filter(row => row.date === selectedDate);
      const chartData = filteredData.length > 0 ? filteredData[0].values : [];
      localStorage.setItem("chartData", JSON.stringify(chartData));
      window.location.href = "chart.html";
    });
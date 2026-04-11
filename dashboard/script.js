async function loadData() {
  const res = await fetch('../coverage-history.json');
  const data = await res.json();

  const labels = data.map(d => d.date);
  const values = data.map(d => d.coverage);

  const ctx = document.getElementById('chart');

  new Chart(ctx, {
    type: 'line',
    data: {
      labels: labels,
      datasets: [{
        label: 'Coverage %',
        data: values,
        borderWidth: 2
      }]
    }
  });
}

loadData();
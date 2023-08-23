function chooseStations(stations) {
  const selectedStations = [];

  for (const station of stations) {
    const [name, capacity, type] = station;

    if (capacity >= 20 && (type === 'school' || type === 'community centre')) {
      selectedStations.push(name);
    }
  }

  return selectedStations;
}

const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];

const result= chooseStations(stations);
console.log(result);
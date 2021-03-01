export function fareEstimator(ride_time: number, ride_distance: number, cost_per_minute: number[], cost_per_mile: number[]): number[] {
console.log(ride_time, ride_distance, cost_per_minute, cost_per_mile)
// (Cost per minute) * (ride time) + (Cost per mile) * (ride distance)
// where Cost per minute and Cost per mile depend on the car type.
// return (cost_per_minute[1]) * (ride_time) + (cost_per_mile[1]) * (ride_distance)

const fareCost = []

for (let i = 0; i < cost_per_mile.length; i++) {
  fareCost.push((ride_time * cost_per_minute[i] + ride_distance * cost_per_mile[i]).toFixed(1))
}

return fareCost

}

console.log(fareEstimator(30, 7, [0.2, 0.35, 0.4, 0.45], [1.1, 1.8, 2.3, 3.5]));

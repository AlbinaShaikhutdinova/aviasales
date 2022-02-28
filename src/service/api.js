import axios from 'axios';

const HTTP = axios.create({
  baseURL: 'http://192.168.0.102:8000/',
});

export async function fetchFlights({ cityOfDeparture, cityOfArrival, date }) {
  const response = await HTTP.get(`flights/?city_of_departure__name=${cityOfDeparture}&city_of_arrival__name=${cityOfArrival}&departure_date=${date}`);
  return response.data;
}

export async function fetchTickets(id) {
  const response = await HTTP.get(`tickets/?flight=${id}`);
  console.log(response.data);
  return response.data;
}
export async function postBookingData(data) {
  console.log(data);
  HTTP.post(`add_booked/`, data).then((response) => console.log(response));
  return true;
}

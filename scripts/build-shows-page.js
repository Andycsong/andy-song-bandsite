

// const concertInfo = [
//     {
//         DateTitle: 'Dates',
//         Dates: 'Mon Sept 06 2021',
//         VenueTitle: 'Venue',
//         Venue: 'Ronald Lane',
//         LocationTitle: 'Location',
//         Location: 'San Francisco, CA'
//     },
//     {
//         DateTitle: 'Dates',
//         Dates: 'Tue Sept 21 2021',
//         VenueTitle: 'Venue',
//         Venue: 'Pier 3 East',
//         LocationTitle: 'Location',
//         Location: 'San Francisco, CA'
//     },
//     {
//         DateTitle: 'Dates',
//         Dates: 'Fri Oct 15 2021',
//         VenueTitle: 'Venue',
//         Venue: 'View Lounge',
//         LocationTitle: 'Location',
//         Location: 'San Francisco, CA'
//     },
//     {
//         DateTitle: 'Dates',
//         Dates: 'Sat Nov 06 2021',
//         VenueTitle: 'Venue',
//         Venue: 'Hyatt Agency',
//         LocationTitle: 'Location',
//         Location: 'San Francisco, CA'
//     },
//     {
//         DateTitle: 'Dates',
//         Dates: 'Fri Nov 26 2021',
//         VenueTitle: 'Venue',
//         Venue: 'Moscow Center',
//         LocationTitle: 'Location',
//         Location: 'San Francisco, CA'
//     },
//     {
//         DateTitle: 'Dates',
//         Dates: 'Wed Dec 15 2021',
//         VenueTitle: 'Venue',
//         Venue: 'Press Club',
//         LocationTitle: 'Location',
//         Location: 'San Francisco, CA'
//     }
// ];
const API_URL = 'https://project-1-api.herokuapp.com/';
const API_Key = 'f31d3b09-8f0f-407c-8b40-db9594b605d5';

function myShowsSection() {
    axios
        .get(`${API_URL}showdates?api_key=${API_Key}`)
        .then(response => {
            console.log(response);
            const newAPIShows = response.data

            newAPIShows.forEach(info => {

                const showsContainer = document.createElement('div');
                showsContainer.classList.add('shows-container');

                const unorderedList = document.createElement('ul');
                unorderedList.classList.add('shows-container-ul')

                const ticketButton = document.createElement('button')
                ticketButton.classList.add('shows__button');
                ticketButton.innerText = ('BUY TICKETS');

                ticketButton.addEventListener('click', function (event) {
                    event.preventDefault();
                    console.log("Venue Location: ", info.place);
                    console.log("Location: ", info.location);
                })


                const cardDivider = document.createElement('hr');
                cardDivider.classList.add('shows__divider');

                const showsDateContainer = document.createElement('ul');
                showsDateContainer.classList.add('shows__date-container');

                const showsDates = document.createElement('li');
                showsDates.classList.add('shows__dates', 'shows__subheader');
                showsDates.innerText = ('Date')

                const showsDateInfo = document.createElement('li');
                showsDateInfo.classList.add('shows-date__info', 'shows__info');
                showsDateInfo.innerText = DateFormatter(parseInt(info.date));


                const showsVenueContainer = document.createElement('ul');
                showsVenueContainer.classList.add('shows__venue-container');

                const showsVenue = document.createElement('li')
                showsVenue.classList.add('shows__venue', 'shows__subheader');
                showsVenue.innerText = ('Venue');

                const showsVenueInfo = document.createElement('li')
                showsVenueInfo.classList.add('shows-venue__info', 'shows__info');
                showsVenueInfo.innerText = info.place;

                const showsLocationContainer = document.createElement('ul')
                showsLocationContainer.classList.add('shows-location__container')

                const showsLocation = document.createElement('li');
                showsLocation.classList.add('shows__location', 'shows__subheader');
                showsLocation.innerText = ('Location');

                const showsLocationInfo = document.createElement('li');
                showsLocationInfo.classList.add('shows-location__info', 'shows__info');
                showsLocationInfo.innerText = info.location;

                showsDynamicContainer.appendChild(showsContainer);
                showsDynamicContainer.appendChild(cardDivider);
                showsContainer.appendChild(unorderedList);
                showsContainer.appendChild(ticketButton);
                unorderedList.appendChild(showsDateContainer);
                showsDateContainer.appendChild(showsDates);
                showsDateContainer.appendChild(showsDateInfo);
                unorderedList.appendChild(showsVenueContainer);
                showsVenueContainer.appendChild(showsVenue);
                showsVenueContainer.appendChild(showsVenueInfo);
                unorderedList.appendChild(showsLocationContainer);
                showsLocationContainer.appendChild(showsLocation);
                showsLocationContainer.appendChild(showsLocationInfo);
            });
        })
}


function DateFormatter(sexyTime) {
    const formatter = new Intl.DateTimeFormat('default', {
        weekday: 'short',
        month: 'short',
        day: '2-digit',
        year: 'numeric'
    });
    const dateFormat = new Date(sexyTime);
    return formatter.format(dateFormat).replaceAll(',', ' ')
}


const createMain = document.querySelector('main');

const showsSection = document.createElement('section');
showsSection.classList.add("shows");

const showsTitle = document.createElement('h3');
showsTitle.classList.add('shows__title');
showsTitle.innerText = "Shows";

const showsDynamicContainer = document.createElement('div');
showsDynamicContainer.classList.add('shows__shows-container');

const DeskTabHeader = document.createElement('div')
DeskTabHeader.classList.add('shows__subheader-container');

const DeskTabDate = document.createElement('h4')
DeskTabDate.classList.add('shows__subheader-title');
DeskTabDate.innerText = "DATES"

const DeskTabVenue = document.createElement('h4')
DeskTabVenue.classList.add('shows__subheader-title', 'shows__subheader-venue');
DeskTabVenue.innerText = "VENUE"

const DeskTabLocation = document.createElement('h4')
DeskTabLocation.classList.add('shows__subheader-title');
DeskTabLocation.innerText = "LOCATION"



createMain.appendChild(showsSection);
showsSection.appendChild(showsTitle);
showsSection.appendChild(showsDynamicContainer)
showsDynamicContainer.appendChild(DeskTabHeader);
DeskTabHeader.appendChild(DeskTabDate);
DeskTabHeader.appendChild(DeskTabVenue);
DeskTabHeader.appendChild(DeskTabLocation);




myShowsSection();
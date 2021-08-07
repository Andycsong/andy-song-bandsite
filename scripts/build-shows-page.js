

const concertInfo = [
    {
        DateTitle: 'Dates',
        Dates: 'Mon Sept 06 2021',
        VenueTitle: 'Venue',
        Venue: 'Ronald Lane',
        LocationTitle: 'Location',
        Location: 'San Francisco, CA'
    },
    {
        DateTitle: 'Dates',
        Dates: 'Tue Sept 21 2021',
        VenueTitle: 'Venue',
        Venue: 'Pier 3 East',
        LocationTitle: 'Location',
        Location: 'San Francisco, CA'
    },
    {
        DateTitle: 'Dates',
        Dates: 'Fri Oct 15 2021',
        VenueTitle: 'Venue',
        Venue: 'View Lounge',
        LocationTitle: 'Location',
        Location: 'San Francisco, CA'
    },
    {
        DateTitle: 'Dates',
        Dates: 'Sat Nov 06 2021',
        VenueTitle: 'Venue',
        Venue: 'Hyatt Agency',
        LocationTitle: 'Location',
        Location: 'San Francisco, CA'
    },
    {
        DateTitle: 'Dates',
        Dates: 'Fri Nov 26 2021',
        VenueTitle: 'Venue',
        Venue: 'Moscow Center',
        LocationTitle: 'Location',
        Location: 'San Francisco, CA'
    },
    {
        DateTitle: 'Dates',
        Dates: 'Wed Dec 15 2021',
        VenueTitle: 'Venue',
        Venue: 'Press Club',
        LocationTitle: 'Location',
        Location: 'San Francisco, CA'
    }
];


// concertInfo.forEach((concert) => {
//     console.log(concert);
// })



{/* <section class="shows">
        <h1 class="shows__title">Shows</h1>
        <div class=" shows-container">
            <ul>
                <li>
                    <h1>Date</h1>
                    <p> wed dec 16 2021</p>
                 </li> 
                <li> where the venue should be</li>
                <li> where the location should be</li>
            </ul>
            <button> where the buy tickets button should be</button>
        </div>
        
    </section> */}



const createMain = document.querySelector('main');

const showsSection = document.createElement('section');
showsSection.classList.add("shows");

const showsTitle = document.createElement('h1');
showsTitle.classList.add('shows__title', "title");
showsTitle.innerText = "Shows";


const showsContainer = document.createElement('div');
showsContainer.classList.add('shows-container');

// const unorderedList = document.createElement('ul');

// const showsDates = document.createElement('li');
// showsDates.classList.add('shows__dates');


// const showsDateInfo = document.createElement('li');
// showsDateInfo.classList.add('shows-date__info');

createMain.appendChild(showsSection);
showsSection.appendChild(showsTitle);
// showsSection.appendChild(showsContainer);
// showsContainer.appendChild(unorderedList);

// unorderedList.appendChild(showsDates);
// unorderedList.appendChild(showsDateInfo);

concertInfo.forEach(info => {
    console.log(info);

    const showsContainer = document.createElement('div');
    showsContainer.classList.add('shows-container');

    const unorderedList = document.createElement('ul');

    const ticketButton = document.createElement('button')
    ticketButton.classList.add('shows__button');
    ticketButton.innerText = ('Buy Tickets');

    const showsDates = document.createElement('li');
    showsDates.classList.add('shows__dates');
    showsDates.innerText = info.DateTitle;

    const showsDateInfo = document.createElement('li');
    showsDateInfo.classList.add('shows-date__info');
    showsDateInfo.innerText = info.Dates;

    const showsVenue = document.createElement('li')
    showsVenue.classList.add('shows__venue');
    showsVenue.innerText = info.VenueTitle;

    const showsVenueInfo = document.createElement('li')
    showsVenueInfo.classList.add('shows-venue__info');
    showsVenueInfo.innerText = info.Venue;

    const showsLocation = document.createElement('li');
    showsLocation.classList.add('shows__location');
    showsLocation.innerText = info.LocationTitle;

    const showsLocationInfo = document.createElement('li');
    showsLocationInfo.classList.add('shows-location__info');
    showsLocationInfo.innerText = info.Location;

    showsSection.appendChild(showsContainer);
    showsContainer.appendChild(unorderedList);
    showsContainer.appendChild(ticketButton);
    unorderedList.appendChild(showsDates);
    unorderedList.appendChild(showsDateInfo);
    unorderedList.appendChild(showsVenue);
    unorderedList.appendChild(showsVenueInfo);
    unorderedList.appendChild(showsLocation);
    unorderedList.appendChild(showsLocationInfo);
});


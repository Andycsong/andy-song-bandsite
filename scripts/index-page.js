
const API_URL = 'https://project-1-api.herokuapp.com/';
const API_Key = 'f31d3b09-8f0f-407c-8b40-db9594b605d5';

const createComments = document.querySelector('.comments');

const commentsContainer = document.createElement('div');
commentsContainer.classList.add('comments-container');

createComments.appendChild(commentsContainer);
const commentsForm = document.querySelector('#commentsForm')

function myCommentsSection() {
    axios
        .get(`${API_URL}comments?api_key=${API_Key}`)
        .then(response => {
            const newAPIComments = response.data.reverse();
            console.log(newAPIComments);
            newAPIComments.forEach(info => {
                const createContainer = document.createElement('div');
                createContainer.classList.add('comments__card')

                const createAvatar = document.createElement('div')
                createAvatar.classList.add('comments__image')

                const unorderedList = document.createElement('ul');
                unorderedList.classList.add('comments-container-ul')

                const commentDataContainer = document.createElement('div')
                commentDataContainer.classList.add('comments-data-container');

                const commentsName = document.createElement('li');
                commentsName.classList.add('comments__name');
                commentsName.innerText = info.name;

                const commentsTimeStamp = document.createElement('li')
                commentsTimeStamp.classList.add('comments__timestamp')
                commentsTimeStamp.innerText = DateFormatter(info.timestamp);

                const commentsDescriptionContainer = document.createElement('ul');
                commentsDescriptionContainer.classList.add('comments-description-container')

                const commentsDescription = document.createElement('li');
                commentsDescription.classList.add('comments__description')
                commentsDescription.innerText = info.comment;


                createContainer.appendChild(createAvatar);
                commentsContainer.appendChild(createContainer);
                createContainer.appendChild(commentDataContainer);
                commentDataContainer.appendChild(unorderedList);
                unorderedList.appendChild(commentsName);
                unorderedList.appendChild(commentsTimeStamp);
                commentDataContainer.appendChild(commentsDescriptionContainer);
                commentsDescriptionContainer.appendChild(commentsDescription);
            })
        })
}


const saveMe = (formDataSaved) => {
    axios.post(`${API_URL}comments?api_key=${API_Key}`, {
        name: formDataSaved.name,
        comment: formDataSaved.comment
    })
        .then(res => myCommentsSection(res))
}


function DateFormatter(sexyTime) {
    const formatter = new Intl.DateTimeFormat('en-US', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
    });
    const dateFormat = new Date(sexyTime);
    return formatter.format(dateFormat)
}

commentsForm.addEventListener('submit', function (event) {
    event.preventDefault();
    let newComment = {
        name: event.target.fullName.value,
        timestamp: DateFormatter(event.target.timestamp),
        comment: event.target.comment.value,
    };
    saveMe(newComment)
    commentsContainer.innerHTML = '';
    event.target.reset();
});
myCommentsSection()


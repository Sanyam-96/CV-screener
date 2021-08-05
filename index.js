console.log('This is CV screener');

// Data is array of objects which containes information about candidates ( assume coming from api )

const data = [
    {
        name: 'Ram',
        age: 18,
        city: 'Kolkata',
        language: 'Python',
        framework: 'Django',
        image: 'https://randomuser.me/api/portraits/men/75.jpg'
    },

    {
        name: 'Gaurav',
        age: 22,
        city: 'Jabalpur',
        language: 'Python',
        framework: 'Flask',
        image: 'https://randomuser.me/api/portraits/men/74.jpg'
    },

    {
        name: 'Shweta',
        age: 24,
        city: 'Kolkata',
        language: 'JS',
        framework: 'ReactJS',
        image: 'https://randomuser.me/api/portraits/women/74.jpg'
    },

    {
        name: 'Tanvi',
        age: 20,
        city: 'Udaipur',
        language: 'JS',
        framework: 'Angular',
        image: 'https://randomuser.me/api/portraits/women/75.jpg'
    },

    {
        name: 'Sonu',
        age: 21,
        city: 'Banglore',
        language: 'GO',
        framework: 'GOFramework',
        image: 'https://randomuser.me/api/portraits/men/78.jpg'
    },
]

//CV iterator
function cvIterator(data) {
    let nextIndex = 0;
    return {
        next: function () {
            if (nextIndex < data.length) {
                return {
                    value: data[nextIndex++],
                    done: false,
                }
            }
            else{
                return {
                    done : true,
                }
            }
        }
    }
}

const candidates = cvIterator(data);
nextCV();

const next = document.getElementById('next');
next.addEventListener('click', nextCV);
function nextCV() {
    const CurrentCandidate = candidates.next().value;
    let image = document.getElementById('image');
    let profile = document.getElementById('profile');

    if(CurrentCandidate !== undefined){
        image.innerHTML = `<img src="${CurrentCandidate.image}" alt="">`
        profile.innerHTML = `<ul class="list-group">
                                <li class="list-group-item disabled" aria-disabled="true">Name : ${CurrentCandidate.name}</li>
                                <li class="list-group-item">${CurrentCandidate.age} years old </li>
                                <li class="list-group-item">Lives in ${CurrentCandidate.city}</li>
                                <li class="list-group-item">Primarity works on ${CurrentCandidate.language}</li>
                                <li class="list-group-item">with ${CurrentCandidate.framework}</li>
                            </ul>`
    }
    else{
        alert('End of candidate application')
        location.reload(); 
    }
    
}
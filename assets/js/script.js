// hour color function
const hourColor = () => {
    // get current time
    let currentTime = moment().hours();

    // for each function for every hour block
    $('.time-block').each(function () {
        // make a variable holding the time of the block
        let time = $(this).attr('id');
        // if statement to set class attribute
        // if time is greater than current time, then set class attribute to future
        if (time > currentTime) {
            $(this).attr('class', 'future');
        // if time is the same as current time, then set class attr to present
        } else if (time = currentTime) {
            $(this).attr('class', 'present');
        // else set the class to past
        } else {
            $(this).attr('class', 'past');
        }
    });
}

// get updates from local storage
const loadStorage = () => {
    $('#9 .description').val(localStorage.getItem('9'));
    $('#10 .description').val(localStorage.getItem('10'));
    $('#11 .description').val(localStorage.getItem('11'));
    $('#12 .description').val(localStorage.getItem('12'));
    $('#13 .description').val(localStorage.getItem('1'));
    $('#14 .description').val(localStorage.getItem('2'));
    $('#15 .description').val(localStorage.getItem('3'));
    $('#16 .description').val(localStorage.getItem('4'));
    $('#17 .description').val(localStorage.getItem('5'));
}

// run these functions when event listener is fulfilled (onload)
const pageLoad = () => {
    //display date and time on the currentDay ID from starter code
    $('#currentDay').text(moment().format('dddd, MMMM Do'))
    // run hour color function
    hourColor;
    // load saved data from local storage
    loadStorage;
}
// save appointment function
const saveIt = () => {
    let appointment = $(this).siblings('.description').val();
    let time = $(this).parent().attr('id');

    localStorage.setItem(appointment, time);
}

// on click, save to local storage
$('.saveBtn').on('click', saveIt);
// on load event listener to run functions
$(window).on('load', pageLoad);